import {createStore, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux'
const reducers = require('../reducers');
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

module.exports = function ({initialState, history}) {
  const middleware = applyMiddleware(routerMiddleware(history),thunk,createLogger())
  const store = createStore(reducers, initialState, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
