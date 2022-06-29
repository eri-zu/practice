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

  // transition
  vec2 direction = vec2(1.0, -1.0);
  float smoothness = 0.95;
  const vec2 center = vec2(0.5, 0.5);
   
  vec2 v = normalize(direction);
  v /= abs(v.x)+abs(v.y);
  float d = v.x * center.x + v.y * center.y;
  float m = (1.0-step(dispFactor, 0.0)) * (1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d-0.5+dispFactor*(1.+smoothness))));
  
  vec4 color = mix(texel1, texel2, m);


  gl_FragColor = color;
  // gl_FragColor = vec4(vec3(color.rgb), opacity);
  // gl_FragColor = grayScaleTexel;


}