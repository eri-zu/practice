/*/// <reference path="../../../threejs/three.d.ts" />*/
/// <reference path="../../contents/TrTween.d.ts" />
/// <reference path="../base.ts" />
/// <reference path="../../../googlemaps/google.maps.d.ts" />
/*
*contactのクラス
*@class Contact
*/
namespace jp.sites.etc
{
	export class Contact
	{
		private _isMap = false;
    private _form:Form;
    private _map:google.maps.Map;
    private _latlng:google.maps.LatLng;
		constructor()
		{
      this._form = new Form();
		}
		init():void{
		}

		start():void{
      if(! this._isMap){
        this._isMap = true;
        this._form.init();
  			this._mapInit();
      }
      this._setMap();
		}
    private _setMap():void{
      google.maps.event.trigger(this._map, 'resize')
    }

		private _mapInit():void
		{
			this._latlng = new google.maps.LatLng(35.672654, 139.732150);
			var opts:any = {
			zoom: 17,
			center: this._latlng,
			scrollwheel: false,
			draggable: false,
			zoomControl: false,
		  mapTypeControl: false,
		  scaleControl: false,
		  streetViewControl: false,
		  rotateControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			this._map = new google.maps.Map(document.getElementById('gmap'), opts);

			/* 地図style */
			var styleOptions:any = [{
			'stylers': [
				{
          'hue': '#1d4294'
        }, {
					'gamma': 0.8
				}, {
					'saturation': -50
				}, {
					'lightness': 20
				}]
			}]

			var monoType:google.maps.StyledMapType = new google.maps.StyledMapType(styleOptions);
			this._map.mapTypes.set('mono', monoType);
			this._map.setMapTypeId('mono');

			// var image:string = '/img/common/icn_map.png';
			// var Marker:google.maps.Marker = new google.maps.Marker({
			// 	position: this._latlng,
			// 	map: this._map,
			// 	icon: image
			// });
      var owner = this;
      var contactBlock = <HTMLElement>document.getElementById('js-contactBlock');
      google.maps.event.addDomListener(window, 'resize', function(e){
        if(contactBlock.style.display === 'block'){
          owner._map.panTo(owner._latlng);
        }
      });
		}
	}

  class Form
  {
    private _inputs:Input[] = [];
    private _inputs_len:number = 3;
    private _formCompDom:HTMLElement;
    private _formCompBtnDom:HTMLElement;
    private _ref:string;
    private _os:string;
    private _ua:string;
    constructor()
    {
      this._ref = (<any>window).HTTP_REFERER;
      this._os = this._getOS();
      this._ua = this._getUA();
    }
    private _getOS()
    {
      var ua = navigator.userAgent;
      if (ua.match(/Win(dows )?NT 10\.0/))
        return 'Windows 10';
      else if (ua.match(/Win(dows )?NT 6\.0/))
        return 'Windows Vista';
      else if (ua.match(/iPhone|iPad/))
        return 'iOS';
      else if (ua.match(/Mac|PPC/))
        return 'Mac OS';
      else if (ua.match(/Android ([\.\d]+)/))
        return 'Android';
      else if (ua.match(/Linux/))
        return 'Linux';
      return '';
    }
    private _getUA()
    {
      var ua = navigator.userAgent.toLowerCase();
      var ver = navigator.appVersion.toLowerCase();
 
      if (ver.indexOf('msie 9.') > -1)
        return 'IE9';
      else if (ver.indexOf('msie 10.') > -1)
        return 'IE10';
      else if (ua.indexOf('trident/7') > -1)
        return 'IE11';
      else if (ua.indexOf('edge') > -1)
        return 'mMS edge';
      else if (ua.indexOf('chrome') > -1 && ua.indexOf('edge') == -1)
        return 'Chrome';
      else if (ua.indexOf('firefox') > -1)
        return 'Firefox';
      else if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1)
        return 'Safari';
      else if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1)
        return 'Safari';
      return '';
    }
    public init()
    {
      var name:Input = new Input();
      name.init(
        'Name',
        document.getElementById('inName'),
        document.getElementById('inNameErr'),
        document.getElementById('inNameErrLine'),
        document.getElementById('inNameLabel'),
        'text'
      );
      var email:Input = new Input();
      email.init(
        'Email',
        document.getElementById('inEmail'),
        document.getElementById('inEmailErr'),
        document.getElementById('inEmailErrLine'),
        document.getElementById('inEmailLabel'),
        'email'
      );
      var message:Input = new Input();
      message.init(
        'Message',
        document.getElementById('inMessage'),
        document.getElementById('inMessageErr'),
        document.getElementById('inMessageErrLine'),
        document.getElementById('inMessageLabel'),
        'textarea'
      );
      this._inputs[0] = name;
      this._inputs[1] = email;
      this._inputs[2] = message;

      this._formCompDom = document.getElementById('contactFormComp');
      this._formCompBtnDom = document.getElementById('contactFormBtnComp');
      document.getElementById('subButton').addEventListener('click', (e)=>
      {
        if(this._formValidation())
          if(this._runMailphp()) this._fadeIn_complite();
          else this._fadeOut_complite();
        else this._fadeOut_complite();
      }, false);
      this._formCompBtnDom.addEventListener('click', (e)=>
      {
        this._fadeOut_complite();
      }, false);
    }

