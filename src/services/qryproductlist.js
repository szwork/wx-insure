import api from '.';

var d = new Date;

export default ()=>api({
  cmd:'qryproductlist',
  param:{
    latertime:d.format('yyyy-MM-dd hh:mm:ss')
  }
}).then(resp=>resp.crset.list)