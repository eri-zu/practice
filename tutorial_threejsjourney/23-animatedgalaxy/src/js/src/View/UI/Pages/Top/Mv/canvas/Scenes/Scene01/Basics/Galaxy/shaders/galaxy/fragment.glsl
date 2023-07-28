varying vec3 vColor;

void main() {

  // disc（CDのディスクみたいに白黒パキッと）
  // float strength = distance(gl_PointCoord, vec2(0.5)); // (0.5, 0.5)と各座標からの距離
  // strength = step(0.5, strength); // strengthが0.5より大きい場合は1を、小さい場合は0を返す
  // strength = 1.0 - strength; // 白黒反転

  // diffuse （ボワッとさせる）
  // float strength = distance(gl_PointCoord, vec2(0.5)); // (0.5, 0.5)と各座標からの距離
  // strength *= 2.0; // 中心座標から端まで0 - 0.5だったのを、0 - 1.0にする
  // strength = 1.0 - strength; // 白黒反転

  // light pattern 
  // diffuseより中心がグッと明るく、fadeするのもはやい（diffuseはlinear）
  float strength = distance(gl_PointCoord, vec2(0.5)); // (0.5, 0.5)と各座標からの距離
  strength = 1.0 - strength; // 白黒反転
  strength = pow(strength, 10.0); // strengthを10乗  0.5を10乗すると、0.0000976.... 0.9を10乗すると0.3486...

  // final color
  vec3 color = mix(vec3(0.0), vColor, strength); // 黒いとこは黒く、白のところはvColorが適用される なお、位置によってvColorは異なる

  // gl_Fraga = vec4(1.0, 1.0, 1.0, 1.0);
  gl_FragColor = vec4(color, 1.0); // uv座標は使えないが、パーティクルの場合、gl_PointCoordを使ってuvにアクセスできる
}