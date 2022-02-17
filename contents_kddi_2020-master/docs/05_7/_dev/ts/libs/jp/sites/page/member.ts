/*/// <reference path="../../../threejs/three.d.ts" />*/
/// <reference path="../../contents/TrTween.d.ts" />
/// <reference path="../base.ts" />
/*
*memberのページ
*@class MemberPage
*/
const MEMBER_VERTEX:string = `
varying vec2 vUv;
varying vec3 vPos;
varying float vProg;
varying float vIndexProg;

uniform float curlR;
uniform float prog;
uniform float indexProg;

attribute vec3 pos;

void main()
{
  vUv = uv;
  vPos = pos;
  vProg = prog;
  vIndexProg = indexProg;

  float theta = position.x / curlR;
  float tx = mix(curlR * sin(theta), position.x / 24., prog) * -1.;
  float tz = mix(curlR * (1. - cos(theta)), position.z, prog);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(tx, position.y, tz, 1.0);
}
`;

const MEMBER_FRAG:string = `
varying vec2 vUv;
varying vec3 vPos;
varying float vProg;
varying float vIndexProg;

uniform sampler2D texture;
uniform sampler2D alphamap;
uniform sampler2D texture_c;
uniform sampler2D alphamap_c;

void main()
{
  float TtProg = 1. - vProg;
  vec2 tUv = vec2(vUv.x + (vPos.x * TtProg), vUv.y);
  vec4 t;
  vec4 a;
  if (vProg == 0.)
  {
    t = texture2D(texture_c, tUv);
    a = texture2D(alphamap_c, tUv);
  }
  else
  {
    t = texture2D(texture, tUv);
    a = texture2D(alphamap, tUv);
  }

  t.y = t.y + (.4 * TtProg);
  t.z = t.z + (.6 * TtProg);
  t.w = mix(a.x * (vProg * .4 + .6), a.x, vIndexProg);

  gl_FragColor = vec4(t);
}
`;

const ROOM_VERTEX:string = `
varying vec2 vUv;
varying vec3 vPos;
varying float vColProg;
varying float vIndexProg;

uniform vec2 size;
uniform float colProg;
uniform float posProg;
uniform float indexProg;

attribute vec3 pos;

void main()
{
  vUv = uv;
  vPos = pos;
  vColProg = colProg;
  vIndexProg = indexProg;

  vec3 p = position;
  float ratio = (size.y * .5) / (distance(p.xy, vec2(0., 0.)));
  p.x = mix(p.x * ratio, p.x, posProg);
  p.y = mix(p.y * ratio, p.y, posProg);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p.xyz, 1.);
}
`;

const ROOM_FRAG:string = `
varying vec2 vUv;
varying vec3 vPos;
varying float vColProg;
varying float vIndexProg;

uniform sampler2D texture;
uniform sampler2D alphamap;

void main()
{
  float TvColProg = 1. - vColProg;
  vec2 tUv = vec2(vPos.x * TvColProg + vUv.x, vPos.y * TvColProg + vUv.y);
  vec4 t = texture2D(texture, tUv);
  vec4 a = texture2D(alphamap, tUv);
  TvColProg = TvColProg * 1.5;
  t.x = TvColProg + t.x;
  t.y = TvColProg + t.y;
  t.z = TvColProg + t.z;
  t.w = mix(vPos.z, a.x, vColProg) * vIndexProg;

  gl_FragColor = vec4(t);
}
`;

namespace jp.sites.page
{
  interface Size {w:number;h:number}
  interface Position {x:number;y:number;z:number;}

  const PI:number = Math.PI;
  const TVAL_MEMBER:number = 5.7;
  const TVAL_ROOM:number = 7.45;
  const IND_HEIGHT:number = 200;
  const IND_HEIGHT_SP:number = 30;
  var PERSONOBJS_LEN:number;
  const PERSON_ANIMATION_DELAY = 30;
  const ROOMOBJS_LEN:number = 9;
  const ROOMOBJS_IMG:string[] = [
    'bg1', 'bg1_2', 'bg1_3', 'bg1_2', 'bg1_3',
    'bg1_2', 'bg1_3', 'bg1_2', 'bg1_3', 'bg1_2',
  ];
  const ROOMOBJS_W:number[] = [1488,2172,3172,4632,6762,9872,14414,21044,30700];

  export class MemberPage extends AbstractPage
  {
    private _page:HTMLElement;
    private _metaball:Metaball;

    private _mouse:Position = {'x':0, 'y':0, 'z':null};
    private _win:Size = {'w':0, 'h':0};
    private _toutch_startVal:number = 0;
    private _toutch_moveVal:number = 0;

    private _scene:THREE.Scene;
    private _camera:THREE.Camera;
    private _renderer:THREE.WebGLRenderer;

    private _mainObj:MainObj;
    private _worldObj:WorldObj;
    private _time:number = 0;
    private _tval:number = 0;
    private _tval_cl:number = 0;

    private _isArrive:number = 0;
    private _isObjs:number = 0;

    private _listTitle:listTitleDispatcher;
    private _name:NameDispatcher;
    private _class:ClassDispatcher;
    private _group:GroupDispatcher;
    private _fstText:FstTextDispatcher;
    private _navHTML:string = '';
    private _navHTML_sp:string = '';

    private _mIndBlock_sp:HTMLElement;
    private _mIndBlockItemBar:HTMLElement;
    private _mIndScrollHeight:number;
    private _mInd_bar_maxIncreaseVal:number;
    private _mIndItemInner:HTMLElement;
    private _mIndItem:HTMLElement;

    private _mIndBlockItemBar_sp:HTMLElement;
    private _mIndScrollHeight_sp:number;
    private _mInd_bar_maxIncreaseVal_sp:number;
    private _mIndItemInner_sp:HTMLElement;
    private _mIndItem_sp:HTMLElement;

    private _personObjs:PersonDispatcher[] = [];
    private _personActive:number = -1;
    private _person_animation_delay = 0;

