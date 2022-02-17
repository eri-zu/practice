

varying vec2 vUv;

uniform float time;

void main() {
  vUv = uv;
  vec3 p = position;
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);
  gl_Position = projected;
}
