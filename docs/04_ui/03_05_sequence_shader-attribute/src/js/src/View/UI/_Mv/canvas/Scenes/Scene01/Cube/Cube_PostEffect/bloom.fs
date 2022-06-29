precision highp float;

#pragma glslify: import('../../../../GLSL/common.fs')

uniform float tone;
uniform float strength;
uniform float fixBlur;
uniform sampler2D textureBase;

uniform float contrast;
uniform float bright;

void main() {

  vec4 dest = texture2D(textureBase, vUv);
  vec4 blur = texture2D(texture, vUv);
  vec4 destOrg = dest;
  vec4 blurOrg = blur;
  blur *= strength;

  dest *= tone;
  dest += blur * fixBlur;

  // contrast
  dest.rgb = (dest.rgb - 0.5) / (1.0 - contrast) + 0.5;
  dest.rgb += bright;


  // gl_FragColor = texture2D(texture, vUv);
  // gl_FragColor = texture2D(textureBase, vUv);

  // vec4 src = texture2D(textureBase, vUv) * tone + texture2D(texture, vUv) * strength;
  // vec4 dst = texture2D(textureBase, vUv) * tone + texture2D(texture, vUv) * strength;

  // vec4 src = dest;
  // src.a = 1.0;
  // dest.a = 1.0;
  // vec4 color = ( src + dest ) - ( src * dest );
  // gl_FragColor = color;

  gl_FragColor = dest;

}