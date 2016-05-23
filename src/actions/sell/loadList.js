import {LOAD_LIST} from 'actions/const';
import qryproductlist from 'services/qryproductlist';

module.exports = function(parameter) {
//   console.log(services);
  return (dispatch) => {
    qryproductlist().then(resp=>{
        dispatch({
            type:LOAD_LIST,
            payload:resp
        })
    })
  }
};
