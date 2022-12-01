precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; 

bool isLine(vec3 position, float lineWidth) {
  // y = sin(θ)のグラフを基準に考える
  float PI = 3.14;

  if(
    sin(position.x * PI) * 0.5 < position.y + lineWidth && 
    sin(position.x * PI) * 0.5 > position.y - lineWidth
  ) {
    return true;
  } else {
    return false;
  }
  
}

void main() {
  vec3 color = vec3(1.0);

  if(isLine(vPosition, 0.01)) {
    color *= vec3(1.0);
  } else {
    color *= vec3(0.0);
  }

  gl_FragColor = vec4(color, 1.0);
}