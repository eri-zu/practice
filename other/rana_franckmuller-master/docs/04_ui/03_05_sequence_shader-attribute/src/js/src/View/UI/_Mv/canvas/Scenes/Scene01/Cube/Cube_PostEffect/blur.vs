#pragma glslify: import('../../../../GLSL/common.vs')

void main() {

  vUv = uv;

  vec4 pos = vec4(position, 1.0);

  gl_Position = pos;
  
}
