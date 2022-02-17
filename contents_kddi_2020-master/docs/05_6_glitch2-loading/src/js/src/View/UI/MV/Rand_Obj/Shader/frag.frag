
uniform vec2 resolution;
varying vec2 vUv;
uniform float time;
uniform vec3 rgb;

void main(void) {
  vec3 c = vec3(0.5);

  gl_FragColor = vec4(c,1.0);
}
