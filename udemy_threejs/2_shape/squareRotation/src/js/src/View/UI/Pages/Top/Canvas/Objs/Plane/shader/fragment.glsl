precision mediump float;
uniform float uTime;
varying vec2 vUv; 
varying vec3 vPosition;

bool inRect(vec3 position, vec2 center, float width) {
  float x = (position.x  - center.x);
  float y = (position.y  - center.y);
  
  if(abs(x) <= width * 0.5 && abs(y) <= width * 0.5) {
    return true;
  } else {
    return false;
  }
}

void main() {
  vec3 color = vec3(1.0, 1.0, 0.0);

  float radius = 0.3;
  vec2 center = vec2(r * sin(uTime), r * cos(uTime));

  if(inRect(vPosition, center, 0.4)) {
    color *= vec3(1.0, 1.0, 0.0);
  } else {
    color *= vec3(0.0, 0.0, 0.0);
  }

  gl_FragColor = vec4(vec3(color), 1.0);
}