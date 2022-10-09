uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 uFrequeny;
uniform float uTime;

attribute vec3 position; // デフォルトattribute
attribute vec2 uv; // デフォルトattribute

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying float vElevation;

const float PI = 3.14;


void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float theta = abs(modelPosition.y * PI) + PI * 0.5;
  // float elevation = sin(theta) * 10.0;
  float elevation = sin(theta) * 0.2;
  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;

  vUv = uv;
  vElevation = elevation;

}