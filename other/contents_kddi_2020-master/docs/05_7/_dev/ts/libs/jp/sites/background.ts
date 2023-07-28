/// <reference path="../../threejs/three.d.ts" />
/// <reference path="../contents/TrTween.d.ts" />
/// <reference path="./base.ts" />

/*
*背景の画像を制御
*@class BackgroundVisual
*/

namespace jp.sites
{
  interface XYZ{
		x?:number; y?:number; z?:number;
	}
	export class BackgroundVisual extends AbstractContentBase
	{
		private _mainScene:THREE.Scene;
    private _mainCamera:THREE.Camera;
    private _mainRenderer:THREE.WebGLRenderer;
		//
		private _sceneID:number;
		private _scenePerArray:Array<number> = new Array(8);
		//
    private _app:any = (<any>jp.contents).util.Application;
    // private _isDevice =
		private _sceneNum:number = 4;
		private _baseCamZ:number = 500;
		private _screenW:number;
		private _screenH:number;
		private _moveX:number;
		private _moveY:number;
		private _scrollValue:number;
		//
		private _objTop:HTMLDivElement = <HTMLDivElement>document.getElementById('top');
		private _objAbout:HTMLDivElement = <HTMLDivElement>document.getElementById('about');
		private _objWorks:HTMLDivElement = <HTMLDivElement>document.getElementById('works');
		private _objMember:HTMLDivElement = <HTMLDivElement>document.getElementById('member');
		private _scToAb:HTMLDivElement = <HTMLDivElement>document.getElementById('to-ab');
		private _scAbWo:HTMLDivElement = <HTMLDivElement>document.getElementById('ab-wo');
		private _scWoMe:HTMLDivElement = <HTMLDivElement>document.getElementById('wo-me');
		private _scMeTo:HTMLDivElement = <HTMLDivElement>document.getElementById('me-to');
		//
    private _coCopy:HTMLElement;
		private _bgParent:THREE.Group;
		private _bgInner:THREE.Group;
		private _bgGroup:THREE.Group;
		private _bgGroup2:THREE.Group;
		private _bg1:THREE.Object3D;
		private _bg1_1:THREE.Object3D;
		private _bg1Material:THREE.MeshBasicMaterial;
		private _bg1MaterialList:Array<any> = new Array();
		private _bg2:THREE.Object3D;
		private _bg3:THREE.Object3D;
		private _bg3_dmy:THREE.Object3D;
		private _dmMaterial:THREE.MeshBasicMaterial;
		private _movieMaterial:THREE.MeshBasicMaterial;
		private _eyesMaterial:THREE.MeshBasicMaterial;
		private _bg4:THREE.Object3D;
		private _pointLight:THREE.PointLight;
		private _lightCeiling:any;
		private _ambientLight:THREE.AmbientLight;
		//
		private _video:HTMLVideoElement;
		private _videoCvs:HTMLCanvasElement;
		private _videoCts:CanvasRenderingContext2D;
		private _videoTexture:THREE.Texture;
		//

		private _pi:number = Math.PI/2;
		private _pi2:number = Math.PI;
		private _isLoad:boolean = false;
		private _loadCount:number = 0;

