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

  vec2 center = vec2(0.5);
  float threshold = 3.0;
  float fadeEdge = 0.1;

  float dist = distance(center, uv) / threshold;
  float r = dispFactor - min(rand(vec2(uv.y, 0.0)), rand(vec2(0.0, uv.x)));  

  vec4 color = mix(texel1, texel2, mix(0.0, mix(step(dist, r), 1.0, smoothstep(1.0-fadeEdge, 1.0, dispFactor)), smoothstep(0.0, fadeEdge, dispFactor)));

  gl_FragColor = color;


}