//--------------------------------------------------
//
//  LoadMgr
//
//--------------------------------------------------

import Loader from './THREELoader.es6';
import Loaderi from './LoaderImage.es6';

export default class LoadMgr {

  constructor() {

    this.data = null;

    this.setup();
    this.setEvents();
      
  }

  setup() {

  	this.l = new Loaderi();
  	
	var len = 500;
	gb.lm.total += len;
	var path = './assets/resource/img/imgs/';      


  	var cb = ()=>{
  	  
  	}
  	var cb02 = ()=>{
  	  gb.lm.completed++;
  	}

  	this.l.img(len+1,path,'',cb,cb02);

  }

  setEvents() {


  }

}