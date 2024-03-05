precision mediump float;

varying vec4 vColor; // 頂点シェーダから渡ってきた値 @@@

void main() {
  // 頂点の色をそのまま出力する
  gl_FragColor = vColor;
}

