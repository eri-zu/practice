#pragma glslify: import('../../../GLSL/common.vs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

attribute float aPos;
varying vec2 screenPos;

void main() {

  vUv = uv;

  vec3 p = position;
  p.x = aPos;

  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  gl_Position = projected;

  screenPos = projected.xy / projected.w;
  // screenPos = projected.xy;
  
}