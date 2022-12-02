precision mediump float;
uniform float uTime;
varying vec2 vUv; 

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
  float s = sin(theta);
  float c = cos(theta);

  return mat2(c, -s, s, c);
}

void main() {
  vec3 color = vec3(1.0, 1.0, 0.0);

  // 回転・タイル
  vec2 tilecount = vec2(6.0); // タイル数
  vec2 center = vec2(0.5, 0.5); // 中心座標
  mat2 mat = getRotationMatrix(uTime);
  vec2 position = mod(vUv * tilecount, 1.0); // 座標系を6倍して、0 - 1.0に書いていたものを6つ書く
  vec2 rotatedPosition = mat * (position - center) + center; 
  
  if(inRect(rotatedPosition, center, 0.5)) {
    color *= vec3(1.0, 1.0, 0.0);
  } else {
    color *= vec3(0.0, 0.0, 0.0);
  }

  gl_FragColor = vec4(vec3(color), 1.0);
}

// position 0.2, 1.2, 2.2, 3.2 ... 9.2は全ておなじ出力結果

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
