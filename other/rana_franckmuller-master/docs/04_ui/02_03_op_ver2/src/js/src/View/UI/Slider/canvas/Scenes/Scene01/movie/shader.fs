precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: map = require(glsl-map)

uniform float opacity;

// uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D transitTex;
uniform float dispFactor;
uniform float threshold;
uniform float isTex;
uniform float isFirst;
uniform vec2 imageResolutionTex;

#define TWO_PI 6.28318530718

vec3 Hsv2Rgb(vec3 c) {

  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);

}

float random(float p) {
  return fract(sin(p)*10000.);
}

float noise(vec2 p) {
  return random(p.x + p.y*10000.);
}

vec2 sw(vec2 p) {return vec2( floor(p.x) , floor(p.y) );}
vec2 se(vec2 p) {return vec2( ceil(p.x)  , floor(p.y) );}
vec2 nw(vec2 p) {return vec2( floor(p.x) , ceil(p.y)  );}
vec2 ne(vec2 p) {return vec2( ceil(p.x)  , ceil(p.y)  );}

float smoothNoise(vec2 p) {
  vec2 inter = smoothstep(0., 1., fract(p));
  float s = mix(noise(sw(p)), noise(se(p)), inter.x);
  float n = mix(noise(nw(p)), noise(ne(p)), inter.x);
  return mix(s, n, inter.y);
  return noise(nw(p));
}

float movingNoise(vec2 p) {
  float total = 0.0;
  total += smoothNoise(p     - frame / 30.0);
  total += smoothNoise(p*2.  + frame / 30.0) / 2.;
  total += smoothNoise(p*4.  - frame / 30.0) / 4.;
  // total += smoothNoise(p*8.  + frame / 300.0) / 8.;
  // total += smoothNoise(p*16. - frame / 300.0) / 16.;
  // total /= 1. + 1./2. + 1./4. + 1./8. + 1./16.;
  total /= 1. + 1./2. + 1./4.;
  return total;
}

float nestedNoise(vec2 p) {
  float x = movingNoise(p);
  float y = movingNoise(p + 100.);
  return movingNoise(p + vec2(x, y));
}

// main
void main() {

  // for img
  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );
  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

  // for transtex
  vec2 ratio2 = vec2(
      min((resolution.x / resolution.y) / (imageResolutionTex.x / imageResolutionTex.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolutionTex.y / imageResolutionTex.x), 1.0)
    );
  vec2 uv2 = vec2(
      vUv.x * ratio2.x + (1.0 - ratio2.x) * 0.5,
      vUv.y * ratio2.y + (1.0 - ratio2.y) * 0.5
    );

  // noise
  vec2 st = vUv;
  vec2 p = st * 2.0;
  float pos = nestedNoise(p);
  st = vec2(pos * 1.0, pos * 1.0);
  float x = st.x * .79 * pos * .7;
  float y = st.y * .82 * pos * .7;

  vec3 seed = vec3(x, y, frame / 100.0);
  vec3 seed2 = vec3(x, y, 1000.0 + frame / 100.0);
  float n = noise3d(seed); // -1.0 〜 1.0
  float n2 = noise3d(seed2); // -1.0 〜 1.0

  // vec3 rgb = Hsv2Rgb(vec3(n, 0.8 * n, 1.0));
  vec3 rgb = Hsv2Rgb(vec3(n, 1.0, 1.0)) * 0.5 + Hsv2Rgb(vec3(n2, 1.0, 1.0)) * 0.5;
  vec4 color = vec4(vec3(rgb), 1.0);


  // // img color
  vec4 texel1 = texture2D(texture, uv);
  vec4 texel2 = texture2D(texture2, uv);
  vec4 trans = texture2D(transitTex, uv2);


  // // 2値化(threshold)
  #define R_LUMINANCE 0.298912
  #define G_LUMINANCE 0.586611
  #define B_LUMINANCE 0.114478
  float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;
  vec4 grayScale = vec4(vec3(v, v, v), 1.0);
  float transv = trans.x * R_LUMINANCE + trans.y * G_LUMINANCE + trans.z * B_LUMINANCE;
  vec4 grayScaleTrans = vec4(vec3(transv, transv, transv), 1.0);



  // transition
  float r = dispFactor * (1.0 + threshold * 2.0) - threshold;
  float mixf = clamp((1.0 - grayScaleTrans.r - r) * (1.0 / threshold), 0.0, 1.0); // 黒から白に変わっていく or 白から黒に変わってい

  vec4 finalColor;
  if(isFirst==1.0) {
    finalColor = mix( vec4(1.0,1.0,1.0,1.0), texel1, 1.0 - mixf); 
  } else {
    finalColor = mix( texel1, texel2, 1.0 - mixf); 
  }

  // output
  gl_FragColor = finalColor;
  // gl_FragColor = trans;
  
}