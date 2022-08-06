uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
attribute vec3 position; // デフォルトattribute
attribute vec2 uv; // デフォルトattribute
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectPosition = projectionMatrix * viewPosition;
  gl_Position = projectPosition;

  vUv = uv;
}