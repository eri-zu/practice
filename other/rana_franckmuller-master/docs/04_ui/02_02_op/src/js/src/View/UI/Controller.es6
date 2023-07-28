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

    this.setup()
    this.setEvents();

  }

  setup() {

    
    // // ui
    this.logo = new Logo();
    if (gb.urlp.textpattern=='0') this.tit = new Tit();
    if (gb.urlp.textpattern=='1') this.tit = new Tit1();
    if (gb.urlp.textpattern=='2') this.tit = new Tit2();
    // if (gb.urlp.textpattern=='0') this.tit = new Tit();
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

        this.logo.show();

      }, 0.0)
      .add(()=>{

        this.slider.show();

      }, 1.0)
      .add(()=>{

        this.tit.show();

      }, 1.0)
      .add(()=>{

        this.text.showFirst();

      }, 2.0)
      .add(()=>{

        this.indicator.show();
        this.underArrow.show();
        this.menu.b.b_o.show_o();
        
      }, 3.3)
      .add(()=>{

        this.indicator.timeline();

      }, 4.3)
      .add(()=>{

        // this.slider.next();

      }, 8.3)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}