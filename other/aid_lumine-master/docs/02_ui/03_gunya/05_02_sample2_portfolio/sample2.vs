
      
      
      precision highp float;
      precision highp int;
    
      #define GLSLIFY 1
#define SHADER_NAME PROJECT-IMG

attribute vec2 uv;
attribute vec4 position;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
varying vec2 vUv;

uniform float uTime;
uniform float uScrollDistortion;
uniform float uScrollVertDistortion;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * position;
  float d = uScrollDistortion * uScrollVertDistortion;
  gl_Position.y += (cos(uTime * .0012 + uv.x * 3.012) + sin(uTime * .009 + uv.y * 13213.32134)) * 5. * d;
}
    