    private _animT:ITween;
    private _touchEvent:any;
    //
    private _isSecType = '';
    //
    private _logo:THREE.Mesh;
    private _logoList:Array<any> = new Array();
    private _floatList:Array<any> = new Array();
    private _pyramidList:Array<any> = new Array();
    private _crystalBoxList:Array<any> = new Array();
    private _extrusionAList:Array<any> = new Array();
    private _extrusionBList:Array<any> = new Array();
    private _doorAList:Array<any> = new Array();
    private _doorBList:Array<any> = new Array();
    private _doorCList:Array<any> = new Array();
    private _rotateListNum:Array<any> = [-1,1,0,0];
    private _pyramidListNum:Array<any> = [0,.1,.2,.3,.4,.5,.6,.7,.8,.9];
    private _xyzPos:XYZ = {x:-3940,y:300,z:3500};
    private _xyzRot:XYZ = {x:this._pi,y:0,z:0};
    private _timeObj:UniformValue;
    private _rotObj:UniformValue;
    private _timeCount:number = 0;
    private _loopTr:ITween;
		private _blPlane:THREE.Mesh;
		private _blMaterial:THREE.MeshBasicMaterial;
		constructor()
		{
			super();
		}
    public load():void
		{
			var loader:AssetLoader = AssetLoader.getInstance();
      //
			loader.add('bg1','texture','/img/bg/bg1.jpg');
			loader.add('bg1_2','texture','/img/bg/bg1_2.jpg');
			loader.add('bg1_3','texture','/img/bg/bg1_3.jpg');
			loader.add('bg1_map','texture','/img/bg/bg1_map.png');
			loader.add('bg4','texture','/img/bg/bg4.jpg');
			loader.add('eyes','texture','/img/bg/eyes.jpg');
			loader.add('wall','obj','/img/bg/corridor_all.obj');
			loader.add('crystal','obj','/img/bg/crystal.obj');
			loader.add('crystal_base','obj','/img/bg/crystal_base.obj');
			loader.add('float','obj','/img/bg/float.obj');
      //
			this._video = <HTMLVideoElement>document.createElement('video');
			this._video.src = '/img/bg/eyes.mp4';
			// this._video.setAttribute('crossorigin','anonymous');
			this._video.onloadeddata = (video)=>{
        if(this._getDevice() === 'pc'){
  				this._video.play();
  				this._video.pause();
        }
			}
      // this._video.addEventListener('canplay',()=>{
      //   this._video.load();
      // }, false);
      this._video.load();
      //
      this._touchEvent = ()=>
      {
        this._video.load();
        document.removeEventListener('touchstart',this._touchEvent);
      }
      document.addEventListener('touchstart',this._touchEvent);


		}
		init(...args):void
		{
			this._mainRenderer = <THREE.WebGLRenderer>args[0];
			this._mainCamera = <THREE.Camera>args[1];
			this._mainScene = <THREE.Scene>args[2];
			this._scenePerArray = [];
			this._setBg();
			this.resize();
      this._setAnim();
      this._createLoopTween();
      //
			// document.addEventListener('keydown', (e) => {
      //   var keyName = e.key;
      //   var ctPos = 10;
      //   var ctRot = this._pi/6;
      //   // var ct = this._pi/4;
			//
			// 	e.preventDefault();
			// 	if(e.shiftKey){
			// 		ctPos = 10;
			// 	}
      //   if (e.altKey) {
      //     e.preventDefault();
      //     if(e.shiftKey){
      //       if(keyName === 'ArrowRight') this._xyzRot.z -= ctRot;
      //       else if(keyName === 'ArrowLeft') this._xyzRot.z += ctRot;
      //       else if(keyName === 'ArrowUp') this._xyzRot.z += ctRot;
      //       else if(keyName === 'ArrowDown') this._xyzRot.z -= ctRot;
      //     }else{
      //       if(keyName === 'ArrowRight') this._xyzPos.z -= ctPos;
      //       else if(keyName === 'ArrowLeft') this._xyzPos.z += ctPos;
      //       else if(keyName === 'ArrowUp') this._xyzPos.z += ctPos;
      //       else if(keyName === 'ArrowDown') this._xyzPos.z -= ctPos;
      //     }
      //   }else{
      //     e.preventDefault();
      //     if(e.shiftKey){
      //       if(keyName === 'ArrowRight') this._xyzRot.x -= ctRot;
      //       else if(keyName === 'ArrowLeft') this._xyzRot.x += ctRot;
      //       else if(keyName === 'ArrowUp') this._xyzRot.y += ctRot;
      //       else if(keyName === 'ArrowDown') this._xyzRot.y -= ctRot;
      //     }else{
      //       if(keyName === 'ArrowRight') this._xyzPos.x -= ctPos;
      //       else if(keyName === 'ArrowLeft') this._xyzPos.x += ctPos;
      //       else if(keyName === 'ArrowUp') this._xyzPos.y += ctPos;
      //       else if(keyName === 'ArrowDown') this._xyzPos.y -= ctPos;
      //     }
      //   }
			// 	this._blPlane.position.set(this._xyzPos.x,this._xyzPos.y,this._xyzPos.z);
      //   this._blPlane.rotation.set(this._xyzRot.x,this._xyzRot.y,this._xyzRot.z);
      //   console.log(this._xyzPos.x + ',' + this._xyzPos.y + ',' + this._xyzPos.z);
      //   console.log(this._xyzRot.x + ',' + this._xyzRot.y + ',' + this._xyzRot.z);
      // }, false);

		}
		start():void
		{
		}
		resize():void
		{

		}
    public get crystalRotation():number { return this._rotObj.value;}
    public set crystalRotation(value:number)
    {
      this._rotObj.value = value;
      this._crystalBoxList[0].children[0].rotation.y = value;
      this._crystalBoxList[1].children[0].rotation.y = value;
      this._crystalBoxList[2].children[0].rotation.y = value;
      this._crystalBoxList[3].children[0].rotation.y = value;
    }
    private _scval:number = 0;
    private _trcount:number = 0;
    private _loopPlaying:boolean = false;
		public draw():void
		{
		  this._timeObj.value += .1;
      this._rotObj.value += .01;
      //
      this._timeCount += .01;

      if(this._scval >= 2 && this._scval < 4)
      {
        // this._roadShader.uniforms.time.value = this._timeObj.value
        if(!this._loopPlaying)
        {
          this._loopPlaying = true;
          this._loopTr.play();
        }

      }
      else
      {
        if(this._loopPlaying)
        {
          this._loopPlaying = false;
          this._loopTr.stop();
        }
      }

		}
    private _createLoopTween():void
    {


      var rad:number = Math.PI / 180,
          obj:THREE.Mesh,
          tweens:Array<ITween> = [],
          eaTweens:Array<ITween> = [],
          ebTweens:Array<ITween> = [];

      for(var i:number = 0,len:number = this._pyramidList.length;i < len;i++)
      {
        obj = <THREE.Mesh>this._pyramidList[i]
        obj.position.y = -1;
        obj.visible = false;
        tweens[i] = TrTween.delay(
          TrTween.serial(
            TrTween.prop(obj.rotation,{z:0 * rad}),
            TrTween.prop(obj.position,{y:-1}),
            TrTween.prop(obj,{visible:true}),
            TrTween.tween(obj.position,{y:2.8},{y:-1},8,Quart.easeInOut),
            TrTween.prop(obj,{visible:false}),
            TrTween.prop(obj.rotation,{z:180 * rad}),
            TrTween.prop(obj.position,{y:1.2}),
            TrTween.wait(2),
            TrTween.prop(obj,{visible:true}),
            TrTween.tween(obj.position,{y:-3},{y:1.2},8,Quart.easeInOut),
            TrTween.prop(obj,{visible:false})
          ),i * 2)
      }
      for(i = 0,len = this._extrusionAList.length;i < len;i++)
      {
        obj = <THREE.Mesh>this._extrusionAList[i];
        obj.position.x = 0;
        eaTweens[i] = TrTween.serial(
                        TrTween.wait(3 - i * .1),
                        TrTween.tween(obj.position,{x:.8 - i * .2},{x:0},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},{x:.8 - i * .2},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:.8 - i * .2},{x:0},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},{x:.8 - i * .2},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:.8 - i * .2},{x:0},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},{x:.8 - i * .2},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:.8 - i * .2},{x:0},1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},{x:.8 - i * .2},1,Quart.easeInOut)
                      );
      }
      for(i = 0,len = this._extrusionBList.length;i < len;i++)
      {
        obj = <THREE.Mesh>this._extrusionBList[i];
        obj.position.x = 0;
        ebTweens[i] = TrTween.serial(
                        TrTween.wait(2 + i * .1),
                        TrTween.tween(obj.position,{x:-.5 + i * .1},null,1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},null,1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:-.5 + i * .1},null,1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},null,1,Quart.easeInOut),
                        TrTween.wait(2 + i * .1),
                        TrTween.tween(obj.position,{x:-.5 + i * .1},null,1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},null,1,Quart.easeInOut),
                        TrTween.wait(2 + i * .1),
                        TrTween.tween(obj.position,{x:-.5 + i * .1},null,1,Quart.easeInOut),
                        TrTween.wait(2),
                        TrTween.tween(obj.position,{x:0},null,1,Quart.easeInOut)
                     )
      }
      var tr:ITween = TrTween.parallel(
        TrTween.serial(
          TrTween.tween(this,{crystalRotation:180 * rad},{crystalRotation:0},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:360 * rad},{crystalRotation:180 * rad},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:180 * rad},{crystalRotation:0},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:360 * rad},{crystalRotation:180 * rad},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:180 * rad},{crystalRotation:0},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:360 * rad},{crystalRotation:180 * rad},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:180 * rad},{crystalRotation:0},2,Back.easeOut),
          TrTween.wait(.5),
          TrTween.tween(this,{crystalRotation:360 * rad},{crystalRotation:180 * rad},2,Back.easeOut),
          TrTween.wait(.5)


        ),
        TrTween.tween(this._floatList[0].rotation,{x:180 * rad * 2,y:360 * rad},{x:0,y:0},28,Linear.easeNone),
        TrTween.tween(this._floatList[1].rotation,{z:2 * 360 * rad,x:0},{z:0,x:360 * rad},28,Linear.easeNone),
        TrTween.serial(
          TrTween.tween(this._floatList[2].position,{z:-400},{z:400},14,Linear.easeNone),
          TrTween.tween(this._floatList[2].position,{z:400},null,14,Linear.easeNone)
        ),
        TrTween.serial(
          TrTween.wait(.3),
          TrTween.parallel(
            TrTween.tween(this._floatList[3].position,{z:1200,x:-1800},{z:200,x:-3050},28,Linear.easeNone),
            TrTween.tween(this._floatList[3].rotation,{x:180 * rad},{x:0},28,Linear.easeNone)
          ),
          TrTween.wait(.2)
        ),
        TrTween.parallelTweens(eaTweens),
        TrTween.parallelTweens(ebTweens),
        TrTween.parallelTweens(tweens)
      )
       this._loopTr = TrTween.repeat(tr,99999999);
       this._loopPlaying = false;
    }

		update(scval:number,time:number):void
		{

      var sec:number = scval/8;
      this._animT.gotoAndStop(sec);
      if(sec < 0.1){
        this._resetAnim();
      }
      this._scval = scval;
      if(scval > 5 && scval < 6){
        var p5:number = scval - 5;
        if (this._video.readyState === this._video.HAVE_ENOUGH_DATA)
  			{
  		    // this._videoCts.clearRect(0, 0, this._video.width, this._video.height);
  		    this._videoCts.drawImage(this._video, 0, 0);
  				if (this._videoTexture)
  				{
  					this._video.currentTime = (p5 * this._video.duration);
  					this._videoTexture.needsUpdate = true;
  				}
  			}
      }
      // this._crystal.rotation.x = time * 0.001;
		}
		public setTexture(texture:THREE.Texture,mTexture:THREE.Texture):void
		{
			var s:THREE.ShaderMaterial = new THREE.ShaderMaterial({
				uniforms:{
					refrection:{
						type:'t',
						value:texture
					}
          ,rotation:this._rotObj
				},
				transparent:true,
				vertexShader:CRYSTAL_VER,
				fragmentShader:CRYSTAL_FRAG
			});
			for(var cry of this._crystalBoxList)
			{
				cry.children[0].children[0].material = s;
			}

		}
		//set
		private _road:THREE.Mesh;
    private _roadShader:THREE.ShaderMaterial;
		private _setBg():void
		{

			this._bgParent = new THREE.Group();
			this._bgInner = new THREE.Group();
			this._bgGroup = new THREE.Group();
			this._bgGroup2 = new THREE.Group();
			this._bgInner.add(this._bgGroup);
			this._bgInner.add(this._bgGroup2);
			this._bgParent.add(this._bgInner);
			this._mainScene.add(this._bgParent);
			//

			this._bg1 = new THREE.Object3D();
			this._bg1_1 = new THREE.Object3D();
			this._bg2 = new THREE.Object3D();
			this._bg3 = new THREE.Object3D();
			this._bg4 = new THREE.Object3D();

      var loader:AssetLoader = AssetLoader.getInstance();
      this._coCopy = <HTMLElement>document.getElementById('js-coCopy');
			//------------------------------------------------------------
			var texture1_2 = loader.getAssetByName('bg1_2'),
          texture1_3:THREE.Texture = loader.getAssetByName('bg1_3'),
          alphaMap = loader.getAssetByName('bg1_map');
      //
			var ar:Array<number> = [
				2172,3172,4632,6762,9872,14414,21044,30700
			];
			var count:number = 11;
      var texture1 = loader.getAssetByName('bg1');
			this._bg1Material = new THREE.MeshBasicMaterial({map: texture1,transparent:true,opacity:1});
			var geometry1:THREE.PlaneBufferGeometry = new THREE.PlaneBufferGeometry(1488,1016);
      var mesh1:THREE.Mesh = new THREE.Mesh(geometry1,this._bg1Material);
      this._bg1_1.add(mesh1);
      for(var i = 0; i < ar.length; i++) {
        count += i * 11;
				var w:number = ar[i],
            h:number = ~~(w * 0.6828),
				    tex:THREE.Texture;
				if(i % 2 == 0){
					tex = texture1_2;
				}else{
					tex = texture1_3;
				}
				var material1_2:THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({map: tex,transparent:true,opacity:1,alphaMap:alphaMap}),
            geometry1_2:THREE.PlaneBufferGeometry = new THREE.PlaneBufferGeometry(w,h),
				    mesh1_2:THREE.Mesh = new THREE.Mesh(geometry1_2,material1_2);
				mesh1_2.position.y = -count;
				this._bg1_1.add(mesh1_2);
				this._bg1MaterialList[i] = material1_2;
			}
      this._bg1.add(this._bg1_1);
      this._bg1.position.z = -200;
			this._bgGroup.add(this._bg1);
			//------------------------------------------------------------
			var object:THREE.Group = loader.getAssetByName('wall'),
          scale:number = 180,
          len:number = object.children.length;
      //
      object.scale.x = object.scale.y = object.scale.z = scale;
			object.position.set(0,0,0);
			object.rotation.set(0,this._pi,0);
      this._bg2.position.z = 7200;//7000
			this._bg2.add(object);

      this._timeObj = {
        type:"f",
        value:0
      }
      this._rotObj = {
        type:"f",
        value:0
      }

      var bg:THREE.Mesh = <THREE.Mesh>object.getObjectByName("BG"),
          road:THREE.Mesh = <THREE.Mesh>object.getObjectByName("corridor");

      var sh:THREE.ShaderMaterial = new THREE.ShaderMaterial({
        uniforms:{
          time:this._timeObj
        },
        vertexShader:WORLD_BG_VER,
        fragmentShader:WORLD_BG_FRAG
      });

      bg.material = sh;

      this._road = road;
      var uniforms:any = THREE.UniformsUtils.merge([
          THREE.UniformsLib['lights'],
          {
            diffuse: { type: 'c', value: new THREE.Color(0xffffff) },
            time:this._timeObj
          }
       ]);
      // console.log(uniforms)
      // sh = new THREE.ShaderMaterial({
      //   uniforms:uniforms,
      //   vertexShader:ROAD_VER,
      //   fragmentShader:ROAD_FRAG,
      //   lights:true
      // });
      // this._roadShader = sh;
      // this._road.material = this._roadShader;
			for(var i = 0; i < len; i++){
				var obj:THREE.Mesh = <THREE.Mesh>object.children[i];
				// obj.material.side = 2;
        // obj.material.metal = true;
        var mat:THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
          color: 0xeeeeee,
          specular: 0x1d4294,
          shininess:30
        });
        // console.log(obj);
        if(obj.name === 'logo'){
          obj.material = mat;
          this._logo = obj;
        }
        // if(obj.name.indexOf('logo') > -1){
        //   var n:number = parseInt(obj.name.replace('logo','')) - 1;
        //   this._logoList[n] = (obj);
        // }
        if(obj.name.indexOf('protrusion') > -1){
          this._pyramidList.push(obj);
        }
        if(obj.name.indexOf('extrusion_A') > -1){
          var n:number = parseInt(obj.name.replace('extrusion_A_0','')) - 1;
          this._extrusionAList[n] = (obj);
        }
        if(obj.name.indexOf('extrusion_B') > -1){
          var n:number = parseInt(obj.name.replace('extrusion_B_0','')) - 1;
          this._extrusionBList[n] = (obj);
        }
        if(obj.name.indexOf('doorA') > -1){
          var n:number = parseInt(obj.name.replace('doorA_','')) - 1;
          this._doorAList[n] = (obj);
        }
        if(obj.name.indexOf('doorB') > -1){
          var n:number = parseInt(obj.name.replace('doorB_','')) - 1;
          this._doorBList[n] = (obj);
        }
        if(obj.name.indexOf('doorC') > -1){
          var n:number = parseInt(obj.name.replace('doorC_','')) - 1;
          this._doorCList[n] = (obj);
        }
			}
      var pointLight2:THREE.PointLight = new THREE.PointLight(0xffffff,.5,3000);
      pointLight2.position.set(0,0,300);
      // this._bg2.add(pointLight2);
      this._lightCeiling = pointLight2;
      this._mainScene.add(this._lightCeiling);

      //
      var crystalBox = new THREE.Group(),
          crystal = loader.getAssetByName('crystal'),
          crystal_base = loader.getAssetByName('crystal_base');




      crystal.name = 'crystal';
      crystal.scale.x = crystal.scale.y = crystal.scale.z = scale;
      crystal.position.set(0,200,0);
      // crystal.rotation.set(0,this._pi2,0);

      crystal_base.name = 'crystal_base';
      crystal_base.scale.x = crystal_base.scale.y = crystal_base.scale.z = scale;
      crystal_base.position.set(0,0,0);
      crystal_base.rotation.set(0,-this._pi,0);
      // crystal_base.children[0].material = sh;
      crystalBox.add(crystal);
      crystalBox.add(crystal_base);

      var posListX:any = [-600,-1820,-3050,-3470],
          posListY:any = [-240,240,-240,240],
          posListZ:any = [-280,280,140,1720],
          rotationZ:any = [0,-this._pi2,0,-this._pi2,0,-this._pi2];
      for(var i = 0; i < posListX.length; i++) {
        var crystalClone:THREE.Group = crystalBox.clone();
        crystalClone.position.set(posListX[i],posListY[i],posListZ[i]);
        crystalClone.rotation.set(0,this._pi,rotationZ[i]);
        this._bg2.add(crystalClone);
        this._crystalBoxList.push(crystalClone);
      }
      //
      var floatBox = new THREE.Group(),
          float = loader.getAssetByName('float');
      float.scale.x = float.scale.y = float.scale.z = scale;
      float.position.set(0,180,0);
      float.children[0].material = new THREE.ShaderMaterial({
        uniforms:{
          time:this._timeObj
        },
        transparent:true,
        vertexShader:FLOAT_VER,
        fragmentShader:FLOAT_FRAG
      });
      floatBox.add(float);

      var posFloatX:any = [600,-400,-1820,-3050];
      for(var i = 0; i < posFloatX.length; i++) {
        var floatClone:THREE.Group = floatBox.clone();
        floatClone.position.set(posFloatX[i],0,0);
        // floatClone.children[0].position.set(posFloatX[i],180,0);
        floatClone.rotation.set(0,0,0);
        this._bg2.add(floatClone);
        this._floatList.push(floatClone);
      }
			//
			var blMesh:THREE.PlaneGeometry = new THREE.PlaneGeometry(2000,2000);
			this._blMaterial = new THREE.MeshBasicMaterial({color: 0x003c9a,transparent:true,opacity:0});
			this._blPlane = new THREE.Mesh(blMesh,this._blMaterial);
			this._blPlane.position.set(-3100,900,3500);
			this._blPlane.rotation.set(this._pi,0,0);
			this._bg2.add(this._blPlane);
      //
      //
      // AmbLight Init
      var ambientLight:THREE.AmbientLight = new THREE.AmbientLight(0x767e8f);
      this._bg2.add(ambientLight);
      // amb2.layers.set(1);
      // this._bg2.add(amb2);
      // amb2.layers.set(1);
      //DirectionalLight&Helper Init
      // var dirLight:THREE.DirectionalLight = new THREE.DirectionalLight(0xeeeeee);
      // dirLight.position.set(0,0,0);
      // dirLight.castShadow = true;
      // this._bg2.add(dirLight);
      //PointLight&Helper Init
      // var pointLight:THREE.PointLight = new THREE.PointLight(0xeeeeee,.4,1000,1);
      // pointLight.position.set(0,0,500);
      // this._mainScene.add(pointLight);



			this._bgGroup.add(this._bg2);
			//------------------------------------------------------------
			this._videoCvs = <HTMLCanvasElement>document.createElement('canvas');
			this._videoCvs.width = 1280;
			this._videoCvs.height = 720;
			this._videoCts = <CanvasRenderingContext2D>this._videoCvs.getContext('2d');
			this._videoCts.fillStyle = '#000000';
			this._videoCts.fillRect(0, 0, this._videoCvs.width, this._videoCvs.height);
			this._videoTexture = new THREE.Texture(this._videoCvs);
			this._videoTexture.minFilter = THREE.LinearFilter;
			this._movieMaterial = new THREE.MeshBasicMaterial({map: this._videoTexture, transparent:true,side: THREE.DoubleSide,opacity:1.0});
			var movieGeometry:THREE.PlaneGeometry = new THREE.PlaneGeometry(6044,3400),
          movieScreen:THREE.Mesh = new THREE.Mesh(movieGeometry, this._movieMaterial);
			movieScreen.position.set(0,0,0);

      //
      var eyesTexture = loader.getAssetByName('eyes');
      this._eyesMaterial = new THREE.MeshBasicMaterial({map: eyesTexture, transparent:true,side: THREE.DoubleSide,opacity:1.0});
			var eyesGeometry:THREE.PlaneGeometry = new THREE.PlaneGeometry(6044,3400),
          eyesScreen:THREE.Mesh = new THREE.Mesh(movieGeometry, this._eyesMaterial);
			eyesScreen.position.set(0,0,0);
      if ((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) this._bg3.add(eyesScreen);
      this._bg3.add(movieScreen);
      this._bg3.position.z = -1100;
      this._bgGroup2.add(this._bg3);
			//
			var texture = loader.getAssetByName('bg4'),
          material:THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
			}),
          geometry4:THREE.BoxGeometry = new THREE.BoxGeometry(14000, 10500, 8500),
          mesh4:THREE.Mesh = new THREE.Mesh(geometry4,material);
			this._bg4.add(mesh4);
			this._bg4.position.z = -3000;
			this._bgGroup2.add(this._bg4);
			//
		}
    private _resetAnim():void{
      TrTween.parallel(//1
        TrTween.prop(this._coCopy,{scaleX:1,scaleY:1,y:0,alpha:1}),
        TrTween.prop(this._bgGroup,{visible:true}),
        TrTween.prop(this._bgGroup.position,{z:0}),
        TrTween.prop(this._bgGroup2,{visible:false}),
        TrTween.prop(this._bg1.position,{x:0,y:0}),
        TrTween.prop(this._bg1.rotation,{y:0}),
        TrTween.prop(this._bg1Material,{opacity:1}),
        TrTween.prop(this._bg1MaterialList[0],{opacity:1}),
        TrTween.prop(this._bg1MaterialList[1],{opacity:1}),
        TrTween.prop(this._bg1MaterialList[2],{opacity:1}),
        TrTween.prop(this._bg2.rotation,{y:0}),
        TrTween.prop(this._bg2.position,{x:0}),
        TrTween.prop(this._bg3.position,{z:-1100}),
        TrTween.prop(this._movieMaterial,{opacity:1}),
        TrTween.prop(this._eyesMaterial,{opacity:1})
      ).play();
    }

    private _setAnim():void
		{
      this._animT = TrTween.serial(
        TrTween.parallel(//1
          TrTween.prop(this._coCopy,{scaleX:1,scaleY:1,y:0,alpha:1}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup.position,{z:0}),
          TrTween.prop(this._bgGroup2,{visible:false}),
          TrTween.prop(this._bg1.position,{x:0,y:0}),
          TrTween.prop(this._bg1.rotation,{y:0}),
          TrTween.prop(this._bg1Material,{opacity:1}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:1}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:1}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:1}),
          TrTween.prop(this._bg2.rotation,{y:0}),
          TrTween.prop(this._bg2.position,{x:0}),
          TrTween.prop(this._bg3.position,{z:-1100}),
          TrTween.prop(this._movieMaterial,{opacity:1}),
          TrTween.prop(this._eyesMaterial,{opacity:1}),

          // TrTween.prop(this._pyramidList[0].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[1].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[2].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[3].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[4].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[5].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[6].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[7].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[8].position,{y:-.5}),
          // TrTween.prop(this._pyramidList[9].position,{y:-.5}),

          TrTween.prop(this._crystalBoxList[0].position,{y:-500}),
          TrTween.prop(this._crystalBoxList[1].position,{y:500}),
          TrTween.prop(this._crystalBoxList[2].position,{y:-500}),
          TrTween.prop(this._crystalBoxList[3].position,{y:500}),
          TrTween.wait(1.0)
        ),
        TrTween.parallel(//2
          TrTween.tween(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0},{scaleX:1,scaleY:1,y:0,alpha:1},.2,Linear.easeInOut),
          TrTween.tween(this._bg1.position,{x:0,y:800},{x:0,y:0},1,Linear.easeInOut),
          TrTween.tween(this._bg1Material,{opacity:.6},{opacity:1},1,Linear.easeInOut),
          TrTween.tween(this._bg1MaterialList[0],{opacity:.7},{opacity:1},1,Linear.easeInOut),
          TrTween.tween(this._bg1MaterialList[1],{opacity:.8},{opacity:1},1,Linear.easeInOut),
          TrTween.tween(this._bg1MaterialList[2],{opacity:.9},{opacity:1},1,Linear.easeInOut),
          TrTween.tween(this._bgGroup.position,{z:-6600},{z:0},1,Linear.easeInOut),

          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:false}),
          TrTween.prop(this._bg1.rotation,{y:0}),
          TrTween.prop(this._bg2.rotation,{y:0}),
          TrTween.prop(this._bg2.position,{x:0}),
          TrTween.prop(this._bg3.position,{z:-1100}),
          TrTween.prop(this._movieMaterial,{opacity:1}),
          TrTween.prop(this._eyesMaterial,{opacity:1})
        ),
        TrTween.parallel(//3
          TrTween.prop(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup.position,{z:-6600}),
          TrTween.prop(this._bgGroup2,{visible:false}),
          TrTween.prop(this._bg1.position,{x:0,y:800}),
          TrTween.prop(this._bg1.rotation,{y:0}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.rotation,{y:0}),
          TrTween.prop(this._bg2.position,{x:0}),
          TrTween.prop(this._bg3.position,{z:-1100}),
          TrTween.prop(this._movieMaterial,{opacity:1}),
          TrTween.prop(this._eyesMaterial,{opacity:1}),
          TrTween.wait(1.0)
        ),
        TrTween.parallel(//4
          TrTween.prop(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:false}),
          TrTween.prop(this._bg1.position,{y:800}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.position,{x:0}),
          TrTween.prop(this._bg3.position,{z:-1100}),
          TrTween.prop(this._movieMaterial,{opacity:1}),
          TrTween.prop(this._eyesMaterial,{opacity:1}),

          TrTween.serial(
            TrTween.tween(this._bgGroup.position,{z:-7000},{z:-6600},.2,Linear.easeInOut),
            TrTween.parallel(
              TrTween.prop(this._bgGroup.position,{z:-7000}),
              TrTween.tween(this._bg2.rotation,{y:-this._pi},{y:0},.4,Linear.easeInOut),
              TrTween.tween(this._bg1.rotation,{y:-this._pi},{y:0},.4,Linear.easeInOut),
              TrTween.tween(this._bg1.position,{x:10000},{x:0},.4,Linear.easeInOut)
            ),
            TrTween.parallel(
              TrTween.tween(this._bgGroup.position,{z:-3850},{z:-7000},.35,Linear.easeInOut),
              TrTween.delay(TrTween.tween(this._bgGroup.rotation,{z:this._pi*4},{z:0},.25,Linear.easeInOut),.1),
              TrTween.delay(TrTween.tween(this._bg2.position,{x:-3810},{x:0},.15,Linear.easeInOut),.2),
              TrTween.delay(TrTween.tween(this._bg2.rotation,{y:-this._pi2},{y:-this._pi},.15,Linear.easeInOut),.2),
              //
              TrTween.delay(TrTween.tween(this._bgGroup.position,{z:-3850},{z:-3850},.05,Linear.easeInOut),.35),
              TrTween.delay(TrTween.tween(this._bgGroup.rotation,{z:this._pi*4},{z:this._pi*4},.05,Linear.easeInOut),.35),
              TrTween.delay(TrTween.tween(this._bg2.position,{x:-3810},{x:-3810},.05,Linear.easeInOut),.35),
              TrTween.delay(TrTween.tween(this._bg2.rotation,{y:-this._pi2},{y:-this._pi2},.05,Linear.easeInOut),.35),
              //
              TrTween.delay(TrTween.tween(this._crystalBoxList[0].position,{y:-240},{y:-500},.03,Linear.easeInOut),.0),
              TrTween.delay(TrTween.tween(this._crystalBoxList[1].position,{y:240},{y:500},.03,Linear.easeInOut),.16),
              TrTween.delay(TrTween.tween(this._crystalBoxList[2].position,{y:-240},{y:-500},.03,Linear.easeInOut),.26),
              TrTween.delay(TrTween.tween(this._crystalBoxList[3].position,{y:240},{y:500},.03,Linear.easeInOut),.32),
              //
              TrTween.delay(TrTween.tween(this._doorAList[0].position,{z:2},{z:0},.04,Linear.easeInOut),.36),
              TrTween.delay(TrTween.tween(this._doorAList[1].position,{z:-2},{z:0},.04,Linear.easeInOut),.36)
            )
          )
        ),
        TrTween.parallel(//5
          TrTween.prop(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:false}),
          TrTween.prop(this._bgGroup.position,{z:-3850}),
          TrTween.prop(this._bg1.position,{x:10000,y:800}),
          TrTween.prop(this._bg1.rotation,{y:-this._pi}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.rotation,{y:-this._pi2}),
          TrTween.prop(this._bg2.position,{x:-3810}),
          TrTween.prop(this._bg3.position,{z:-1100}),
          TrTween.prop(this._movieMaterial,{opacity:1}),
          TrTween.prop(this._eyesMaterial,{opacity:1}),
          TrTween.wait(1.0)
        ),
        TrTween.parallel(//6
          TrTween.prop(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:true}),
          TrTween.delay(TrTween.tween(this._logo.position,{y:2},{y:0},.05,Linear.easeInOut),0),
          TrTween.delay(TrTween.tween(this._doorBList[0].position,{y:-2},{y:0},.05,Linear.easeInOut),.0),
          TrTween.delay(TrTween.tween(this._doorBList[1].position,{y:2},{y:0},.05,Linear.easeInOut),.0),
          TrTween.delay(TrTween.tween(this._doorCList[0].position,{z:4},{z:0},.05,Linear.easeInOut),.05),
          TrTween.delay(TrTween.tween(this._doorCList[1].position,{z:-4},{z:0},.05,Linear.easeInOut),.05),
          TrTween.delay(TrTween.tween(this._bg3.position,{z:500},{z:-1100},.4,Linear.easeInOut),.6),
          TrTween.delay(TrTween.tween(this._movieMaterial,{opacity:0},{opacity:1},.3,Linear.easeInOut),.7),
          TrTween.delay(TrTween.tween(this._eyesMaterial,{opacity:0},{opacity:1},.3,Linear.easeInOut),.7),

          TrTween.prop(this._bg1.position,{x:10000,y:800}),
          TrTween.prop(this._bg1.rotation,{y:-this._pi}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.rotation,{y:-this._pi2}),
          TrTween.prop(this._bg2.position,{x:-3810})
        ),
        TrTween.parallel(//7
          TrTween.prop(this._coCopy,{scaleX:0,scaleY:0,y:-50,alpha:0}),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:true}),
          TrTween.prop(this._bgGroup.position,{z:-3850}),
          TrTween.prop(this._bg3.position,{z:500}),
          TrTween.prop(this._movieMaterial,{opacity:0}),
          TrTween.prop(this._eyesMaterial,{opacity:0}),

          TrTween.prop(this._bg1.position,{x:10000,y:800}),
          TrTween.prop(this._bg1.rotation,{y:-this._pi}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.rotation,{y:-this._pi2}),
          TrTween.prop(this._bg2.position,{x:-3810}),
          TrTween.wait(1.0)
        ),
        TrTween.parallel(//8
          TrTween.delay(TrTween.tween(this._coCopy,{scaleX:1,scaleY:1,y:0,alpha:1},{scaleX:5,scaleY:5,y:50,alpha:0},.01,Linear.easeInOut),.8),
          TrTween.prop(this._bgGroup,{visible:true}),
          TrTween.prop(this._bgGroup2,{visible:true}),
          TrTween.prop(this._bgGroup.position,{z:-3850}),
          TrTween.prop(this._bg3.position,{z:500}),
          TrTween.prop(this._movieMaterial,{opacity:0}),
          TrTween.prop(this._eyesMaterial,{opacity:0}),
          TrTween.prop(this._bg1.position,{x:10000,y:800}),
          TrTween.prop(this._bg1.rotation,{y:-this._pi}),
          TrTween.prop(this._bg1Material,{opacity:.6}),
          TrTween.prop(this._bg1MaterialList[0],{opacity:.7}),
          TrTween.prop(this._bg1MaterialList[1],{opacity:.8}),
          TrTween.prop(this._bg1MaterialList[2],{opacity:.9}),
          TrTween.prop(this._bg2.rotation,{y:-this._pi2}),
          TrTween.prop(this._bg2.position,{x:-3810}),
          TrTween.wait(1.0)
        )
			)
		}
    public animSecond(type:string):void
    {
      this._isSecType = type;
      if(this._isSecType === 'about'){
        TrTween.parallel(
					TrTween.prop(this._blMaterial,{opacity:0}),
          TrTween.tween(this._bgInner.position,{z:-300},{z:0},.3,Linear.easeInOut),
          TrTween.delay(TrTween.tween(this._bgParent.position,{x:-400,y:0,z:0},{x:0,y:0,z:0},.3,Linear.easeInOut),.25),
          TrTween.delay(TrTween.tween(this._bgParent.rotation,{x:0,y:this._pi/4},{x:0,y:0},.3,Linear.easeInOut),.25)
        ).play();
      }else if(this._isSecType === 'works'){
        TrTween.parallel(
          TrTween.prop(this._blMaterial,{opacity:.2}),
          TrTween.tween(this._bgInner.position,{z:-1000},{z:0},.3,Linear.easeInOut),
          TrTween.delay(TrTween.tween(this._bgParent.position,{x:0,y:350,z:1200},{x:0,y:0,z:0},.3,Linear.easeInOut),.25),
          TrTween.delay(TrTween.tween(this._bgParent.rotation,{x:-this._pi,y:0},{x:0,y:0},.3,Linear.easeInOut),.25)
        ).play();
      }else if(this._isSecType === 'member'){
        TrTween.parallel(
					TrTween.prop(this._blMaterial,{opacity:0}),
          TrTween.prop(this._bgInner.position,{z:0}),
          TrTween.prop(this._bgParent.position,{x:0,y:0,z:0}),
          TrTween.prop(this._bgParent.rotation,{x:0,y:0})
        ).play();
      }
    }
    public backSecond():void
    {
      // console.log(this._isSecType);
      if(this._isSecType === 'about'){
        TrTween.parallel(
					TrTween.prop(this._blMaterial,{opacity:0}),
          TrTween.delay(TrTween.tween(this._bgInner.position,{z:0},{z:-300},.3,Linear.easeInOut),.25),
          TrTween.tween(this._bgParent.position,{x:0,y:0,z:0},{x:-400,y:0,z:0},.3,Linear.easeInOut),
          TrTween.tween(this._bgParent.rotation,{x:0,y:0},{x:0,y:this._pi/4},.3,Linear.easeInOut)
        ).play();
      }else if(this._isSecType === 'works'){
        TrTween.parallel(
          TrTween.delay(TrTween.tween(this._bgInner.position,{z:0},{z:-1000},.3,Linear.easeInOut),.25),
          TrTween.tween(this._bgParent.position,{x:0,y:0,z:0},{x:0,y:350,z:850},.3,Linear.easeInOut),
          TrTween.tween(this._bgParent.rotation,{x:0,y:0},{x:-this._pi,y:0},.3,Linear.easeInOut),
					TrTween.delay(TrTween.prop(this._blMaterial,{opacity:0}),.3)
        ).play();
      }else if(this._isSecType === 'member'){
        TrTween.parallel(
					TrTween.prop(this._blMaterial,{opacity:0}),
          TrTween.prop(this._bgInner.position,{z:0}),
          TrTween.prop(this._bgParent.position,{x:0,y:0,z:0}),
          TrTween.prop(this._bgParent.rotation,{x:0,y:0})
        ).play();
      }
    }
    private _getDevice():string
		{
      var userAgent = window.navigator.userAgent.toLowerCase();
      if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0 || navigator.userAgent.indexOf('iPad') > 0){
        //タブレット
        return 'tb';
      } else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        //スマホ
        return 'sp';
      } else {
        return 'pc';
      }
    }
	}
}
