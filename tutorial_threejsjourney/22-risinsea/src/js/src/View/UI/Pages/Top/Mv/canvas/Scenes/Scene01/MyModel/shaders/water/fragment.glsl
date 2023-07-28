uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main() {
  // mix(x, y, a)	x(1-a)+y*aを返す（つまり線形補間）
  // vec3 color = mix(uDepthColor, uSurfaceColor, vElevation); 

  // -0.2 < vElevation < 0.2 が問題なので
  float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
  vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength); 

  gl_FragColor = vec4(color,1.0); // 高いところほど値が大きいので明るくなる
}
