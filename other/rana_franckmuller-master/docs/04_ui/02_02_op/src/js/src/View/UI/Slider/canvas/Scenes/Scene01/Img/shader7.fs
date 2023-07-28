precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

uniform float opacity;

// uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;
uniform sampler2D brush;
uniform float dispFactor;
uniform float threshold;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

// main
void main() {

  // bg full
  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );
  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

  // texture
  vec4 texel1 = texture2D(texture, uv);
  vec4 texel2 = texture2D(texture2, uv);

  float power = 5.0;

  float m = step(distance(texel1, texel2), dispFactor);

  vec4 color = mix(mix(texel1, texel2, m), texel2, pow(dispFactor, power));

  gl_FragColor = color;


}