//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor($target) {

    super();

    this.$tw = $('.c-header--contents--otherBtn--twitter path');
    this.$insta = $('.c-header--contents--otherBtn--instagram path, .c-header--contents--otherBtn--instagram circle');
    this.$fb = $('.c-header--contents--otherBtn--facebook path');


    this.setup()
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$tw, {drawSVG:"0% 100%", stroke: 'rgba(0,0,0,0)', fill: 'none'});
    TweenMax.set(this.$insta, {drawSVG:"0% 100%", stroke: 'rgba(0,0,0,0)', fill: 'none'});
    TweenMax.set(this.$fb, {drawSVG:"0% 100%", stroke: 'rgba(0,0,0,0)', fill: 'none'});

    this.$target = this.$tw.add(this.$insta).add(this.$fb)
    // this.show();

  }

  show() {
      
    var tltw = new TimelineMax({delay: 0.0 * 0});
    var dur = 1.2;

    tltw
      .to(this.$tw, dur, {
        // stroke:"rgba(0,0,0,1)",
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$tw, dur, {
        fill: "#000",
        // stroke: "none",
        ease: Power1.easeInOut,
      }, .3)

    var tlinsta = new TimelineMax({delay: 0.0 * 1});
    var dur = 1.2;

    tlinsta
      .to(this.$insta, dur, {
        // stroke:"rgba(0,0,0,1)",
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$insta, dur, {
        fill: "#000",
        // stroke: "none",
        ease: Power1.easeInOut,
      }, .3)

    var tlfb = new TimelineMax({delay: 0.0 * 2});
    var dur = 1.2;

    tlfb
      .to(this.$fb, dur, {
        // stroke:"rgba(0,0,0,1)",
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$fb, dur, {
        fill: "#000",
        // stroke: "none",
        ease: Power1.easeInOut,
      }, .3)    

  }

  hide() {

    var tltw = new TimelineMax({delay: 0});
    var dur = .7;

    tltw
    //   .to(this.$tw, dur, {
    //     drawSVG:"100% 100%",
      //   ease: Power2.easeInOut,
      // }, 0.1)
      .to(this.$tw, dur, {
        fill: "none",
        // stroke: "#000",
        ease: Power1.easeInOut,
      }, 0.0)

    var tlinsta = new TimelineMax({delay: 0});
    var dur = .7;

    tlinsta
      // .to(this.$insta, dur, {
      //   drawSVG:"100% 100%",
      //   ease: Power2.easeInOut,
      // }, 0.1)
      .to(this.$insta, dur, {
        fill: "none",
        // stroke: "#000",
        ease: Power1.easeInOut,
      }, 0.0)

    var tlfb = new TimelineMax({delay: 0});
    var dur = .7;

    tlfb
      // .to(this.$fb, dur, {
      //   drawSVG:"100% 100%",
      //   ease: Power2.easeInOut,
      // }, 0.1)
      .to(this.$fb, dur, {
        fill: "none",
        // stroke: "#000",
        ease: Power1.easeInOut,
      }, 0.0)  

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}