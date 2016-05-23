/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = [];

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = state.slice();

  switch(action.type) {
    case 'LOAD_LIST': {
      // Modify next state depending on the action and return it
      return action.payload.slice();
    } 
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
