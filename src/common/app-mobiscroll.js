import $ from 'app-zepto';
import 'imports?zepto=>window.Zepto!zepto/src/selector.js';


import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.zepto.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.core.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.frame.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.scroller.js';

import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.util.datetime.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.datetimebase.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.datetime.js';
// import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.select.js';
// import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.listbase.js';
// import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.image.js';
// import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.treelist.js';


import 'imports?jQuery=>window.Zepto!mobiscroll/js/mobiscroll.android-holo-light.js';
import 'imports?jQuery=>window.Zepto!mobiscroll/js/i18n/mobiscroll.i18n.zh.js';


import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.animation.css';


import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.icons.css';
import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.android.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.android-holo.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.ios-classic.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.ios.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.jqm.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.sense-ui.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.frame.wp.css';
import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.android.css';
import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.android-holo.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.ios-classic.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.ios.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.jqm.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.sense-ui.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.scroller.wp.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.image.css';

import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.android-holo-light.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.wp-light.css';
// import 'imports?jQuery=>window.Zepto!mobiscroll/css/mobiscroll.mobiscroll-dark.css';

$.fn.mobiscroller = function(conf){
  return this.mobiscroll().date({
      dateFormat:'yy-mm-dd',
      theme: 'android-holo-light',     // Specify theme like: theme: 'ios' or omit setting to use default
      mode: 'scroller',       // Specify scroller mode like: mode: 'mixed' or omit setting to use default
      display: 'bottom', // Specify display mode like: display: 'bottom' or omit setting to use default
      lang: 'zh',        // Specify language like: lang: 'pl' or omit setting to use default
      ...conf
  });
}

