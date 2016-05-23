import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores';
import configureRouter from './routes';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore({history:browserHistory});
const history = syncHistoryWithStore(browserHistory, store);
const routes = configureRouter(history);
window.store = store;
export default function Init() {
  ReactDOM.render(
    <Provider store={store}>
      { routes }
    </Provider>,
    document.getElementById('app')
  )
}
