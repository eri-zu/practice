precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; // fragementに送るが、同じ名前は使えないので変えること
uniform vec3 uColor;
uniform vec2 uResoltion;

// gl_FragCoordはvec4

void main() {
  vec2 uv = gl_FragCoord.xy / uResoltion;
  vec3 color = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), uv.y);
  gl_FragColor = vec4(color, 1.0);
}