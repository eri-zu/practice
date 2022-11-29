precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; // fragementに送るが、同じ名前は使えないので変えること
uniform vec3 uColor;
uniform vec2 uResoltion;

// gl_FragCoordはvec4

void main() {
  // if(n < edge0) 0 returned
  // if(n > edge1) 1.0 returned

  float r = smoothstep(0.0, 0.3, vPosition.x);
  float g = smoothstep(0.0, 0.3, vPosition.y);
  vec3 color = vec3(r, g, 0.0);
  gl_FragColor = vec4(color, 1.0);
}