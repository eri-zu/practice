// フラグメントシェーダ内で、浮動小数店をどのような精度で扱うか
// lowp mediump highp
precision mediump float;

void main() {
  // gl_FragColor が、最終的に画面に出力される色（vec4）
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); //rgba 0.0 - 1.0
}

