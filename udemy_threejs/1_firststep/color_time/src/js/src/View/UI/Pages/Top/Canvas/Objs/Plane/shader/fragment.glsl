precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform float uTime;

void main() {
  vec3 color = vec3((sin(uTime) + 1.0)/2.0, 0.0, (cos(uTime) + 1.0)/2.0);
  gl_FragColor = vec4(color, 1.0);
}