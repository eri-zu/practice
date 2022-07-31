import hoverController from './hoverController.es6';

export default class menuBtnHover extends hoverController{
  constructor(){
    super('.c-header--menu',false);
    this.$header = $('.c-header');
    this.$target = $('.c-header--menu');
    this.$target.hover(
      ()=>{
        if (this.$header.hasClass('active')){
          super.hoverIn('hover2');
        }else{
          super.hoverIn('hover');
        }
      },
      ()=>{
        if (this.$header.hasClass('active')){
          super.hoverOut('hover2');
        }else{
          super.hoverOut('hover');
        }
      }
    )

  }


}
