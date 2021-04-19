import pandas as pd
import numpy as np
import json
from ast import literal_eval
from fastapi import Body, FastAPI
from pydantic import BaseModel, Field

tags_metadata = [
    {
        "name": "recipes",
        "description": "Retrieve a number of recipes based on a query. Variables:\
        \n- count: int (number of items requested)\
        \n- query: str (what to search database for)\
        \n- tags: str (tags to filter results by)\
        \n- ingredients: str (ingredients to filter results by)\
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

df = pd.read_csv('../data/recipes/RAW_recipes.csv')
df = df.dropna()
df['tags'] = df['tags'].apply(lambda x: literal_eval(str(x)))
df['ingredients'] = df['ingredients'].apply(lambda x: literal_eval(str(x)))
df['steps'] = df['steps'].apply(lambda x: literal_eval(str(x)))

season_df = pd.read_csv('../data/seasonality.csv')

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
    return_data = data_new.head(count)

    return recipe_count, return_data

@app.get("/recipes", tags=["recipes"])
async def query_recipes(count: int = 5, query: str = '', tags: str = '', ingredients: str = ''):
    recipe_count, recipes = query_df(query, count, tags, ingredients)
    print('recipe count: {}, query: {}, tags: {}, ingredients: {}'.format(recipe_count, query, tags, ingredients))
    return recipes.to_json(orient="records")

@app.get("/seasonal", tags=["seasonal"])
async def query_seasonal_foods(location: str, month: str, period: str = 'early'):
    queried_food = season_df.query('state=="{}" & month=="{}" & period=="{}"'.format(location, month, period))
    queried_food['foods'] = queried_food['foods'].apply(lambda x: literal_eval(str(x)))
    return queried_food.to_json(orient="records")