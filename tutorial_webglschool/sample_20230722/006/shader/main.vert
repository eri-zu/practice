
attribute vec3 position;
attribute vec4 color;
uniform mat4 mvpMatrix;
varying vec4 vColor;

void main() {
  vColor = color;

  // MVP 行列と頂点座標を乗算してから出力する @@@
  // とにかく、mvpMatrixをかけたら、回転する絵が得られることを覚える
  // 行列で、頂点を動かしている（3D）
  gl_Position = mvpMatrix * vec4(position, 1.0);
  // w成分の1.0は何？
  // →そもそも、3*3の秒列で、3つの要素の変換を表現できないこともない
  // ただし、その場合、拡大や回転は可能だが、並行移動はできない
  // 天才の人が、要素を4つにして、4 *4 の行列を使うと、並行移動まで表現できることを思いついた
  // 三次元的な3dCGの見た目にしたければ、行列を使おう
}

