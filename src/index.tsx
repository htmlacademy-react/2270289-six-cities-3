import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
