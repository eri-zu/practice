// import {Howl, Howler} from 'howler';
import get from './modules/util/get.js';
import getParam from './modules/util/getParam.js';
import Themes from './modules/talkhigh/Themes';
import { returnStatement } from 'babel-types';
import delayAnime from './modules/util/delayAnime';
import Btn from './modules/Btn';
import Sound from './modules/Sound';

$(() => {
  let path = '.';

  if (document.getElementById('app') !== null) {
    path = '..';
    // 下層の処理
    const vm = new Vue({
      el: '#app',
      data: {
        themes: [],
        id: 0,
        enableNext: true,
        init: false
      },
      computed: {
        current: function(){
          return this.id + 1
        }
      },
      methods: {
        getNext: function(){
          if (this.init === false) {
            return;
          }
          if (this.current >= 10) {
            return;
          }
          const nextId = ++this.id
          seNext.play();
          if (this.current >= 10) {
            this.enableNext = false;
          }
          return nextId;
        },
        afterEnter: function(){
          if (this.init === true) {
            return;
          }
          this.init = true;
        }
      },
      mounted: function(){
        const self = this;
        let themeString = getParam('theme');
        if (themeString === false) {
          themeString = 'random';
        }
        get('../assets/json/theme.json', {}, function(data){
          const themes = new Themes(data);
          let themeItems = [];
          if (themeString === 'random') {
            themeItems = themes.getRandomItems();
          } else {
            themeItems = themes.getThemeItems(themeString);
          }
          self.themes = themeItems;
        });

        // 次へボタンの色変更
        $('#nextBtn').addClass(themeString);
      }
    });

    // カテゴリに戻るボタン
    const categoryBtn = new Btn({
      $elm: $('#categoryBtn'),
      func: null,
      disableDoubleTap: false
    });

    // 次へボタン
    const nextBtn = new Btn({
      $elm: $('#nextBtn'),
      func: function() {
        vm.getNext();
      },
      disableDoubleTap: true
    });

  } else {
    // TOPの処理
    $('.jsSeNextLink').each(function(){
      const btn = new Btn({
        $elm: $(this),
        func: null,
        disableDoubleTap: false
      });
    });
  }

  // 戻るボタン
  const backBtn = new Btn({
    $elm: $('#backBtn'),
    func : function (){
      tap.play();
    },
    disableDoubleTap: true
  });

  // Howler
  const tap = new Howl({
    src: [`${path}/assets/sounds/tap.mp3`]
  });

  const seNext = new Howl({
    src: [`${path}/assets/sounds/talkhigh_1.mp3`]
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

  function delayStart($elm) {
    seNext.play();
    const url = $elm.attr('href');
    setTimeout(function(){
      location = url;
    },600);
  }

  $('.jsSeLink').on('click', function(e){
    e.preventDefault();
    delayLink($(this));
  });

  $('.jsSeNextLink').on('click', function(e){
    e.preventDefault();
    delayStart($(this));
  });

  $('.jsSeBtn').on('click', function(){
    tap.play();
  });

  $('.jsSeLogo').on('touchstart', function(){
    tap.play();
  });

  const sound = new Sound();
});
