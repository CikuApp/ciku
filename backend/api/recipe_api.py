from fastapi import FastAPI
import pandas as pd
import numpy as np
import json

app = FastAPI()

df = pd.read_csv('../data/recipes/RAW_recipes.csv')
df = df.dropna()

def query_df(query, k):
    search_list = query.split(" ")

    data_new = df.copy()

    for search in search_list:            
        data_new = data_new[data_new.name.str.contains(search)]

    recipe_count = data_new.shape[0]
    return_data = data_new.head(k)

    return recipe_count, return_data


@app.get("/recipes")
async def read_user_item(query: str, count: int = 5, location: str = 'CA'):
    recipe_count, recipes = query_df(query, count)
    print('query: {}, location: {}, recipe count: {}'.format(query, location, recipe_count))
    return recipes.to_json(orient="records")