    private _roomBaseObj:RoomBaseObj;
    private _roomObjs:RoomObj[] = [];

		private _roomCount:number = 11;


    public set personActive(id:number)
    {
      if (this._person_animation_delay < 0)
      {
        this._person_animation_delay = PERSON_ANIMATION_DELAY;
        var tmpId:number = this._personActive;
        this._personActive = id;
        this._set_personActive(tmpId, this._personActive);
        setTimeout(() => {this._set_mIndBar()}, 1000);
      }
    }
    private _set_personActive(inacId:number, acId:number)
    {
      if (inacId != acId)
      {
        if (inacId != -1) this._personObjs[inacId].off();

        var r = {
          'x':PI * (Math.random() - .5),
          'y':PI * (Math.random() - .5),
          'z':PI * (Math.random() - .5)
        };
        this._worldObj.r = r;
        for (var i = 0; i < PERSONOBJS_LEN; i++)
          this._personObjs[i].baseObj_r = r;
        this._metaball.morphMotif(acId);
        this._fstText.inactive();
        this._mIndBlock_sp.classList.remove('ac');
        this._personObjs[acId].on();
        this._name.active(this._personObjs[acId].nameHTML);
        this._class.active(this._personObjs[acId].classHTML);
        this._group.active(this._personObjs[acId].groupHTML);
      }
    }
    constructor()
    {
      super();
      this._mainObj = new MainObj;
      this._worldObj = new WorldObj;
      this._listTitle = new listTitleDispatcher;
      this._name = new NameDispatcher;
      this._class = new ClassDispatcher;
      this._group = new GroupDispatcher;
      this._fstText = new FstTextDispatcher;
      this._roomBaseObj = new RoomBaseObj;
    }
    public init(...args):void
    {
      this._metaball = Metaball.getInstance();

      this._renderer = <THREE.WebGLRenderer>args[0];
      this._camera = <THREE.Camera>args[1];
      this._scene = <THREE.Scene>args[2];

      this._listTitle.init();
      this._name.init();
      this._class.init();
      this._group.init();
      this._fstText.init();
      this._mainObj.init();
      this._init_worldObj();
      this._roomBaseObj.init();

      this._scene.add(this._mainObj.obj);
      this._scene.add(this._roomBaseObj.obj);

      this._init_person_getJson();

      for (var i = 0; i < ROOMOBJS_LEN; i++)
        this._init_roomObj(i);
    }
    public drawOnce(time:number):void
    {
      this.update(time,0);
      this.draw();
    }
    private _init_worldObj()
    {
      var loader:AssetLoader = AssetLoader.getInstance();
      this._worldObj.init(loader.getAssetByName('worldTex'));
      this._scene.add(this._worldObj.obj);
    }

    private _init_person_getJson()
    {
      var i:number = 0, j:number = 0, k:number = 0,
        personData_a:any = AssetLoader.getInstance().getAssetByName('mdata_a'),
        personData_c:any = AssetLoader.getInstance().getAssetByName('mdata_c'),
        personData_s:any = AssetLoader.getInstance().getAssetByName('mdata_s');
      PERSONOBJS_LEN = personData_a.length + personData_c.length + personData_s.length;

      for (; i < personData_a.length; i++)
        this._personObjs.push(this._init_person(i, personData_a[i]));

      this._navHTML += '<div class="memberIndicatorBlock__list memberIndicatorBlock__list--head">';
      this._navHTML += '<div class="memberIndicatorBlock__list__inner">Creative BU</div></div>';
      this._navHTML_sp += '<li><span class="head">Creative BU</span></li>';
      for (; j < personData_c.length; j++)
        this._personObjs.push(this._init_person(i + j, personData_c[j]));

      this._navHTML += '<div class="memberIndicatorBlock__list memberIndicatorBlock__list--head">';
      this._navHTML += '<div class="memberIndicatorBlock__list__inner">Thinkware BU</div></div>';
      this._navHTML_sp += '<li><span class="head">Thinkware BU</span></li>';
      for (; k < personData_s.length; k++)
        this._personObjs.push(this._init_person(i + j + k, personData_s[k]));
    }

