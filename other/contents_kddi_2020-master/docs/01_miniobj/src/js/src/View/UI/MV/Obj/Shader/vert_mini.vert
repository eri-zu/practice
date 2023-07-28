#define PI 3.14159265359

attribute float scale;
attribute vec2 diff;
attribute float ids;

// varying vec2 vUv;
varying vec3 color;

uniform float time;
uniform float z_time;
uniform float s_time;
uniform vec3 rgb;
uniform float num;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 z_move(vec3 p){
  // float r = rand(vec2(p.x,p.y));
  return vec3(p.xy,z_time);
}


//回転
mat2 rotation(){
  float theta = (ids / num) * PI;
  float is_r = step((ids / num),time);
  float t = s_time * 2.0 * PI *  is_r;
  mat2 c = mat2(cos(theta + t),-sin(theta + t),sin(theta + t),cos(theta + t));
  return c;
}

//移動

vec2 move(vec2 p){
  // float l = length(diff);
  // float r = (ids / num) * 2.0 - 1.0;
  // vec2 p2 = p + (ids + 1.0) * time * l * r * .1;
  return p;
}



void main() {
  // vUv = uv;
  color = rgb;
  mat2 c = rotation();
  vec2 p1 = move(position.xy);
  vec2 p2 = p1.xy * c;

  float x = p2.x * scale * time + diff.x;
  float y = p2.y * scale * time + diff.y;
  float z = 0.0;
  vec3 p = z_move(vec3(x,y,z));
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(p , 1.0);

  gl_Position = projected;
}
