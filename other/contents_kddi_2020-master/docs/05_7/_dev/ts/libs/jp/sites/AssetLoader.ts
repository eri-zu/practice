/// <reference path="../../threejs/three.d.ts" />
import Events = jp.contents.event.Event;
import EventDispatcher = jp.contents.event.EventDispatcher;
namespace jp.sites
{
	class Internal
	{

	}
	interface IPathData
	{
		// name:string;
		path:string;
		type:string;
		data:any;
		loader:any;
	}
	export class ProgressEvent extends Events
	{
		private _loaded:number;
		private _total:number;
		constructor(loaded:number,total:number,target:any = null)
		{
			super("progressEvent",target);
			this._loaded = loaded;
			this._total = total;
		}
		public get loaded():number { return this._loaded;}
		public get total():number { return this._total;}
		public clone():ProgressEvent
		{
			return new ProgressEvent(this._loaded,this._total,this.target);
		}
	}
	class OBJMTLLoader
	{
		private _mLoader:any;
		private _oLoader:any;
		private _manager:THREE.LoadingManager;
		private _data:any;
		constructor(m:THREE.LoadingManager)
		{
			this._manager = m;
		}
		public load(path:string,func:(data)=>void):void
		{
			var _this:OBJMTLLoader = this,
				opath:string = path,
				mpath:string = path.replace(".obj",".mtl");
			this._mLoader = new (<any>THREE).MTLLoader(this._manager);
			this._oLoader = new (<any>THREE).OBJLoader(this._manager);
			this._mLoader.load(mpath,function(material:any)
			{
				material.preload();
				_this._oLoader.setMaterials(material);
				_this._oLoader.load(opath,function(obj:any):void
				{
					var model:any = obj.clone();
					model.scale.set(1,1,1);
					model.rotation.set(0,0,0);
					model.position.set(0,0,0);
					func(model);
				});
			});
		}
		public get data():any { return this._data;}
	}
	class MemJson
	{
		private _jLoader:any;
		private _manager:THREE.LoadingManager;
		private _data:any;
		constructor(m:THREE.LoadingManager)
		{
			this._manager = m;
		}
		public load(path,func:(data)=>void):void
		{
			this._jLoader = new THREE.XHRLoader(this._manager);
			var f = function(data:any,isAlpha:boolean):(img:THREE.Texture)=>void
			{
				return function(texture):void
				{
					if(isAlpha) data.alphaMap = texture;
					else data.texture = texture;
				}
			}

			this._jLoader.load(path,(json):void=>{
        this._data = JSON.parse(json);
				var i:number = 0,
					len:number = this._data.length,
					l:THREE.TextureLoader,
          dm_img_pass:string = '/img/member/m_common.jpg',
          dm_img_alpha_pass:string = '/img/member/m_common_a.jpg';
				func(this._data);
				for(;i < len;i++)
				{
					l = new THREE.TextureLoader(this._manager);
					// l.load(this._data[i].img_pass,f(this._data[i],false));
					// if(this._data[i].img_alpha_pass != undefined)
					// {
					// 	l = new THREE.TextureLoader(this._manager);
					// 	l.load(this._data[i].img_alpha_pass,f(this._data[i],true));
					// }

          l.load(dm_img_pass,f(this._data[i],false));
					if(dm_img_alpha_pass != undefined)
					{
						l = new THREE.TextureLoader(this._manager);
						l.load(dm_img_alpha_pass,f(this._data[i],true));
					}
				}
			});
		}
		public get data():any {return this._data;}
	}
	export class AssetLoader extends EventDispatcher
	{
		private static _instance:AssetLoader;
		public static getInstance():AssetLoader
		{
			if(!AssetLoader._instance) AssetLoader._instance = new AssetLoader(new Internal());
			return AssetLoader._instance;
		}
		private _pathes:{[name:string]:IPathData};
		private _manager:THREE.LoadingManager;
		constructor(accsess:Internal)
		{
			super();
			this._pathes = {};
			this._manager = new THREE.LoadingManager();
		}
		public add(name:string,type:string,path:any):void
		{
			if(this._pathes[name] != undefined)
			{
				throw new Error("AssetLoader::その識別子はすでに使用されています！");
			}
			this._pathes[name] = {
				path:path,
				type:type,
				data:null,
				loader:null
			}
		}
		public getAssetByName(name:string):any
		{
			if(this._pathes[name] == undefined)
			{
				throw new Error("AssetLoader::ない！！");
			}
			return this._pathes[name].data;
		}
		public load():void
		{
			var n:string,
				_this:AssetLoader = this,
				p:IPathData,
				lfunc:(data:any)=>void;
			lfunc = function(owner:IPathData)
			{
				return function(data:any):void{
					owner.data = data;
				}

			}
			this._manager.onProgress = function(item:any,loaded:number,total:number)
			{
				_this._onProgress(loaded,total);
			}
			this._manager.onLoad = function():void
			{
				_this._onComplete();
			}
			for(n in this._pathes)
			{
				p = this._pathes[n];
				if(p.type == "image") p.loader = new THREE.ImageLoader(this._manager);
				else if (p.type == "texture") p.loader = new THREE.TextureLoader(this._manager);
				else if (p.type == "cube") p.loader = new THREE.CubeTextureLoader(this._manager);
				else if (p.type == "obj") p.loader = new OBJMTLLoader(this._manager);
				else if (p.type == "memjson") p.loader = new MemJson(this._manager);
				p.loader.load(p.path,lfunc(p));
			}
		}
		private _onProgress(loaded:number,total:number):void
		{
			this.dispatchEvent(new ProgressEvent(loaded,total,this));
		}
		private _onComplete():void
		{
			this.dispatchEvent(new Events("complete",this));
		}
	}
}
