// import {Howl, Howler} from 'howler';
import Ua from './modules/util/ua';
import disableDoubleTap from './modules/util/disableDoubleTap';
import zeroPadding from './modules/util/zeroPadding';
import delayAnime from './modules/util/delayAnime';
import Btn from './modules/Btn';
import Sound from './modules/Sound';

$(() => {
  let path = '.';
  let ua = new Ua();

  // ボタンコンポーネント
  Vue.component('gaya-button', {
    data: function(){
      return {
        count: 0,
        se: null,
        svg: '',
        shadow: '',
        barWrap: '',
        bar: '',
        W: '',
        w: '',
        tani: ''
      }
    },
    props: ['sound', 'length'],
    computed: {
      value: function(){
        return `width: ${this.count * 10}%`;
      }
    },
    methods: {
      onDown: function(e){
        // 複数指で拡大縮小が出来てしまうのを防ぐ
        if (e.touches.length > 1) e.preventDefault();

        if (this.count >= 10) {
          return;
        }
        this.count++;
        const se = getRandomArray(this.sounds);
        se.play();
        // ボタンの動き
        const ookisa = 7;
        TweenMax
          .to(this.bar, 0.5, {scale: this.tani * this.count * 10, ease: Expo.easeOut})

        TweenMax.set(this.svg.not(this.shadow), {x: ookisa, y: ookisa});
        TweenMax.set(this.shadow, {opacity: 0});
      },
      onUp: function(e){
        // ダブルタップを防ぐ
        e.preventDefault();

        TweenMax.set(this.svg.not(this.shadow), {x: 0, y: 0});
        TweenMax.set(this.shadow, {opacity: 1});
      },
      resetCount: function(){
        this.count = 0;
        TweenMax
          .to(this.bar, 0.5, {scale: this.tani * this.count, ease: Expo.easeOut})
      }
    },
    mounted: function(){
      // サウンド関連
      this.sounds = [];
      for (let i = 1; i <= Number(this.length); i++) {
        this.sounds.push(new Howl({src: [`${path}/assets/sounds/${this.sound}/${this.sound}${zeroPadding(i)}.mp3`]}));
      }
      // svg関連
      this.svg = $(this.$el).find('polygon, path');
      this.shadow = $(this.$el).find('.shadow');
      this.barWrap = $(this.$el).find('.barWrap');
      this.bar = $(this.$el).find('.bar');
      this.W = this.barWrap.get(0).getBBox();
      this.w = this.bar.get(0).getBBox();
      this.tani = this.W.width / 100;
      console.log(this.tani);
      TweenMax.set(this.bar, {scale: this.tani * 0});
    },
    template: `
      <div class="gayaBtn" :class="sound">
        <button @touchstart="onDown($event)" @touchend="onUp($event)">
          <slot></slot>
        </button>
      </div>`
  });

  // トップの処理
  if (document.getElementById('top') !== null) {
    const vm = new Vue({
      el: '#top',
      data: {
        seFlg: false
      },
      mounted: function(){
        if (ua.isAndroid()) {
          this.seFlg = false;
        } else {
          this.seFlg = true;
        }
      }
    });
    // ボタンの処理
    const startBtn = new Btn({
      $elm: $('#startBtn'),
      func: null,
      disableDoubleTap: false
    });

    const startBtnOn = new Btn({
      $elm: $('#startBtnOn'),
      func: function(){
        sound.on();
      },
      disableDoubleTap: false
    });
    const startBtnOff = new Btn({
      $elm: $('#startBtnOff'),
      func: function(){
        sound.off();
      },
      disableDoubleTap: false
    });
  }

  // 下層の処理
  if (document.getElementById('app') !== null) {
    path = '..';
    const vm = new Vue({
      el: '#app',
      methods: {
        reset: function(){
          this.$refs.button1.resetCount();
          this.$refs.button2.resetCount();
          this.$refs.button3.resetCount();
          this.$refs.button4.resetCount();
          this.$refs.button5.resetCount();
          this.$refs.button6.resetCount();
        }
      }
    });
    disableDoubleTap('gayaButtons');
    // リセットボタン演出
    const resetBtn = new Btn({
      $elm: $('.gayaReset'),
      func: function() {
        vm.reset();
        tap.play();
      },
      disableDoubleTap: true
    });
  }

  // 戻るボタン
  const backBtn = new Btn({
    $elm: $('#backBtn'),
    func: function(){
      tap.play();
    },
    disableDoubleTap: true
  });

  // Howler
  const tap = new Howl({
    src: [`${path}/assets/sounds/tap.mp3`]
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

  $('.jsSeLink').on('click', function(e){
    e.preventDefault();
    delayLink($(this));
  });

  $('.jsSeBtn').on('click', function(){
    tap.play();
  });

  $('.jsSeLogo').on('touchstart', function(){
    tap.play();
  });

  function getRandomArray(array) {
    const rand = Math.floor(Math.random() * array.length);
    return array[rand];
  }

  // サウンド操作
  const sound = new Sound();
});
