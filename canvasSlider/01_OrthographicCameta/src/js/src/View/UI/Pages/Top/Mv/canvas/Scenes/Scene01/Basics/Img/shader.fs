precision highp float;

#pragma glslify: import('../../../GLSL/common.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

uniform float opacity;

// main
void main() {

  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

  vec4 color = texture2D(texture, uv);

  // vignette
  vec3 seed = vec3(uv, frame / 60.0);
  float n = noise3d(seed); // 0.0 〜 1.0

  float dist = distance(uv, vec2(0.5, 0.5));
  float size = 0.3;
  float amount = 2.5;
  dist = dist * abs(n) * 1.0;
  // color.rgb *= smoothstep(0.8, 0.5 * 0.799, dist * (0.5 + 1.0));
  color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));

  gl_FragColor = color - vec4(0.0,0.0,0.0,1.0-opacity);

}