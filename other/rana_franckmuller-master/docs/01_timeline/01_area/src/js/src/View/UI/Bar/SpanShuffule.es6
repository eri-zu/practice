//--------------------------------------------------
//
//  SpanShuffule
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class SpanShuffule extends Base {

  constructor($target, index) {

    super();

    this.$target = $target;
    this.textDef = $target.text();
    this.text = this.textDef;
    this.index = index;

    this.isShuffle = false;

    this.setup();
    this.setEvents();

    // this.timeline();


  }

  setup() {

    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    this.len = this.letters.length;

    // set shadow
    // color def
    // var colors = [
    //   // 'hsla(0, 0%, 91%, 1)',
    //   // 'hsla(0, 0%, 100%, 1)',
    //   'hsla(51, 100%, 50%, 1)',
    //   'hsla(66, 100%, 31%, 1)',
    //   'hsla(147, 100%, 29%, 1)',
    // ];

    switch (this.index){
      case 1:
        // color 01
        var colors = [
          '#8ce6ec',
          '#deaecb',
          '#cf9dd4',
        ];
        break;
      case 2:
        // color 02
        var colors = [
          '#49ae90',
          '#ddf18c',
          '#7fbadb',
        ];
        break;
      case 3:
        // color 03
        var colors = [
          '#86e169',
          '#8fd6ad',
          '#c0c6d0',
        ];
        break;
      case 4:
        // color 04
        var colors = [
          '#ca9feb',
          '#edebb8',
          '#fb8465',
        ];
        break;
      case 5:
        // color 05
        var colors = [
          '#e3ada7',
          '#f35fb3',
          '#9ca4e3',
        ];
        break;
    }

    this.c = colors[Math.floor(Math.random() * colors.length)];


    // widthの設定 ガタガタならないように
    var w = this.$target.width();
    this.$target.width(w);

    // shadow
    this.$clone = this.$target.clone();
    this.$clone.css({
      position: 'absolute',
      left: this.$target.position().left,
      top: this.$target.position().top,
      color: this.c, 
      opacity: 0,
    });
    this.$clone.addClass('shadow');
    this.$target.parent().append(this.$clone);    

  }

  reset() {


  }

  update() {


    if (this.isShuffle) this.text = this.letters[Math.floor(Math.random()*this.len)]
    if (!this.isShuffle) this.text = this.textDef;

  }

  draw() {

    this.$target.text(this.text)

  }

  start(){

    this.loopStart = true;
    this.isShuffle = true;

  }

  end () {

    this.isShuffle = false;
    this.Timer = setTimeout(()=>{
        
      this.loopStart = false;
      
    }, 500);  
    
    
  }

  showShadow() {

    TweenMax.to(this.$clone, 0.1, {opacity: 1});

  }

  hideShadow() {

    TweenMax.to(this.$clone, 0.4, {opacity: 0, ease: Power4.easeInOut});

  }

  timeline() {

    // this.show();

  }

}