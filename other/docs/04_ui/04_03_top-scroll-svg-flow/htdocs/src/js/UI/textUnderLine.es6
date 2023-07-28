export default class textUnderLineController{
  constructor(){
    this.$target = $('.text-underLineAnimation');
    this.measurement();
  }

  measurement(){
    this.$target.each((i,elem)=>{
      const $this = $(elem);
      const lineHight = +$this.css('line-height').match(/[+-]?[0-9]+(\.[0-9]*)?([eE][+-]?[0-9]+)?/)[0];
      const height = Math.ceil($this.height());
      const width = Math.ceil($this.width());
      const lineNum = height / Math.floor(lineHight);
      const fontsize = +$this.css('font-size').match(/[+-]?[0-9]+(\.[0-9]*)?([eE][+-]?[0-9]+)?/)[0];
      const textNum = $this.text().length;
      const perLineTextNum = Math.floor(width/fontsize);
      const lastLineTextNum = textNum % perLineTextNum;
      const [hankaku,zenkaku] = this.calcWidth($this);
      console.log(textNum,width,fontsize,lastLineTextNum,perLineTextNum);

      this.lineCalc($this.text(),width,hankaku,zenkaku);
      this.setSpan($this,lineNum);
      this.setSpanOffset($this,lineNum,Math.floor(lineHight));
      this.setSpanWidth($this,lineNum,lastLineTextNum,width,fontsize);
    })
  }

  setSpan($target,num){
    for (var i = 0; i < num; i++) {
      $target.append('<span></span>');
    }
  }

  setSpanOffset($target,num,lineHight){
    for (var i = 0; i < num; i++) {
      const top = lineHight + lineHight*i;
      $target.find('span').eq(i).css('top',top);
    }
  }

  setSpanWidth($target,num,lastLineTextNum,width,fontsize){
    if (num <= 1) return false;
    for (var i = 0; i < num; i++) {
      if (i == num - 1) {
        $target.find('span').eq(i).css('width',fontsize*2);
      }else{
        $target.find('span').eq(i).css('width',width);
      }
    }
  }

  calcWidth($target){
    $target.append('<span class="demo"></span>');
    const width1 = $target.find('.demo').text('a').get(0).offsetWidth;
    const width2 = $target.find('.demo').text('あ').get(0).offsetWidth;
    console.log(width1,'demo',width2);
    $target.find('.demo').remove();
    return [width1,width2]
  }

  lineCalc(text,width,hankaku,zenkaku){
    let text_width = 0;
    let lineText = '';
    const lineArray = [];
    for (var i = 0; i < text.length; i++) {
      const t = text.slice(i,i+1);
      lineText += t;

    }

  }

}
