import WatchController from '../UI/watch/watchController.es6';

export default class ItemSearch extends WatchController{
  constructor(itemData){
    super();
    this.data = itemData;
    this.$queryItem = $('.item_query');
    this.$freeWords = $('.watch-menu--modal-search--input--inner input[name=freeword]');
    this.$queryItem.click((e)=>{
      const $this = $(e.currentTarget);
      const query = $this.data('query');
      const cat = $this.data('category');
      this.urlChange(cat,query);
    });
    $('.reset_query').click((e)=>{
      const $this = $(e.currentTarget);
      this.urlChange($this.data('category'),'all');
    });
    this.$freeWords.complete((e)=>{
      console.log(e);
    })
    this.$freeWords.click((e)=>{
      // console.log(e);
      const $this = $(e.currentTarget);

      // $this.off('keypress.inputChange');
      $this.complete((e)=>{
        console.log(e);
      })
      return false;
    });

    this.urlChange();
  }


  urlChange(cat=null,query=null){
    const cats = ['collection','price','search','tag','order','category'];
    const existCat = {};
    for (const c of cats) {

      if(this.getParam(c)) existCat[c] = this.getParam(c);
    }
    if (cat) {
      if (query == 'all') {
        if (!(typeof existCat[cat] === "undefined")) {
          delete existCat[cat];
        }
      }else if (existCat[cat] != query) {
        existCat[cat] = query;
      }else{
        delete existCat[cat];
      }
    }


    let prameter = '?';
    let buttonTarget = '';
    for (const key in existCat) {
      prameter += `${key}=${existCat[key]}&`;
      buttonTarget += `.item_query[data-query="${existCat[key]}"][data-category="${key}"],`;
    }

    prameter = prameter=='?' ? '?' : prameter.slice( 0, -1 );
    buttonTarget = buttonTarget.slice(0,-1);
    history.pushState(null,null,prameter);
    const data = this.searchItem(this.getUrlVars());
    super.writeJsonData(data,".watch-collections__inner");
    super.buttonToggleActive(buttonTarget,'.item_query');
  }


  getParam(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  getUrlVars() {
      const vars = [];
      const url = window.location.search;
      const hash  = url.slice(1).split('&');
      const max = hash.length;
      for (var i = 0; i < max; i++) {
          const array = hash[i].split('=');
          vars[array[0]] = array[1];
      }

      return vars;
    }

  item_changeorder(order = '',data){
    data.sort((prev,current)=>{
      if (order =="cheaper") {
        if (prev.price - current.price == 0) return prev.id - current.id;
        return prev.price - current.price;
      }else if (order =="higher") {
        if (current.price - prev.price == 0) return prev.id - current.id;
        return current.price - prev.price;
      }else if(order == 'new'){
        return current.date - prev.date;
      }else if (order == 'larger') {
        if(current.casesize - prev.casesize) return prev.id - current.id;
        return current.casesize - prev.casesize;
      }else if (order == 'smaller') {
        if (prev.casesize - current.casesize ==0) return prev.id - current.id;
        return prev.casesize - current.casesize;
      }else{
        return prev.id - current.id;
      }

    })
    return data;
  }

  searchItem(querys = null){
    if (!querys) return this.data;
    console.log(querys);
    let isOrder = !(typeof querys.order === 'undefined');
    const favodata =  JSON.parse(localStorage.getItem('favoItem'));
    const itemList = this.data.filter((item,i)=>{
      let [isMatch,isMatches]  = [false,[]];
      for (const sKey in querys) {
        if (sKey == 'order') {
          isMatches.push(true);
        }else if (sKey == 'price') {
          isMatches.push(this.isPrice_inrange(querys[sKey],item[sKey]));
        }else if (sKey == 'tag') {
          if(item[sKey].indexOf(querys[sKey])>0){
            isMatches.push(true);
          }else{
            isMatches.push(false);
          }
        }else if(querys[sKey] == 'favo'){
          if (favodata.indexOf(item.id) >= 0) {
            isMatches.push(true);
          }else{
            isMatches.push(false);
          }
        }else if(item[sKey] == querys[sKey]){
          isMatches.push(true);
        }else{
          isMatches.push(false);
        }
      }
      isMatch = isMatches.reduce((prev, current)=>{
        return prev*current;
      })
      return isMatch;
    })

    return isOrder ? this.item_changeorder(querys['order'],itemList) : itemList;
  }

  isPrice_inrange(string,price){
    if (string == 'first') {
      const max = 1000000;
      return max >= price;
    }
    if (string == 'second') {
      const max = 3000000;
      const min = 1000001;
      return min < price && max > price;
    }
    if (string == 'third') {
      const max = 3000000;
      const min = 1000001;
      return min < price && max > price;
    }
    if (string == 'second') {
      const max = 5000000;
      const min = 3000001;
      return min < price && max > price;
    }
    if (string == 'fourth') {
      const max = 10000000;
      const min = 5000001;
      return min < price && max > price;
    }
    if (string == 'fifth') {
      const min = 10000001;
      return price > min;
    }
  }

}
