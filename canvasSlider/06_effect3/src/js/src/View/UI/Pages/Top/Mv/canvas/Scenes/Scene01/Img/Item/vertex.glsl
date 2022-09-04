uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position; // デフォルトattribute
attribute vec2 uv; // デフォルトattribute

// fragementに送るが、同じ名前は使えないので変えること
varying vec2 vUv; 


void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;
  gl_Position = projectPosition;
  
  vUv = uv;
}