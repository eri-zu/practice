precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// random
#pragma glslify: random = require(glsl-random)

#pragma glslify: grain = require(glsl-film-grain)
#pragma glslify: blend = require(glsl-blend-soft-light)
#pragma glslify: luma = require(glsl-luma)

uniform float opacity;

uniform float thickness;
uniform float komakasa;
uniform float naminami;
uniform float ookisa;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

// main
void main() {

  // uv change

  vec2 uv = vUv;
  uv -= vec2(1.0, 1.0);
  uv *= 100.0; // Scale the coordinate system

  // waves
  vec3 wave_color = vec3(0.0, 0.0, 0.0);
  float wave_width = 0.01;
  // float thickness = 1.0; // 大きい方が細く
  // float komakasa = 6.0;
  // float naminami = 1.0;
  // float ookisa = 1.0;

  for(int i = 0; i < 6; ++i) {

    uv = rotate2d(-TWO_PI / 4.0) * uv;

    // uv.y += (sin(sin(uv.x + float(i)*1.0 + ((alpha*0.5) * TWO_PI) ) / 3.0) * 1.6 + (-1.0 * PI));
    float index = float(i) * 1.0 * 0.1;
    uv.y += sin(sin(uv.x / komakasa + index) * naminami) * ookisa;
    // wave_width = abs(1.0 / (50.0 * uv.y * glow));


    wave_width = abs(1.0 / (uv.y * thickness)); // glowな感じが出る
    // wave_width = 1.0 - abs(uv.y);
    
    wave_color += vec3(wave_width, wave_width, wave_width);

  }
  
  gl_FragColor = vec4(wave_color, wave_color.r);
  // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

}