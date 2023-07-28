#### Copyrights
# (c) 2014 motikawa/Takuma Okazaki
# TrTween.js may be freely distributed under the MIT license.
# https://github.com/motikawa/TrTween
#
#----------------------------------------------

###*
*TrTweenのメインクラス
*@class TrTween
*@namespace jp.contents.TrTween.TrTween
###
class TrTween
	###*
	*標準のアニメーションインスタンスの作製
	*@memberOf TrTween
	*@param {target} DomElement or Object
	*@param {to} 
	*@param {from} アニメーション開始時の値
	*@param {duration}　アニメーション時間
	*@param {easing}　イージング関数
	*@return {ITween} ITweenインスタンス
	*@static
	###
	@tween:(target,to,from,duration,easing)->
		return new BasicTween(target,to,from,duration,easing)
	###*
	*ベジェアニメーションインスタンスの作製
	*@param {target} DomElement or Object
	*@param {to} 
	*@param {from} アニメーション開始時の値
	*@param {controlPoint} コントロールポイント
	*@param {duration}　アニメーション時間
	*@param {easing}　イージング関数
	*@return {ITween} ITweenインスタンス
	###
	@bezier:(target,to,from,controlpoint,duration,easing)->
		return new BezierTween(target,to,from,controlpoint,duration,easing)
	###*
	*遅延アニメーションインスタンスの作製
	*@param {tween} ITweenインスタンス
	*@param {delay} 遅延時間
	*@return {ITween} ITweenインスタンス
	###
	@delay:(tween,delay)->
		return new DelayTween(tween,delay)
	###*
	*パラレルアニメーションインスタンスの作製
	*@param {tweens} Array
	*@return {ITween} ITweenGroupインスタンス
	###
	@parallelTweens:(tweens)->
		return new ParallelTween(tweens)
	###*
	*パラレルアニメーションインスタンスの作製
	*@param {tweens} ITweenインスタンス
	*@return {ITween} ITweenGroupインスタンス
	###
	@parallel:->
		return new ParallelTween(arguments)
	###*
	*シリアルアニメーションインスタンスの作製
	*@param {tweens} Array
	*@return {ITween} ITweenGroupインスタンス
	###
	@serialTweens:(tweens)->
		return new SerialTween(tweens)
	###*
	*シリアルアニメーションインスタンスの作製
	*@param {tweens} ITweenインスタンス
	*@return {ITween} ITweenGroupインスタンス
	###
	@serial:->
		return new SerialTween(arguments)
	###*
	*イージング関数を利用した
	*@param {tweens} Array
	*@param {easing} イージング関数
	*@param {duration} 実行時間
	*@return {ITween} ITweenGroupインスタンス
	###
	@easingTweens:(tweens,easing,duration)->
		return new EasingTween(tweens,easing,duration)
	###*
	*CSS3 Transitionを使用したアニメーションの作製
	*@param {target} Domエレメント　またはObject
	*@param {to} アニメーションさせるプロパティと終了値 key-value
	*@param {from} アニメーション開始時の値
	*@param {duration}　アニメーション時間
	*@param {easing}　cssイージング関数(string)
	*@return {ITween} ITweenインスタンス
	###
	@transition:(target,to,from,duration,cssEasing)->
		return new TransitionTween(target,to,from,duration,cssEasing)
	###*
	*CSS3 KeyframeAnimationを使用したアニメーションの作製
	*@param {target} Domエレメント　またはObject
	*@param {to} アニメーションさせるプロパティと終了値 key-value
	*@param {from} アニメーション開始時の値
	*@param {duration}　アニメーション時間
	*@param {easing}　cssイージング関数(string)
	*@return {ITween} ITweenインスタンス
	###
	@animation:(target,to,from,duration,cssEasing)->
		return new AnimationTween(target,to,from,duration,cssEasing)
	###*
	*遅延アニメーションインスタンスの作製
	*@param {tween} ITweenインスタンス
	*@param {count} 繰り返し実行回数（０指定で無限実行)
	*@return {ITween} ITweenインスタンス
	###
	@repeat:(tween,count)->
		return new RepeatTween(tween,count)
	###*
	*function実行
	*@param {function} function
	*@param {params} 引数（Array)
	*@param {caller} スコープ
	*@return {ITween} ITweenインスタンス
	###
	@func:(func,params,caller)->
		return new FuncTween(func,params,caller)
	###*
	*渡されたパラメータを即座に反映
	*@param {target} Domエレメント　またはObject
	*@param {to} 適用させるプロパティと値
	*@return {ITween} ITweenインスタンス
	###
	@prop:(target,propaties)->
		return new PropertyTween(target,propaties)
	###*
	*指定された時間待機
	*@param {time} 待機時間（秒数）
	*@return {ITween} ITweenインスタンス
	###
	@wait:(time)->
		return new WaitTween(time)
	###*
	*CSSの単位を変更
	*@param {target} Domエレメント　またはObject
	*@param {properties} 単位を変更するプロパティと単位値
	*@return {ITween} ITweenインスタンス
	###
	@changeUnit:(target,prop)->
		return new ChangeUnitTween(target,prop)
	###*
	*ターゲットに指定したクラスを追加
	*@param {target} Domエレメント
	*@param {className} 追加するクラス名
	*@return {ITween} ITweenインスタンス
	###
	@addClass:(target,className)->
		return new AddClassTween(target,className)
	###*
	*ターゲットに指定したクラスを削除
	*@param {target} Domエレメント
	*@param {className} 削除するクラス名
	*@return {ITween} ITweenインスタンス
	###
	@removeClass:(target,className)->
		return new RemoveClassTween(target,className)
	@version = "0.5.1"
	@DefaultEasing = Linear.easeNone
	@DefaultCssEasing = CSS3Easing.linear

window.jp = window.jp || {}
window.jp.contents = window.jp.contents || {}
window.jp.contents.collections = window.jp.contents.collections || {}
window.jp.contents.TrTween = window.jp.contents.TrTween || {}
window.jp.contents.collections.LinkedList = LinkedList
window.jp.contents.mapper = window.jp.contents.mapper || {}
# window.jp.contents.mapper.PropertyMapper = PropertyMapper
window.jp.contents.proxy = window.jp.contents.proxy || {}
window.jp.contents.proxy.StyleProxy = StyleProxy
window.jp.contents.proxy.TransformProxy = TransformProxy
window.jp.contents.proxy.Css2Proxy = Css2Proxy
window.jp.contents.proxy.FilterProxy = FilterProxy
window.jp.contents.TrTween.TrTween = TrTween
window.jp.contents.TrTween.Render = Render