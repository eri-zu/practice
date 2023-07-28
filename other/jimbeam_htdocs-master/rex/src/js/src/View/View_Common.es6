//--------------------------------------------------
//
//  ViewTop sss
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

import UrlMgr from 'Controller/UrlMgr.es6';

import Sns from './Func/Sns.es6';
import UIController from './UI/Controller_Common.es6';

export default class ViewCommon extends Base {

  constructor(){

    super();

    this.name = 'ViewCommon';

    this.isUEv = false; // update
    this.isREv = true; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse

    this.setup();
    this.setEvents();

  }

  setup() {

    gb.urlm = new UrlMgr();

    if (gb.u.dv.isAndroid()) $('#age').addClass('android');

    // agegate 1日経っていなかったら
    gb.isAge = gb.u.u.getCookie('agegate');
    if (gb.isAge=='true') $('#age').hide();  

    // sound on off
    gb.isSound = gb.u.u.getCookie('isSound');
    if (gb.isSound==undefined) gb.isSound = 'true';

    this.onLoad();

  }

  onLoad() {

    gb.f.SPH($('#menu'));

    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------
    new Sns($('.fbShare_menu'),$('.twShare_menu'),$('.lineShare_menu'),$('.onMail'));

    // ------------------------------------------------------------
    //  layout
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //  ui
    // ------------------------------------------------------------
    this.uic = new UIController();



    // ------------------------------------------------------------
    // timeline
    // ------------------------------------------------------------
    this.onResize();
    
  }

  onLoadingEnd() { 

    // ------------------------------------------------------------
     //  Util
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  layout
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  ui
     // ------------------------------------------------------------
          

     // ------------------------------------------------------------
     // effect
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     // Scene / timeline
     // ------------------------------------------------------------


  }

  update() {


  }

  onResize() {

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{      
      
      var vh = window.innerHeight;
      document.documentElement.style.setProperty('--h', vh + 'px');


    }, 100);


  }

  onLoadAll() {

    // new Responsive();

  }

  setEvents() {

    super.setEvents();

    // $(window).on('load', this.onLoad.bind(this));
    $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
    $(window).on('loadAll', this.onLoadAll.bind(this));

  }

}