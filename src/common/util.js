import MD5 from 'crypto-js/md5';

Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        'S': this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}

export function toast(msg){
  var toast = document.getElementById('toast');
  toast.innerHTML = msg;
  toast.classList.add('toast');
  setTimeout(()=>toast.classList.remove('toast'),2000);
  return toast;
}

export function cent2Yuan(str){
  return str ? `${str.slice(0,-2)}.${str.slice(-2)}` : '' ;
}

//md5 加密 ：str要加密的字符串，upper是否要转换成大写 默认true
export function md5(str,upper = true){
  return MD5(str).toString()[upper ? 'toUpperCase' : 'toLowerCase']();
}


//与微信对接的几个函数
var shop_key = '192006250b4c09247ec02edce69f6a2d';

export const wx = {
  timeStamp(){
    return Date.now().toString().slice(0,10);//精确到秒的时间戳
  },
  nonce_str(){
    return Math.random().toString(36).slice(2);//生成随机数算法
  },
  /**
   * 
   * 第一步，设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。
    特别注意以下重要规则：
    ◆ 参数名ASCII码从小到大排序（字典序）；
    ◆ 如果参数的值为空不参与签名；
    ◆ 参数名区分大小写；
    ◆ 验证调用返回或微信主动通知签名时，传送的sign参数不参与签名，将生成的签名与该sign值作校验。
    ◆ 微信接口可能增加字段，验证签名时必须支持增加的扩展字段
    第二步，在stringA最后拼接上key得到stringSignTemp字符串，并对stringSignTemp进行MD5运算，再将得到的字符串所有字符转换为大写，得到sign值signValue。
    key设置路径：微信商户平台(pay.weixin.qq.com)-->账户设置-->API安全-->密钥设置
   * 
   */
  sign(obj,key = shop_key){
    let keyArr = Object.keys(obj);
    keyArr = keyArr.sort();
    let signArr = []
    keyArr.map(item=>{
      let val = obj[item];
      if(!(val === '' || val === void 0 || val === null)){
        signArr.push(`${item}=${val}`)
      }
    })
    signArr.push(`key=${key}`);
    var stringSignTemp = signArr.join('&');
    return md5(stringSignTemp);
  }
}