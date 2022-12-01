precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;

float circle(vec3 position, vec2 center, float r) {
  // position : ピクセルの位置
  // center : 円の中心座標
  // r : 半径

  float edge = r * 0.5;
  float dist = length(position.xy - center.xy); // 中心からの距離
  float start = r - edge;
  float end = r + edge;

  // 距離短い: 1.0
  // 距離遠い: 0.0
  // edge付近: 線形補完
  return 1.0 - smoothstep(start, end, dist);
}

void main() {
  vec3 color = vec3(1.0, 1.0, 0.0);
  color *= circle(vPosition, vec2(0.0), 0.3);

  gl_FragColor = vec4(color, 1.0);
}