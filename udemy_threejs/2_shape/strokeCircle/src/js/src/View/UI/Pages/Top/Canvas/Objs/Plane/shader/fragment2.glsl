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

float circle(vec3 position, vec2 center, float r, float lineWidth) {
  float halflineWidth = lineWidth * 0.5;
  float dist = length(position.xy - center);

  float inEdge = 1.0 - step(r - halflineWidth, dist);
  float outEdge = 1.0 - step(r + halflineWidth, dist);

  return outEdge - inEdge;
}

void main() {
  vec3 color = vec3(1.0, 1.0, 1.0);  
  color *= circle(vPosition, vec2(0.0), 0.5, 0.02);

  gl_FragColor = vec4(color, 1.0);
}