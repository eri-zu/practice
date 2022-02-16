const designWidth = 750;
/**
 * デザインサイズから現在のviewportに換算した数値を返す
 * @param  number num psd上のサnumber
 * @return number
  */
export default function px(num) {
  return (num / designWidth) * window.innerWidth;
}
