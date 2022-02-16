
// exports.__esModule = true;

const ua = {};
const useragent = navigator.userAgent.toLowerCase();
ua.ver = navigator.appVersion.toLowerCase();
// IE(11以外)
ua.isMSIE = (useragent.indexOf('msie') > -1) && (useragent.indexOf('opera') === -1);
// IE6
ua.isIE6 = ua.isMSIE && (ua.ver.indexOf('msie 6.') > -1);
// IE7
ua.isIE7 = ua.isMSIE && (ua.ver.indexOf('msie 7.') > -1);
// IE8
ua.isIE8 = ua.isMSIE && (ua.ver.indexOf('msie 8.') > -1);
// IE9
ua.isIE9 = ua.isMSIE && (ua.ver.indexOf('msie 9.') > -1);
// IE10
ua.isIE10 = ua.isMSIE && (ua.ver.indexOf('msie 10.') > -1);
// IE11
ua.isIE11 = (useragent.indexOf('trident/7') > -1);
// IE
ua.isIE = ua.isMSIE || ua.isIE11;
// Edge
ua.isEdge = (useragent.indexOf('edge') > -1);
// Google Chrome
ua.isChrome = (useragent.indexOf('chrome') > -1) && (useragent.indexOf('edge') === -1);
// Firefox
ua.isFirefox = (useragent.indexOf('firefox') > -1);
// Safari
ua.isSafari = (useragent.indexOf('safari') > -1) && (useragent.indexOf('chrome') === -1);
// iOS Chrome
ua.isIosChrome = (useragent.indexOf('crios') > -1);

ua.setHtmlClass = () => {
  if (ua.isIE || ua.isIE11) {
    $('html').addClass('ie');
  }
  if (ua.isEdge) {
    $('html').addClass('edge');
  }
  if (ua.isFirefox) {
    $('html').addClass('firefox');
  }
  if (ua.isIosChrome) {
    $('html').addClass('iosChrome');
  }
};
ua.setHtmlClass();

exports.default = ua;
module.exports = exports.default;
