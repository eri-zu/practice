uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 uFrequeny;
uniform float uTime;

attribute vec3 position; // デフォルトattribute
attribute vec2 uv; // デフォルトattribute
attribute float aRandom; // 作ったattribute

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying float vElevation;


void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uFrequeny.x + uTime) * 0.1;
  elevation += sin(modelPosition.y * uFrequeny.y + uTime) * 0.1;

  // modelPosition.x * 10.0 周期
  // 0.1 振幅の大きさ
  // modelPosition.z += sin(modelPosition.x * uFrequeny.x + uTime) * 0.1;
  // modelPosition.z += sin(modelPosition.y * uFrequeny.y + uTime) * 0.1;
  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;

  vUv = uv;
  vElevation = elevation;

}