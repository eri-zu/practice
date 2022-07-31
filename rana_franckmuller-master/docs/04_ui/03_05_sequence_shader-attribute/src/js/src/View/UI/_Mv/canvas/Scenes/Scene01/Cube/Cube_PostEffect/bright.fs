precision highp float;

#pragma glslify: import('../../../../GLSL/common.fs')
uniform float minBright;

void main() {

  vec4 bright = max(vec4(0.0), (texture2D(texture, vUv) - minBright));
  gl_FragColor = bright;

}