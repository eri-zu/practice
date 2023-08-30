
attribute vec3 position;
attribute vec3 normal; // 頂点法線 @@@
attribute vec4 color;
uniform mat4 mvpMatrix;
varying vec4 vColor;

// ライトベクトルはひとまず定数で定義する @@@
const vec3 light = vec3(1.0, 1.0, 1.0);

void main() {
  // 単位化した法線と単位化したライトベクトルで内積を取る @@@
  // normalizeは単位化してくれるビルドインメソッド
  // 単位ベクトル同士なら、内積の結果は絶対に-1〜1に収まる
  float d = dot(normalize(normal), normalize(light));
  // d = (d + 1.0) * 0.5;  -1 ~ 1が、0 - 1の範囲になるのでもっとグラデーションでる 

  // 内積の結果を頂点カラーの RGB 成分に乗算する @@@

  // 乗算するということは、90度超えたら0以下の値となり真っ黒になる
  // rgbにマイナスの値入っても、、まあok
  vColor = vec4(color.rgb * d, color.a);

  // MVP 行列と頂点座標を乗算してから出力する
  gl_Position = mvpMatrix * vec4(position, 1.0);


}

