precision mediump float;
uniform float uTime;
varying vec2 vUv;
varying vec3 vPosition; 

float horizontalLine(float y, float base, float lineWidth) {
  if(y > base - lineWidth && y < base + lineWidth) {
    return 1.0;
  } else {
    return 0.0;
  }
}

float verticallLine(float x, float base, float lineWidth) {
  if(x > base - lineWidth && x < base + lineWidth) {
    return 1.0;
  } else {
    return 0.0;
  }
}

float circle(vec2 position, vec2 center, float radius, float thickness) {
  float dist = length(position - center);

  if(dist < radius && dist > radius - thickness) {
    return 1.0;
  } else {
    return 0.0;   
  }
}

float sweep(vec2 position, vec2 center, float radius, float thickness ) {
  if(position.x == sin(uTime) * radius && position.y == cos(uTime) * radius) {
    return 1.0;
  } else {
    return 0.0;   
  }
}


void main() {
  vec3 axisColor = vec3(1.0);
  vec3 color = axisColor * horizontalLine(vUv.y, 0.5, 0.001);
  color += axisColor * verticallLine(vUv.x, 0.5, 0.001);
  color += axisColor * circle(vUv, vec2(0.5), 0.3, 0.001);
  color += axisColor * circle(vUv, vec2(0.5), 0.2, 0.001);
  color += axisColor * circle(vUv, vec2(0.5), 0.1, 0.001);
  color += vec3(1.0, 0.0, 0.0) * sweep(vUv, vec2(0.5), 0.1, 0.001);

  gl_FragColor = vec4(color, 1.0);
}