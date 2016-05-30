/* global __DEV__ */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores';
import configureRouter from './routes';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore({history:hashHistory});
const history = syncHistoryWithStore(hashHistory, store);
const routes = configureRouter(history);

export default function Init() {
  ReactDOM.render(
    <Provider store={store}>
      { routes }
    </Provider>,
    document.getElementById('app')
  )
}

__DEV__ && (window.util = require('util'));
'4';