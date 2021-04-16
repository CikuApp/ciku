# API Usage
- Download data from: https://www.kaggle.com/shuyangli94/food-com-recipes-and-user-interactions?select=RAW_interactions.csv
  - Create `backend/data` folder and move all data there
- Install python requirements: `pip install requirements.txt`
- Start the server using: `uvicorn recipe_api:app --reload`
- The server should start on your localhost, probably at this address: http://127.0.0.1:8000
- To query it from the FrontEnd or on your browser, send a request here: http://127.0.0.1:8000/recipes?query=mash%20potato
  - Note: '%20' here denotes a spacebar so use that as a replacement when necessary
- Check out http://127.0.0.1:8000/docs for all the additional arguments and possible values!