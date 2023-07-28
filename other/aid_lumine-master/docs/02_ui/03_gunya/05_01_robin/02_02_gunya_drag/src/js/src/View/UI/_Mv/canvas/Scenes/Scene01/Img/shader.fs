precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// random
#pragma glslify: random = require(glsl-random)

#pragma glslify: grain = require(glsl-film-grain)
#pragma glslify: blend = require(glsl-blend-soft-light)
#pragma glslify: luma = require(glsl-luma)

uniform float opacity;
uniform float disp;

uniform sampler2D map;
uniform sampler2D mapNext;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec3 hue(vec3 rgb, float adjustment)
{
    const mat3 toYIQ = mat3(0.299,     0.587,     0.114,
                            0.595716, -0.274453, -0.321263,
                            0.211456, -0.522591,  0.311135);
    const mat3 toRGB = mat3(1.0,  0.9563,  0.6210,
                            1.0, -0.2721, -0.6474,
                            1.0, -1.107,   1.7046);

    vec3 yiq = toYIQ * rgb;
    float hue = atan(yiq.z, yiq.y) + adjustment;
    float chroma = sqrt(yiq.z * yiq.z + yiq.y * yiq.y);

    vec3 color = vec3(yiq.x, chroma * cos(hue), chroma * sin(hue));
    return toRGB * color;
}

float applyColorBurnToChannel( float base, float blend ) {
  return ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0));
}

// main
void main() {

  // vec2 myUV = vUv;

  // vec2 offset = myUV + mouseOffsetX;

  // vec4 texture1 = texture2D(map, myUV);
  // vec4 texture2 = texture2D(mapNext, myUV);
  //
  // vec2 dispVec = vec2(texture2.r, texture2.g);
  // vec2 distortedPosition1 = vUv * dispVec * 10.0 * mouseOffsetX;


  float r = -0.4;
  float dir = -0.5 * max(r, 0.75);

  // uv変換
  // vec2 offsetUV = vUv;
  // if(r > 0.0) {
  //     offsetUV.y = vUv.y;
  //     offsetUV.x = 1.0 - offsetUV.x;
  // } else {
  //     offsetUV.y = 1.0 - offsetUV.y;
  //     offsetUV.x = vUv.x;
  // }

  // vec2 scaleCenter = vec2(0.5, 0.5);
  // offsetUV = (offsetUV - scaleCenter) * max(r, 0.75) + scaleCenter;
  // vec4 test = texture2D(map, offsetUV);

  float burned = 0.8;
  float progress = abs(disp);
  float angle = PI * 0.9;

  // // vec
  vec4 dispMap = texture2D(texture, vUv);
  // dispMap.rgb = hue(dispMap.rgb, r);
  vec2 dispVec = vec2(dispMap.r, dispMap.g);


  // vec2 distortedPosition1 = vUv + getRotM(angle) * dispVec * (dir) * (disp*2.0);
  // vec2 distortedPosition2 = vUv + getRotM(angle) * dispVec * (-dir) * (1.0 - (disp*2.0));
  // vec2 distortedPosition1 = vUv + getRotM(angle) * dispVec * (progress);
  // vec2 distortedPosition2 = vUv + getRotM(angle) * dispVec * (1.0 - (progress));
  // vec2 distortedPosition1 = vUv + (vUv.x + disp * -1.0) * (progress);
  // vec2 distortedPosition2 = vUv + (vUv.x + disp * -1.0) * (1.0 - (progress));
  vec2 distortedPosition1 = vec2(vUv.x + -1.0 * disp * (progress) * dispVec.x, vUv.y);
  float direc;
  if(disp<0.0) direc = -1.0;
  else direc = 1.0;
  vec2 distortedPosition2 = vec2(vUv.x + direc * (1.0 - (progress)) * dispVec.x, vUv.y);

  vec4 _texture1 = texture2D(map, distortedPosition1);
  vec4 _texture2 = texture2D(mapNext, distortedPosition2);

  _texture1.r = mix(_texture1.r, _texture2.r, progress);//(disp * dispMap.r) * 1.25);
  _texture1.g = mix(_texture1.g, _texture2.g, progress);//(disp * dispMap.g) * 1.5);
  _texture1.b = mix(_texture1.b, _texture2.b, progress);//(disp * dispMap.b) * 1.75);

  gl_FragColor = vec4(
      applyColorBurnToChannel( _texture1.r, burned ),
      applyColorBurnToChannel( _texture1.g, burned ),
      applyColorBurnToChannel( _texture1.b, burned ),
      // _texture1.r,
      // _texture1.g,
      // _texture1.b,
      1.0
    );
  // gl_FragColor = texture2D(texture, vUv);
  // gl_FragColor = test;
  // gl_FragColor = _texture1;
  // gl_FragColor = _texture2;

}