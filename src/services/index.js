/* global $ */
import $ from 'app-zepto';
import {toast} from 'util';

export const URL_BASE = '/PinkHealthServer/api/';

function genHead(cmd,conf = {}){
  let h = {
    userid:conf.userid || '',
    telephone:'',
    token:'',
    cmd,
  }
  return h;
}

function genParam(cmd,param,conf){
  var header = genHead(cmd,conf)
  var p = {
    header,
    request:param    
  }
  return JSON.stringify(p);
}

export default function ({cmd,param,conf}) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url:`${URL_BASE}${cmd}`,
      data: genParam(cmd,param,conf),
      type:'POST',
      dataType:'json',
      success(resp) {
        const {header} = resp;
        if(header.rspcode === '0000'){
          resolve(resp.response);
        }else{
          const {rspdesc} = header;
          toast(rspdesc);
          reject(rspdesc);
        }
      },
      error(xhr, errorType, error){
        toast(error);
        reject(error);
      }
    });
  });
}