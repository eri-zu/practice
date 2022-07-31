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

    this.$target = $('.afterservice');
    this.$arrow = this.$target.find('svg g path');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$target.find('span').css('opacity', 0);
    TweenMax.set(this.$arrow, {drawSVG:"0% 0%", fill: 'none'});

    this.l = new LineBox(this.$target);

  }

  show() {
  

    var tl = new TimelineMax({delay: 0});

    tl
      .add(()=>{

        this.l.show(.7);

      }, 0.2)
      .to(this.$target.find('span'), 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.0)
      .set(this.$arrow, {drawSVG:"0% 0%"}, 0.9)
      .to(this.$arrow, 1.2, {
        drawSVG:"0% 100%",
        ease: Expo.easeOut,
      }, 0.9)

  }

  hide() {

    var tl = new TimelineMax({delay: 0});

    tl
      .add(()=>{

        this.l.hide();

      }, 0.0)
      .to(this.$target.find('span'), .8, {
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$arrow, .8, {
        drawSVG:"100% 100%",
        ease: Expo.easeOut,
      }, 0.0)
  

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}