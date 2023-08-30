precision highp float;
precision highp int;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform float uTime;
uniform vec4 uResolution;
uniform float uTransition;
uniform float uTimeSpeed;
uniform float uTimeSpeed2;
uniform float uShadeAmount;
varying vec2 vUv;


void main() {
  
  vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  float _time = uTime * uTimeSpeed;
  float _time2 = uTime * uTimeSpeed2;

  vec4 textureColor0 = texture2D(uTexture0, newUv);
  vec4 textureColor1 = texture2D(uTexture1, newUv);

  // ブレンド具合を変化
  vec4 blendedColor = mix(textureColor1, textureColor0, sin(_time2) * 0.5 + 0.5);
  gl_FragColor = blendedColor;

  // 明るさ変化
float shade =
    sin(-newUv.x * .2 - newUv.y * 3. + _time * .4 + cos(-newUv.x * 2. - newUv.y * .2 + _time * 1.2) * .3) *
    cos(-newUv.x * 3. - newUv.y * .2 + _time * -.8 + sin(-newUv.x * .2 - newUv.y * 4. + _time * 1.2) * 1.2);
  shade = shade * 0.5 + 0.5;  // 正規化 // 0 〜 1
  gl_FragColor.rgb += (1.0 - smoothstep(0.0, 0.5, uTransition)); // 1: 元の色,  0: 一番明るい
  gl_FragColor.rgb += shade * uShadeAmount;


}