    private _init_person(id:number, data:any):PersonDispatcher
    {
      var loader:AssetLoader = AssetLoader.getInstance();
      var p:PersonDispatcher = new PersonDispatcher;
      data['texture_com'] = loader.getAssetByName('mdata_com_txt');
      data['alphaMap_com'] = loader.getAssetByName('mdata_com_map');
      p.init(id, data);
      this._navHTML += p.nav_html;
      this._navHTML_sp += p.nav_html_sp;
      this._mainObj.obj = p.baseObj_obj;
      return p;
    }
    private _init_roomObj(i:number)
    {
      var loader:AssetLoader = AssetLoader.getInstance();
      var r:RoomObj = new RoomObj,
        tex = loader.getAssetByName(ROOMOBJS_IMG[i]),
        alphaMap = loader.getAssetByName('bg1_map'),
        alphaMap_bg1 = loader.getAssetByName('bg1_map_bg1');
      if (i == 0){
        r.init(i, tex, alphaMap_bg1, ROOMOBJS_W[i],this._roomCount);
      }else{
				this._roomCount += (i * 11);
        r.init(i, tex, alphaMap, ROOMOBJS_W[i],this._roomCount);
			}
      this._roomBaseObj.obj = r.obj;
      this._roomObjs[i] = r;
    }
    public load():void
    {
      var al:AssetLoader = AssetLoader.getInstance();
      al.add('worldTex','texture','/img/bg/bg4.jpg');
      al.add('bg1_map_bg1','texture','/img/bg/bg1_map_bg1.png');
      al.add('mdata_com_map','texture','/img/member/m_common_a.jpg');
      al.add('mdata_com_txt','texture','/img/member/m_common.jpg');
      al.add('mdata_a','memjson','/_data/member.json');
      al.add('mdata_c','memjson','/_data/member_creative.json');
      al.add('mdata_s','memjson','/_data/member_think.json');
    }
    public resize(x:number, y:number):void
    {
      this._set_mIndBar();
    }
    private _set_mIndBar()
    {
      if (this._mIndItemInner)
      {
        this._mIndScrollHeight = this._mIndItemInner.clientHeight - this._mIndItem.clientHeight;
        this._mInd_bar_maxIncreaseVal = this._mIndItem.clientHeight - IND_HEIGHT;
        if (this._mIndScrollHeight < 0)
          this._mIndBlockItemBar.style.display = 'none';
        else
          this._mIndBlockItemBar.style.display = 'block';
      }
    }
    /*
    *ページに到達した際に呼ばれる
    *@return null
    */
    public onArrive():void
    {
      this._metaball.moveLiquid();
      this._page = <HTMLElement>document.querySelector('.page-member');
      TrTween.serial(
        TrTween.prop(this._page,{display:'block',alpha:0}),
        TrTween.tween(this._page,{alpha:1},null,.6,Quart.easeInOut),
        TrTween.func(function():void
        {
          this.dispatchEvent(new Events('onArrive'));
          // console.log('member:' + 'onArrive');

          // set value
          this._person_animation_delay = 140;

          // add HTML
          this._mIndItemInner = document.getElementById('js-mIndItemInner');
          this._mIndItemInner.innerHTML = this._navHTML;
          this._mIndItem = document.getElementById('js-mIndItem');
          this._mIndBlockItemBar = document.getElementById('js-mIndItemBar');
          this._mIndScrollHeight = this._mIndItemInner.clientHeight - this._mIndItem.clientHeight;
          this._mInd_bar_maxIncreaseVal = this._mIndItem.clientHeight - IND_HEIGHT;

          this._mIndItemInner_sp = document.getElementById('js-memberIndicatorBlock-sp__contentsBlock');
          this._mIndItemInner_sp.innerHTML = this._navHTML_sp;
          this._mIndItem_sp = document.getElementById('js-mInd-sp_scBlock');
          this._mIndBlockItemBar_sp = document.getElementById('js-mIndItemBar-sp');
          this._mIndScrollHeight_sp = this._mIndItemInner_sp.clientHeight - this._mIndItem_sp.clientHeight;
          this._mInd_bar_maxIncreaseVal_sp = this._mIndItem_sp.clientHeight - IND_HEIGHT_SP;

          // get dom
          this._listTitle.onArrive(document.getElementById('js-listTitle'));
          this._name.onArrive(document.getElementById('js-nameBlock'));
          this._class.onArrive(document.getElementById('js-classBlock'));
          this._group.onArrive(document.getElementById('js-groupBlock'));
          this._fstText.onArrive(document.getElementById('js-fstTextBlock'));
          this._mIndBlock_sp = document.getElementById('js-memberIndBlock-sp');
          this._mIndItem_sp = document.getElementById('js-mInd-sp_scBlock');
          for (var i:number = 0; i < PERSONOBJS_LEN; i++)
          {
            var nav = document.getElementsByClassName('js-mIndBtn')[i],
              nav_sp = document.getElementsByClassName('js-mIndBtn-sp')[i];
            this._personObjs[i].onArrive(this, nav, nav_sp);
          }
          this._addEvent_pc();
          this._addEvent_sp();

          // opening
          setTimeout(() => {this._mIndItemInner.classList.add('on')}, 1000);
          setTimeout(() => {this._fstText.active()}, 2000);
          setTimeout(() => {this._mIndItemInner.classList.add('finAni')}, 3000);
          this._mainObj.onArrive();
          this._onArrive_animation();
        },null,this)
      ).play();
    }
    private _onScroll_indicator(e:Event)
    {
      var y:number = this._mInd_bar_maxIncreaseVal * ((<any>e.target).scrollTop / this._mIndScrollHeight);
      this._mIndBlockItemBar.style.transform = '-webkit-translateY('+y+'px)';
      this._mIndBlockItemBar.style.transform = 'translateY('+y+'px)';
    }
    private _onScroll_indicator_sp(e:Event)
    {
      var y:number = this._mInd_bar_maxIncreaseVal_sp * ((<any>e.target).scrollTop / this._mIndScrollHeight_sp);
      this._mIndBlockItemBar_sp.style.transform = '-webkit-translateY('+y+'px)';
      this._mIndBlockItemBar_sp.style.transform = 'translateY('+y+'px)';
    }
    private _addEvent_pc()
    {
      this._mIndItem.onscroll = (e)=> {this._onScroll_indicator(e);}

    }
    private _addEvent_sp()
    {
      this._mIndItem_sp.onscroll = (e)=> {this._onScroll_indicator_sp(e);}
      var page = document.getElementById('js-page-member');
      page.addEventListener('touchstart',(e:Event):void => {
        var x:number = (<any>e).touches[0].pageX;
        this._touchstart(x);
      }, false);
      page.addEventListener('touchmove',(e:Event):void => {
        var x:number = (<any>e).touches[0].pageX;
        this._touchmove(x);
      }, false);
      page.addEventListener('touchend',(e:Event):void => {
        this._touchend();
      }, false);

      document.getElementById('js-memberIndBlock-sp__btn').addEventListener('click',(e)=>
      {
        this._mIndBlock_sp.classList.toggle('ac');
      }, false);
      document.getElementById('js-navArrLeft_sp').addEventListener('click',(e)=>
      {
        this._personActive_left();
      }, false);
      document.getElementById('js-navArrRight_sp').addEventListener('click',(e)=>
      {
        this._personActive_right();
      }, false);
    }
    private _personActive_left()
    {
      var pa:number = this._personActive, id:number;
      if (pa - 1 < 0) id = PERSONOBJS_LEN - 1;
      else id = pa - 1;
      this.personActive = id;
    }
    private _personActive_right()
    {
      var pa:number = this._personActive, id:number;
      if (pa + 1 == PERSONOBJS_LEN) id = 0;
      else id = pa + 1;
      this.personActive = id;
    }
    private _onArrive_animation = ():void =>
    {
      this._isArrive = this._isArrive + .03;
      if (this._isArrive < 1) requestAnimationFrame(this._onArrive_animation);
      else this._isArrive = 1.;
    }

