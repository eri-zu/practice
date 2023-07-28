precision highp float;

#pragma glslify: import('../../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

varying vec3 vColor;
uniform float t;

void main() {

  // Round the point
  vec3 n;
  n.xy = gl_PointCoord * 2.0 - 1.0;
  n.z = 1.0 - dot(n.xy, n.xy);
  if (n.z < 0.0) discard;

  vec3 c = mix(vColor, vec3(1.0,1.0,1.0), t);
  gl_FragColor = vec4(c, 1.0);
  
}
