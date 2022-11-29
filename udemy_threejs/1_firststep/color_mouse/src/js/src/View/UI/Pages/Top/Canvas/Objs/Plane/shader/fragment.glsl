precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform vec2 uMouse;
uniform vec2 uResolution;

void main() {
  vec2 v = uMouse / uResolution;
  vec3 color = vec3(v.x, 0.0, v.y);
  gl_FragColor = vec4(color, 1.0);
}