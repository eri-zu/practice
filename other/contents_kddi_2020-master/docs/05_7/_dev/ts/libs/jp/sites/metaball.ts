/// <reference path="../../threejs/three.d.ts" />
/// <reference path='../contents/TrTween.d.ts' />
/// <reference path="./base.ts" />

import Linear  = jp.contents.easing.Linear;
import Expo  = jp.contents.easing.Expo;


// import Back  = jp.contents.easing.Back;

const POINT_VERTEX:string = `
uniform float size;
varying vec4 pos;
uniform sampler2D waterMap;
void main() {
	vec3 p3 = position;
	vec4 mvPosition = modelViewMatrix * vec4(p3, 1.0);
	gl_PointSize = (size * 6.5) * (40.0 / length(mvPosition.xyz));
	pos = gl_Position = projectionMatrix * mvPosition;
}
`;

const POINT_FRAG:string = `
uniform sampler2D waterMap;
varying vec4 pos;
void main() {
	if(pos.z > 450.0 || pos.z < -1000.) discard;
	vec4 text = texture2D(waterMap,gl_PointCoord.xy);
	vec4 base = vec4(gl_FragCoord.y * .0018,gl_PointCoord.x * 1.1,pos.z,text.a * .5);
	gl_FragColor = base;
}
`;

const PLANE_VERTEX:string = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec4 mvpPos;
uniform float time;
uniform sampler2D texture;

