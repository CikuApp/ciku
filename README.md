# Ciku

A web app to encourage sustainable eating by helping people find recipes with more seasonal and local produce based on their location (US state) and the current month. The project is currently deployed [here](http://50.18.95.117/).

<img src="ciku-1.png" alt="drawing" width="400"/>

The MVP for this project was developed as part of [Chronic Coder Academy Season 3](https://www.notion.so/ccas3/Chronic-Coder-Academy-Season-3-dbd4a42c517a4902b345a7fb7287cedf).

## Authors

- UX & UI: [@antonetteadiova](https://www.antonetteadiova.com/)
- Backend: [@chriskok](https://github.com/chriskok)
- Frontend: [@kuosandys](https://github.com/kuosandys)

## Installation & Running Locally

To run the full-stack application:

1. Clone this repo:

   `https://github.com/kuosandys/cca-sustainability-app/`

2. From the root directory of the repo, run:

   `docker-compose -f docker-compose-dev.yml up -d`

This runs:

- the backend FastAPI app at port `8000`, with API documentation at `8000/docs`
- the frontend React app at port `80` in development mode with hot reloading for files in `frontend/src/`

For more instructions on installing and running the backend API application, please [click here](https://github.com/kuosandys/cca-sustainability-app/tree/main/backend/api).
