import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app/app';
import {store} from './store';

import {saveToken} from './services/token';
import {AUTH_TOKEN,AUTH_TOKEN_KEY} from './services/token';

saveToken(AUTH_TOKEN_KEY,AUTH_TOKEN);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>

      <App />
    </Provider>
  </React.StrictMode>
);
