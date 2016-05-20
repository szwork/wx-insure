import {createStore,applyMiddleware} from 'redux';
const reducers = require('../reducers');
import thunk from 'redux-thunk';
import logger from 'redux-logger';

module.exports = function(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk,logger));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
