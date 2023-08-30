// [x, y, z, x, y, z... ]というような配列が入ってきてるのはなく、
// まず、xが入ってきて、11行目まで実行され、次にyが入ってきて、11行目まで実行され...という流れになる

// attribute は、頂点属性であることを示す修飾子
attribute vec3 position; 

// 必ずmain関数が必要
void main() {
  // gl_Position は頂点がどのように描かれるかを決める座標の出力（vec4）
  // gl_ 〜というのは組み込み変数 vec4でないとだめ
  // gl_Positionに突っ込むことで、最後どういう風に描かれるか決まる
  
  gl_Position = vec4(position, 1.0);
}

