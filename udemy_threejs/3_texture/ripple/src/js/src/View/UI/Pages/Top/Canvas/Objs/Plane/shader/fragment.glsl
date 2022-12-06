precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D uTexture;
uniform float uDuration;
uniform float uTime;


void main() {
  float len = length(vPosition.xy); // 中心から

  float rippleNum = 12.0; // 振幅の数
  float speed = 4.0;
  float distortLevel = 0.03;
  // vec2 ripple = vUv + vPosition.xy / len * 0.1 * cos(len * rippleNum - uTime * speed);
  // vec2 ripple = vUv + vPosition.xy / len * distortLevel * cos(len * rippleNum - uTime * speed);
  vec2 ripple = vec2(vPosition.x / len, vPosition.y / len);

  // float delta = (sin((mod(uTime, uDuration) / uDuration) * 6.23) + 1.0) / 2.0 ; // 0 - 1返ってくる
  // vec2 uv = mix(ripple, vUv, delta); // deltaが0の時、rippleを返す
  // vec2 uv = mix(ripple, vUv, 0.0);
  vec2 uv = ripple;

  vec3 color = texture2D(uTexture, uv).rgb;

  gl_FragColor = vec4(color, 1.0); 
}