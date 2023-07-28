//--------------------------------------------------
//
//  LoadMgr
//
//--------------------------------------------------

import Loader from './THREELoader.es6';
import O from './OtherLoader.es6';

export default class LoadMgr {

  constructor() {

    this.data = null;

    this.setup();
    this.setEvents();
      
  }

  setup() {

    var ol = new O();

    ol.youtubeIframeScript();
   
  }

  setEvents() {


  }

}