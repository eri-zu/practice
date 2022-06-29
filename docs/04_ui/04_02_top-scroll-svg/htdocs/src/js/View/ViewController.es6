import HoverController from '../UI/hoverController.es6';
import menuBtnHover from '../UI/menuBtnHover.es6';
import textUnderLineController from '../UI/textUnderLine.es6';

export default class ViewController{
  constructor(window,document){
    this.window = $(window);
    this.document = $(document);
    if (!this.is_media('sp')) {
      this.menuBtnHover = new menuBtnHover();
      this.hoverItem = new HoverController('.hover-item');
      // this.underlineController = new textUnderLineController();
    }

  }
  is_media(media){
    const mediaBreak = {
      sp : 567,
      tab : 1024
    };
    if (media == 'pc') {
      return this.window.width() > mediaBreak.tab ? true : false;
    }

    if (typeof mediaBreak[media] === 'undefined') {
      return this.window.width() < media ? true : false;
    }else{
      return this.window.width() < mediaBreak[media] ? true : false;
    }
  }

  buttonToggleActive(target,classname){
    $(classname).removeClass('active');
    $(target).addClass('active');
  }

  clickeventrefresh(selector='',event){
    $(selector).off('click');
    $(selector).on('click',event);
  }
}