void main() {
	vUv = uv;
	vec3 pos = position;
	vec4 color = texture2D(texture,uv);
	pos.z = color.z;
	pos.z += color.a * 2. * color.a;
	vNormal = normalize(modelViewMatrix * vec4((modelViewMatrix * vec4(pos,1.0)).xyz,.0)).xyz;
	mvpPos = (projectionMatrix * modelViewMatrix * vec4(pos,1.0));
	gl_Position = mvpPos;
}
`
const PLANE_FRAG:string = `
uniform sampler2D refrection;
uniform sampler2D texture;
uniform sampler2D logo;
uniform float time;
uniform int type;
uniform float threshold;
uniform int uselogo;
varying vec2 vUv;
varying vec3 vNormal;
varying vec4 mvpPos;
vec3 Hue( float hue )
{
	vec3 rgb = fract(hue + vec3(0.0,2.0/3.0,1.0/3.0));
	rgb = abs(rgb*2.0-1.0);
	return clamp(rgb*3.0-1.0,0.0,1.0);
}
vec3 HSVtoRGB( vec3 hsv )
{
	return ((Hue(hsv.x)-1.0)*hsv.y+1.0) * hsv.z;
}
void main(){
	vec4 base = texture2D(texture,vUv);
	vec3 color = base.xyz;

	float a = clamp(base.a * 4.15 - 1.5,0.,1.);
	float len = length(color);

	vec3 ref = refract(normalize(mvpPos.xyz - vec3(0.,0.,len * 150. )),vNormal,.9);
	vec4 env,norEnv,refEn;
	env = uselogo == 0 ? vec4(texture2D(refrection,vec2(vUv.x + len * .05 + cos(time * 100.) * .001,vUv.y + len * .05 + abs(sin(time + 3.14)) * .01)).xyz,1.0) : vec4(texture2D(logo,vec2(vUv.x + len * .01 + cos(time * 100.) * .001,vUv.y + len * .01)).xyz,1.0);
	refEn = uselogo == 0 ? vec4(texture2D(refrection,ref.xy * base.r * 10.).xyz,1.0) : vec4(texture2D(logo,ref.xy * base.r * 10.).xyz,1.0);
	float g = clamp(color.g * 5. - 1.5,0.,1.);
	vec3 fillColor = type == 0 ? vec3(3.,100.,93.) : type == 1 ? vec3(254.,100.,99.) : vec3(59.,100.,99.);
	vec3 hsvRgb = HSVtoRGB(vec3(fillColor.x/ 360. + cos(time * .1),fillColor.y / 100.,fillColor.z / 100.));

	color = g > .5 ? (hsvRgb * .8 + env.xyz * (len * 1.1)) * .5 : g > .01 ? (hsvRgb * .9 + env.xyz * .5) * 1.2 : (hsvRgb * 1.2  + refEn.xyz * .3 + env.xyz * .3) * .5;
	gl_FragColor = vec4(color * threshold + (color * env.xyz + vec3(73./255.,81./255.,167./255.)) * (1. - threshold) ,a * base.r * (.8 + 1.4 * threshold) * len);
}
`


namespace jp.sites
{
	// const RED_COLOR:THREE.Vector3 = new THREE.Vector3(238 / 255,10 / 255,0 / 255);
	// const BLUE_COLOR:THREE.Vector3 = new THREE.Vector3(22/ 255,0,252 / 255);
	// const YELLOW_COLOR:THREE.Vector3 = new THREE.Vector3(210/255 ,150/255, 0/255);
	const APP = (<any>jp.contents).util.Application;
	// const RED_COLOR:THREE.Vector3 = new THREE.Vector3(3,100,93);
	// const BLUE_COLOR:THREE.Vector3 = new THREE.Vector3(254,100,99);
	// const YELLOW_COLOR:THREE.Vector3 = new THREE.Vector3(59,100,99);
	const MODE_FORCE:string = "force";
	const MODE_CENTER:string = "center";
	const RADIAN:number =  Math.PI / 180;
	const R_WIDTH:number = 360;
	const R_HEIGHT:number = 360;
	const R_DEPTH:number  = 0;
	const GRAVITY:number = .05;
	const RANGE:number = 18;
	const RANGE2:number = RANGE * RANGE;
	const DENSITY:number = 4;
	const PRESSURE:number = .8;
	const PRESSURE_NEAR:number = .8;
	const VISCOSITY:number = .4;
	const NUM_GRIDS:number = Math.round(R_WIDTH / RANGE);
	const INV_NUM_GRIDS:number = 1 / NUM_GRIDS
	const RADIUS:number = 18;
	const CENTER:THREE.Vector3 = new THREE.Vector3(R_WIDTH >> 1,R_HEIGHT >> 1,0);
	const NUM_PARTICLES:number = 550;
	const RAD_MAX = RADIUS * 2.5;
	const DRAG:number = .0003;
	const FORCE:number = .99;
	const FORCE_MAPS:Array<string> = [
		"/img/texture/map01.png",
		"/img/texture/map02.png",
		"/img/texture/map03.png",
		"/img/texture/map04.png",
		"/img/texture/map_menu.png",
		"/img/texture/map_pin.png",
		"/img/texture/yamazaki_item	.png",
		"/img/texture/sugibayashi_item.png",
		"/img/texture/yyoshioka_item.png",
		"/img/texture/kawada_item.png",
		"/img/texture/ryoko_item.png",
		"/img/texture/yumiko_item.png",
    "/img/texture/akese_item.png",
		"/img/texture/fukushima_item.png",
		"/img/texture/hasegawa_item.png",
		"/img/texture/asai_item.png",
		"/img/texture/sekigawa_item.png",
		"/img/texture/tsuchiya_item.png",
		"/img/texture/ashizawa_item.png",
		"/img/texture/matsuo_item.png",
		"/img/texture/okazaki_item.png",
		"/img/texture/ohno_item.png",
		"/img/texture/kojima_item.png",
    "/img/texture/uno_item.png",
    "/img/texture/ishigami_item.png",
    "/img/texture/hagihira_item.png",
    "/img/texture/tanaka_item.png",
    "/img/texture/kimura_item.png",
    "/img/texture/yasutake_item.png",
    "/img/texture/fukuda_item.png",
    "/img/texture/yamada_item.png",
    "/img/texture/kosaka_item.png",
    "/img/texture/ishikawa_item.png",
    "/img/texture/magatani_item.png",
    "/img/texture/noda_item.png",
    "/img/texture/oike_item.png",
    "/img/texture/hirayama_item.png",
    "/img/texture/ando_item.png",
		"/img/texture/umeno_item.png"
	];

	interface MemInfo
	{
		x:number;
		y:number;
		scale:number;
		size:number;
	}
	var random:(n1,n2)=>number = (min:number,max:number):number =>
	{
		return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 5) * (max - min) + min;
	}
	const MEM_INFO:Array<MemInfo> = [
		{x:-6,y:-62,scale:0.5,size:40},//yamazaki
		{x:-4,y:86,scale:0.8,size:40},//sugihayasi
		{x:14,y:16,scale:0.5,size:40},//yo-suke
		{x:-14,y:30,scale:0.6,size:40},//kawada
		{x:0,y:-21,scale:1,size:50},//ryoko
		{x:72,y:69,scale:0.3,size:40},//yumiko
    {x:-5,y:93,scale:0.6,size:40},//akese
    {x:13,y:-30,scale:0.8,size:45},//fukushima
		{x:-10,y:59,scale:0.5,size:40},//hasegawa
		{x:54,y:80,scale:0.6,size:50},//asai
		{x:-61,y:-21,scale:0.8,size:45},//sekigawa
		{x:44,y:21,scale:0.6,size:40},//tsutiya
		{x:35,y:20,scale:0.55,size:40},//ashizawa
		{x:-30,y:-2,scale:0.9,size:50},//matsuo
		{x:-35,y:13,scale:0.6,size:40},//tokazaki
		{x:5,y:26,scale:0.4,size:40},//ohno
		{x:15,y:24,scale:0.65,size:40},//kojima
    {x:1,y:74,scale:0.5,size:40},//uno
    {x:-45,y:81,scale:0.7,size:40},//ishigami
    {x:1,y:-74,scale:0.9,size:40},//hagihira
    {x:69,y:8,scale:0.7,size:40},//tanaka
    {x:-54,y:71,scale:0.7,size:40},//kimura
    {x:-59,y:-22,scale:0.6,size:40},//yasutake
    {x:-40,y:92,scale:0.7,size:40},//fukuda
    {x:-31,y:-7,scale:0.9,size:40},//yamada
    {x:25,y:58,scale:0.7,size:40},//kosaka
    {x:67,y:-33,scale:0.6,size:40},//ishikawa
    {x:67,y:54,scale:0.9,size:40},//magatani
    {x:-34,y:11,scale:0.6,size:40},//noda
    {x:-36,y:85,scale:0.7,size:40},//oike
    {x:-59,y:-8,scale:0.9,size:40},//hirayama
    {x:-30,y:7,scale:0.8,size:40},//ando
		{x:-40,y:65,scale:0.7,size:40}//umeno
	]
	class Setting
	{
		private _density:number;
		private _viscosity:number;
		private _centerX:number;
		private _centerY:number;
		private _centerZ:number;
		private _pressure:number;
		private _pressureNear:number;
		private _radius:number;
		private _degree:number;
		// private _thresholdObj:UniformValue;
		public dirx:number;
		public diry:number;
		private static _instance:Setting;
		public static getInstance():Setting
		{
			if(!Setting._instance) Setting._instance = new Setting();
			return Setting._instance;
		}
		constructor()
		{
			this.reset();
		}
		public reset():void
		{
			this._degree = 0;
			this._density = DENSITY;
			this._viscosity = VISCOSITY;
			this._pressure = PRESSURE;
			this._pressureNear = PRESSURE_NEAR;
			this._centerX = CENTER.x;
			this._centerY = CENTER.y;
			this._centerZ = CENTER.z;
			this._radius = RADIUS;
		}
		public get radmax():number { return this._radius * 3.5;}
		public get radius():number { return this._radius;}
		public get density():number { return this._density;}
		public get viscosity():number{return this._viscosity;}
		public get pressure():number{return this._pressure;}
		public get pressureNear():number{return this._pressureNear;}
		public get centerX():number{return this._centerX;}
		public get centerY():number{return this._centerY;}
		public get centerZ():number{return this._centerZ;}
		public set radius(value:number) { this._radius = value;}
		public set density(value:number) { this._density = value;}
		public set viscosity(value:number){this._viscosity = value;}
		public set pressure(value:number){this._pressure = value;}
		public set pressureNear(value:number){this._pressureNear = value;}
		public set centerX(value:number){this._centerX = value;}
		public set centerY(value:number){this._centerY = value;}
		public set centerZ(value:number){this._centerZ = value;}

	}
	var gParam:Setting = Setting.getInstance();
	class ForceMap
	{
		private _cvs:HTMLCanvasElement;
		private _ctx:CanvasRenderingContext2D;
		private _idata:Uint8ClampedArray;
		private _width:number;
		private _height:number;
		private _id:number = -1;
		private _images:Array<HTMLImageElement>;
		private _forcePositionX:THREE.Vector3;
		private _forcePositionY:THREE.Vector3;
		private _yPosArrays:Array<Array<number>>;
		constructor()
		{
			this._forcePositionX = new THREE.Vector3();
			this._forcePositionY = new THREE.Vector3();
			this._yPosArrays = [];
			this._images = [];
		}
		public getCurrentTowardPosition(type:number):Array<number>
		{
			return this._yPosArrays[type];
		}
		public setImage(index:number,img:HTMLImageElement):void
		{
			this._images[index] = img;
			if(!this._cvs) this._init();
			// if(index == 3) this.draw();
		}
		private _init():void
		{
			this._cvs = <HTMLCanvasElement>document.createElement("canvas");
			this._cvs.width = R_WIDTH;
			this._width = this._images[0].width;
			this._cvs.height = R_HEIGHT;
			this._height = this._images[0].height;
			this._ctx = this._cvs.getContext("2d");
		}
		public draw():void
		{
			this._ctx.drawImage(this._images[this._id],0,0);
			this._idata = this._ctx.getImageData(0,0,2,1).data;

			// console.log(this._idata[0],this._idata[1],this._idata[2],this._idata[4],this._idata[5],this._idata[6])

			this._forcePositionX.x = R_WIDTH - (this._idata[0] /256) * R_WIDTH;
			this._forcePositionX.y = R_WIDTH - (this._idata[1] /256) * R_WIDTH;
			this._forcePositionX.z = R_WIDTH - (this._idata[2] /256) * R_WIDTH;
			this._forcePositionY.x = this._idata[4] == 0 ? CENTER.y : R_HEIGHT - (this._idata[4] /256) * R_HEIGHT;
			this._forcePositionY.y = this._idata[5] == 0 ? CENTER.y : R_HEIGHT - (this._idata[5] /256) * R_HEIGHT;
			this._forcePositionY.z = this._idata[6] == 0 ? CENTER.y : R_HEIGHT - (this._idata[6] /256) * R_HEIGHT;
			this._ctx.drawImage(this._images[this._id],0,0,this._width,this._height,0,0,R_WIDTH,R_HEIGHT);
			this._idata = this._ctx.getImageData(0,0,R_WIDTH,R_HEIGHT).data;


			this._idata[0] =
			this._idata[1] =
			this._idata[2] =
			this._idata[3] =
			this._idata[4] =
			this._idata[5] =
			this._idata[6] =
			this._idata[7] = 0;

			this._yPosArrays[0] = [this._forcePositionX.x,this._forcePositionY.x]
			this._yPosArrays[1] = [this._forcePositionX.z,this._forcePositionY.z]
			this._yPosArrays[2] = [this._forcePositionX.y,this._forcePositionY.y]

		}
		public changePosition(pos:number):void
		{
			if(this._id == pos) return;
			this._id = pos;
			this.draw();
		}
		public reset():void
		{
			this._id = -1;
		}
		public getPixel(x:number,y:number):Uint8ClampedArray
		{
			if(! this._idata ) return new Uint8ClampedArray(3);
			var d:Uint8ClampedArray = this._idata,
				arr:Uint8ClampedArray = new Uint8ClampedArray(3),
				w:number = R_WIDTH,
				h:number = R_HEIGHT,
				pos:number;
			x = R_WIDTH - (~~x);
			y = R_HEIGHT - (~~y);
			pos = (y * w) * 4 + (x % w) * 4;
			arr[0] = d[pos];
			arr[1] = d[pos + 1];
			arr[2] = d[pos + 2];
			return arr;
		}
		public get id():number { return this._id;}
	}

	class LiquidParticle
	{
		public x:number;
		public y:number;
		public z:number;
		private _type:number;
		public gx:number = 0;
		public gy:number = 0;
		public gz:number = 0;
		public vx:number = 0;
		public vy:number = 0;
		public vz:number = 0;
		public fx:number = 0;
		public fy:number = 0;
		public fz:number = 0;
		public density:number;
		public densityNear:number;
		public next:LiquidParticle;
		private _tmpV:THREE.Vector3;
		private _diff:()=>void;
		private _vfx:number;
		private _vfy:number;
		private _grav:number;
		private _gfx:number;
		private _count:number;
		private _m:number;
		private _forceEnabled:boolean;
		private _moveFunc:(fm:ForceMap)=>void;
		constructor(x:number,y:number,z:number,type:number,forceEnable:boolean = true)
		{
			this.x = x;
			this.y = y;
			this.z = z;
			this._vfx = Math.random() - .5;
			this._vfy = Math.random() - .5;
			this._tmpV = new THREE.Vector3();
			this._type = type;
			this._m = Math.random() * .4;
			this._forceEnabled = forceEnable;
			this._moveFunc = Metaball.mode == MODE_FORCE ? this._moveForce : this._moveCenter;
		}

		private _moveCenter(fm:ForceMap = null):void
		{
			this.y -= 5;
			if(this.density > 0)
			{
				this.vx += this.fx / (this.density * .9 + .1);
				this.vy += this.fy / (this.density * .9 + .1);
				this.vz += this.fz / (this.density * .9 + .1);
			}
			this.x += this.vx;
			this.y += this.vy;
			this.z += this.vz;
			this._roundPosition();
		}
		private _roundPosition():void
		{
			var v:THREE.Vector3 = this._tmpV,
				dx:number = .15,
				r:number = gParam.radmax,
				r2:number = r * r,
				d:number = 0;
			v.x = this.x - gParam.centerX;
			v.y = this.y - gParam.centerY;
			v.z = this.z - gParam.centerZ;

			d = v.y * v.y + v.x * v.x + v.z * v.z ;
			if(d > r2)
			{
				// dx = (d / r2) * .003;
				v.normalize()
				v.multiplyScalar(r);
				this.vx += (gParam.centerX  - this.x) * dx - this.vx * dx;
				this.vy += (gParam.centerY  - this.y) * dx - this.vy * dx;
				this.vz += (gParam.centerZ + v.z - this.z) * dx - this.vz * dx;
			}
		}
		private _diffFunc(fm:ForceMap):Array<number>
		{
			var a:Array<number> = [],
				i:number = this._type;
			a[0] = fm.getPixel(this.x ,this.y)[this._type] || 0;
			a[1] = fm.getPixel(this.x  + 1,this.y)[this._type] || 0;
			a[2] = fm.getPixel(this.x ,this.y + 1)[this._type] || 0;
			a[3] = a[0] + a[1] + a[2];
			return a;
		}
		private _moveForce(fm:ForceMap):void
		{
			if(!this._forceEnabled){ this.z = -600; return;}
			var pos:Array<number> = this._diffFunc(fm),
				r:number = .09,
				v3:Array<number> = fm.getCurrentTowardPosition(this._type),
				count:number = 1;

			if(this.density > 0)
			{
				this._vfx += (this.fx / (this.density * .9 + .1)) * r;
				this._vfy += (this.fy / (this.density * .9 + .1)) * r;
			}
			this._gfx *= .99;
			this._vfy += (v3[1] - this.y) * this._gfx;
			this._vfx += (v3[0] - this.x) * this._gfx;


			this._vfx += (pos[1] - pos[0]) / 128 * FORCE;
			if(this._vfx > .98 || this._vfx < -.98) this._vfx *= DRAG;
			this._vfy += (pos[2] - pos[0]) / 128 * FORCE;
			if(this._vfy > .98 || this._vfy < -.98) this._vfy *= DRAG;

			if(pos[3] <= 50) this.z += (600 - this.z ) * .1;
			else this.z += (0 - this.z ) * .9;

			this.vx += this._vfx;
			this.vy += this._vfy;
			this._grav *= .998;
			if(this.vx > .8 || this.vx < -.8) this.vx *= this._grav;
			if(this.vy > .8 || this.vy < -.8) this.vy *= this._grav;

			this.x += this.vx;
			this.y += this.vy;


			if(this.x < 0) {this.x = 360;}
			else if(this.x > 360) {this.x = 0;}

			if(this.y < 0) {this.y = 360;}
			else if(this.y > 360) {this.y = 0;}
		}
		public move(fm:ForceMap):void
		{
			this._moveFunc(fm);
		}
		public switchMove():void
		{
			this._moveFunc = Metaball.mode == MODE_CENTER ? this._moveCenter : this._moveForce;
			// console.log("hoge")
			if(this._moveFunc === this._moveForce)
			{
				this.vx = this._vfx = (Math.random() - .5) * 6;
				this.vy = this._vfy = (Math.random() - .5) * 6;
				this._grav = .998;
				this._gfx  = .003;
				this._count = 7.5;
			}
		}
		public get type():number { return this._type;}
		public get forceEnable():boolean { return this._forceEnabled;}
	}
	class Neighbor
	{
		public p1:LiquidParticle;
		public p2:LiquidParticle;
		public distance:number = 0;
		public nx:number = 0;
		public ny:number = 0;
		public nz:number = 0;
		public weight:number = 0;
		constructor(){}
		public setParticle(p1:LiquidParticle,p2:LiquidParticle):void
		{
			this.p1 = p1;
			this.p2 = p2;
			this.nx = p1.x - p2.x;
			this.ny = p1.y - p2.y;
			this.nz = p1.z - p2.z;
			this.distance = Math.sqrt(this.nx * this.nx + this.ny * this.ny + this.nz * this.nz);
			this.weight = 1 - (this.distance / RANGE);

			var density:number = this.weight * this.weight,
				inv:number = 1 / this.distance;

			this.p1.density += density;
			this.p2.density += density;
			density *= this.weight * gParam.pressureNear;
			this.p1.densityNear += density;
			this.p2.densityNear += density;
			this.nx *= inv;
			this.ny *= inv;
			this.nz *= inv;

		}
		public calcForce():void
		{
			var p:number = 0,
			p1:LiquidParticle = this.p1,
			p2:LiquidParticle = this.p2;
			if(p1.type != p2.type) p = (p1.density + p2.density - gParam.density * .95) * gParam.pressure;
			else p = (p1.density + p2.density - gParam.density) * gParam.pressure;

			// p = (p1.density + p2.density - gParam.density) * gParam.pressure;
			var pn:number = (p1.densityNear + p2.densityNear) * gParam.pressureNear,
				pw:number = this.weight * (p + this.weight * pn),
				vw:number = this.weight * gParam.viscosity,
				fx:number = this.nx * pw,
				fy:number = this.ny * pw,
				fz:number = this.nz * pw;
			fx += (p2.vx - p1.vx) * vw;
			fy += (p2.vy - p1.vy) * vw;
			fz += (p2.vz - p2.vz) * vw;
			p1.fx += fx;
			p1.fy += fy;
			p1.fz += fz;
			p2.fx -= fx;
			p2.fy -= fy;
			p2.fz -= fz;
		}
	}
	class Grid
	{
		public particles:Array<LiquidParticle>;
		public numParticles:number = 0;
		constructor()
		{
			this.particles = [];
			this.numParticles = 0;
		}
		public add(p:LiquidParticle):void
		{
			this.particles[this.numParticles ++] = p;
		}
	}

	class Animator
	{

		private _m:Metaball;
		private _currentProgress:number;
		private _animT:ITween;
		private _threshold:UniformValue;
		constructor(threshold:UniformValue)
		{
			this._threshold = threshold;
			this._init();
		}
		private _init():void
		{
			this._currentProgress = 0;
			this._animT = TrTween.serial(
				TrTween.wait(1),
				TrTween.serial(
					TrTween.bezier(gParam,{centerX:CENTER.x,centerY:CENTER.y,centerZ:CENTER.z},null,{centerX:60,centerY:60,centerZ:-80},1,Back.easeInWith(2))
				),
				TrTween.wait(1),
				TrTween.serial(
					TrTween.bezier(gParam,{centerX:260,centerY:160,centerZ:50},{centerX:CENTER.x,centerY:CENTER.y,centerZ:CENTER.z},{centerX:60,centerY:60,centerZ:60},.6,Linear.easeInOut)
					,TrTween.bezier(gParam,{centerX:CENTER.x,centerY:CENTER.y,centerZ:CENTER.z},null,{centerX:120,centerY:260,centerZ:80},.4,Linear.easeInOut)
				),
				TrTween.wait(1.3),
				TrTween.parallel(
					TrTween.bezier(gParam,{centerX:160,centerY:160,centerZ:100},{centerX:CENTER.x,centerY:CENTER.y,centerZ:CENTER.z},{centerX:0,centerY:0,centerZ:60},.53,Linear.easeInOut)
				),
				TrTween.wait(.1),
				TrTween.parallel(
					TrTween.tween(gParam,{threshold:1},null,.01,Linear.easeIn)
					,TrTween.tween(gParam,{centerX:CENTER.x,centerY:CENTER.y,centerZ:CENTER.z},{centerX:160,centerY:160,centerZ:100},.02,Linear.easeInOut)
				),
				TrTween.wait(2.05)
			);
		}

		public update(scval:number):void
		{
			// console.clear();
			// console.log(scval)
			if(scval <= 0) scval = 7.9;
			if(scval >= 5.79 && scval <= 5.94){ this._threshold.value = .1;}
			else { this._threshold.value = 1;}
			this._animT.gotoAndStop(scval/8);
			this._currentProgress = scval;
		}
	}
	class ParticleController
	{
		private _neighbors:Array<Neighbor>;
		private _numNeighbors:number = 0;
		private _particles:Array<LiquidParticle>;
		private _grids:Array<Array<Array<Grid>>>;
		private _first:LiquidParticle;
		private _firsts:Array<LiquidParticle>;
		private _fm:ForceMap;
		constructor(fm:ForceMap)
		{
			this._fm = fm;
			this._init();
		}
		private _init():void
		{
			this._firsts = [];
			this._neighbors = [];
			this._grids = [];
			this._particles = [];
			var i:number = 0,j:number = 0,k:number = 0;
			for(i = 0;i < NUM_GRIDS;i++)
			{
				this._grids[i] = [];
				for(j = 0;j < NUM_GRIDS;j++)
				{
					this._grids[i][j] = []
					for(k = 0;k < NUM_GRIDS;k++)
					{
						this._grids[i][j][k] = new Grid();
					}
				}
			}
		}
		private _updateGrid():void
		{
			var i:number = 0,
				j:number = 0,
				k:number = 0,
				glen:number = NUM_GRIDS - 1,
				p:LiquidParticle = this._first;
			for(i = 0;i < NUM_GRIDS;i++) for(j = 0;j < NUM_GRIDS;j++) for(k = 0;k < NUM_GRIDS;k++) this._grids[i][j][k].numParticles = 0;

			for(p = this._first; p != null ;p = p.next)
			{
				p.fx = p.fy = p.fz = p.density = p.densityNear = 0;
				p.gx = ~~(p.x * INV_NUM_GRIDS);
				p.gy = ~~(p.y * INV_NUM_GRIDS);
				p.gz = ~~(p.z * INV_NUM_GRIDS);

				if(p.gx < 0) p.gx = 0;
				else if(p.gx > glen) p.gx = glen;

				if(p.gy < 0) p.gy = 0;
				else if(p.gy > glen) p.gy = glen;

				if(p.gz < 0) p.gz = 0;
				else if(p.gz > glen) p.gz = glen;
			}
		}
		private _findNeighbors():void
		{
			this._numNeighbors = 0;
			var p:LiquidParticle = this._first,
				i:number = 0,
				xMin:boolean,xMax:boolean,
				yMin:boolean,yMax:boolean;

			for(p = this._first; p != null ;p = p.next)
			{
				if(!p.forceEnable && Metaball.mode == MODE_FORCE) continue;

				xMin = p.gx != 0;
				xMax = p.gx != NUM_GRIDS - 1;
				yMin = p.gy != 0;
				yMax = p.gy != NUM_GRIDS - 1;

				this._findNeighborsInGrid(p,this._grids[p.gx][p.gy][p.gz]);

				if(xMin)
				{
					this._findNeighborsInGrid(p,this._grids[p.gx - 1][p.gy][p.gz]);
					if(yMin) this._findNeighborsInGrid(p,this._grids[p.gx - 1][p.gy - 1][p.gz]);
					else if(yMax) this._findNeighborsInGrid(p,this._grids[p.gx - 1][p.gy + 1][p.gz]);
				}
				else if(xMax)
				{
					this._findNeighborsInGrid(p,this._grids[p.gx + 1][p.gy][p.gz]);
					if(yMin) this._findNeighborsInGrid(p,this._grids[p.gx + 1][p.gy - 1][p.gz]);
					else if(yMax) this._findNeighborsInGrid(p,this._grids[p.gx + 1][p.gy + 1][p.gz]);
				}

				if(yMin) this._findNeighborsInGrid(p,this._grids[p.gx][p.gy - 1][p.gz]);
				else if(yMax) this._findNeighborsInGrid(p,this._grids[p.gx][p.gy + 1][p.gz]);
				this._grids[p.gx][p.gy][p.gz].add(p);
			}
		}
		private _findNeighborsInGrid(p:LiquidParticle,grid:Grid):void
		{
			var i = 0,len:number = grid.numParticles,pj:LiquidParticle,
				px:number,py:number,pz:number,
				distance:number = 0;
			for(i = 0;i < len;i++)
			{
				pj = grid.particles[i];
				px = p.x - pj.x;
				py = p.y - pj.y;
				pz = p.z - pj.z;
				distance = px * px + py * py + pz * pz;
				if(distance < RANGE2)
				{
					if(this._neighbors.length == this._numNeighbors) this._neighbors[this._numNeighbors] = new Neighbor()
					this._neighbors[this._numNeighbors ++ ].setParticle(p,pj);
				}
			}
		}
		private _calcForce():void
		{
			var i:number = 0,len:number = this._numNeighbors;

			for(; i < len;i++) this._neighbors[i].calcForce();
		}
		public update():void
		{
			this._updateGrid();
			this._findNeighbors();
			this._calcForce();
		}
		public setParticle(index:number,particle:LiquidParticle):void
		{
			this._particles[index] = particle;
		}
		public initFix():void
		{
			var i:number = 0,len:number = this._particles.length,
				btype:number = 0,
				lp:LiquidParticle,
				p:LiquidParticle;
			for(;i < len;i++)
			{
				p = this._particles[i];
				if(!this._firsts[p.type]) this._firsts[p.type] = p;
				if(!this._first) this._first = p;
				if(lp) lp.next = p;

				lp = p;
			}
			this._particles = null;
		}
		public changeForce():void
		{
			var p:LiquidParticle = this._first;
			for(p = this._first; p != null ;p = p.next) p.switchMove();
		}
		public updateParticles(i:number,fa:Float32Array):void
		{
			var j:number = 0,tlen:number = NUM_PARTICLES,
				p:LiquidParticle = this._firsts[i];

			for(p = this._firsts[i]; p && p.type == i ;p = p.next)
			{
				p.move(this._fm);
				fa[j++] = p.x;
				fa[j++] = p.y;
				fa[j++] = p.z;
			}

		}
	}

	class SubRender
	{
		private static _bgTexture:THREE.Texture;
		private static _logoTexture:THREE.Texture;
		private static _noise:THREE.Texture;
		private static _useLogo:UniformValue;
		private static _axis:THREE.Vector3 = new THREE.Vector3(-R_WIDTH>>1,-R_HEIGHT >>1, 0).normalize();
		private static _sCamera:THREE.PerspectiveCamera;
		private static _sScene:THREE.Scene;
		private _rTarget:THREE.WebGLRenderTarget;
		private _scene:THREE.Scene;
		private _camera:THREE.PerspectiveCamera;
		private _mesh:THREE.Mesh;
		private _mesh2:THREE.Mesh;
		private _type:number;
		private _color:THREE.Vector3;
		private _container:THREE.Group;
		public static changeTexture(front:boolean):void
		{
			SubRender._useLogo.value = front ? 1 : 0;
		}
		public static setRenderTexure(texture:THREE.Texture,logoTex:THREE.Texture):void
		{
			SubRender._bgTexture = texture;
			SubRender._logoTexture = logoTex;
			SubRender._useLogo = {
				type:"i",
				value:0
			};
		}
		constructor(type:number,timeObj:UniformValue,threshold:UniformValue)
		{
			this._init(type,timeObj,threshold);
		}
		private _init(type:number,timeObj:UniformValue,threshold:UniformValue):void
		{
			this._type = type;
			this._scene = new THREE.Scene()
			this._camera = new THREE.PerspectiveCamera(90,1.0 , 1 , 2000);
			this._camera.position.set(0,0,-400);
			this._camera.lookAt(new THREE.Vector3(0,0,0));
			this._scene.add(this._camera);
			this._rTarget = new THREE.WebGLRenderTarget(1024,1024);
			// this._color = type == 0 ? RED_COLOR.clone() : type == 2 ? YELLOW_COLOR.clone() : BLUE_COLOR.clone();
			var m:THREE.Material = new THREE.ShaderMaterial({
				uniforms:{
					texture:{
						type:"t",
						value:this._rTarget.texture
					},
					logo:{
						type:"t",
						value:SubRender._logoTexture
					},
					refrection:
					{
						type:"t",
						value:SubRender._bgTexture
					},
					uselogo:SubRender._useLogo,
					type:{
						type:"i",
						value:this._type
					},
					// fillColor:{
					// 	type:"v3",
					// 	value:this._color
					// },

					time:timeObj,
					threshold:threshold

				},
				transparent:true,
				vertexShader:PLANE_VERTEX,
				fragmentShader:PLANE_FRAG
			});
			this._mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(512,512,256,256),m);
			this._mesh2 = new THREE.Mesh(new THREE.PlaneBufferGeometry(512,512,256,256),m);
			this._container = new THREE.Group();
			this._container.position.set(-R_WIDTH>>1,-(R_HEIGHT >>1), - R_DEPTH);
			this._scene.add(this._container);
		}
		public get plane():THREE.Mesh{ return this._mesh;}
		public get plane2():THREE.Mesh{ return this._mesh2;}
		public setMesh(p:THREE.Points):void
		{
			this._container.add(p);
		}
		public draw(r:THREE.WebGLRenderer):void
		{
			// this._container.rotateOnAxis(SubRender._axis,.01);
			r.render(this._scene,this._camera,this._rTarget);
		}
		public changeColor(r:number,g:number,b:number):void
		{
			this._color.x = r;
			this._color.y = g;
			this._color.z = b;
		}
	}
	class FrontRender
	{
		private _canvas:HTMLCanvasElement;
		private _camera:THREE.PerspectiveCamera;
		private _scene:THREE.Scene;
		private _topContainer:THREE.Group;
		private _container:THREE.Group;
		private _render:THREE.WebGLRenderer;
		private _map:HTMLElement;
		private _contactRender:THREE.WebGLRenderer;
		private _abouttRender:THREE.WebGLRenderer;
		private _workstRender:THREE.WebGLRenderer;
		private _size:number = 0;
		private _scale:number = 0;
		private _isMobile:boolean;
		private _resizeDelegate:(e:Event)=>void;
		private _scrollTarget:any;
		constructor()
		{
			this._size = 0;
			this._isMobile = false;
			this._canvas = <HTMLCanvasElement>document.querySelector("#frontCvs");
			this._map = <HTMLElement>document.querySelector("#gmap");
			this._contactRender = new THREE.WebGLRenderer({canvas:this._canvas,alpha:true,antialias:true});
			this._camera = new THREE.PerspectiveCamera(90, 1, 10, 100);
			this._camera.position.y = -15;
			this._camera.position.z = 60;
			this._scrollTarget = APP.getScrollTarget();
			if(APP.isMobile())
			{
				this._contactRender.setSize(250,250);
				this._size = 250;
				this._isMobile = true;
				this._scale = .4;
			}
			else
			{
				this._contactRender.setSize(500,500);
				this._size = 500;
				this._scale = .2;
			}
			this._contactRender.setClearColor(0x0,0);

			this._scene = new THREE.Scene();
			this._topContainer = new THREE.Group();
			this._container  = new THREE.Group();
			this._scene.add(this._topContainer);
			this._topContainer.add(this._container);

			// document.addEventListener("keydown",(e):void=>
			// {
			// 	e.preventDefault();
			// 	if(e.keyCode == 40) this._camera.position.z ++;
			// 	else if(e.keyCode == 38) this._camera.position.z --;

			// 	console.log(this._camera.position.z)
			// })
			this._resizeDelegate = (e:Event):void=>{
				this._resize(e);
			}

			this._render = this._contactRender;
			this.deactive();
		}
		private _resize(e:Event):void
		{
			setTimeout(():void=>{
				var rect:any = this._map.getBoundingClientRect(),
					ty:number = (this._scrollTarget.scrollTop + rect.top) + rect.height * .5 - this._size * .5 * this._scale - 20;
				TrTween.prop(this._canvas,{y:ty}).play();
			},25);

		}
		public switchRender(id:string):void
		{

		}
		public add(mesh:THREE.Mesh):void
		{
			this._container.add(mesh);
		}
		public active():void
		{
			//718
			var rect:any = this._map.getBoundingClientRect(),
				ty:number = (this._scrollTarget.scrollTop + rect.top) + rect.height * .5 - this._size * .5 * this._scale - 20,
				fy:number = (window.innerHeight >> 1) - this._size * .5;
			this._camera.position.z = 103;

			TrTween.serial(
				TrTween.prop(this._canvas,{display:"block",y:fy,scaleX:1,scaleY:1}),
				TrTween.wait(.5)
				,TrTween.tween(this._camera.position,{z:93},null,1,Quart.easeIn)
				,TrTween.tween(this._canvas,{y:ty,scaleX:this._scale,scaleY:this._scale},null,.8,Expo.easeIn)
				,TrTween.func(():void=>{
					window.addEventListener("resize",this._resizeDelegate);
				},null,null)
			).play();
		}

		public deactive():void
		{
			window.removeEventListener("resize",this._resizeDelegate);
			TrTween.prop(this._canvas,{display:"none"}).play();
			// this.draw();
		}
		public draw():void
		{
			this._render.render(this._scene,this._camera);
		}
		public get renderer():THREE.WebGLRenderer{return this._render;}
	}
	class Internal{}
	export class Metaball extends AbstractContentBase
	{
		private static _flag:string = MODE_CENTER;
		public static get mode():string {return Metaball._flag;}

		//Singleton化　多用注意！！！！
		private static _instance:Metaball = null;
		public static getInstance():Metaball
		{
			if(Metaball._instance == null) Metaball._instance = new Metaball(new Internal());
			return Metaball._instance;
		}
		private _container:THREE.Group;
		private _topContainer:THREE.Group;

		private _positions:Array<Float32Array>;
		private _geometries:Array<THREE.BufferGeometry>;

		private _timeValue:UniformValue;
		private _sizeValue:UniformValue;
		private _thresholdValue:UniformValue;
		private _srenders:Array<SubRender>;
		private _fm:ForceMap;
		private _rTarget:THREE.WebGLRenderTarget;

		private _mainRender:THREE.WebGLRenderer;
		private _mainCamera:THREE.Camera;
		private _mainScene:THREE.Scene;
		private _am:Animator;
		private _befValue:number = 0;
		private _tr:ITween;
		private _controller:ParticleController;
		private _timerId:number;
		private _state:number = -1;
		private _fr:FrontRender;
		private _needFront:boolean;
		private _needMain:boolean;
		private _currentMotiph:number = -1;
		constructor(internal:Internal)
		{
			super();
			this._state = -1;
			this._currentMotiph = -1;
			this._needFront = false;
			this._needMain = true;
			// this._init();
		}
		public get x():number { return this._container.position.x;}
		public get y():number { return this._container.position.y;}
		public get z():number { return this._container.position.z;}
		public get rotationX():number { return this._container.rotation.x;}
		public get rotationY():number { return this._container.rotation.y;}
		public get rotationZ():number { return this._container.rotation.z;}
		public get scaleX():number { return this._container.scale.x;}
		public get scaleY():number { return this._container.scale.y;}
		public get scaleZ():number { return this._container.scale.z;}
		public set x(value:number) { this._container.position.x = value;}
		public set y(value:number) { this._container.position.y = value;}
		public set z(value:number) { this._container.position.z = value;}
		public set rotationX(value:number) { this._container.rotation.x = value;}
		public set rotationY(value:number) { this._container.rotation.y = value;}
		public set rotationZ(value:number) { this._container.rotation.z = value;}
		public set scaleX(value:number) { this._container.scale.x = value;}
		public set scaleY(value:number) { this._container.scale.y = value;}
		public set scaleZ(value:number) { this._container.scale.z = value;}
		public get texture():THREE.Texture { return this._rTarget.texture;}
		public get centerX():number { return gParam.centerX - 180 + this._container.position.x * 2.;}
		public get centerY():number { return gParam.centerY - 180 - this._container.position.y * 2.;}
		public load():void
		{
			var l:AssetLoader = AssetLoader.getInstance(),
				arr:Array<string> = FORCE_MAPS,
				i:number = 0,len:number = arr.length;
			l.add("dalpha","texture","/img/texture/drop-alpha.png");
			l.add("frlogo","texture","/img/texture/logo.jpg");
			for(;i < len;i++)
			{
				l.add("fmap"+i,"image",arr[i]);
			}
		}
		public init(...args):void
		{

			this._mainRender = <THREE.WebGLRenderer>args[0];
			this._mainCamera = <THREE.Camera>args[1];
			this._mainScene = <THREE.Scene>args[2];
			SubRender.setRenderTexure(<THREE.Texture>args[3],AssetLoader.getInstance().getAssetByName("frlogo"));
			this._init();
			this._mainScene.add(this._topContainer);

			this._topContainer.position.z = this._mainCamera.position.z;

			gParam.radius = 20;
			var count:number = 200;
			while(--count)
			{
				for(var i:number = 0;i < 3;i++)
				{
					this._controller.updateParticles(i,this._positions[i]);
					(<any>this._geometries[i].attributes).position.needsUpdate = true;
				}
			}
			gParam.radius = RADIUS;
			this._container.scale.x = 3;
			this._container.scale.y = 3;
			this._container.visible = false;

			// var isShift:boolean = false;
			// document.addEventListener("keydown",(e:KeyboardEvent):void=>
			// {
			// 	e.preventDefault();
			// 	if(e.keyCode == 16) isShift = true;
			// 	var scale:number = this._container.scale.x;
			// 	if(!isShift)
			// 	{
			// 		if(e.keyCode == 38) this._container.position.y -= 1;
			// 		else if(e.keyCode == 40) this._container.position.y += 1;
			// 		else if(e.keyCode == 37) this._container.position.x -= 1;
			// 		else if(e.keyCode == 39) this._container.position.x += 1;
			// 	}
			// 	else
			// 	{
      //
			// 		if(e.keyCode == 38) scale -= .1;
			// 		else if(e.keyCode == 40) scale += .1;
			// 		this._container.scale.set(scale,scale,scale);
			// 	}
			// 	console.log("{x:"+this._container.position.x+",y:"+this._container.position.y+",scale:" + scale + "}");
			// });
			// document.addEventListener("keyup",(e:KeyboardEvent):void=>
			// {
			// 	if(e.keyCode == 16) isShift = false;
			// });

		}
		private _initUniforms():void
		{
			this._timeValue = {
				type:"f",
				value:0
			}
			this._sizeValue = {
				type:"f",
				value:30
			};
			this._thresholdValue = {
				type:"f",
				value:1
			};
		}
		private _initControllers():void
		{
			this._fm = new ForceMap();
			this._am = new Animator(this._thresholdValue);
			this._controller = new ParticleController(this._fm);
			this._rTarget = new THREE.WebGLRenderTarget(1280,1024);
			this._fr = new FrontRender();


			this._srenders = [
				new SubRender(0,this._timeValue,this._thresholdValue),
				new SubRender(1,this._timeValue,this._thresholdValue),
				new SubRender(2,this._timeValue,this._thresholdValue)
			];
		}
		private _initTHREE():void
		{
			this._container = new THREE.Group();
			this._container.position.z = -150;
			this._topContainer = new THREE.Group();
			this._topContainer.add(this._container);

			var i:number = 0,len:number = NUM_PARTICLES,
				hl:number = 500,
				j:number = 0,
				tx:number,ty:number,tz:number,
				size:number = 30,
				geo:THREE.BufferGeometry,
				t:number,fa:Float32Array,
				r1:number,r2:number,
				m1:THREE.ShaderMaterial,
				m2:THREE.ShaderMaterial,
				m3:THREE.ShaderMaterial;
			m1 = new THREE.ShaderMaterial({
					uniforms:{
						// type:{type:'i',value:0},
						size:this._sizeValue,
						waterMap:{
							type:'t',
							value:AssetLoader.getInstance().getAssetByName("dalpha")
						}
						,time:this._timeValue
					},
					depthWrite:false,
					depthTest:false,
					transparent:true,
					vertexShader:POINT_VERTEX,
					fragmentShader:POINT_FRAG
				});
			// m2 = new THREE.ShaderMaterial({
			// 		uniforms:{
			// 			// type:{type:'i',value:0},
			// 			size:this._sizeValue,
			// 			waterMap:{
			// 				type:'t',
			// 				value:AssetLoader.getInstance().getAssetByName("dalpha")
			// 			}
			// 			,time:this._timeValue
			// 		},
			// 		depthWrite:false,
			// 		depthTest:false,
			// 		transparent:true,
			// 		vertexShader:POINT_VERTEX,
			// 		fragmentShader:POINT_FRAG
			// 	});
			// m3 = new THREE.ShaderMaterial({
			// 		uniforms:{
			// 			type:{type:'i',value:0},
			// 			size:this._sizeValue,
			// 			waterMap:{
			// 				type:'t',
			// 				value:AssetLoader.getInstance().getAssetByName("dalpha")
			// 			}
			// 			,time:this._timeValue
			// 		},
			// 		depthWrite:false,
			// 		depthTest:false,
			// 		transparent:true,
			// 		vertexShader:POINT_VERTEX,
			// 		fragmentShader:POINT_FRAG
			// 	});

			this._positions = [
				new Float32Array(len * 3),
				new Float32Array(len * 3),
				new Float32Array(len * 3)
			];
			this._geometries =[
				new THREE.BufferGeometry(),
				new THREE.BufferGeometry(),
				new THREE.BufferGeometry()
			]

			for(i = 0; i < 3;i ++)
			{
				fa = this._positions[i];
				geo = this._geometries[i];

				for(j = 0;j < len;j++)
				{
					r1 = (Math.random() * 360) * RADIAN;
					r2 = (Math.random() * 360) * RADIAN;
					tx = RADIUS * Math.sin(r1) * Math.cos(r2) + CENTER.x;
					ty = RADIUS * Math.sin(r1) * Math.sin(r2) + CENTER.y;
					tz = RADIUS * Math.cos(r1) + CENTER.z;
					this._controller.setParticle(i * len + j,new LiquidParticle(tx,ty,tz,i,j < hl));
					fa[j] = tx;
					fa[j + 1] = ty;
					fa[j + 2] = tz;
				}
				geo.addAttribute('position',new THREE.BufferAttribute(fa,3).setDynamic(true));
			}


			this._srenders[0].setMesh(new THREE.Points(this._geometries[0],m1));
			this._srenders[1].setMesh(new THREE.Points(this._geometries[1],m1));
			this._srenders[2].setMesh(new THREE.Points(this._geometries[2],m1));

			this._container.add(this._srenders[0].plane);
			this._container.add(this._srenders[1].plane);
			this._container.add(this._srenders[2].plane);

			this._fr.add(this._srenders[0].plane2);
			this._fr.add(this._srenders[1].plane2);
			this._fr.add(this._srenders[2].plane2);
		}
		private _init():void
		{
			this._initUniforms();
			this._initControllers();
			this._initTHREE();
			this._state = -1;
			this._needFront = false;
			this._controller.initFix();
			var i:number = 0,len:number = FORCE_MAPS.length,
				loader:AssetLoader = AssetLoader.getInstance();
			for(;i < len;i++) this._fm.setImage(i,loader.getAssetByName("fmap" + i));
		}
		private _getState():void
		{
			var p:string = location.pathname.split("/")[1]
			if(p == "about") this._state = 0;
			else if(p == "works") this._state = 1;
			else if(p == "member") this._state = 2;
			else this._state = -1;
		}
		public start(delay:number):void
		{

			this._getState();
			if(this._state == -1)
			{
				this._tr = TrTween.delay(TrTween.parallel(
					TrTween.prop(this._container,{visible:true}),
					TrTween.bezier(this._container.position,{x:0,y:0},null,{x:-50,y:-50},1,Quart.easeOut),
					TrTween.tween(this._container.scale,{x:1,y:1},null,1,Back.easeOutWith(2))
				),delay);
				this._tr.play();

			}
			else
			{
				this._container.scale.set(1,1,1);
				this._container.visible = true;
				setTimeout(():void=>
				{
					if(this._state == 2) this.moveLiquid();
					this.resize(0,0);
				},delay * 1000);
			}


		}


		private _getFixY():number
		{
			var r:ClientRect = this._mainRender.domElement.getBoundingClientRect(),
				v:THREE.Vector3 = new THREE.Vector3(0,-(-r.top / window.innerHeight) * 2 + 1,-1),
				rh:number = window.innerHeight >> 1,
				rw:number = r.width >> 1;


			v.unproject(this._mainCamera);
			return v.y * rh + 55//magicnumber!;
		}

		public resize(w:number,h:number):void
		{
			if(this._state != 1) return;
			this._container.position.y = this._getFixY();
		}
		public reset(ischange:boolean = false):void
		{
			// console.log("reset",id)
			// this._befValue = -1;

			clearTimeout(this._timerId);
			if(this._tr) this._tr.stop();

			this._getState();

			this._needMain = true;
			this._needFront = false;
			SubRender.changeTexture(false);
			this._fr.deactive();
			if(ischange) this._currentMotiph = -1;

			// console.log(this._state)
			if(this._state == 1)
			{
				this._tr = TrTween.parallel(
					TrTween.tween(this._container.position,{x:0,y:this._getFixY()},null,.5,Quart.easeIn),
					TrTween.tween(this._container.scale,{x:1,y:1},null,.5,Quart.easeInOut)
				);
			}
			else
			{
				this._tr = TrTween.parallel(
					TrTween.tween(this._container.position,{x:0,y:0},null,.5,Quart.easeInOut),
					TrTween.tween(this._container.scale,{x:1,y:1},null,.5,Quart.easeInOut)
				);
			}

			if(this._state < 0)
			{
				this.moveLiquid();
				var scval = this._befValue;
				this._befValue = -1;
				this.update(scval,0);
			}
			else if(this._state < 2) this._morphText(0,this._state);
			else
			{
				if(this._currentMotiph < 0) this.moveLiquid();
				else
				{
					if(this._currentMotiph > -1) this.morphMotif(this._currentMotiph - 6);
					else this.moveLiquid();
				}

			}

			this._tr.play();

		}
		public moveLiquid():void
		{
			if(this._tr) this._tr.stop();
			this._tr = TrTween.parallel(
				TrTween.tween(this._container.position,{x:0,y:0},null,.5,Quart.easeInOut),
				TrTween.tween(this._container.scale,{x:1,y:1},null,.5,Quart.easeInOut)
			)

			this._tr.play()

			if(Metaball._flag == MODE_CENTER) return;


			Metaball._flag = MODE_CENTER;
			this._fm.reset();
			gParam.radius = RADIUS;
			gParam.viscosity = VISCOSITY;
			gParam.pressure = PRESSURE;
			gParam.pressureNear = PRESSURE_NEAR;
			this._sizeValue.value = 30;
			this._controller.changeForce();
		}
		private _morphText(norval:number,fid:number = -1):void
		{
			var id:number =  fid < 0 ? norval / 2 - 1 : fid;
			if(this._tr) this._tr.stop();
			// this._tr = TrTween.parallel(
			// 	TrTween.tween(this._container.position,{x:0,y:0},null,.5,Quart.easeInOut),
			// 	TrTween.tween(this._container.scale,{x:1,y:1},null,.5,Quart.easeInOut)
			// )
			// this._tr.play()
			gParam.pressure = PRESSURE * .02;
			gParam.pressureNear = PRESSURE_NEAR * .02;
			this._sizeValue.value = 32;
			this._fm.changePosition(id);
			Metaball._flag = MODE_FORCE;
			this._controller.changeForce();
		}
		public morphMotif(linkage:number):void
		{
			this.moveLiquid();
			var pos:MemInfo = MEM_INFO[linkage];
			if(this._tr) this._tr.stop();
			this._tr = TrTween.parallel(
				TrTween.tween(this._container.position,{x:pos.x,y:pos.y},null,1.5,Quart.easeInOut),
				TrTween.tween(this._container.scale,{x:pos.scale,y:pos.scale},null,1.5,Quart.easeInOut)
			);

			this._currentMotiph = 6 + linkage;
			this._tr.play()
			clearTimeout(this._timerId);
			this._timerId = setTimeout(():void=>{

				gParam.pressure = PRESSURE * .02;
				gParam.pressureNear = PRESSURE_NEAR * .02;
				this._sizeValue.value = pos.size;
				this._fm.changePosition(this._currentMotiph);
				Metaball._flag = MODE_FORCE;
				this._controller.changeForce();
			},1000);
		}
		public morphMenu():void
		{
			this.moveLiquid();
			if(this._tr) this._tr.stop();
			this._tr = TrTween.parallel(
				TrTween.tween(this._container.position,{x:0,y:0},null,1.5,Quart.easeInOut),
				TrTween.tween(this._container.scale,{x:5,y:5},null,1.5,Quart.easeInOut)
			)
			this._tr.play();
			clearTimeout(this._timerId);
			this._timerId = setTimeout(():void=>{
				gParam.pressure = PRESSURE * .1;
				gParam.pressureNear = PRESSURE_NEAR * .1;
				this._sizeValue.value = 60;
				this._fm.changePosition(4);
				Metaball._flag = MODE_FORCE;
				this._controller.changeForce();
			},1000);
		}
		public morphPin():void
		{
			this.moveLiquid();
			if(this._tr) this._tr.stop();
			var tx:number = (0 - this._container.position.x) >> 1,
				ty:number = -100;
			this._needFront = true;
			this._needMain = false;

			this._fr.active();
			this._tr = TrTween.serial(
				TrTween.parallel(
					TrTween.bezier(this._container.position,{x:0,y:0},null,{x:tx,y:ty},1.5,Quart.easeInOut),
					TrTween.tween(this._container.scale,{x:1.3,y:1.3},null,1.5,Quart.easeInOut),
					TrTween.delay(TrTween.func(()=>{SubRender.changeTexture(true);},null,null),1)
				)

			);
			this._tr.play();
			clearTimeout(this._timerId);
			this._timerId = setTimeout(():void=>{
				gParam.pressure = PRESSURE * .1;
				gParam.pressureNear = PRESSURE_NEAR * .1;
				this._sizeValue.value = 40;

				this._fm.changePosition(5);
				Metaball._flag = MODE_FORCE;
				this._controller.changeForce();

			},3000);
		}
		public update(scVal:number,time:number):void
		{
			var i:number = 0;

			if(this._state < 0 && this._befValue != scVal)
			{
				i = scVal >= 7.75 ? 8 : ~~scVal;
				if(i > 0 && i % 2 == 0)
				{
					if(Metaball._flag != MODE_FORCE)　this._morphText(i);
				}
				else
				{
					if(Metaball._flag != MODE_CENTER) this.moveLiquid();
				}
				this._am.update(scVal);
				this._befValue = scVal;
			}
			this._controller.update();

			for(i = 0;i < 3;i++)
			{
				this._controller.updateParticles(i,this._positions[i]);
				(<any>this._geometries[i].attributes).position.needsUpdate = true;
			}
			this._timeValue.value += .01;
		}
		public draw():void
		{
			//ToDo RenderTarget を　Mainとまとめてみる。
			// if(this._needMain) this._mainRender.render(this._mainScene,this._mainCamera,this._rTarget);
			for(var i:number = 0,len:number = 3; i < len;i++) this._srenders[i].draw(this._mainRender);

			if(!this._needFront) return;


			// this._fr.renderer.render(this._mainScene,this._mainCamera,this._rTarget);
			for(i = 0; i < len;i++) this._srenders[i].draw(this._fr.renderer);
			this._fr.draw();

		}
	}
}
