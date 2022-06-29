

export default class hoverController{
  constructor(hoverTarget = null,isSetHover = true,isSetClassName = 'hover'){
    this.$target = $(hoverTarget);
    console.log(isSetClassName);
    if (isSetHover) {
      this.setHoverAnimation(isSetClassName);
    }
  }

  setHoverAnimation(isSetClassName){
    this.hoverFlag = false;
    this.hoverTimeFlag = false;
    $(this.$target).off('mouseenter mouseleave');
    this.$target.hover(
      (e)=>{
        this.hoverIn(isSetClassName,$(e.currentTarget));
      },
      (e)=>{
        this.hoverOut(isSetClassName,$(e.currentTarget));
      }
    )
  }

  hoverIn(isSetClassName,$this = null){
    if(!$this) $this = this.$target;
    if (this.hoverTimeFlag) return false;
    this.hoverTimeFlag = true;
    this.hoverFlag = true;
    $this.addClass(isSetClassName);
    setTimeout(()=>{
      this.hoverTimeFlag = false;
      if(!this.hoverFlag) $this.removeClass(isSetClassName);
    },1000);

  }

  hoverOut(isSetClassName,$this = null){
    if(!$this) $this = this.$target;
    if (!this.hoverTimeFlag) $this.removeClass(isSetClassName);
    this.hoverFlag = false;
  };
}
