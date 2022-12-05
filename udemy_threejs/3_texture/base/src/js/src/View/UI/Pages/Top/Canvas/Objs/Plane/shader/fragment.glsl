precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform sampler2D uTexture;

void main() {
  vec3 color = texture2D(uTexture, vUv).rgb;
  gl_FragColor = vec4(color, 1.0);
}