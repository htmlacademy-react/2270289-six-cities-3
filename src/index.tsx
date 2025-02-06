import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/app';

//import ErrorMessage from './components/error-message/error-message';

import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

import { getToken, saveToken } from './services/token';
import { AUTH_TOKEN,AUTH_TOKEN_KEY } from './services/token';

saveToken(AUTH_TOKEN,AUTH_TOKEN_KEY);

console.log('токен:',getToken(AUTH_TOKEN_KEY));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>

      <App />
    </Provider>
  </React.StrictMode>
);

//<ErrorMessage />
