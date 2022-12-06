precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
uniform sampler2D uTexture;
uniform float uAspect;

void main() {
  vec2 newUv = vec2(vUv.x, 1.0 - vUv.y);
  vec3 color = texture2D(uTexture, newUv).rgb;
  gl_FragColor = vec4(color, 1.0);
}