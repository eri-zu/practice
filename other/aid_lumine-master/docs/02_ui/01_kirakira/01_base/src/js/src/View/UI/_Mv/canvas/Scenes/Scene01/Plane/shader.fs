precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: map = require(glsl-map)

varying vec3 vColor;
varying vec3 vPos;

#define PI 3.1415926535897932384626433832795

void main() {

  // Round the point
  vec3 n;
  n.xy = gl_PointCoord * 2.0 - 1.0;
  n.z = 1.0 - dot(n.xy, n.xy);
  if (n.z < 0.0) discard;

  float op = map(sin(PI / 2.0 + vPos.x * 0.01 + frame*1.5), -1.0, 1.0, 0.0, 1.0);

  gl_FragColor = vec4(vColor, op);
  
}
