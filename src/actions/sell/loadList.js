import {LOAD_LIST} from 'actions/const';
import qryproductlist from 'services/qryproductlist';
import {md5} from 'util';

module.exports = function(parameter) {
  console.log(md5('1'));
  return (dispatch) => {
    qryproductlist().then(resp=>{
        dispatch({
            type:LOAD_LIST,
            payload:resp
        })
    })
  }
};
