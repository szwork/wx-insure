var util = require('util');

describe('test util', () => {
  
  it('cent2Yuan',()=>{
    expect(util.cent2Yuan('12345')).to.equal('123.45');
  })

  it('wx sign', () => {
    var obj = {"appid":"wxd930ea5d5a258f4f","body":"test","device_info":"1000","mch_id":"10000100","nonce_str":"ibuaiVcKdpRxkhJA","empty":""}
    
    var key = '192006250b4c09247ec02edce69f6a2d';
    
    var result = '9A0A8659F005D6984697E2CA0A9CF3B7';
    expect(util.wx.sign(obj,key)).to.equal(result);
  });
});
