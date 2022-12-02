precision mediump float;
varying vec2 vUv; 
varying vec3 vPosition;

float rect(vec3 position, vec2 center, float width) {
  vec2 pt = position.xy - center;
  float halfWidth = width * 0.5;

  float horizontal = step(-halfWidth, pt.y) * (1.0 - step(halfWidth, pt.y));
  float vertical = step(-halfWidth, pt.x) * (1.0 - step(halfWidth, pt.x));

  return horizontal * vertical;
}

void main() {
  vec3 color = vec3(1.0, 1.0, 0.0);
  color *= rect(vPosition, vec2(0.5), 0.2);

  gl_FragColor = vec4(vec3(color), 1.0);
}