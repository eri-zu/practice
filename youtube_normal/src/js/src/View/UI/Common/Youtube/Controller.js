//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.name = "Youtube";

    this.$item = $(".js-item");

    this.setup();
    this.setEvents();
  }

  setup() {
    console.log("setup youtube");
    const playerDom = document.getElementById("player");
    this.onYouTubeIframeAPIReady(playerDom);
  }

  onYouTubeIframeAPIReady(playerDom) {
    const id = this.$item.eq(0).data("videoid");

    this.player = new YT.Player(playerDom, {
      videoId: id, // 初期値
      playerVars: {
        loop: 1, // ループ
        rel: 0, // 関連動画非表示
        controls: 0, // コントロールバー非表示
      },
      events: {
        onReady: (event) => {
          this.onPlayerReady(event);
        },
        onStateChange: (event) => {
          this.onPlayerStateChange(event);
        },
      },
    });
  }

  onPlayerReady(event) {
    // console.log("onPlayerReady");
    // this.player.playVideo();
    // console.log("aaaa");
  }

  onPlayerStateChange(event) {
    this.status = event.data;

    // 再生中
    if (this.status == YT.PlayerState.PLAYING) {
      console.log("再生中");
    }

    // 再生終了
    if (this.status == YT.PlayerState.ENDED) {
      console.log("再生終了");
      this.startVideo(); // ループで再生
    }
  }

  init(videoid) {
    // videoidの書き換え
    this.player.loadVideoById(videoid);
  }

  startVideo() {
    console.log("再生スタート");
    this.player.playVideo();
  }

  stopVideo() {
    console.log("再生ストップ");
    this.player.stopVideo();
  }

  setEvents() {
    super.setEvents();

    this.$item.on("click" + "." + this.name, (e) => {
      // videoid取得
      const videoid = e.currentTarget.dataset.videoid;
      console.log(this.player, "this.player");
      this.init(videoid);
    });
  }
}
