uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float uTime;
uniform vec2 uFrequency;

attribute vec3 position; // デフォルトattribute
attribute vec2 uv; // デフォルトattribute

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 20.0;
  elevation += sin(modelPosition.y * uFrequency.y + uTime) * 20.0;

  // 係数 : 波の高さ（振幅）

  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;

  gl_Position = projectPosition;

  vUv = uv;
}