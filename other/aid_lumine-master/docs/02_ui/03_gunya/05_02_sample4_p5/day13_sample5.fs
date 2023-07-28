precision mediump float;

uniform sampler2D texture;
uniform sampler2D textureSmall;
uniform float time;
uniform float seed;
uniform float fade;

varying vec2 vUv;
//
// Description : Array and textureless GLSL 2D/3D/4D simplex noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float snoise01(vec3 v) {
  return (1.0 + snoise(v)) * 0.5;
}

float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float map(float value, float start1, float stop1, float start2, float stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float steppedNoise(vec2 v, float stepX, float stepY, float _seed) {
  float nx = 100.0 * (ceil(v.x * stepX) / stepX);
  float ny = 100.0 * (ceil(v.y * stepY) / stepY);
  float n = snoise(vec3(nx, ny, _seed + time * 1.0));
  return n;
}

void main() {
  vec2 uv = vUv;
  float dist = length(uv - vec2(0.5));
  float gPower = (1.0 - fade);
  vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

  // flash
  float flash = random(vec2(mod(floor(time * 300.0), 300.0), 0.0));

  // uv distortion 1
  float uvxx = steppedNoise(uv, 25.0, 90.0, seed + 100.0);
  float uvxr = step(0.7 - gPower * 0.6, abs(uvxx));
  uv.x += (gPower * 0.1 + 0.01) * sign(uvxx) * uvxr;

  // uv distortion 2
  float uvdisn = steppedNoise(uv, 10.0, 50.0, seed);
  uvdisn = step(0.85 - gPower * 0.5, (1.0 + uvdisn) * 0.5);
  float uvdisxr = 0.01 * uvdisn * 1.0;
  float uvdisxg = 0.01 * uvdisn * 0.5;
  float uvdisxb = 0.01 * uvdisn * 0.5;

  // block noise
  float bnStep = 30.0;
  float bnx = 100.0 * ceil(uv.x * bnStep) / bnStep;
  float bny = 100.0 * ceil(uv.y * bnStep) / bnStep;
  float bn = snoise01(vec3(bnx, bny, seed + time * 1.0));
  float br = step(0.3, bn);

  if (br == 1.0) {
    color.r = texture2D(texture, uv + vec2(uvdisxr, 0.0)).r;
    color.g = texture2D(texture, uv + vec2(uvdisxg, 0.0)).g;
    color.b = texture2D(texture, uv + vec2(uvdisxb, 0.0)).b;
  } else {
    color.r = texture2D(textureSmall, uv + vec2(uvdisxr, 0.0)).r;
    color.g = texture2D(textureSmall, uv + vec2(uvdisxg, 0.0)).g;
    color.b = texture2D(textureSmall, uv + vec2(uvdisxb, 0.0)).b;
  }

  // wave
  float wr = step(0.4, bn);
  float wave = (1.0 + sin(dist * 30.0 - time * 5.0)) * 0.5;
  wave = flash * step(0.9995, wave) * wr * 5.0 * pow((1.0 - dist) * 1.0, 8.0);
  wave = clamp(wave, 0.0, 1.0);
  wave *= dist > 0.2 ? 1.0 : 0.0;
  color += vec4(wave);

  color.a = fade * 10.0;

  gl_FragColor = color;
}
