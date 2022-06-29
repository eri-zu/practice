//polyfill
require("babel-polyfill");

//Libs
import Lib from './libs/libs.es6';
const libs = new Lib();


import ViewController from './View/ViewController.es6';
const view = new ViewController(window,document);

// import ClickEvent from './UI/event.es6';
// const hamburgerBtnClicked = new ClickEvent('.c-header--menu');
// hamburgerBtnClicked.toggleClass('active','header',()=>{
//   $('.c-header--contents').toggleClass('active');
//   if (!$('.c-header--menu').hasClass('active')) {
//     $('.c-header--menu').removeClass('hover');
//   }
// });

//top sp infobutton
// const info_BtnClicked = new ClickEvent('.info_button');
// info_BtnClicked.addClass('active','.infomation-modal',()=>{
// });

// const info_modalCloseBtnClicked = new ClickEvent('.infomation-modal--close');
// info_modalCloseBtnClicked.removeClass('active','.infomation-modal',()=>{
// });

// コメントアウト fujii

//Watch
import SearchModules from './Model/ItemSearch.es6';

if ($('.watch').length) {
  $.getJSON('../assets/watch_list.json',data=>{
    const searchModules = new SearchModules(data);
  })
}









//TOP 1+2カラムの要素
const fix_specialColumm = ()=>{
  if (view.is_media('tab') && $('.special').length) {
    const $first_columm_img = $('.special--contents--first img');
    const $second_columm_items = $('.special--contents--second .special--contents--item');
    let second_height = 0;
    $second_columm_items.each((i,e)=>{
      second_height += $(e).outerHeight(true);
      if (i == $second_columm_items.length -1) {
        second_height -= $(e).find('p').outerHeight(true);
      }
    });
    console.log(second_height);
    $first_columm_img.height(second_height);
  }
}
$(window).bind('load resize',fix_specialColumm);
