import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducers from './reducers';

import './index.css';

require('dotenv').config();

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(appReducers, middleware);

window.axios = require('axios');
window.axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}${
  process.env.REACT_APP_API_VERSION
}`;
window.axios.defaults.headers.common.Accept = 'application/json';
// window.axios.defaults.headers.common.Authorization = 'application/json';
window.$http = window.axios;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
