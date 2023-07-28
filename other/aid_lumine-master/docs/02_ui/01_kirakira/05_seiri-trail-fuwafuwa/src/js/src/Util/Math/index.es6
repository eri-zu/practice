/**
 * Generate a random float
 *
 * @param  {number} minValue  Minimum boundary
 * @param  {number} maxValue  Maximum boundary
 * @param  {number} precision Precision
 * @return {number}           Generated float
 */
export function random( minValue, maxValue, precision = 2 ) {

  return parseFloat( Math.min( minValue + ( Math.random() * ( maxValue - minValue ) ), maxValue ).toFixed( precision ) );

}

// ランダムな整数を取得
// -----------------------------------
// @min : 最小値(int)
// @max : 最大値(int)
// return : minからmaxまでのランダムな整数(int)
// -----------------------------------
export function randomInt(min, max) {

  return Math.floor((Math.random() * ((max + 1) - min) + min));

}

export function lerp (val01, val02, val) {

  val = val < 0 ? 0 : val;
  val = val > 1 ? 1 : val;
  return val01 + (val02 - val01) * val;

} 

// 0から範囲内でランダムな整数を取得
// -----------------------------------
// @val : 範囲(int)
// return : ランダムな整数(int)
// -----------------------------------
export function range(val) {

  return this.randomInt(-val, val);

}


// to radians
export function radian(angle) { 

  return angle * Math.PI / 180; //1度何ラジアンか

}