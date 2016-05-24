import {SELL_SET} from 'actions/const';

module.exports = function(parameter) {
  return {
            type:SELL_SET,
            payload:parameter
        }
};
