import pandas as pd
import numpy as np
import requests
import time
import re
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

START_INDEX = 245
NEW_CSV = False
CSV_NAME = 'recipes_with_images'
# CSV_NAME = 'recipe_imgs'

df = pd.read_csv('../data/recipes/RAW_recipes.csv')
df = df.dropna()
df = df.sample(frac=1, random_state=37).reset_index(drop=True)

column_names = list(df.columns)
column_names.extend(['web_url', 'image_url'])
new_df = pd.DataFrame(columns = column_names)

driver = webdriver.Chrome(ChromeDriverManager().install())

for index, row in df[START_INDEX:].iterrows():
    food_name = row['name']
    food_name = re.sub('\s+',' ', food_name)
    food_name = food_name.replace(' s ', 's ')
    food_name = food_name.replace(' ', '-')
    food_id = row['id']

    curr_url = 'https://www.food.com/recipe/{}-{}'.format(food_name, food_id)

    image_url = np.nan

    try:
        driver.get(curr_url)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        img_url = soup.find_all('img', class_='recipe-image__img')[0]['src']

        # TODO: also get ingredient quantities, currently have trouble because there are intricacies like '1 1/4 Cups'
        # with links for the different types of ingredients

        if (img_url.startswith('http')): image_url = img_url

        # add new row to new_df
        curr_row = row.values.tolist()
        curr_row.extend([curr_url, image_url])
        new_df.loc[index] = curr_row

        # Check periodically
        if (row.name != 0 and row.name % 250 == 0): 
            if (NEW_CSV): new_df.to_csv('../data/recipes/{}.csv'.format(CSV_NAME), index = False)
            else: new_df.to_csv('../data/recipes/{}.csv'.format(CSV_NAME), index = False, mode='a', header=False)
            print("Completed: {}".format(row.name))
        
        time.sleep(1)
    except KeyboardInterrupt:
        print('Interrupted!')
        break
    except:
        print('Failed on: {}'.format(curr_url))
        pass

new_df.to_csv('../data/recipes/recipes_with_images.csv', index = False)

driver.quit()
