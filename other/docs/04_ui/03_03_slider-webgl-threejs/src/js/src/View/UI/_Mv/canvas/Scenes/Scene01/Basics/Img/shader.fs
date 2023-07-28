precision highp float;

#pragma glslify: import('../../../../GLSL/common_var.fs')
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


  vec4 texel1 = texture2D(texture, uv);
  vec4 texel2 = texture2D(texture2, uv);

  vec4 transitionTexel = texture2D(brush, uv);

  // 2値化(threshold)
  #define R_LUMINANCE 0.298912
  #define G_LUMINANCE 0.586611
  #define B_LUMINANCE 0.114478
  float v = texel2.x * R_LUMINANCE + texel2.y * G_LUMINANCE + texel2.z * B_LUMINANCE;
  // if (v >= 0.53333) {
  const float kaityo = 1.0;
  for(float i = 0.0; i < kaityo; i+=1.0){
    if (v >= 1.0 - i / kaityo) {
      v = 1.0 - i / kaityo;
      break;
    }
  }
  vec4 grayScaleTexel = vec4(vec3(v, v, v), 1.0);
  // grayScaleTexel = transitionTexel;



  // transition
  float r = dispFactor * (1.0 + threshold * 2.0) - threshold;
  float mixf = clamp((grayScaleTexel.r - r) * (1.0 / threshold), 0.0, 1.0); // 黒から白に変わっていく or 白から黒に変わってい

  vec4 next = mix(grayScaleTexel, texel2, 1.0 - mixf);
  vec4 color = mix( texel1, next, 1.0 - mixf ); 

  gl_FragColor = vec4(vec3(color.rgb), opacity);
  // gl_FragColor = grayScaleTexel;

}