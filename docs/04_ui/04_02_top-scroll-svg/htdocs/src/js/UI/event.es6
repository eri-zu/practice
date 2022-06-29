export default class ClickEvent{


  constructor(target){
    this.target = target;
  }


  addClass(classname='',targetElement = null,callback = null){

    $(this.target).click((e)=>{
      this.targetElement = !targetElement ? e.currentTarget: targetElement;
      $(this.targetElement).addClass(classname);
      if (callback) {
        callback(this.targetElement);
      }

    })

  }

  removeClass(classname='',targetElement = null,callback = null){
    $(this.target).click((e)=>{
      this.targetElement = !targetElement ? e.currentTarget: targetElement;
      $(this.targetElement).removeClass(classname);
      if (callback) {
        callback(this.targetElement);
      }
    })
  }
  toggleClass(classname='',targetElement = null,callback = null){
    $(this.target).click((e)=>{
      this.targetElement = !targetElement ? e.currentTarget: targetElement;
      console.log(this.targetElement);
      $(this.targetElement).toggleClass(classname);
      if (callback) {
        callback(this.targetElement);
      }
    })
  }

  click(callback = null){
    $(this.target).click(()=>{
      if (callback) {
        callback();
      }
    })
  }
}
