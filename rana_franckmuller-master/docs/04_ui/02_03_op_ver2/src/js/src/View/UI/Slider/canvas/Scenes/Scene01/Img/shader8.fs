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

  float intensity = 0.1;
  const int passes = 6;


  vec4 c1 = vec4(0.0);
  vec4 c2 = vec4(0.0);

  float disp = intensity*(0.5-distance(0.5, dispFactor));
  for (int xi=0; xi<passes; xi++)
  {
      float x = float(xi) / float(passes) - 0.5;
      for (int yi=0; yi<passes; yi++)
      {
          float y = float(yi) / float(passes) - 0.5;
          vec2 v = vec2(x,y);
          float d = disp;
          c1 += texture2D(texture, uv + d*v);
          c2 += texture2D(texture2, uv + d*v);
      }
  }
  c1 /= float(passes*passes);
  c2 /= float(passes*passes);

  vec4 color = mix(c1, c2, dispFactor);

  gl_FragColor = color;


}