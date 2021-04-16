from fastapi import FastAPI
import pandas as pd
import numpy as np
import json
from ast import literal_eval

app = FastAPI()

df = pd.read_csv('../data/recipes/RAW_recipes.csv')
df = df.dropna()
season_df = pd.read_csv('../data/seasonality.csv')

def query_df(query, k):
    search_list = query.split(" ")

    data_new = df.copy()

    for search in search_list:            
        data_new = data_new[data_new.name.str.contains(search)]

    recipe_count = data_new.shape[0]
    return_data = data_new.head(k)

    return recipe_count, return_data


@app.get("/recipes")
async def query_recipes(query: str, count: int = 5, location: str = 'CA'):
    recipe_count, recipes = query_df(query, count)
    recipes['tags'] = recipes['tags'].apply(lambda x: literal_eval(str(x)))
    print('query: {}, location: {}, recipe count: {}'.format(query, location, recipe_count))
    return recipes.to_json(orient="records")

@app.get("/seasonal")
async def query_seasonal(location: str, month: str, period: str = 'early'):
    queried_food = season_df.query('state=="{}" & month=="{}" & period=="{}"'.format(location, month, period))
    queried_food['foods'] = queried_food['foods'].apply(lambda x: literal_eval(str(x)))
    return queried_food.to_json(orient="records")