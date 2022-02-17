// import IEasing = jp.contents.easing.IEasing;
import Linear = jp.contents.easing.Linear;
namespace jp.contents.tween
{

	export class TrTween
	{
		private static _default:IEasing = Linear.easeNone;
		public static set defaultEasing(value:IEasing)
		{
			TrTween._default = value;
		}
		public static get defaultEasing():IEasing
		{
			return TrTween._default;
		}
	}
}
