precision mediump float;
uniform sampler2D uTexture;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {
  vec4 color = texture2D(uTexture, vUv);
  gl_FragColor = color;
}