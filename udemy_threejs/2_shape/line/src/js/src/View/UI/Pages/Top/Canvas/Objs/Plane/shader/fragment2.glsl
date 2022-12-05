precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; 

float line(vec2 position, float line_width, float edge_thickness){
  // edge_thickness: 線の端 値が大きければ線形補完でblurかかる
  // line_width: 線の太さ
  
  float left = smoothstep(
          position.x - line_width / 2.0 - edge_thickness, 
          position.x - line_width / 2.0, 
          position.y
        );

  float right = smoothstep(
          position.x + line_width / 2.0, 
          position.x + line_width / 2.0 + edge_thickness, 
          position.y
        );

  return left - right;
}

// float line(vec2 position, float lineWidth) {
//   float left = step(position.x - lineWidth / 2.0, position.y);
//   float right = step(position.x + lineWidth / 2.0, position.y);

//   return left - right;
// }



void main() {
  vec3 color = vec3(1.0);
  color *= line(vUv, 0.01, 0.001);

  gl_FragColor = vec4(color, 1.0);
}