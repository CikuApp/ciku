import pandas as pd
import numpy as np
import json
from ast import literal_eval
from fastapi import Body, FastAPI
from datetime import datetime

tags_metadata = [
    {
        "name": "recipes",
        "description": "Retrieve a number of recipes based on a query. Variables:\
        \n- count: int (number of items requested)\
        \n- query: str (what to search database for)\
        \n- tags: str (tags to filter results by)\
        \n- ingredients: str (ingredients to filter results by)\
        \n- location: str (state of choice)\
        \n\nNote: all whitespaces should be replaced with %20 when requesting",
    },
    {
        "name": "seasonal",
        "description": "Get all the relevant seasonal and local food for a state and month. Variables:\
        \n- location: str (state of choice, possible values = 'alaska', 'alabama', 'arkansas', 'arizona', 'california',\
       'colorado', 'connecticut', 'delaware', 'florida', 'georgia',\
       'hawaii', 'iowa', 'idaho', 'illinois', 'indiana', 'kansas',\
       'kentucky', 'louisiana', 'massachusetts', 'maryland', 'maine',\
       'michigan', 'minnesota', 'missouri', 'mississippi', 'montana',\
       'north-carolina', 'north-dakota', 'nebraska', 'new-hampshire',\
       'new-jersey', 'new-mexico', 'nevada', 'new-york', 'ohio',\
       'oklahoma', 'oregon', 'pennsylvania', 'rhode-island',\
       'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah',\
       'virginia', 'vermont', 'washington', 'wisconsin', 'west-virginia','wyoming')\
        \n- month: str (month of choice, possible values = 'january', 'february', 'march', 'april', 'may', 'june', 'july',\
       'august', 'september', 'october', 'november', 'december')\
        \n- period: str (period within month, possible values = 'early', 'late')",
    },
]

app = FastAPI(
    title="Project INSERT-NAME-HERE",
    description="An API to support an awesome website for more sustainable recipe selection and grocery shopping!",
    version="1.0.0",
    openapi_tags=tags_metadata,
)

# TODO: This is very slow but only happens when you start the server, there should be a way to save CSVs for the arrays as non-strings
df = pd.read_csv('../data/img_recipes.csv')
df = df.dropna()
df = df.drop_duplicates(subset=['name'])
df['tags'] = df['tags'].apply(literal_eval)
df['ingredients'] = df['ingredients'].apply(literal_eval)
df['steps'] = df['steps'].apply(literal_eval)

season_df = pd.read_csv('../data/seasonality.csv')
season_df['foods'] = season_df['foods'].apply(lambda x: literal_eval(str(x)))

def query_df(query, count, tags, ingredients):
    data_new = df.copy()

    if len(tags) > 0:
        tag_list = tags.split(" ")
        mask = data_new.tags.apply(lambda x: any(i in tag_list for i in x))
        data_new = data_new[mask]
    
    if len(ingredients) > 0:
        ingredients_list = ingredients.split(" ")
        mask = data_new.ingredients.apply(lambda x: any(i in ingredients_list for i in x))
        data_new = data_new[mask]

    if len(query) > 0:
        search_list = query.split(" ")
        for search in search_list:            
            data_new = data_new[data_new.name.str.contains(search)]

    recipe_count = data_new.shape[0]

    return recipe_count, data_new

def calc_sus_score(curr_df, selected_state):
    now = datetime.now()
    month_array = ['january', 'february', 'march', 'april', 'may', 'june', 'july',\
        'august', 'september', 'october', 'november', 'december']

    month = month_array[now.month-1]
    period = 'early' if now.day <= 15 else 'late'

    seasonal_and_local = season_df.query('month=="{}" & period=="{}"'.format(month, period))

    # Get all seasonal food accross america (assuming lots of food gets transported between states)
    seasonal_set = set()
    for food_array in seasonal_and_local.foods:
        for food_item in food_array:
            curr_word = food_item.lower()
            seasonal_set.add(curr_word)

    # Narrow down to seasonal and local for one state
    snl_array = seasonal_and_local.query('state=="{}"'.format(selected_state)).iloc[0].foods
    snl_array = [food.lower() for food in snl_array]
    exclusive_seasonal = [x for x in seasonal_set if x not in snl_array]  # Remove snl from seasonal set

    def sus_score(row):
        seasonal_match = [x for x in row.ingredients if x in exclusive_seasonal]
        snl_match = [x for x in row.ingredients if x in snl_array]

        row['seasonal'] = seasonal_match
        row['snl'] = snl_match
        row['sus_score'] = len(seasonal_match) + (len(snl_match) * 2)

        # TODO: Fix weightage of foods based on better factors and smarter reasoning...
        return row

    curr_df = curr_df.apply(lambda x: sus_score(x), axis=1)

    return curr_df

@app.get("/recipes", tags=["recipes"])
async def query_recipes(count: int = 5, query: str = '', tags: str = '', ingredients: str = '', location: str = 'california'):
    recipe_count, recipes = query_df(query, count, tags, ingredients)
    if (recipe_count > 1000): recipes = recipes.head(1000)  # TODO: quick workaround for limiting number of scores calculated, find a better way...
    recipes = calc_sus_score(recipes, location)
    if recipes.empty: return recipes.to_json(orient="records")
    
    recipes = recipes.sort_values(by=['sus_score'], ascending=False)
    recipes = recipes.head(count)
    print('recipe count: {}, location: {}, query: {}, tags: {}, ingredients: {}'.format(recipe_count, location, query, tags, ingredients))
    return recipes.to_json(orient="records")

@app.get("/random", tags=["recipes"])
async def query_random_recipes(count: int = 5, location: str = 'california'):
    recipes = df.sample(n=count)
    recipes = calc_sus_score(recipes, location)
    if recipes.empty: return recipes.to_json(orient="records")
    
    # recipes = recipes.sort_values(by=['sus_score'], ascending=False)
    return recipes.to_json(orient="records")

@app.get("/seasonal", tags=["seasonal"])
async def query_seasonal_foods(location: str, month: str, period: str = 'early'):
    queried_food = season_df.query('state=="{}" & month=="{}" & period=="{}"'.format(location, month, period))
    return queried_food.to_json(orient="records")
