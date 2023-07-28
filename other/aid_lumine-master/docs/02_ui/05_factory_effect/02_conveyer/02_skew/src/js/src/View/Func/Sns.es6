// ------------------------------------------------------------
//
//  SNS
//
// ------------------------------------------------------------

import metaData from "../../../../ejs/inc/metaData.json";

export default class SNS {

  constructor($fb=$('.fbShare'),$tw=$('.twShare'),$line=$('.lineShare'),$mail=$('.onMail')){

    // dom
    this.$fb = $fb;
    this.$tw = $tw;
    this.$line = $line;
    this.$mail = $mail;

    // data
    var dataC = metaData['common'];

    this.fb = {
      $target: $fb,
      tit: dataC.fb.tit,
      des: dataC.fb.des,
      img: dataC.fb.img,
      url: dataC.fb.url,
      // url: location.href,
    }

    this.tw = {
      $target: $tw,
      tit: dataC.tw.tit,
      text: dataC.tw.text,
      url: dataC.tw.url,
      // url: location.href,
      hash: dataC.tw.hash,
    }

    this.line = {
      $target: $line,
      tit: dataC.tit,
      des: dataC.des,
      img: dataC.img,
      url: dataC.line.url,
      // url: location.href,
      text: dataC.line.text,
    }

    this.mail = {
      tit: dataC.mail.tit,
      des: dataC.mail.des,
      address: dataC.address,
    }


    log(this);

    this.setEvents();

  }

  runFB(e) {

    this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + this.fb.url);

    return false;

  }


  runTW(e) {

    this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + encodeURIComponent(this.tw.text) + '&hashtags=' + this.tw.hash);
    // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);

    return false;

  }

  runLINE() {

    this.openWindow('http://line.me/R/msg/text/?' + encodeURIComponent(this.line.text) + '%0A' + this.line.url);

    return false;

  }

  runMail() {

    location.href = 'mailto:' + this.mail.address + '?subject=' + this.mail.tit + '&body=' + this.mail.des + this.mail.url;

    return false;

  }

  openWindow(url, w, h) {

      if(w === undefined) w = 600;
      if(h === undefined) h = 600;

      var l = Number((window.screen.width-w)/2);
      var t = Number((window.screen.height-h)/2);

      window.open(url,'new_window',
                'menubar=no,' +
                'toolbar=no,' +
                'resizable=yes,' +
                'scrollbars=yes,' +
                'height=' + h + ',' +
                'width=' + w + ',' +
                'left=' + l + ',' +
                'top=' + t
              );

  }

  setEvents() {

    if (this.$fb) this.fb.$target.on('click', this.runFB.bind(this));
    if (this.$tw) this.tw.$target.on('click', this.runTW.bind(this));
    if (this.$line) this.line.$target.on('click', this.runLINE.bind(this));
    if (this.$mail) this.$mail.on('click', ()=>{this.runMail();return false;});

  }

  removeEvents() {

    if (this.$fb) this.fb.$target.off('click');
    if (this.$tw) this.tw.$target.off('click');
    if (this.$line) this.line.$target.off('click');
    if (this.$mail) this.$mail.off('click');

  }

}