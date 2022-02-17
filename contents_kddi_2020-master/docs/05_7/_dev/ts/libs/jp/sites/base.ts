/// <reference path='../contents/TrTween.d.ts' />

// import EventDispatcher = jp.contents.event.EventDispatcher;

namespace jp.sites
{
	/*
	*各コンテンツのベースとなる抽象化クラス
	*updateメソッドで状態のアップデート
	*必要であれば
	*drawメソッドで描画の処理
	*@interface IContentBase
	*/
	export interface IContentBase
	{
		init():void;
		update(scVal:number,time:number):void;
		draw():void;
	}
	export class AbstractContentBase extends EventDispatcher implements IContentBase
	{
		constructor()
		{
			super();
		}
		//abstract method
		init(...args):void
		{

		}
		//abstract method
		update(scVal:number,time:number):void
		{

		}
		//abstract method
		draw():void
		{

		}
	}
	/*
	*ページのベースとなるクラス　直接のインスタンス化は禁止！
	*@class AbstractPage
	*/
	export class AbstractPage extends EventDispatcher
	{
		constructor()
		{
			super();
		}
		/*
		*ページに到達した際に呼ばれる
		*@return null
		*/
		onArrive():void
		{

		}
		/*
		*ページから離れる際に呼ばれる
		*@return null
		*/
		onLeave():void
		{

		}
		resize(x:number, y:number):void
		{

		}
		mousemove(x:number, y:number)
		{

		}
		//abstract method
		update(scVal:number,time:number):void
		{

		}
		//abstract method
		draw():void
		{

		}
	}
}

import IContentBase = jp.sites.IContentBase;
import AbstractPage = jp.sites.AbstractPage;
import AbstractContentBase = jp.sites.AbstractContentBase;
