precision highp float;

#pragma glslify: import('../../../GLSL/common.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

uniform float opacity;
uniform float p;
varying vec2 screenPos;

uniform float scale;
uniform float move;

// main
void main() {

  vec2 st = screenPos;

  // scale
  st *= scale;
  st = st * 0.5 + 0.5;

  // move
  st.x -= move;

  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

  vec2 uv = vec2(
      st.x * ratio.x + (1.0 - ratio.x) * 0.5,
      st.y * ratio.y + (1.0 - ratio.y) * 0.5
      // vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      // vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

  // vec4 color = texture2D(texture, vUv);
  vec4 color = texture2D(texture, uv);

  

  // color rect
  // vec2 st = uv;
  // vec4 bgColor = vec4(1.0,1.0,1.0,1.0);

  // // Bar animations
  // float v = step(vUv.x, p);
  // color = mix(color, bgColor, v);


  gl_FragColor = color - vec4(0.0,0.0,0.0,1.0-opacity);

}