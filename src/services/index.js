/* global $ */
import 'app-zepto';

export default function (param) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      data: param,
      success(resp) {
        resolve(resp)
      },
      error(xhr, errorType, error){
        reject(error)
      }
    });
  });
}