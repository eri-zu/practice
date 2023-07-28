import moment from 'moment';
// import {Howl, Howler} from 'howler';
import zeroPadding from './modules/util/zeroPadding';
import delayAnime from './modules/util/delayAnime';
import Btn from './modules/Btn';
import Sound from './modules/Sound';

$(() => {
  moment().format();
  let path = '.';

  const vm = new Vue({
    el: '#app',
    data: {
      year: '',
      month: '',
      dates: null,
      selectedDate: null,
      selectedFullDate: null,
      moment: moment,
      hour: '19',
      minutes: '00',
      currentYear: '',
      currentMonth: '',
      restDays: 3 //休肝日
    },
    mounted: function(){
      const DATE = new Date();
      const year = DATE.getFullYear();
      const month = DATE.getMonth() + 1;
      this.year = year;
      this.month = month;
      this.currentYear = year;
      this.currentMonth = month;

      // デフォルトで日付が選択された状態にする
      // シェア用の選択日を保存
      const restDays = moment.duration(this.restDays + 1, 'days');
      const recent = moment().add(restDays);
      const recentYear = recent.year();
      const recentMonth = recent.month() + 1;
      this.selectedDate = `${recentYear}年${recentMonth}月${recent.date()}日`;
      // 判定用の選択日を保存
      this.selectedFullDate = `${recentYear}-${recentMonth}-${recent.date()}`;
      console.log(this.selectedFullDate);

      // 休肝日空けで選択可能な日が翌月になる場合は最初から次の月を表示する
      const currentYM = moment(`${year}-${zeroPadding(month)}`);
      const recentYM = moment(`${recentYear}-${zeroPadding(recentMonth)}`);
      if (recentYM.isAfter(currentYM) === true) {
        this.dates = this.getCalDates(recentYear, recentMonth);
        this.year = recentYear;
        this.month = recentMonth;
      } else {
        this.dates = this.getCalDates(year, month);
      }
    },
    methods: {
      getDates: function(year, month) {
        let LAST_DATE = new Date(year, month, 0).getDate();
        let dates = [];
        for (let i = 1; i <= LAST_DATE; i++) {
          dates.push(i);
        }
        return dates;
      },
      getFirstDayOfWeek: function(year, month){
        const orgDayOfWeek = new Date(`${year}-${zeroPadding(month)}-01`).getDay();
        // console.log('orgDayOfWeek');
        // console.log(orgDayOfWeek);
        // 月曜始まりにする
        function convertDayOfWeek(num){
          let ret = num - 1;
          if (ret < 0) {
            ret = 6;
          }
          // console.log(ret);
          return ret;
        }
        return convertDayOfWeek(orgDayOfWeek);
      },
      getCalDates: function(year, month){
        let dates = this.getDates(year, month);
        // console.log(dates)
        const dayOfWeek = this.getFirstDayOfWeek(year, month);
        // console.log(dayOfWeek);
        for (let i = 0; i < dayOfWeek; i++) {
          dates.unshift('');
        }
        return dates;
      },
      getNext: function(){
        let next = this.month + 1;
        if(next > 12) {
          this.month = 1;
          this.year++;
        } else {
          this.month++;
        }
        this.date = null;
        this.dates = this.getCalDates(this.year, this.month);
      },
      getPrev: function(){
        let next = this.month - 1;
        if(next < 1) {
          this.month = 12;
          this.year--;
        } else {
          this.month--;
        }
        this.date = null;
        this.dates = this.getCalDates(this.year, this.month);
      },
      selectDate: function(e){
        const date = e.target.innerText;
        if (date === '') {
          return false;
        }
        tap.play();
        // シェア用の選択日を保存
        this.selectedDate = `${this.year}年${this.month}月${date}日`;
        // 判定用の選択日を保存
        this.selectedFullDate = `${this.year}-${this.month}-${date}`;
      },
      valid: function(){
        let flg = true;
        if (this.selected === null) {
          alert('日付を選択してください');
          flg = false;
        } else if (this.hour === null || this.minutes === null) {
          alert('時間を選択してください')
          flg = false;
        }
        return flg;
      },
      isPastDate: function(date){
        if (date === '') {
          return true;
        }
        // 休肝日
        const restDays = this.restDays;
        return moment().add(restDays, 'day').isAfter(`${this.year}-${zeroPadding(this.month)}-${zeroPadding(date)}`);
      }
    },
    computed: {
      line: function(){
        const message = `次は${this.selectedDate} ${this.hour}:${this.minutes}から飲もう！\n\n【JIM BEAM TAP!｜世界No.1バーボン「ジムビーム」｜サントリー】\n飲み会で、ついタップして何度も見たくなるジムビームハイボール専用サイト。\n飲みの場を盛り上げる様々なコンテンツを毎月更新予定！\nhttps://jimbeam.fun/about/`
        const href = 'http://line.me/R/msg/text/?' + encodeURIComponent(message);
        return href;
      }
    }
  });

  // LINEで送るボタン
  const lineBtn = new Btn({
    $elm: $('#lineBtn'),
    func: function() {
      tap.play();
      const flg = vm.valid();

      setTimeout(function(){
        lineBtn.onUp();
      },200);
    },
    disableDoubleTap: false
  });

  // 戻るボタン
  const backBtn = new Btn({
    $elm: $('#backBtn'),
    func: function() {
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

  $('.jsSeBtn').on('click', function(){
    tap.play();
  });

  $('.jsSeLogo').on('touchstart', function(){
    tap.play();
  });

  const sound = new Sound();
});
