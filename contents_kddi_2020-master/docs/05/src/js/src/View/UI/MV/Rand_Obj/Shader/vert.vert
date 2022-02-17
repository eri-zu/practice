

varying vec2 vUv;

uniform float time;

attribute vec2 margin;

void main() {
  vUv = uv;
  vec2 xy = vec2(position.x + margin.x , position.y + margin.y);
  vec3 p = vec3(xy,position.z);
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);
  gl_Position = projected;
}
