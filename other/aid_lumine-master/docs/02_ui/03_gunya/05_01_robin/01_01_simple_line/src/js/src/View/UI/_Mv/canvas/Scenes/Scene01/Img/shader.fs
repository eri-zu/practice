precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// random
#pragma glslify: random = require(glsl-random)

#pragma glslify: grain = require(glsl-film-grain)
#pragma glslify: blend = require(glsl-blend-soft-light)
#pragma glslify: luma = require(glsl-luma)

uniform float opacity;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

// main
void main() {

  // vec2 ratio = vec2(
  //     min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
  //     min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  //   );

  // vec2 uv = vec2(
  //     vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
  //     vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  //   );


  // uv change

  vec2 uv = vUv;

  uv -= vec2(0.5, 0.5);
  uv *= 100.0; // Scale the coordinate system

  // waves
  vec3 wave_color = vec3(0.0, 0.0, 0.0);
  float wave_width = 0.01;
  float thickness = 1.0; // 大きい方が細く

  for(int i = 0; i < 2; ++i) {

    uv.y += sin(sin(uv.x / 3.0));
    wave_width = abs(1.0 / (uv.y * thickness)); // glowな感じが出る
    // wave_width = 1.0 - abs(uv.y); // ぱちっと
    
    wave_color += vec3(wave_width, wave_width, wave_width);

  }
  
  gl_FragColor = vec4(wave_color, wave_color.r);
  // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

}