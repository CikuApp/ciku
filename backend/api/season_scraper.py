import pandas as pd
import requests
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

state_names = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]
months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
periods = ['early', 'late']

season_df = pd.DataFrame(columns=('state', 'month', 'period', 'foods'))
# season_df = pd.read_csv('seasonality.csv')

driver = webdriver.Chrome(ChromeDriverManager().install())

for state in state_names:
    curr_state = state.lower().replace(' ', '-')
    for month in months:
        for period in periods:
            try:
                curr_url = 'https://www.seasonalfoodguide.org/{}/{}-{}'.format(curr_state, period, month)
                driver.get(curr_url)
                soup = BeautifulSoup(driver.page_source, 'lxml')

                foods = []
                vegCards = soup.find_all('h3', class_='card_title')
                for vegCard in vegCards:
                    food_title = vegCard.text.strip()
                    foods.append(food_title)
                
                season_df.loc[len(season_df.index)] = [curr_state, month, period, foods] 
            except:
                print('Failed on: {}'.format(curr_url))
            time.sleep (2)
    season_df.to_csv('seasonality.csv', index = False)
    print(season_df.tail())
    time.sleep (15)

driver.quit()
