// import {Howl, Howler} from 'howler';
import get from './modules/util/get.js';
import getParam from './modules/util/getParam.js';
import shuffleArray from './modules/util/shuffleArray';
import delayAnime from './modules/util/delayAnime';
import Btn from './modules/Btn';
import Sound from './modules/Sound';

$(() => {
  let path = '.';

  // 下層の処理
  if (document.getElementById('app') !== null) {
    path = '..';
    const vm = new Vue({
      el: '#app',
      data: {
        target: '',
        targets: '',
        timer: null,
        idx: 0,
        disabledStop: false,
        showStop: true,
        category: ''
      },
      mounted: function(){
        const self = this;
        get('../assets/json/targets.json', {}, function(_data){
          let data = _data;
          if (typeof data === 'string') {
            data = JSON.parse(data);
          }
          // console.log(data);
          self.targets = shuffleArray(data.targets);
          self.start();
        });
      },
      methods: {
        start: function(){
          seStart.play();
          const self = this;
          self.timer = setInterval(function(){
            self.target = self.targets[self.idx];
            self.idx++;
            if (self.idx >= self.targets.length) {
              self.idx = 0;
            }
          },20);
          this.category = getParam('category');
          if (!['big', 'small', 'free'].includes(this.category)) {
            this.category = 'big';
          }
          stopRotate();
        },
        stop: function(){
          // STOPボタンを押せないように
          this.disabledStop = true;
          // タイマー停止
          clearInterval(this.timer);
          const self = this;
          this.endAnime();
        },
        endAnime: function(){
          let i = 0;
          const max = 3;
          const self = this;
          function anime(cb){
            // console.log(`i:${i} max${max}`);
            self.target = self.targets[self.idx];
            self.idx++;
            if (self.idx >= self.targets.length) {
              self.idx = 0;
            }
            i++;
            if (i > max) {
              // 最後の文字が止まった時
              clearTimeout(self.timer);
              seStop.play();
              startRotate();
              // STOPボタンを非表示
              self.showStop = false;
              return null;
            }
            return setTimeout(function(){cb(cb)}, 500 * i * 0.6);
          }
          this.timer = anime(anime);
        },
        restart: function(){
          this.targets = shuffleArray(this.targets);
          this.start();
          // STOPボタンを押せるように
          this.showStop = true;
          this.disabledStop = false;
        }
      }
    });
    // STOPボタン
    const stopBtn = new Btn({
      $elm: $('#stopBtn'),
      func: function() {
        if (vm.disabledStop === true) {
          return;
        }
        vm.stop();
        tap.play();
      },
      disableDoubleTap: true
    });
    // もう一回ボタン
    const replayBtn = new Btn({
      $elm: $('#replayBtn'),
      func: function() {
        vm.restart();
        tap.play();
      },
      disableDoubleTap: true
    });
    // 一覧に戻るボタン
    const backListBtn = new Btn({
      $elm: $('#backListBtn'),
      func : null,
      disableDoubleTap: false
    });
  } else {
    // TOPの処理
    // スタートボタン
    const startBtnBig = new Btn({
      $elm: $('#startBtnBig'),
      func: null,
      disableDoubleTap: false
    });
    const startBtnSmall = new Btn({
      $elm: $('#startBtnSmall'),
      func: null,
      disableDoubleTap: false
    });
    const startBtnFree = new Btn({
      $elm: $('#startBtnFree'),
      func: null,
      disableDoubleTap: false
    });
  }

  const backBtn = new Btn({
    $elm: $('#backBtn'),
    func: function() {
      tap.play();
    },
    disableDoubleTap: true
  });

  function startRotate() {
    $('#circle, #beer').addClass('jsRotate');
  }

  function stopRotate() {
    $('#circle, #beer').removeClass('jsRotate');
  }

  // Howler
  const tap = new Howl({
    src: [`${path}/assets/sounds/tap.mp3`]
  });

  const seStart = new Howl({
    src: [`${path}/assets/sounds/roulette_1.mp3`]
  });

  const seStop = new Howl({
    src: [`${path}/assets/sounds/roulette_2.mp3`]
  });

  // Howler.volume(0.5);

  delayAnime($('#wrapper'), 150);

  function delayLink($elm) {
    tap.play();
    const url = $elm.attr('href');
    setTimeout(function(){
      location = url;
    },200);
  }

  $('.jsSeBtn').on('click', function(){
    tap.play();
  })

  $('.jsSeLink').on('click', function(e){
    e.preventDefault();
    delayLink($(this));
  });

  $('.jsSeLogo').on('touchstart', function(){
    tap.play();
  });

  const sound = new Sound();
});
