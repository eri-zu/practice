precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform sampler2D uTexture;
uniform float uAspect;
#define PI 3.141592653589

mat2 getRotationMatrix(float theta) {
  float s = sin(theta);
  float c = cos(theta);
  return mat2(c, -s, s, c);
}

float inRect(vec2 position) {
  float vertical 

}

void main() {
  // やり方1 up side down
  // vec2 newUv = vec2(vUv.x, 1.0 - vUv.y);
  // vec3 color = texture2D(uTexture, newUv).rgb;
  // gl_FragColor = vec4(color, 1.0);

  // やり方2 flip
  mat2 mat = getRotationMatrix(PI * 0.5);
  vec2 center = vec2(0.5);
  vec2 newUv = mat * ((vUv - center) * uAspect) + center;

  vec3 color = texture2D(uTexture, newUv).rgb;
  gl_FragColor = vec4(color, 1.0);
}