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

    if (gb.r.w>=568) {

      var texList = [
        './assets/resource/img/watch/PC_TOP_1.jpg',
        './assets/resource/img/watch/PC_TOP_2.jpg',
        './assets/resource/img/watch/PC_TOP_3.jpg'
      ];

    } else {

      var texList = [
        './assets/resource/img/watch/1.jpg',
        './assets/resource/img/watch/2.jpg',
        './assets/resource/img/watch/3.jpg'
      ];

    }

    var cnt = 0;
    var onload = (tex)=>{

      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      this.texList.push(tex);

      cnt++;
      if (cnt<=2) {
        t.load(texList[cnt] ,onload);
      } else {

        this.logo = new Logo();
        this.tit = new Tit1();
        this.text = new Text();
        this.indicator = new Indicator();
        this.slider = new Slider();    
        this.underArrow = new UnderArrow();    
        this.menu = new Menu();    

        this.timeline();
      }      

    }
    gb.texList = this.texList = [];
    var t = new THREE.TextureLoader();
    t.load(texList[cnt] ,onload);


  }

  update() {

 
  }

  timeline() {

    // pc
    if (gb.r.w>=568) {

      var tl = new TimelineMax({delay: 0});

      tl
        .add(()=>{

          this.slider.show();

        }, 0.0)
        .add(()=>{

          this.logo.show();

        }, 0.0 + .85 + 1.1)
        .add(()=>{

          this.tit.show();

        }, 0.8 + .85 - 0.2 + 1.1)
        .add(()=>{

          this.text.showFirst();

        }, 0.5 + .85 - 0.2 + 1.1)
        .add(()=>{

          this.indicator.show();
          this.underArrow.show();
          this.menu.b.b_o.show_o();
          
        }, 3.1 + .85 - 1.0 - 0.2 + 1.1)
        .add(()=>{

          this.indicator.timeline();

        }, 3.1 + .85 - 1.0 - 0.2 + 1.1)

    } else {

      var tl = new TimelineMax({delay: 0});

      tl
        .add(()=>{

          this.slider.show();

        }, 0.0)
        .add(()=>{

          this.logo.show();

        }, 0.0 + .85 + 1.1)
        .add(()=>{

          this.indicator.show();
          this.underArrow.show();
          this.menu.b.b_o.show_o();
          
        }, 3.1 + .85 - 0.8)
        .add(()=>{

          this.indicator.timeline();

        }, 3.1 + .85 - 0.8)      
        .add(()=>{

          var tlinfo = new TimelineMax();

          tlinfo
            .to($('.info'), .6, {
              opacity: 1.0,
              z: 1,
              ease: Power3.easeOut,
            }, 0.0)
            .to($('.info'), 1.5, {
              scale: 1.0,
              ease: Elastic.easeOut.config(1.1, 0.55),
            }, 0.0)

        }, 3.1 + .85 - 0.8)      

    }

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}