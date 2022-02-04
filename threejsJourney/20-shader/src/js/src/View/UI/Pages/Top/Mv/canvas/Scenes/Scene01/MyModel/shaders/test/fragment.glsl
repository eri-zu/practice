// どれくらいfloatがpreciseか決める
precision mediump float;
uniform vec3 uColor;
uniform sampler2D uTexture; // for texture

varying vec2 vUv;  
varying float vElevation;

void main() {
  // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

  // texture2D() : textureから色を取り出す 
  // 2つ目の引数は、textureのどの座標の色を取り出すか　例えば、3dモデルの右上は、テクスチャーの右上の座標から取り出すとか(→uv座標)
  vec4 textureColor = texture2D(uTexture, vUv); 
  textureColor.rgb *= vElevation * 2.0 + 0.5; // -0.1 < vElevation < 0.1; // サインウェーブの形に合わせて、色味を変更（明るく、暗く）

  // gl_FragColor = vec4(uColor, 1.0); 
  gl_FragColor = textureColor; 
  
}