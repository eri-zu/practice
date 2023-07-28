import ViewController from '../../View/ViewController.es6';
import CollectionSlider from './CollectionSlider.es6'

export default class WatchController extends ViewController{
  constructor(){
    super(window,document);
    this.collectionSlider = new CollectionSlider();
    this.clickEvent();
    $(window).bind('resize',this.watchlist_flex());



  }

  clickEvent(){
    $('.watch').on('click',   function(e) {
      if (!$(e.target).closest('.collection-modal').length) {
        $('.collection-modal').removeClass('active');
        $('.watch-menu--modal').removeClass('active');
        $('.watch-header-modal').removeClass('active');
        $('.watch .c-header--title').removeClass('active');
        $('.watch-order-modal').removeClass('active');
      }
    });
    $('.collection-modal').click((e)=>{
      const $__this = $(e.currentTarget);
      const modalClass = $__this.attr('data-item');
      if(super.is_media(700)) $('.watch-menu--modals--wrapper').toggleClass('active')
      $__this.toggleClass('active');
      $('.watch-menu--modal-'+modalClass).toggleClass('active');
      $('.watch-munubar--item').not($__this).removeClass('active');
      $('.watch-menu--modal').not($('.watch-menu--modal-'+modalClass)).removeClass('active');
    });
    $('.watch .c-header--title').click((e)=>{
      $('.collection-modal').removeClass('active');
      $('.watch-menu--modal').removeClass('active');
      $(e.currentTarget).toggleClass('active');
      $('.watch-header-modal').toggleClass('active');
      return false;
    })

    $('.watch-munubar--item--order').click((e)=>{
      $('.watch-order-modal').addClass('active');
    })
  }

  writeJsonData(item,selector){
    let watchHtml = '';
    for (const watch of item) {
      const isnew = watch.isNew ? '<div class="watch-collections--item--new">NEW</div>':'';
      const html = `<div class="watch-collections--item" data-watchid="${watch.id}">
      <a href="#">
        <div class="watch-collections--item--thumbnail">
          <img data-src="${watch.img}" class="lazyload" src="">
        </div>
        <div class="watch-collections--item--description">
          ${isnew}
          <div class="watch-collections--item--title">${watch.title}</div>
          <button class="watch-collections--item--favo" data-favoid="${watch.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.986 14.216">
              <g id="star" transform="translate(7.494 7.275)">
                <path id="star-2" data-name="star" class="star" d="M3.646,6.944,0,4.306H4.556L5.949,0,7.34,4.306H11.9L8.256,6.944,9.515,11.3,5.949,8.636,2.387,11.3Z" transform="translate(-5.949 -5.649)"></path>
              </g>
            </svg>
            Favorite</button>
          </div>
        </a>
      </div>`;
      watchHtml += html;
    }
    $(selector).html(watchHtml);
    super.clickeventrefresh('.watch-collections--item',(e)=>{
      const watchid = $(e.currentTarget).data('watchid');
      item.some((data)=>{
        if (data.id == watchid) {
          console.log(data);
          return true;
        }

      })
      return false;
    });




    super.clickeventrefresh('.watch-collections--item--favo',(e)=>{
      const $this = $(e.currentTarget);
      const favoID = $this.data('favoid');
      let favoData = JSON.parse(localStorage.getItem('favoItem'));
      if (!favoData) {
        favoData = [];
        favoData.push(favoID);
      }else{
        const i = favoData.indexOf(favoID);
        if (i>= 0) {
          favoData.splice(i,1);
          $this.removeClass("active");
        }else{
          favoData.push(favoID);
          $this.addClass('active');
        }
      }
      localStorage.setItem('favoItem',JSON.stringify(favoData));
      return false;
    })
    this.changeItemNum();
    this.watchlist_flex();
    this.favoButtonToggleActive();

  }

  changeItemNum(){
    const itemnum = $('.watch-collections .watch-collections--item').length;
    $('.watch-munubar--item--itemnum span').text(itemnum);
  }

  watchlist_flex(){
    const watchlist_width = $('.watch-collections__inner').width();
    const watch_item = $('.watch-collections .watch-collections--item').width();
    const oneRow = watchlist_width / watch_item;
    const watch_num = $('.watch-collections .watch-collections--item').length;
    if (watch_num % Math.floor(oneRow)) {
      const addItemNum = Math.floor(oneRow) - watch_num % Math.floor(oneRow);
      console.log(addItemNum,'addItemNum' ,Math.floor(oneRow) , 'oneRow ');
      let addhtml = '';
      for (var i = 0; i < addItemNum; i++) {
        addhtml += '<div class="flex_fewContens watch-collections--item"></div>';
      }
      $('.flex_fewContens').remove();
      $('.watch-collections__inner').append(addhtml);
    }else{
      $('.flex_fewContens').remove();
    }
  }

  favoButtonToggleActive(){
    let favoData = JSON.parse(localStorage.getItem('favoItem'));
    if (!favoData) return false;
    for (const id of favoData) {
      $(`.watch-collections--item[data-watchid=${id}] button`).addClass('active');
    }
  }
}
