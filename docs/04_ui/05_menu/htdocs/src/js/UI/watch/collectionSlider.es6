export default class CollectionSlider{
  constructor(){
    this.$sliderDiv = $('.watch-menu--modal-item');
    this.$items = $('.watch-menu--modal-collection--item');
    this.$leftbtn = $('.watch-menu--modal-collection--item--sp_btn--left');
    this.$rightbtn = $('.watch-menu--modal-collection--item--sp_btn--right');
    this.$slideIndicator = $('.watch-menu--modal-collection--item--sp_indicator span');
    this.nowIndicator = 0;
    this.$nowSlide = $('.watch-menu--modal-collection--item.active')
    this.sliderController(this.$nowSlide);
  }

  sliderController($initSlide){
    const index = $initSlide.data('slideindex');
    this.setIndicator(index);
    this.setBtnActive(index);
    this.$rightbtn.click((e)=>{
      return this.nextSlide(this.nowIndicator);
    });

    this.$leftbtn.click((e)=>{
      return this.prevSilde(this.nowIndicator);
    })

    this.$slideIndicator.click((e)=>{
      const index = this.$slideIndicator.index($(e.currentTarget));
      this.nowIndicator = index -1;
      return this.nowIndicator > index ? this.prevSilde(1) : this.nextSlide(1);
    })
  }

  setIndicator(i){
    this.$slideIndicator.removeClass('active');
    this.$slideIndicator.eq(i).addClass('active');
  }

  setBtnActive(i){
    if (i >= this.$items.length -1) {
      this.$rightbtn.removeClass('active');
    }else{
      this.$rightbtn.addClass('active');
    }

    if (i <= 0) {
      this.$leftbtn.removeClass('active');
    }else{
      this.$leftbtn.addClass('active');
    }
  }

  nextSlide(i){
    if (i >= this.$items.length -1) return false;
    this.nowIndicator++;
    this.setBtnActive(this.nowIndicator);
    this.$items.removeClass('active');
    this.setCssSlide();
    this.$items.eq(this.nowIndicator).addClass('active');
    this.setIndicator(this.nowIndicator);
    return false;
  }


  prevSilde(i){
    if (i <= 0) return false;
    this.nowIndicator--;
    this.setBtnActive(this.nowIndicator);
    this.$items.removeClass('active');
    this.setCssSlide()
    this.$items.eq(this.nowIndicator).addClass('active');
    this.setIndicator(this.nowIndicator);
    return false;
  }

  setCssSlide(){
    const index = this.nowIndicator;
    const baseVlue = 100;
    this.$items.each(
      (i,elem)=>{
        if (index != i) {
          const transformVlue =  - index * baseVlue;

          console.log(transformVlue + '%');
          const cssVule = `translateX(${transformVlue}%)`;
          $(elem).css('transform',cssVule);
        }else{
          const transformVlue = -1 * this.nowIndicator * baseVlue;
          const cssVule = `translateX(${transformVlue}%)`;
          $(elem).css('transform',cssVule);
        }
      }
    );
  }
}
