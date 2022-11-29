precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; // fragementに送るが、同じ名前は使えないので変えること
uniform vec3 uColor;
uniform vec2 uResoltion;

// gl_FragCoordはvec4

void main() {
  // 右に行くほどrが強くなる
  // 上に行くほどgが強くなる
  // 左下: (0, 0, 0) 左上: (0.0, 1.0, 1.0) 右上: (1.0, 0.0, 1.0) 右下: (1.0. 0.0. 0.0) 
  vec3 color = vec3(vUv.x, vUv.y, 0);
  gl_FragColor = vec4(color, 1.0);
}