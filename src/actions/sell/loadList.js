import {LOAD_LIST} from './../const';
import services from 'services';

module.exports = function(parameter) {
//   console.log(services);
  return (dispatch) => {
    services(parameter).then(resp=>{
        dispatch({
            type:LOAD_LIST,
            payload:resp
        })
    })
  }
};
