precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform vec3 uColor;

void main() {
  gl_FragColor = vec4(uColor, 1.0);
}