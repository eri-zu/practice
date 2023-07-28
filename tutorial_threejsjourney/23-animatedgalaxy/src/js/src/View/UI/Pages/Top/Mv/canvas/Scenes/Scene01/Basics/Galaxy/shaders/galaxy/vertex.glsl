uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute vec3 aRandomness;
varying vec3 vColor;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // spin
  float angle = atan(modelPosition.x, modelPosition.z); // ブランチの作る角度
  float distanceToCenter = length(modelPosition.xz); // distance
  float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2; // 距離が遠いほど小さいoffsetを加えるので逆数に
  angle += angleOffset;
  modelPosition.x = cos(angle) * distanceToCenter;
  modelPosition.z = sin(angle) * distanceToCenter;

  // rnadomness
  // modelPosition.x = aRandomness.x;
  // modelPosition.y = aRandomness.y;
  // modelPosition.z = aRandomness.z;
  modelPosition.xyz += aRandomness;
  
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  gl_PointSize = uSize * aScale;
  gl_PointSize *= ( 1.0 / - viewPosition.z ); // 遠近感で大きさを変えるように調整（size attenuation）

  vColor = color;

}