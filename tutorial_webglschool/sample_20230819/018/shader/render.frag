precision mediump float;

uniform sampler2D textureUnit;
uniform float lightness;
varying vec2 vTexCoord;

void main() {
  // オフスクリーンレンダリングの結果をまず取り出す
  vec4 samplerColor = texture2D(textureUnit, vTexCoord);

  // RGB の各チャンネルの単純な平均 @@@
  // ※ここでは内積を使っていますが、そうしなければ実現できない処理というわけではありません
  float gray = dot(vec3(1.0), samplerColor.rgb) / 3.0;
  // dot(x * x + y * y + z * z)なので dot(1 * x + 1 * y + 1 * z) =>   float gray = (samplerColor.x + samplerColor.y + samplerColor.z) / 3.0;と一緒そう

  // ヴィネット @@@
  vec2 centerCoord = vTexCoord * 2.0 - 1.0; // ★0 - 1だったものを-1.0 - 1.0に変換
  // vec2 centerCoord = vTexCoord; // ★デバッグ用

  // length(centerCoord)：中心からの距離
  float vignette = 1.0 - length(centerCoord) * 0.5; // 0.5はintensity
  // float vignette = length(centerCoord);  // ★デバッグ用
  

  // 念のため 0.0 ～ 1.0 にクランプ
  gray = clamp(gray * vignette + lightness, 0.0, 1.0);

  // すべての係数を合成して出力
  gl_FragColor = vec4(vec3(gray), samplerColor.a);
  // gl_FragColor = samplerColor;
}

// 球体を取り出し、グレーにしていたポリにベタっと貼り付ける