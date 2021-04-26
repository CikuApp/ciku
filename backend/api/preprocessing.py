import pandas as pd
import numpy as np
import json
from ast import literal_eval
from datetime import datetime
import csv

def clean_recipes():
    df = pd.read_csv('../data/recipes/RAW_recipes.csv')
    df = df.dropna()

    # TODO: doesn't really work to save as CSV, try different methods in the future
    # df['tags'] = df['tags'].apply(literal_eval)
    # df['ingredients'] = df['ingredients'].apply(literal_eval)
    # df['steps'] = df['steps'].apply(literal_eval)

    df.to_csv('../data/clean_recipes.csv', index=False)

def clean_seasonal():
    season_df = pd.read_csv('../data/seasonality.csv')
    season_df['foods'] = season_df['foods'].apply(lambda x: literal_eval(str(x)))

    season_df.to_csv('../data/clean_seasonality.csv', index=False)

def main():
    # clean_recipes()
    clean_seasonal()

if __name__ == '__main__':
    main()