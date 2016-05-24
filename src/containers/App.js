/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push, replace, goBack } from 'react-router-redux';
import 'weui';
import 'styles/App.scss';
// import {RouteTransition,presets} from 'react-router-transition';

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {children,...other} = this.props;
    // return <RouteTransition
    //   component={false}
    //   pathname={other.location.pathname}
    //   {...presets.pop}
    // >
    //   {
    //     React.cloneElement(children, other)
    //   }
    // </RouteTransition>
    return React.cloneElement(children, other);
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  insure: PropTypes.array.isRequired,
  me: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  // const props = {
  //   insure: state.insure,
  //   me: state.me,
  //   routing: state.routing
  // };
  return state;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    loadList: require('../actions/sell/loadList.js') ,
    sellSet: require('../actions/sell/sellSet.js') ,
    push, replace, goBack
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