    /*
    *ページから離れる際に呼ばれる
    *@return null
    */
    public onLeave():void
    {
      this._metaball.moveLiquid();
      this._page = <HTMLElement>document.querySelector('.page-member');
      TrTween.serial(
      TrTween.prop(this._page,{display:'block',alpha:1}),
        TrTween.tween(this._page,{alpha:0},null,.6,Quart.easeInOut),
        TrTween.prop(this._page,{display:'none'}),
        TrTween.func(function():void{
          this.dispatchEvent(new Events('onLeave'));
          // console.log('member:' + 'onLeave');

          // reset
          this._personActive = -1;

          this._removeEvent_pc();
          this._removeEvent_sp();

          this._mainObj.onLeave();
          this._worldObj.onLeave();
          this._onLeave_animation();
          for (var i:number = 0; i < PERSONOBJS_LEN; i++)
            this._personObjs[i].onLeave();

        },null,this)
      ).play();
    }
    private _onLeave_animation = ():void =>
    {
      this._isArrive = this._isArrive - .08;
      if (0 < this._isArrive) requestAnimationFrame(this._onLeave_animation);
      else this._isArrive = 0.;
    }
    private _removeEvent_pc()
    {

    }
    private _removeEvent_sp()
    {
      if (document.getElementById('js-page-member'))
      {
        var page = document.getElementById('js-page-member');
        page.removeEventListener('touchstart',(e:Event):void => {}, false);
        page.removeEventListener('touchmove',(e:Event):void => {}, false);
        page.removeEventListener('touchend',(e:Event):void => {}, false);

        document.getElementById('js-memberIndBlock-sp__btn').removeEventListener('click',(e)=> {}, false);
        document.getElementById('js-navArrLeft_sp').removeEventListener('click',(e)=> {}, false);
        document.getElementById('js-navArrRight_sp').removeEventListener('click',(e)=> {}, false);
      }
    }

    private _touchstart(x:number)
    {
      this._toutch_startVal = this._toutch_moveVal = x;
    }

    private _touchmove(x:number)
    {
      this._toutch_moveVal = x;
    }

    private _touchend()
    {
      if (this._toutch_moveVal < this._toutch_startVal-70)
        this._personActive_right();
      else if (this._toutch_startVal+70 < this._toutch_moveVal)
        this._personActive_left();
    }

    public update(tval:number, time:number):void
    {
      this._tval = tval;
      this._tval_cl = this._clamp(this._tval - 7, 0, 1);
      this._time = time;
      this._person_animation_delay = this._person_animation_delay - 1;

      if (this._tval == -1000)
      {
        this._update_displayOn()
        this._update_room();
        this._update_person();
      }
      else if (TVAL_ROOM < this._tval)
      {
        this._update_displayRoom();
        this._update_room();
      }
      else if (TVAL_MEMBER < this._tval)
      {
        this._update_displayPerson();
        this._update_person();
      }
      else
        this._update_displayOff();
    }

    private _update_displayOff()
    {
      if (this._isObjs != 0)
      {
        this._isObjs = 0;
        this._mainObj.obj.visible =
        this._worldObj.obj.visible =
        this._roomBaseObj.obj.visible = false;
      }
    }
    private _update_displayOn()
    {
      if (this._isObjs != 1)
      {
        this._isObjs = 1;
        this._mainObj.obj.visible =
        this._worldObj.obj.visible =
        this._roomBaseObj.obj.visible = true;
      }
    }
    private _update_displayRoom()
    {
      if (this._isObjs != 2)
      {
        this._isObjs = 2;
        this._mainObj.obj.visible = false;
        this._worldObj.obj.visible =
        this._roomBaseObj.obj.visible = true;
      }
    }
    private _update_displayPerson()
    {
      if (this._isObjs != 3)
      {
        this._isObjs = 3;
        this._mainObj.obj.visible =
        this._worldObj.obj.visible = true;
        this._roomBaseObj.obj.visible = false;
      }
    }

    private _update_room()
    {
      var i:number = 0,
        a:number = this._clamp((this._tval_cl - .45) * 5, 0, 1),
        b:number = this._clamp((this._tval_cl - .45) * 7, 0, 1),
        c:number = 1 - this._isArrive;
      for (; i < ROOMOBJS_LEN; i++)
        this._roomObjs[i].update(this._tval_cl, a, b, c);
    }

    private _update_person()
    {
      var i:number = 0,
        a:number = 1 - this._isArrive;
      for (; i < PERSONOBJS_LEN; i++)
        this._personObjs[i].update(a);
    }

    public draw():void
    {
      var i:number,
        a:number = this._clamp((this._tval_cl - .45) * 1.7, 0, 1),
        b:number = this._clamp((this._tval_cl - .55) * 20, 0, 1),
        TiA:number = 1 - this._isArrive;
      if (this._tval == -1000)
      {
        this._worldObj.draw();
        this._mainObj.draw();
        this._roomBaseObj.draw(a, b);
        for (i = 0; i < PERSONOBJS_LEN; i++)
          this._personObjs[i].draw(this._time, this._tval_cl, TiA);
      }
      else if (TVAL_ROOM < this._tval)
      {
        this._worldObj.draw();
        this._roomBaseObj.draw(a, b);
      }
      else if (TVAL_MEMBER < this._tval)
      {
        this._worldObj.draw();
        this._mainObj.draw();
        for (i = 0; i < PERSONOBJS_LEN; i++)
          this._personObjs[i].draw(this._time, this._tval_cl, TiA);
      }
    }

