//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import Logo from './Logo/Controller.es6';
import Tit from './Tit/Controller.es6';
import Tit1 from './Tit1/Controller.es6';
import Tit2 from './Tit2/Controller.es6';
import Text from './Text/Controller.es6';
import Indicator from './Indicator/Controller.es6';
import Slider from './Slider/Controller.es6';
import UnderArrow from './UnderArrow/Controller.es6';
import Menu from './Menu/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();


    if (gb.urlp.video=='1') {

      var html = '<video id="video" crossOrigin="anonymous" webkit-playsinline style="display:none;" muted="true">' +
                    '<source src="./assets/resource/video/smoke.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'>' +
                  '</video>';
      
    }
    if (gb.urlp.video=='2') {

      var html = '<video id="video" crossOrigin="anonymous" webkit-playsinline style="display:none;" muted="true">' +
                    '<source src="./assets/resource/video/video1.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'>' +
                  '</video>';

    }
    if (gb.urlp.video=='3') {

      var html = '<video id="video" crossOrigin="anonymous" webkit-playsinline style="display:none;" muted="true">' +
                    '<source src="./assets/resource/video/video2.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'>' +
                  '</video>';

    }
    if (gb.urlp.video=='4') {

      var html = '<video id="video" crossOrigin="anonymous" webkit-playsinline style="display:none;" muted="true">' +
                    '<source src="./assets/resource/video/video3.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'>' +
                  '</video>';

    }
    if (gb.urlp.video=='5') {

      var html = '<video id="video" crossOrigin="anonymous" webkit-playsinline style="display:none;" muted="true">' +
                    '<source src="./assets/resource/video/video4.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'>' +
                  '</video>';

    }

    $('body').append(html);

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
        
      this.setup()
      this.setEvents();
      
    },1000);


  }

  setup() {


    
    // // ui
    this.logo = new Logo();
    // if (gb.urlp.textpattern=='0') this.tit = new Tit();
    // if (gb.urlp.textpattern=='1') this.tit = new Tit1();
    // if (gb.urlp.textpattern=='2') this.tit = new Tit2();
    // if (gb.urlp.textpattern=='0') this.tit = new Tit();
    this.tit = new Tit1();
    this.text = new Text();
    this.indicator = new Indicator();
    this.slider = new Slider();    
    this.underArrow = new UnderArrow();    
    this.menu = new Menu();    

    this.timeline();

  }

  update() {

 
  }

  timeline() {

    var tl = new TimelineMax({delay: 1});

    tl
      .add(()=>{

        this.slider.show();

      }, 0.0)
      .add(()=>{

        this.logo.show();

      }, 0.0 + 2.2)
      .add(()=>{

        this.tit.show();

      }, 0.8 + 2.2)
      .add(()=>{

        this.text.showFirst();

      }, 0.5 + 2.2)
      .add(()=>{

        this.indicator.show();
        this.underArrow.show();
        this.menu.b.b_o.show_o();
        
      }, 3.1 + 2.2 - 1.0)
      .add(()=>{

        this.indicator.timeline();

      }, 4.1 + 2.2 - 1.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}