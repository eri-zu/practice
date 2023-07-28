precision highp float;

#pragma glslify: import('../../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: map = require(glsl-map)

uniform float opacity;

// uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;
uniform sampler2D brush;
uniform float dispFactor;
uniform float threshold;
uniform float isTex;

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
  total += smoothNoise(p     - frame / 300.0);
  total += smoothNoise(p*2.  + frame / 300.0) / 2.;
  total += smoothNoise(p*4.  - frame / 300.0) / 4.;
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

  // bg full
  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );
  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

  // noise
  vec2 st = vUv;
  vec2 p = st * 0.5;
  float pos = nestedNoise(p);
  st = vec2(pos * 0.8, pos * 0.8);
  float x = st.x * 1.0 * pos;
  float y = st.y * 1.0 * pos;

  // float x = st.x * 0.3;
  // float y = st.y * 0.3;

  vec3 seed = vec3(x, y, frame / 100.0);
  float n = (noise3d(seed) + 1.0) / 2.0; // -1.0 〜 1.0


  // img color
  vec4 texel1 = texture2D(texture, uv);
  vec4 texel2 = texture2D(texture2, uv);
  vec4 transitTexel2 = texture2D(texture2, st);
  // vec4 transitTexel2 = texture2D(texture2, vec2(n, n));
  vec4 transitionTexel = texture2D(brush, uv);

  // 2値化(threshold)
  #define R_LUMINANCE 0.298912
  #define G_LUMINANCE 0.586611
  #define B_LUMINANCE 0.114478
  float v = texel2.x * R_LUMINANCE + texel2.y * G_LUMINANCE + texel2.z * B_LUMINANCE;
  float transitV = transitTexel2.x * R_LUMINANCE + transitTexel2.y * G_LUMINANCE + transitTexel2.z * B_LUMINANCE;
  // if (v >= 0.53333) {
  // const float kaityo = 1.0;
  // for(float i = 0.0; i < kaityo; i+=1.0){
  //   if (v >= 1.0 - i / kaityo) {
  //     v = 1.0 - i / kaityo;
  //     break;
  //   }
  // }
  const float kaityo = 1.0;
  for(float i = 0.0; i < kaityo; i+=1.0){
    if (transitV >= 1.0 - i / kaityo) {
      transitV = 1.0 - i / kaityo;
      break;
    }
  }
  vec4 grayScaleTexel = vec4(vec3(v, v, v), 1.0);
  vec4 transitGrayScaleTexel = vec4(vec3(map(transitV, 0.0, 1.0, 0.0, .3), map(transitV, 0.0, 1.0, 0.0, .3), map(transitV, 0.0, 1.0, 0.0, .3)), 1.0);
  // grayScaleTexel = transitionTexel;



  // transition
  float r = dispFactor * (1.0 + threshold * 2.0) - threshold;
  float mixf = clamp((transitGrayScaleTexel.r - r) * (1.0 / threshold), 0.0, 1.0); // 黒から白に変わっていく or 白から黒に変わってい

  vec4 next = mix(grayScaleTexel, texel2, 1.0 - mixf);
  // vec4 color = mix( texel1, next, smoothstep(0.0, 1.0, 1.0 - mixf)); 
  vec4 color = mix( texel1, next, 1.0 - mixf); 

  // output
  if(isTex==1.0) {
    gl_FragColor = transitGrayScaleTexel;  
  } else {
    gl_FragColor = vec4(vec3(color.rgb), opacity);
    // gl_FragColor = grayScaleTexel;
  }
  
}