    private _clamp(x:number, min:number, max:number)
    {
      if (x < min) x = min;
      else if (x > max) x = max;
      return x;
    }
  }

  class listTitleDispatcher
  {
    private _dom:HTMLElement;

    public init()
    {
    }
    public onArrive(dom:HTMLElement)
    {
      this._dom = dom;
      this._dom.classList.add('on');
    }
    public active(html:string)
    {
      this._dom.classList.remove('on');
    }
  }

  class NameDispatcher
  {
    private _dom:HTMLElement;

    public init()
    {
    }
    public onArrive(dom:HTMLElement)
    {
      this._dom = dom;
    }
    public active(html:string)
    {
      this._dom.innerHTML = html;
      this._dom.classList.remove('cre');
      setTimeout(() => {this._dom.classList.add('cre')}, 500);
    }
  }

  class ClassDispatcher
  {
    private _dom:HTMLElement;

    public init()
    {
    }
    public onArrive(dom:HTMLElement)
    {
      this._dom = dom;
    }
    public active(html:string)
    {
      this._dom.innerHTML = html;
      this._dom.classList.remove('cre');
      setTimeout(() => {this._dom.classList.add('cre')}, 500);
    }
  }

  class GroupDispatcher
  {
    private _dom:HTMLElement;

    public init()
    {
    }
    public onArrive(dom:HTMLElement)
    {
      this._dom = dom;
    }
    public active(html:string)
    {
      this._dom.innerHTML = html;
      this._dom.classList.remove('cre');
      setTimeout(() => {this._dom.classList.add('cre')}, 500);
    }
  }

  class FstTextDispatcher
  {
    private _dom:HTMLElement;

    public init()
    {
    }
    public onArrive(dom:HTMLElement)
    {
      this._dom = dom;
    }
    public active()
    {
      this._dom.classList.add('ac');
    }
    public inactive()
    {
      this._dom.classList.remove('ac');
    }
  }

  class MainObj
  {
    private _progress:number = 0;
    private _obj:THREE.Object3D;
    private _p:Position = {'x':0, 'y':0, 'z':0};
    private _r:Position = {'x':0, 'y':0, 'z':0};

    public set obj(obj:THREE.Object3D) {this._obj.add(obj)}
    public get obj():THREE.Object3D {return this._obj}

    constructor()
    {
      this._obj = new THREE.Object3D();
    }
    public init()
    {
      this._p.z = -2000;
      this._r.x = PI / 2;
    }
    public onArrive()
    {
      this._progress = 1;
    }
    public onLeave()
    {
      this._progress = 0;
    }
    public draw()
    {
      var tp:number = 1 - this._progress,
        tpz:number  = this._obj.position.z,
        trx:number  = this._obj.rotation.x,
        b_val:number = .03;

      if ((this._p.z * tp) - tpz < .001) b_val = 1;
      this._obj.position.z = tpz + (((this._p.z * tp) - tpz) * b_val);
      this._obj.rotation.x = trx + (((this._r.x * tp) - trx) * b_val);
    }
  }

  class WorldObj
  {
    private _obj:THREE.Mesh;
    private _p:Position = {'x':0, 'y':0, 'z':0};
    private _r:Position = {'x':0, 'y':0, 'z':0};

