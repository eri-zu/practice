export default class ScrollController{
  constructor($target){
    this.$target = $target;
    this.is_scroll = false;
    this.is_load = false;
  }

  scroll(handler,isload = false){
    if (isload) {
      handler(this.$target);
    }
    this.$target.on('scroll',e=>{
      if (!this.is_scroll) {
        this.is_scroll = true;
        setTimeout(()=>{
          handler($(e.currentTarget));
          this.is_scroll = false;
          return this.is_scroll;
        },200);
      }
    });
  }
}
