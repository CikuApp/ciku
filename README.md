## Front End

React application with the following scripts:

- `npm start`: runs the frontend application in development mode at localhost:3000/ with live reload (Note: any changes to `src/assets/tailwind.js` will only be applied after running `build`)
- `npm run build`: builds the frontend application in production mode to `frontend/build`. This folder is not committed by git.
- `npm run deploy`: deploys the frontend application to GitHub Pages.

The frontend application in progress is deployed [here](https://kuosandys.github.io/cca-sustainability-app) for collaboration with UX.

## Back End

Express server with the following scripts:

- `npm start`: starts the backend server with live reload provided by nodemon
- `npm run build:ui`: builds the application from frontend into `backend/build` static folder
