//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor(parent) {

    this.$wrap = $('html')
    this.endFlag = false;
    this.setup();
    this.setEvents();

  }

  setup() {



  }

  add(){

    var html = '<div id="loading">' +
                  '<div class="loadingBar"></div>' +
                  '<div class="loadingPercent"></div>' +
                '</div>';

    this.$wrap.append(html);

    // get dom
    this.$loading = $('#loading');
    this.$bar = $('#loading .loadingBar');
    this.$percent = $('#loading .loadingPercent');

  }

  show() {
    const $target = $('.loading');
    
    var tl = new TimelineMax();
    
    $target.find('.shape').each((i,e)=>{
      tl
      .to(e,.5,{
        scale:1,
        ease:Power4.easeInOut,
        opacity:1
      })
      .set(e,{
        opacity:0,
        scale:0,
      })
    })
    tl.add(e=>{
      if(!this.is_hide)this.hide(true);
      
    })
    tl.repeat(-1);
    this.loadingTL = tl;


    

  }

  update(e) {


  }

  hide(is_end = false) {
    if(!this.endFlag || !is_end)return;
    this.is_hide = true;
    
    var tl = new TimelineMax();
    tl.add(e=>{
      $('.loading').addClass('loaded')
      $(window).trigger('loadingEnd')
    })
    .add(e=>{
      this.remove()
    },.5)
    
  }

  remove() {

    $('.loading').remove();

  }

  setEvents() {


  }

}