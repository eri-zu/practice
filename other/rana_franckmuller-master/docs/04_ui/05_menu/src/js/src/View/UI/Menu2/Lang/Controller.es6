//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import LineBox from './LineBox.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.lang');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.lineList = [];

    this.$target.find('span').css('opacity', 0);

    this.$target.each((index, el)=>{
      
      var l = new LineBox($(el));
      this.lineList.push(l);

    });

    // this.show();

  }

  show() {
    
    this.$target.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.0});
      var l = this.lineList[index];

      tl
        .add(()=>{

          l.show2(.7);

        }, 0.0)
        .to($(el).find('span'), 1.2, {
          opacity: 1,
          ease: Power2.easeInOut,
        }, 0.0)
      
    });
  
  }

  hide() {

    this.$target.each((index, el)=>{

      var tl = new TimelineMax({delay: 0});
      var l = this.lineList[index];

      tl
        .add(()=>{

          l.hide();

        }, 0.0)
        .to($(el).find('span'), .8, {
          opacity: 0,
          ease: Power2.easeInOut,
        }, 0.0)
      
    });


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}