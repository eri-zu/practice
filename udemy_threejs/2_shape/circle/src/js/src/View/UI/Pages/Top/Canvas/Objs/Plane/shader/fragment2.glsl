precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;

float circle(vec3 position, vec2 center, float r) {
  float dist = length(position.xy - center); // 中心からの距離
  return 1.0 - step(r, dist);
}

void main() {
  vec3 color = vec3(1.0, 1.0, 1.0);
  color *= vec3(circle(vPosition, vec2(0.0), 0.5));

  gl_FragColor = vec4(color, 1.0);
}