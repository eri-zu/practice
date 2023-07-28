import Lazyload from './lazyload/lazyload.es6';
import ObjectFit from './objectfits/objectfits.es6';

export default class Libs {
  constructor(){
    this.lazyload = new Lazyload();
    this.objectfit = new ObjectFit();
    this.japaneseInputCompelte(window, document, $);
  }

  easingFunc(t,easing='linear'){
    const easingFuncs = {
      linear: function (t) { return t },
      // accelerating from zero velocity
      easeInQuad: function (t) { return t*t },
      // decelerating to zero velocity
      easeOutQuad: function (t) { return t*(2-t) },
      // acceleration until halfway, then deceleration
      easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
      // accelerating from zero velocity
      easeInCubic: function (t) { return t*t*t },
      // decelerating to zero velocity
      easeOutCubic: function (t) { return (--t)*t*t+1 },
      // acceleration until halfway, then deceleration
      easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
      // accelerating from zero velocity
      easeInQuart: function (t) { return t*t*t*t },
      // decelerating to zero velocity
      easeOutQuart: function (t) { return 1-(--t)*t*t*t },
      // acceleration until halfway, then deceleration
      easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
      // accelerating from zero velocity
      easeInQuint: function (t) { return t*t*t*t*t },
      // decelerating to zero velocity
      easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
      // acceleration until halfway, then deceleration
      easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }

    }


    return easingFuncs[easing](t);
  }


  //日本語確定入力フォーム
  japaneseInputCompelte(window, document, $, undefined){
    $.fn.complete = function (handler) {
        var ENTER_KEY = 13;
        var keypressed = false;

        /**
        * keypressイベント発生時に呼び出されます。
        * @param    event   {jQuery.Event}  イベントオブジェクト
        */
        var onkeypress = function (event) {
            if (event.keyCode !== ENTER_KEY) {
                return;
            }
            keypressed = true;
        };

        /**
        * keyupイベント発生時に呼び出されます。
        * @param    event   {jQuery.Event}  イベントオブジェクト
        */
        var onkeyup = function (event) {
            if (event.keyCode === ENTER_KEY && keypressed) {
                // 入力確定のイベントを発生させます。
                handler.call(this, event);
            }
            keypressed = false;
        };

        // 各要素に対してイベントを付与します。
        return this.each(function (index) {
            $(this).on('keypress', onkeypress).on('keyup', onkeyup);
        });
    };

    $('input[name=freeword]').complete(function(e){
      console.log(e,'event');
    })
  }
}
