// import {Howl, Howler} from 'howler';
import formatNumber from './modules/util/formatNumber';
// import { throwStatement } from 'babel-types';
import disableDoubleTap from './modules/util/disableDoubleTap';
import delayAnime from './modules/util/delayAnime';
import Btn from './modules/Btn';
import Sound from './modules/Sound';

$(() => {
  let path = '.';

  // 入力画面の処理
  const vm = new Vue({
    el: '#app',
    data: {
      totalAmount: '',
      donation: '',
      totalPeople: '',
      smallAmountPeople: '',
      rate: 0.5,
      round: true,
      inputShow: true,
      confirmShow: false,
      collectShow: false,
      normalCollectCount: 0,
      smallCollectCount: 0
    },
    methods: {
      enter: function(){
        return true;
      },
      collectNormal: function(){
        if(this.normalCollectCount >= this.normalAmountPeople) {
          console.log('もう支払えない')
          return;
        }
        collect.play();
        return this.normalCollectCount++;
      },
      collectSmall: function(){
        if(this.smallCollectCount >= this.smallAmountPeople) {
          console.log('もう支払えない')
          return;
        }
        collect.play();
        return this.smallCollectCount++;
      },
      submitInput: function(){
        if (Number(this.totalAmount) < 1) {
          alert('合計金額が正しく入力されていません');
          return;
        }
        if (Number(this.donation) >= Number(this.totalAmount)) {
          alert('カンパが合計金額より多くなっています');
          return;
        }
        if (Number(this.totalPeople) < 1) {
          alert('合計人数が正しく入力されていません');
          return;
        }
        if (Number(this.smallAmountPeople) < 0) {
          alert('少額の人が正しく入力されていません');
          return;
        }
        if (this.smallAmountPeople >= this.totalPeople) {
          alert('少額の人は合計人数より少なくしてください');
          return;
        }
        if (this.donation === '') {
          this.donation = 0;
        }
        if (this.smallAmountPeople === '') {
          this.smallAmountPeople = 0;
          this.rate = 0.9;
        }
        submit.play();
        this.inputShow = false;
        this.confirmShow = true;
        $('html, body').scrollTop(0);
      },
      backInput: function(){
        this.inputShow = true;
        this.confirmShow = false;
        $('html, body').scrollTop(0);
      },
      submitConfirm: function(){
        confirm.play();
        this.confirmShow = false;
        this.collectShow = true;
        $('html, body').scrollTop(0);
      },
      backConfirm: function(){
        this.confirmShow = true;
        this.collectShow = false;
        this.normalCollectCount = 0;
        this.smallCollectCount = 0;
        $('html, body').scrollTop(0);
      }
    },
    computed: {
      amount: function() {
        return this.totalAmount - this.donation;
      },
      normalAmountPeople: function(){
        return this.totalPeople - this.smallAmountPeople;
      },
      mirrorRate: function(){
        return 1 - this.rate;
      },
      normalAmount: function(){
        return Math.ceil(this.amount / (this.normalAmountPeople + this.smallAmountPeople * this.mirrorRate) / this.ceilNumber) * this.ceilNumber;
      },
      smallAmount: function(){
        // 少額の人が0人だったら0
        if (this.smallAmountPeople === 0) {
          return 0;
        }
        return Math.ceil(this.normalAmount * this.mirrorRate / this.ceilNumber) * this.ceilNumber;
      },
      ceilNumber: function(){
        let ret = 1;
        if (this.round === true) {
          ret = 100;
        } else {
          ret = 1;
        }
        return ret;
      },
      collectTotal: function(){
        return this.normalAmount * this.normalCollectCount + this.smallAmount * this.smallCollectCount;
      },
      normalCollectPeople: function(){
        return this.normalAmountPeople - this.normalCollectCount;
      },
      smallCollectPeople: function(){
        return this.smallAmountPeople - this.smallCollectCount;
      },
      sliderValueWidth: function(){
        return (100 - Math.floor(this.rate * 100)) + '%';
      },
      sliderDisabled: function(){
        let flg = false;
        if (this.smallAmountPeople === 0) {
          flg = true;
        }
        return flg;
      }
    },
    filters: {
      formatNumber: formatNumber
    },
    watch: {
      totalAmount: function(_newValue){
        const newValue = String(_newValue)
        if (newValue.length > 6) {
          this.totalAmount = Number(newValue.slice(0,6));
        }
      }
    }
  });

  window.vm = vm;
  // disableDoubleTap('collectButtons');

  // スライダー操作時に画面が動かないようにする
  $('#slider').on('touchstart', function(){
    $('#wrapper').addClass('jsTouced');
  });

  $('#slider').on('touchend', function(){
    $('#wrapper').removeClass('jsTouced');
  });

  // 割り勘ビームに戻るボタン
  const backBtn = new Btn({
    $elm: $('#backBtn'),
    func: function() {
      tap.play();
    },
    disableDoubleTap: true
  });

  // 決定ボタン
  const submitBtn = new Btn({
    $elm: $('#submitBtn'),
    func: function() {
      tap.play();
      setTimeout(function(){
        vm.submitInput();
      }, 200);
    },
    disableDoubleTap: true
  });

  // 前に戻るボタン（金額調整画面）
  const backInputBtn = new Btn({
    $elm: $('#backInputBtn'),
    func: function() {
      tap.play();
      setTimeout(function(){
        vm.backInput();
      }, 200);
    },
    disableDoubleTap: true
  });

  // 集金するボタン
  const toCollectBtn = new Btn({
    $elm: $('#toCollectBtn'),
    func: function() {
      tap.play();
      setTimeout(function(){
        vm.submitConfirm();
      }, 200);
    },
    disableDoubleTap: true
  });

  // 前に戻るボタン（集金画面）
  const backConfirmBtn = new Btn({
    $elm: $('#backConfirmBtn'),
    func: function() {
      tap.play();
      setTimeout(function(){
        vm.backConfirm();
      }, 200);
    },
    disableDoubleTap: true
  });

  // 通常払いの人集金ボタン
  const collectNormalBtn = new Btn({
    $elm: $('#collectNormalBtn'),
    func: function () {
      vm.collectNormal();
      collectNormalBtn.$target.addClass('jsOnDown');
    },
    disableDoubleTap: true
  });
  collectNormalBtn.setOnUpFunc(function(){
    collectNormalBtn.$target.removeClass('jsOnDown');
  });

  // 少額払いの人集金ボタン
  const collectSmallBtn = new Btn({
    $elm: $('#collectSmallBtn'),
    func: function() {
      vm.collectSmall();
      collectSmallBtn.$target.addClass('jsOnDown');
    },
    disableDoubleTap: true
  });
  collectSmallBtn.setOnUpFunc(function(){
    collectSmallBtn.$target.removeClass('jsOnDown');
  });


  // Howler
  const tap = new Howl({
    src: [`${path}/assets/sounds/tap.mp3`]
  });

  // 決定
  const submit = new Howl({
    src: [`${path}/assets/sounds/smart_1.mp3`]
  });

  // 集金する
  const confirm = new Howl({
    src: [`${path}/assets/sounds/smart_2.mp3`]
  });

  // 人数タップ
  const collect = new Howl({
    src: [`${path}/assets/sounds/smart_3.mp3`]
  });

  // Howler.volume(0.5);

  delayAnime($('#wrapper'), 150);

  $('.jsSeBtn').on('click', function(){
    tap.play();
  });

  $('.jsSeLogo').on('touchstart', function(){
    tap.play();
  });

  // チュートリアルクリックで非表示
  $('#tutorial').on('click', function(){
    $(this).addClass('jsHide');
  });

  const sound = new Sound();
});
