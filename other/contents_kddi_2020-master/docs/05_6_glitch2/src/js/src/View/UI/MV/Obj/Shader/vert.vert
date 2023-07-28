#pragma glslify: map = require(glsl-map)
// #pragma glslify: ease = require(glsl-easings/exponential-in-out)
// #pragma glslify: ease = require(glsl-easings/exponential-in)
#pragma glslify: ease = require(glsl-easings/exponential-out)
// #pragma glslify: ease = require(glsl-easings/quintic-in-out)
// #pragma glslify: ease = require(glsl-easings/quartic-in-out)
// #pragma glslify: ease = require(glsl-easings/quadratic-in-out)

#define PI 3.141592653589793;

attribute float scale;
attribute float is_smalls;
attribute vec2 diff;
attribute vec2 margin;
attribute float ids;
attribute vec3 rand_Scale;

// varying vec2 vUv;
varying vec3 color;

uniform float time;
uniform float s_time;
uniform float s_time_toSmall;
uniform float tri_height;
uniform float z_time;
uniform float diagonal;
uniform vec2 resolution;
uniform vec3 rgb;
uniform float is_rand;

float scaleCalc(vec2 pos){


  // random
  // float delay = rand_Scale.y;

  // center
  float delay = distance(resolution.xy, pos.xy);
  delay = map(delay, 0.0, diagonal, 0.0, 1.0);
  float strength = 1.0;
  delay *= strength;

  float val = s_time - delay;
  val = clamp(val, 0.0, 1.0);
  val = map(val, 0.0, 1.0 - delay, 0.0, 1.0);
  // val = step(.5, val) * s_time_toSmall;
  // val = ease(smoothstep(.6, 1.0, val)) * s_time_toSmall;
  val = smoothstep(.01, 1.0, ease(val)) * s_time_toSmall;




  return val > .99 ? 1.0 : val;
}

float margin_y(float s){
  return is_smalls == 0.0 ? 0.0 : s*(tri_height / 3.0);
}

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 z_move(vec3 p){
  // vec2 center = vec2(margin.x + diff.x,margin.y - margin_y(s) + diff.y);
  // float theta = 0.0;
  // mat2 cssc = mat2(cos(theta),-sin(theta),sin(theta),cos(theta));
  // vec2 r = (p.xy - center) * cssc + center;
  return vec3(p.xy,rand_Scale.x * z_time * 1.5);
}



void main() {

  color = rgb;

  float x2 = position.x + margin.x + diff.x;
  float y2 = position.y + margin.y + diff.y;
  vec2 pos2 = vec2(x2, y2);

  float s = is_rand > 0.0 ? scaleCalc(pos2) * rand_Scale.z : scaleCalc(pos2);
  float x = position.x * s + margin.x + diff.x;
  float y = position.y * s + margin.y + diff.y;
  float z = 1.0;
  vec3 p = z_move(vec3(x,y,z));
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);

  gl_Position = projected;
}
