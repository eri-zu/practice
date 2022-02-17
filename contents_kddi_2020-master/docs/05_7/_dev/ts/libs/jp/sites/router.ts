/// <reference path="../../googleanalytics/ga.d.ts" />
/// <reference path="../contents/TrTween.d.ts" />
/// <reference path="./base.ts" />

/*
*ページ遷移を管理　ページの非同期ロードや
*HistoryAPIなどを扱う
*this.class Router
*/
namespace jp.sites
{
	interface DefMeta{
		title?:string; keywords?:string; description?:string; ogurl?:string;
	}
	interface MetaObjs{
		mKeyword?:HTMLElement; mDescript?:HTMLElement; ogTitle?:HTMLElement; ogURL?:HTMLElement;
	}
	export class Router extends AbstractContentBase
	{
		private _pageID:number = 0;
		private _cateUrl:string;
		private _hash:Array<string>;
		private _owner:Main;
		//
		private _pageData:Array<string>;
		private _defMeta:DefMeta = {};
		private _metaObjs:MetaObjs = {};
		constructor(main)
		{
			super();
			this._owner = main;
		}
		init():void{
			this._hash = [
				'/',
				'/about/',
				'/works/',
				'/member/'
			];
			this._pageData = [
				'',
				'/_page/about.html',
				'/_page/works.html',
				'/_page/member.html'
			];
			this._defMeta = {
				title: document.title,
				keywords: document.querySelector('meta[name="keywords"]').getAttribute('content'),
				description: document.querySelector('meta[name="description"]').getAttribute('content'),
				ogurl: document.querySelector('meta[property="og:url"]').getAttribute('content')
			}
			this._metaObjs = {
				mKeyword : <HTMLElement>document.querySelector('meta[name="keywords"]'),
				mDescript: <HTMLElement>document.querySelector('meta[name="description"]'),
				ogTitle : <HTMLElement>document.querySelector('meta[property="og:title"]'),
				ogURL : <HTMLElement>document.querySelector('meta[property="og:url"]')
			}
			//
			window.addEventListener('pushstate',(e)=>{
			// window.addEventListener('popstate',(e)=>{
				this._onPopstate(e);
			}, false);
			//
			this._checkURLRequest();
		}

		public changePage(id:number):void{
			this._pageID = id;
			this.dispatchEvent(new Events('loadStart'));
			this._loadFile(this._pageData[this._pageID]);
		}

		public changeWorksPage(url:string):void{
			this._cateUrl = url;
			this.dispatchEvent(new Events('worksLoadStart'));
			this._loadFile(this._cateUrl,true,'js-pageDetail');
		}

    private _gaSend(){
      ga('create', 'UA-67064640-1', 'auto');
		  ga('send', 'pageview');
      // console.log(ga);
    }

		private _loadFile(file:string,push:boolean = true,id:string = 'js-page'){
			if(file != ''){
				var owner:Router = this;
				var req:XMLHttpRequest = new XMLHttpRequest();
				req.onreadystatechange = function(){
					if (this.readyState == 4 && this.status == 200){
						var parser:DOMParser = new DOMParser();
						var obj:Document = parser.parseFromString(this.responseText,'text/html');
						if (obj === null){
							obj = document.implementation.createHTMLDocument('');
							obj.body.innerHTML = this.responseText;
						}
						owner._setState(obj,push,id);
					}else if(this.readyState == 4 && this.status == 404){
						owner._setState(null,push,id);
					}
				}
        req.overrideMimeType("text/html; charset=utf-8");
				req.open('GET',file+'?nocache=' + Date.now());
				req.send();
			}else{
				this._setState(null,push,id);
			}
		}

		private _setState(documentObject:Document = null,push:boolean = true,id:string = 'js-page'):void{
			var currentPage:HTMLElement = <HTMLElement>document.getElementById(id);
			if(documentObject === null){
				var title:string = <string>this._defMeta.title;
				var keywords:string = <string>this._defMeta.keywords;
				var description:string = <string>this._defMeta.description;
				var ogurl:string = <string>this._defMeta.ogurl;
				currentPage.innerHTML = '';
			}else{
				var title:string = <string>documentObject.title;
				var keywords:string = <string>documentObject.querySelector('meta[name="keywords"]').getAttribute('content');
				var description:string = <string>documentObject.querySelector('meta[name="description"]').getAttribute('content');
				var ogurl:string = <string>documentObject.querySelector('meta[property="og:url"]').getAttribute('content');
				//
				var page:HTMLElement = <HTMLElement>documentObject.querySelector('.page');
				currentPage.innerHTML = '';
				currentPage.appendChild(page);
			}
			document.title = title;
			this._metaObjs.mKeyword.setAttribute('content',keywords);
			this._metaObjs.mDescript.setAttribute('content',description);
			this._metaObjs.ogTitle.setAttribute('content',title);
			this._metaObjs.ogURL.setAttribute('content',ogurl);
			var hash:string = this._hash[this._pageID];
			//
			if(id == 'js-pageDetail' && page){
				hash = this._hash[this._pageID] + page.getAttribute('data-url') + '/';
			}
			if(history.pushState && push){
				history.pushState(
					{
						pageID: this._pageID,
						cateUrl: this._cateUrl,
						title: title,
						hash: hash
					},
					title,
					hash
				)
			}
			//
			if(id == 'js-page'){
				this.dispatchEvent(new Events('loadComplete'));
			}else if(id == 'js-pageDetail'){
				this.dispatchEvent(new Events('worksLoadComplete'));
			}
      //ga追加
      this._gaSend();
		}

		private _onPopstate(e):void{
			if(e.state){
        var title:string;
        var state = e.state;
        for (var k in state) {
          var v = state[k];
          if (k === 'pageID') {
            this._pageID = v;
          } else if (k === 'cateUrl') {
            this._cateUrl = v;
          } else if (k === 'title') {
            this._defMeta.title = title = v;
          } else if (k === 'hash') {
            this._hash[this._pageID] = v;
          }
        }
      }
			this.dispatchEvent(new Events('loadStart'));
			this._loadFile(this._pageData[this._pageID],false);
    }
		private _checkURLRequest():void{
			if(location.href.indexOf('/about/') != -1){
				this._pageID = 1;
			}else if(location.href.indexOf('/works/') != -1){
				this._pageID = 2;
			}else if(location.href.indexOf('/member/') != -1){
				this._pageID = 3;
			}else{
				this._pageID = 0;
			}

			this.dispatchEvent(new Events('loadStart'));
			this._loadFile(this._pageData[this._pageID]);
			//
			var host:string = location.hostname;
			var port:string = location.port;
			var url:string = location.href;
			var hash:string = location.hash;
			var jsHost:any = (('https:' == document.location.protocol) ? 'https://' : 'http://');
			var urlName:string = url.replace(jsHost + host,'');
			if(port){
				urlName = urlName.replace(':' + port,'');
			}
			if(hash){
				urlName = urlName.replace(hash,'');
			}
			urlName = urlName.replace('/works/','');
			urlName = urlName.replace('/','');
			if(this._cateUrl != null && this._pageID == 2){
				// console.log('_loadWorksFile');
				this.dispatchEvent(new Events('worksLoadStart'));
				this._loadFile(this._cateUrl,true,'js-pageDetail');
			}else if(this._pageID == 2 && urlName != '') {
				// console.log('_loadWorksFile');
				this.dispatchEvent(new Events('worksLoadStart'));
				this._loadFile('/_page/detail/' + urlName + '.html',true,'js-pageDetail');
			}
		}

		public get pageID():number{
			return this._pageID;
		}
	}
}
