precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform sampler2D uTexture;
uniform float uAspect;
#define PI 3.141592653589

vec2 rotate(vec2 pt, float theta) {
  float s = sin(theta);
  float c = cos(theta);
  mat2 mat = mat2(c, s, -s, c); 

  pt.y /= 2.0;
  pt = mat * pt;
  pt.y *= 2.0;

  // pt.x /= 2.0;
  // pt.y *= 2.0;

  return pt;
}

void main() {
  vec2 center = vec2(0.5);
  vec2 newUv = vUv;

  newUv -= center;
  // newUv = rotate(newUv, PI * 0.5);
  // newUv += center;

  // vec3 color;
  // if (newUv.x<0.0||newUv.x>1.0||newUv.y<0.0||newUv.y>1.0){
  //   color = vec3(0.0);
  // }else{
  //   color = texture2D(uTexture, newUv).rgb;
  // }

  vec3 color = texture2D(uTexture, newUv).rgb;

  gl_FragColor = vec4(color, 1.0);
}