precision highp float;
precision highp int;
uniform sampler2D uTexture0;
uniform float uTime;
uniform vec4 uResolution;
uniform float uTimeSpeed;

uniform float uShadeAmount;
varying vec2 vUv; 

void main() {
  vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  float _time = uTime * (uTimeSpeed + 0.0);

  vec4 textureColor0 = texture2D(uTexture0, newUv);
  vec4 finalColor = textureColor0;  
  gl_FragColor = finalColor;

  float shade =
    sin(newUv.x * .2 + newUv.y * 3. + _time * .4 + cos(newUv.x * 2. + newUv.y * .2 + _time * 1.2) * .3) *
    cos(newUv.x * 3. + newUv.y * .2 + _time * -.8 + sin(newUv.x * .2 + newUv.y * 4. + _time * 1.2) * 1.2);

  shade = shade * 0.5 + 0.5 - 0.15;

  float baseBrightness = 0.4 + ((shade + 1.0) * 0.5) * 0.1;

  gl_FragColor.rgb += shade * uShadeAmount;

}




