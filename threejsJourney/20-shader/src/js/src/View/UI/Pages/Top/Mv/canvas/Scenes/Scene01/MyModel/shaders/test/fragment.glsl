// どれくらいfloatがpreciseか決める
precision mediump float;
uniform sampler2D uTexture; // for texture
uniform vec4 uResolution;

varying vec2 vUv;  


void main() {
  // vec4 textureColor = texture2D(uTexture, vUv); 
   vec2 newUV = vUv * uResolution.zw;

  vec4 textureColor = texture2D(
    uTexture, 
    vec2(newUV.x, newUV.y)
  );

  gl_FragColor = textureColor; 
  
}