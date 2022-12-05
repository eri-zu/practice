precision mediump float;
varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること
varying vec3 vPosition; 

#define PI 3.14

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

void main() {
  // y = sinθを参考にxの座標を変更
  vec3 color = vec3(1.0);
  color *= line(
    vec2((sin(vUv.x * PI * 2.0) + 1.0) * 0.5, vUv.y), 
    0.01, 
    0.001
  );

  // 0 < vUv.x < 1なので、0 < vUv.x * PI < PI
  // 0 < vUv.x * 2PI < 2PI
  // sin(vUv.x * PI * 2.0) sinwave
  // +1.0で -1 < sin < 1 を 0 < sin < 2に
  // *0.5で 0 < sin < 2 を 0 < sin < 1に

  gl_FragColor = vec4(color, 1.0);
}