    public set p(pos:Position)
    {
      this._p.x = this._p.x + (pos.x * -1);
      this._p.y = this._p.y + (pos.y * -1);
      this._p.z = this._p.z + (pos.z * -1);
    }
    public set r(rot:Position)
    {
      this._r.x = (this._r.x + (rot.x * -1)) % PI;
      this._r.y = (this._r.y + (rot.y * -1)) % PI;
      this._r.z = (this._r.z + (rot.z * -1)) % PI;
    }
    public get obj():THREE.Mesh {return this._obj}
    public init(texture:THREE.Texture)
    {
      texture.minFilter = THREE.LinearFilter;
      var geo:THREE.BoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000),
        mat:THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          // refractionRatio: 0
        });
      this._obj = new THREE.Mesh(geo,mat);
      this._setPosition();
    }
    public onLeave()
    {
      this._setPosition();
    }
    public draw()
    {
      var tRx:number = this._obj.rotation.x,
        tRy:number = this._obj.rotation.y,
        tRz:number = this._obj.rotation.z,
        b_val:number = .03;

      if (this._r.x - tRx < .001) b_val = 1;
      this._obj.rotation.x = tRx + ((this._r.x - tRx) * b_val);
      this._obj.rotation.y = tRy + ((this._r.y - tRy) * b_val);
      this._obj.rotation.z = tRz + ((this._r.z - tRz) * b_val);
    }
    private _setPosition()
    {
      this._p.x = 0;
      this._p.y = 0;
      this._p.z = 500;
      this._r.x = 0;
      this._r.y = 0;
      this._r.z = 0;
    }
  }

  class PersonDispatcher
  {
    private _progress:number = .0;

    private _id:number;
    private _nav:NavDispatcher;
    private _nameHTML:string = '';
    private _classHTML:string = '';
    private _groupHTML:string = '';

    private _baseObj:BaseObj;
    private _axisObj:AxisObj;
    private _rotObj:RotateObj;
    private _imgObj:ImgObj;

    private _img_alpha_pass:string;
    private _img_pass:string;
    private _isLoadImg:number;

    public set progress(val:number) {this._progress = val;}
    public set baseObj_p(val:Position) {this._baseObj.p = val;}
    public set baseObj_r(val:Position) {this._baseObj.r = val;}

    public get nameHTML():string {return this._nameHTML;}
    public get classHTML():string {return this._classHTML;}
    public get groupHTML():string {return this._groupHTML;}
    public get nav_html():string {return this._nav.html;}
    public get nav_html_sp():string {return this._nav.html_sp;}
    public get baseObj_obj():THREE.Object3D {return this._baseObj.obj;}
    public get baseObj_p():Position {return this._baseObj.p;}
    public get baseObj_r():Position {return this._baseObj.r;}

    constructor()
    {
      this._nav = new NavDispatcher;
      this._baseObj = new BaseObj;
      this._axisObj = new AxisObj;
      this._rotObj = new RotateObj;
      this._imgObj = new ImgObj;
    }
    public init(id:number, data:any)
    {
      this._id = id;
      this._nav.init(data['name']);
      this._nameHTML = this._init_setNameHTML(data['name']);
      this._classHTML = '<span class="classBlock__text">' + data['class'] + '</span>';
      this._groupHTML = '<span class="groupBlock__text">' + data['group'] + '</span>';

      this._baseObj.init(this._id);
      this._axisObj.init();
      this._rotObj.init();
      this._imgObj.init(
        id,
        data['texture'], data['alphaMap'],
        data['texture_com'], data['alphaMap_com'],
        this._rotObj.px
      );
      this._baseObj.obj = this._axisObj.obj;
      this._axisObj.obj = this._rotObj.obj;
      this._rotObj.obj = this._imgObj.obj;

      this._img_alpha_pass = data.img_alpha_pass;
      this._img_pass = data.img_pass;
      this._isLoadImg = 0;
    }

    private _init_setNameHTML(name:string)
    {
      var tName = '',
        nameHTML = '',
        len = name.length,
        shortLen = 9,
        shortName = false,
        i = 0,
        s = '';
      if (len <= shortLen) shortName = true;
      for (; i < len; i++)
      {
        s = name.substr(i,1);
        if (s == ' ')
        {
          if (shortName)
          {
            tName += '<span> </span>';
          }
          else
          {
            tName += '<span class="nameBlock__space"> </span>';
            tName += '<br class="sp-br">';
          }
        }
        else
          tName += s;
      }
      nameHTML = '<span class="nameBlock__text">'+tName+'</span>';
      nameHTML+= '<span class="nameBlock__text nameBlock__text--colR">'+tName+'</span>';
      nameHTML+= '<span class="nameBlock__text nameBlock__text--colG">'+tName+'</span>';
      nameHTML+= '<span class="nameBlock__text nameBlock__text--colB">'+tName+'</span>';
      return nameHTML;
    }

    public onArrive(memberPage:MemberPage, nav:HTMLElement, nav_sp:HTMLElement)
    {
      this._nav.onArrive(memberPage, nav, nav_sp, this._id);
      this._baseObj.onArrive();
    }
    public onLeave()
    {
      this._progress = .0;
      this._nav.onLeave();
      this._baseObj.onLeave();
    }
    public update(TiA:number):void
    {
      this._imgObj.update(this._progress, TiA);
    }

    public draw(t:number, tval:number, TiA:number):void
    {
      this._baseObj.draw(t, tval);
      this._axisObj.draw(this._progress);
      this._rotObj.draw(this._progress);
    }

    public on():void
    {
      if (this._isLoadImg == 0) this._loadImg();
      if (this._isLoadImg == 2)
      {
        this._baseObj.obj.visible = true;
        this._nav.active();
        this._progress = 1.;
        this._baseObj.p = this._baseObj.p;
        this._baseObj.r = this._baseObj.r;
      }
    }

    private _loadImg()
    {
      let m = new THREE.LoadingManager(),
        l1 = new THREE.TextureLoader(m),
        l2 = new THREE.TextureLoader(m);

      l1.load(this._img_alpha_pass,(txt) => {
        this._imgObj.alphaMap = txt;
        this._isLoadImg = this._isLoadImg + 1;
        this.on();
      });

      l2.load(this._img_pass,(txt) => {
        this._imgObj.texture = txt;
        this._isLoadImg = this._isLoadImg + 1;
        this.on();
      });
    }

    public off():void
    {
      let r:number = Math.random();
      if (.5 < r) this._baseObj.obj.visible = false;
      this._nav.inactive();
      this._progress = 0.;
      this._baseObj.p = this._baseObj.base_p;
      this._baseObj.r = {
        'x':PI * (Math.random() - .5),
        'y':PI * (Math.random() - .5),
        'z':PI * (Math.random() - .5)
      };
    }
  }

  class NavDispatcher
  {
    private _btn:HTMLElement;
    private _btn_sp:HTMLElement;
    private _html:string = '';
    private _html_sp:string = '';

    public get html():string {return this._html}
    public get html_sp():string {return this._html_sp}
    public init(name:string)
    {
      this._html += '<div class="memberIndicatorBlock__list">';
      this._html += '<div class="memberIndicatorBlock__list__inner">';
      this._html += '<a class="memberIndicatorBlock__btn js-mIndBtn">';
      this._html += '<span>'+name+'</span>';
      this._html += '</a></div></div>';

      this._html_sp = '<li><span class="js-mIndBtn-sp">'+name+'</span></li>';
    }
    public onArrive(
      memberPage:MemberPage,
      dom:HTMLElement,
      dom_sp:HTMLElement,
      id:number
    )
    {
      this._btn = dom;
      this._btn.addEventListener('click',(e)=>
      {
        memberPage.personActive = id;
      }, false);

      this._btn_sp = dom_sp;
      this._btn_sp.addEventListener('click',(e)=>
      {
        memberPage.personActive = id;
      }, false);
    }
    public onLeave()
    {
      if (this._btn)
      {
        this._btn.removeEventListener('click',(e) => {}, false);
        this._btn_sp.removeEventListener('click',(e) => {}, false);
      }
    }
    public active() {this._btn.classList.add('ac')}
    public inactive() {this._btn.classList.remove('ac')}
  }

  class BaseObj
  {
    private _progress:number = 0;
    private _id:number;
    private _obj:THREE.Object3D;
    private _index_p:Position = {'x':0, 'y':0, 'z':0};
    private _base_p:Position = {'x':0, 'y':0, 'z':0};
    private _p:Position = {'x':0, 'y':0, 'z':0};
    private _r:Position = {'x':0, 'y':0, 'z':0};

    public set obj(obj:THREE.Object3D) {this._obj.add(obj);}
    public set p(pos:Position)
    {
      this._p.x = this._p.x + (pos.x * -1);
      this._p.y = this._p.y + (pos.y * -1);
      this._p.z = this._p.z + (pos.z * -1);
    }
    public set r(rot:Position)
    {
      this._r.x = (this._r.x + (rot.x * -1)) % PI;
      this._r.y = (this._r.y + (rot.y * -1)) % PI;
      this._r.z = (this._r.z + (rot.z * -1)) % PI;
    }

    public get obj():THREE.Object3D {return this._obj;}
    public get p():Position {return this._p;}
    public get base_p():Position {return this._base_p;}
    public get r():Position {return this._r;}

    constructor()
    {
      this._obj = new THREE.Object3D();;
    }
    public init(id:number)
    {
      this._id = id;
      this._base_p.x = 6000 * Math.cos(360 / PERSONOBJS_LEN * id);
      this._base_p.z = 6000 * Math.sin(360 / PERSONOBJS_LEN * id);
      this._index_p.x = Math.sin((id * .3) * Math.cos((id * .4)) * .2) * 2000;
      this._index_p.y = id * -900;
      this._index_p.z = Math.sin((id * .8) * Math.cos((id * .6)) * .2) * 1000;
    }
    public onArrive()
    {
      if (this._id % 2 == 0) this._obj.visible = false;
      else this._obj.visible = true;
      this._r.x = PI * (Math.random() - .5);
      this._r.y = PI * (Math.random() - .5);
      this._r.z = PI * (Math.random() - .5);
      this._p.x = this._base_p.x;
      this._p.z = this._base_p.z;
      this._onArrive_animation();
    }
    private _onArrive_animation = ():void =>
    {
      this._progress = this._progress + .07;
      if (this._progress < 1) requestAnimationFrame(this._onArrive_animation);
      else this._progress = 1.;
    }
    public onLeave()
    {
      if (20 < this._id) this._obj.visible = false;
      else this._obj.visible = true;
      this._progress = 0;
    }
    public draw(t, tval)
    {
      var p = this._progress,
        tPx = this._obj.position.x,
        iPx = this._index_p.x * Math.sin(t * .0005),
        mix_px = this._p.x * p + iPx * (1 - p),
        mix_py = this._p.y * p + (this._index_p.y + (tval * PERSONOBJS_LEN * 2000)) * (1 - p),
        tPz = this._obj.position.z,
        iPz = this._index_p.z * Math.cos(t * .0005),
        mix_pz = this._p.z * p + iPz * (1 - p),
        b_val_p = .05;

      this._obj.position.x = tPx + ((mix_px - tPx) * b_val_p);
      this._obj.position.y = mix_py;
      this._obj.position.z = tPz + ((mix_pz - tPz) * b_val_p);

      this._obj.rotation.x = this._obj.rotation.x + (((this._r.x * p) - this._obj.rotation.x) * .03);
      this._obj.rotation.y = this._obj.rotation.y + (((this._r.y * p) - this._obj.rotation.y) * .03);
      this._obj.rotation.z = this._obj.rotation.z + (((this._r.z * p) - this._obj.rotation.z) * .03);
    }
  }

  class AxisObj
  {
    private _obj:THREE.Object3D;
    private _quat:THREE.Quaternion;
    private _gQuat:THREE.Quaternion;

    public set obj(obj:THREE.Object3D) {this._obj.add(obj);}
    public get obj():THREE.Object3D {return this._obj;}

    constructor()
    {
      this._obj = new THREE.Object3D();
      this._quat = new THREE.Quaternion();
      this._gQuat = new THREE.Quaternion();
    }
    public init()
    {
      var q_axis = new THREE.Vector3(0, 1, 0).normalize(),
        // vec = (Math.random() < .5)? 1 : -1,
        vec = -1,
        init_quat = new THREE.Quaternion();

      init_quat.setFromAxisAngle(q_axis, Math.random() * 10);
      this._obj.quaternion.multiply(init_quat);
      // this._quat.setFromAxisAngle(q_axis, (Math.random() * .005 + .002) * vec);
      this._quat.setFromAxisAngle(q_axis, -.003);
      this._gQuat.setFromAxisAngle(q_axis, PI / 2);
    }
    public draw(p:number)
    {
      if (0 < p) this._obj.quaternion.slerp(this._gQuat, .03);
      else this._obj.quaternion.multiply(this._quat);
    }
  }

  class RotateObj
  {
    private _obj:THREE.Object3D;
    private _p:Position = {'x':0, 'y':0, 'z':0};
    private _gP:Position = {'x':0, 'y':0, 'z':0};

    public set obj(obj:any) {this._obj.add(obj)}
    public get obj():any {return this._obj}
    public get px():number {return this._p.x}

    constructor()
    {
      this._obj = new THREE.Object3D();
    }
    public init()
    {
      this._p.x = 3910;
      this._gP.x = 300;
      this._obj.rotation.y = PI * .5;
    }
    public draw(p:number)
    {
      this._obj.position.x = (this._p.x * (1 - p)) + (this._gP.x * p);
    }
  }

  class ImgObj
  {
    private _id:number;
    private _obj:THREE.Mesh;
    private _tProg:number = -1;
    private _tIndexProg:number = -1;

    public get obj():THREE.Mesh {return this._obj}
    public set texture(txt:THREE.Texture) {
      (<any>this._obj.material).uniforms.texture.value = txt;
    }
    public set alphaMap(txt:THREE.Texture) {
      (<any>this._obj.material).uniforms.alphamap.value = txt;
    }

    public init(
      id:number,
      texture:THREE.Texture, alphaMap:THREE.Texture,
      textureC:THREE.Texture, alphaMapC:THREE.Texture,
      radius:number
    )
    {
      this._id = id;
      var geo = new THREE.PlaneBufferGeometry(1024 * 24, 1024, 90, 10),
        len = (<any>geo.attributes).position.array.length,
        i = 0,
        arr:Float32Array = new Float32Array(len);
      for(; i < len / 3; i++)
      {
        arr[i*3] = arr[i*3+1] = arr[i*3+2] = 0;
        if (i % 4 == 0) arr[i*3] = -1;
        else if (i % 2 == 0) arr[i*3] = 1;
      }
      geo.addAttribute('pos',new THREE.BufferAttribute(arr,3));

      var mat = new THREE.ShaderMaterial({
        vertexShader: MEMBER_VERTEX,
        fragmentShader: MEMBER_FRAG,
        uniforms:
        {
          curlR: {type: 'f', value: radius * -1},
          alphamap: {type: 't',value: alphaMap},
          texture: {type: 't',value: texture},
          alphamap_c: {type: 't',value: alphaMapC},
          texture_c: {type: 't',value: textureC},
          prog: {type: 'f', value: 0.},
          indexProg: {type: 'f', value: 0.},
        },
        depthTest: false,
        transparent: true,
        // blending: THREE.AdditiveBlending
      });
      this._obj = new THREE.Mesh(geo, mat);
    }
    public update(p:number, TiA:number)
    {
      if (p != this._tProg)
      {
        this._tProg = (<any>this._obj.material).uniforms.prog.value;
        var b_val = .05;
        if (p - this._tProg < .00001) b_val = 1;
        (<any>this._obj.material).uniforms.prog.value = this._tProg + ((p - this._tProg) * b_val);
      }

      if (TiA != this._tIndexProg)
      {
        this._tIndexProg = (<any>this._obj.material).uniforms.indexProg.value;
        (<any>this._obj.material).uniforms.indexProg.value = TiA;
      }
    }
  }

  class RoomBaseObj
  {
    private _obj:THREE.Object3D;
    private _p:Position = {'x':0, 'y':0, 'z':0};

    public set obj(obj:any) {this._obj.add(obj);}
    public get obj():any {return this._obj;}

    constructor()
    {
      this._obj = new THREE.Object3D();
    }
    public init()
    {
    }
    public draw(tval:number, scaleProg:number)
    {
      this._obj.position.z = Math.min((((PERSONOBJS_LEN + 1) * -900) + (tval * PERSONOBJS_LEN * 2000)), 0)　-　60200 + (60000 * scaleProg);
    }
  }

  class RoomObj
  {
    private _obj:THREE.Mesh;
    private _gP:Position = {'x':0, 'y':0, 'z':0};
    private _p:Position = {'x':0, 'y':0, 'z':0};
    private _r:Position = {'x':0, 'y':0, 'z':0};
    private _curlR:number;
		private _posY:number;
    public get obj():THREE.Mesh {return this._obj}
    public init(id:number, texture:THREE.Texture, alphaMap:THREE.Texture, w:number, yy:number)
    {
      var h:number = ~~(w * 0.6828),
        part:number = 120,
        geo:THREE.PlaneBufferGeometry = new THREE.PlaneBufferGeometry(w, h, part, part),
        len:number = (<any>geo.attributes).position.array.length,
        i:number = 0,
        arr:Float32Array = new Float32Array(len),
        alpha:number = .1 + (id * .1),
				yPos:number;

      for(; i < len / 3; i++)
      {
        arr[i*3] = 0;
        arr[i*3+1] = 0;
        if (i % 2 == 0)
        {
          arr[i*3] = (Math.random() - .5) * .7;
          arr[i*3+1] = (Math.random() - .5) * .7;
        }

        // top line
        if (i <= part) arr[i*3+2] = alpha;
        // bottom line
        else if ((part + 1) * part <= i) arr[i*3+2] = alpha;
        // right line
        else if (i % (part + 1) == 0) arr[i*3+2] = alpha;
        // left line
        else if (i % (part + 1) == part) arr[i*3+2] = alpha;
        else arr[i*3+2] = 0;
      }
      geo.addAttribute('pos',new THREE.BufferAttribute(arr,3));

      var mat:THREE.ShaderMaterial = new THREE.ShaderMaterial({
        vertexShader: ROOM_VERTEX,
        fragmentShader: ROOM_FRAG,
        uniforms:
        {
          alphamap: {type: 't',value: alphaMap},
          texture: {type: 't',value: texture},
          size: {type: 'v2', value: new THREE.Vector2(w, h)},
          colProg: {type: 'f', value: 0.},
          posProg: {type: 'f', value: 0.},
          indexProg: {type: 'f', value: 1.},
        },
        depthTest: false,
        transparent: true,
        // blending: THREE.NormalBlending
      });
      this._obj = new THREE.Mesh(geo,mat);
      this._curlR = w * -.7;
      this._gP.z = 0;
			if (id == 0) yPos = 0;
			else yPos = yy;
      this._p.y = h - yPos;
      this._gP.y = (id * 11) * -1;
      this._p.z = (id * 10) + ((PERSONOBJS_LEN + 1) * 900) + 60000;
      this._obj.position.z = this._p.z;

      this._r.x = (Math.random() - .5) * PI * 3;
      this._r.y = (Math.random() - .5) * PI * 3;
      this._r.z = (Math.random() - .5) * PI * 3;
    }

    public update(tval:number, cP:number, pP:number, iA:number)
    {
      (<any>this._obj.material).uniforms.colProg.value = cP;
      (<any>this._obj.material).uniforms.posProg.value = pP;
      (<any>this._obj.material).uniforms.indexProg.value = iA;

      this._obj.position.y = (this._p.y + this._curlR) * (1 - Math.max(Math.atan(tval), 1)) + this._gP.y;

			this._obj.position.z = this._p.z * (1 - pP) + this._gP.z * pP;

      this._obj.rotation.x = this._r.x * (1 - pP);
      this._obj.rotation.y = this._r.y * (1 - pP);
      this._obj.rotation.z = this._r.z * (1 - pP);
    }
  }
}
