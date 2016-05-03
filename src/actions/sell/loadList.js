import {LOAD_LIST} from './../const';
import services from 'services';

module.exports = function(parameter) {
  console.log(services);
  return (dispatch,getState) => {
    services().then(resp=>console.log(resp))
  }
};
