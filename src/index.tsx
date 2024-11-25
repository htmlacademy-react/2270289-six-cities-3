import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './main.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App countArenda={300} />
  </React.StrictMode>
);
