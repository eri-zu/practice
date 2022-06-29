precision highp float;

#pragma glslify: import('../../../../GLSL/common.fs')
#pragma glslify: random = require(glsl-random)

// main
void main() {

  vec4 color = vec4(1.0,0.0,0.0,1.0);

  vec3 noise = vec3(random(gl_FragCoord.xy / resolution.xy + frame/100.0));

  gl_FragColor = color - vec4(noise * 0.55, 0.0);

}