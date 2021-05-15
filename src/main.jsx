import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter base="/backstage-talks-recreate">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