    private _formValidation()
    {
      var i:number = 0,
        res:boolean = true;
      for (; i < this._inputs_len; i++)
        if(!this._inputs[i].validate()) res = false;
      return res;
    }

    private _runMailphp()
    {
      var i:number = 0,
        data:string[] = [],
        res:boolean = true;

      data[0] = this._inputs[0].value;
      data[1] = this._inputs[1].value;
      data[2] = this._inputs[2].value;
      data[3] = 'Access source：'+this._ref;
      data[4] = 'Operating system：'+this._os;
      data[5] = 'User agent：'+this._ua;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/mail.php', true);
      xhr.onload = function (e)
      {
        if (xhr.readyState == 4)
          if (xhr.status == 200) res = true;
          else res = false;
      };
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(this._runMailphp_dataEncode(data));
      return res;
    }
    private _runMailphp_dataEncode(data)
    {
      var params = [];
      for(var name in data)
      {
        var value = data[name];
        var param = encodeURIComponent(name)+'='+encodeURIComponent(value);
        params.push(param);
      }
      return params.join('&').replace(/%20/g, '+');
    }
    private _fadeIn_complite()
    {
      this._formCompDom.style.display = 'block';
      for (var i:number = 0; i < this._inputs_len; i++)
        this._inputs[i].reset();
    }
    private _fadeOut_complite()
    {
      this._formCompDom.style.display = 'none';
    }
  }

  class Input
  {
    private _active:boolean = false;
    private _name:string;
    private _inputDom:HTMLElement;
    private _errDom:HTMLElement;
    private _errLineDom:HTMLElement;
    private _labelDom:HTMLElement;
    private _type:string;
    public get value():string {return this._name+'：'+(<any>this._inputDom).value;}
    constructor()
    {
    }
    public init(
      name:string,
      inputDom:HTMLElement,
      errDom:HTMLElement,
      errLineDom:HTMLElement,
      labelDom:HTMLElement,
      type:string
    )
    {
      this._name = name;
      this._inputDom = inputDom;
      this._errDom = errDom;
      this._errLineDom = errLineDom;
      this._labelDom = labelDom;
      this._type = type;
      this._labelDom.addEventListener('click',(e)=>
      {
        if (!this._active)
        {
          this._active = true;
          this._labelDom.classList.add('on');
          this._errDom.style.opacity = '0';
          this._errLineDom.classList.remove('err');
          this._inputDom.focus();
        }
      }, false);
      this._labelDom.onmouseover = ()=>
      {
        this._errLineDom.classList.add('on');
      };
      this._labelDom.onmouseout = ()=>
      {
        if (this._active) return;
        this._errLineDom.classList.remove('on');
      };

      this._inputDom.onfocus = ()=>
      {
        this._errLineDom.classList.add('on');
        if (this._active) return;
        this._active = true;
        this._labelDom.classList.add('on');
        this._errDom.style.opacity = '0';
        this._errLineDom.classList.remove('err');
        this._inputDom.focus();
      };

      this._inputDom.onblur = ()=>
      {
        this._errLineDom.classList.remove('on');
        this._active = false;
        this.validate()
        if ((<any>this._inputDom).value == '')
          this._labelDom.classList.remove('on');
      };
    }
    public validate()
    {
      if (this._type == 'text')
        return this._validate_text();
      else if(this._type == 'email')
        return this._validate_email();
      else if(this._type == 'textarea')
        return this._validate_textarea();
      return false;
    }
    private _validate_text()
    {
      var res:boolean = true,
        val:string = (<any>this._inputDom).value;
      if (val == '')
      {
        res = false;
        this._fadeIn_err();
      }
      else this._faedOut_err();
      return res;
    }
    private _validate_email()
    {
      var res:boolean = true,
        val:string = (<any>this._inputDom).value;
      if (val == '')
      {
        res = false;
        this._fadeIn_err();
        this._errDom.textContent = '※必須項目です。';
      }
      else if (val.match(/.+@.+\..+/) == null)
      {
        res = false;
        this._fadeIn_err();
        this._errDom.textContent = '※形式が間違っています。';
      }
      else this._faedOut_err();
      return res;
    }
    private _validate_textarea()
    {
      var res:boolean = true,
        val:string = (<any>this._inputDom).value;
      if (val == '')
      {
        res = false;
        this._fadeIn_err();
      }
      else this._faedOut_err();
      return res;
    }
    private _fadeIn_err()
    {
      this._errDom.style.opacity = '1';
      this._errLineDom.classList.add('err');
    }
    private _faedOut_err()
    {
      this._errDom.style.opacity = '0';
      this._errLineDom.classList.remove('err');
    }
    public reset()
    {
      (<any>this._inputDom).value = '';
    }
  }
}
