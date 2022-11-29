precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; // fragementに送るが、同じ名前は使えないので変えること
uniform vec3 uColor;
uniform vec2 uResoltion;

// gl_FragCoordはvec4

void main() {
  float r = clamp(vPosition.x, 0.0, 1.0);
  float g = clamp(vPosition.y, 0.0, 1.0);
  vec3 color = vec3(r, g, 0.0);
  gl_FragColor = vec4(color, 1.0);
}