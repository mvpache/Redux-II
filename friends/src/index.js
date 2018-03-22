import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
  rootReducer, 
  middleware, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root')
);
