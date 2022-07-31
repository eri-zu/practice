precision highp float;

#pragma glslify: import('../../../../GLSL/common.fs')
#pragma glslify: random = require(glsl-random)

// main
void main() {

  vec4 color = texture2D(texture, vUv);

  vec3 noise = vec3(random(gl_FragCoord.xy / resolution.xy + frame/1000.0));

  gl_FragColor = color + vec4(noise * 0.55, 0.0);
  // gl_FragColor = color;

}