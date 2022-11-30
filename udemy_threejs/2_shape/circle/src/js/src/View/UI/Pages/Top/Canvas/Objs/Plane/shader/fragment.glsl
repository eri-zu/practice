precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition;

void main() {
  // 半径
  float r = float(length(vPosition.xy));

  // 半径以下は0.0, 半径以上は0.5 => 1.0から引いて色反転
  // 黄色にしたいので、vec3(1.0, 1.0, 0.0)積算
  vec3 color = vec3(1.0, 1.0, 0.0) * float(1.0 - step(0.5, r)); 
  gl_FragColor = vec4(color, 1.0);
}