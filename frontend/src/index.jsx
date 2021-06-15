import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from 'App';
import 'assets/index.css';
import 'assets/main.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
