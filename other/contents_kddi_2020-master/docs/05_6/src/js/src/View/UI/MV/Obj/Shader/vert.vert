#pragma glslify: map = require(glsl-map)
#pragma glslify: ease = require(glsl-easings/exponential-in-out)

#define PI 3.141592653589793;

attribute float scale;
attribute float is_smalls;
attribute vec2 diff;
attribute vec2 margin;
attribute float ids;
attribute vec2 rand_Scale;

// varying vec2 vUv;
varying vec3 color;

uniform float time;
uniform float s_time;
uniform float s_time_toSmall;
uniform float tri_height;
uniform float z_time;
uniform vec2 resolution;
uniform vec3 rgb;

float scaleCalc(){
  // vec2 p = margin / resolution;
  // float is_show = step(length(p),time);
  // float m = 1.0 - length(p);
  // float s = (length(p) + time * m) * scale * is_show;
  // float s2 = s + (1.0 - s)*s_time;
  // return s2;

  float val = s_time - rand_Scale.y;
  val = clamp(val, 0.0, 1.0);
  val = map(val, 0.0, 1.0 - rand_Scale.y, 0.0, 1.0);
  val = ease(val) * s_time_toSmall;
  return val;
}

float margin_y(float s){
  return is_smalls == 0.0 ? 0.0 : s*(tri_height / 3.0);
}

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 z_move(vec3 p){
  // float r = rand(vec2(p.x,p.y));
  float s = scaleCalc();
  vec2 center = vec2(margin.x + diff.x,margin.y - margin_y(s) + diff.y);
  float num = is_smalls == 1.0 ? 1.0 : -1.0;
  // float theta = num * time * .666666 * PI;
  float theta = 0.0;
  mat2 cssc = mat2(cos(theta),-sin(theta),sin(theta),cos(theta));
  vec2 r = (p.xy - center) * cssc + center;
  return vec3(r,rand_Scale.x * z_time * 1.5);
}



void main() {
  // vUv = uv;

  // float _c = (10.0 / 255.0) * rand(vec2(clamp(s_time,0.4,.5),ids)) * s_time;
  // color = rgb - _c;
  color = rgb;

  float s = scaleCalc();
  float x = position.x * s + margin.x + diff.x;
  float y = position.y * s + margin.y - margin_y(s) + diff.y;
  float z = 1.0;
  vec3 p = z_move(vec3(x,y,z));
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);

  gl_Position = projected;
}
