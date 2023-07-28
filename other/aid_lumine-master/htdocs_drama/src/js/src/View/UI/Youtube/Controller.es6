//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Player from './Player.es6';

export default class Controller {

  constructor(id, videoID){

    this.list = [];

    this.id = id;
    this.videoID = videoID;

    this.setup();
    this.setEvents();

  }

  setup(id,videoID) {

    this.p = new Player(this.id, this.videoID);

  }

  setEvents() {


  }

}