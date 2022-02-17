#pragma glslify: import('../../../GLSL/common.vs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

void main() {

  vUv = uv;

  vec3 pos = position;

  vec3 seed = vec3(pos.xy, pos.z + frame * 0.02) * 1.0;

  pos.x = pos.x + abs(noise3d(seed) * 3.0) * sin((position.z + frame) * 1.5 * 0.2);
  pos.y = pos.y + abs(noise3d(seed) * 3.0) * sin((position.x + frame) * 0.5 * 0.2);
  pos.z = pos.z + abs(noise3d(seed) * 3.0) * sin((position.y + frame) * 2.7 * 0.2);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
}