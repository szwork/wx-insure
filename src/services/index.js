/* global $ */
import 'app-zepto';
import {toast} from 'util';

export const URL_BASE = '/service/';

export default function ({cmd,param,conf}) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url:`${URL_BASE}${cmd}`,
      data: param,
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