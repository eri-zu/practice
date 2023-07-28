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

float rand (vec2 co) {
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

  float size = 0.2;

  float r = rand(vec2(0, uv.y));
  float m = smoothstep(0.0, -size, uv.x*(1.0-size) + size*r - (dispFactor * (1.0 + size)));  
  
  vec4 color = mix(texel1, texel2, m);

  gl_FragColor = color;


}