precision mediump float;
uniform float uTime;
varying vec3 vPosition; 

bool inRect(vec2 position, vec2 center, float width) {
  float x = position.x - center.x;
  float y = position.y - center.y;
  
  if(abs(x) <= width * 0.5 && abs(y) <= width * 0.5) {
    return true;
  } else {
    return false;
  }
}

mat2 getRotationMatrix(float theta) {
  // 座標系を回転
  float s = sin(theta);
  float c = cos(theta);

  return mat2(c, -s, s, c);
}

void main() {
  vec3 color = vec3(1.0, 1.0, 0.0);

  // 回転
  vec2 center = vec2(0.5, 0.5); // 中心座標
  mat2 mat = getRotationMatrix(uTime);
  vec2 position = vPosition.xy - center; // 空間を移動させる前に図形の中心を(0, 0)に移動
  vec2 rotatedPosition = mat * position + center;  // 回転後に、図形の中心を元に戻す
  
  if(inRect(rotatedPosition, center, 0.5)) {
    color *= vec3(1.0, 1.0, 0.0);
  } else {
    color *= vec3(0.0, 0.0, 0.0);
  }

  gl_FragColor = vec4(vec3(color), 1.0);
}

// 0 〜 1を6倍
// 0.1 / 1.0 -> 0.1
// 0.2 / 1.0 -> 0.2
// 0.3 / 1.0 -> 0.3
// ...
// 1.0 / 1.0 -> 0
// 1.1 / 1.0 -> 0.1
// 1.2 / 1.0 -> 0.2
// ...
// 5.8 / 1.0 -> 0.8
// 5.9 / 1.0 -> 0.9
// 6.0 / 1.0 -> 0
