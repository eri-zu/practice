precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;

bool inCircle(vec3 position, vec2 center, float r, float lineWidth) {
  // position : ピクセルの位置
  // center : 円の中心座標
  // r : 半径
  // lineWidth : stroke太さ

  float dist = length(position.xy - center.xy); // 中心からの距離

  if(dist < r && dist > r - lineWidth) {
    return true;
  } else {
    return false;
  }
}

void main() {
  vec3 color = vec3(1.0, 1.0, 1.0);

  if(inCircle(vPosition, vec2(0.5), 0.3, 0.05)) {
    color *= vec3(1.0, 1.0, 0.0);
  } else {
    color *= vec3(0.0, 0.0, 0.0);
  }

  gl_FragColor = vec4(color, 1.0);
}