uniform vec2 imageResolution;
uniform vec2 resolution;
varying vec2 vUv;
uniform float time;
uniform sampler2D uTex;
uniform float is_show;
uniform float threshold;
uniform float w;
uniform float blocksize;


void main(void){
  vec2 ruv = vUv + vec2(time * .001 ,0.0);
  vec2 guv = vUv + vec2(time * .002 ,0.0);
  vec2 buv = vUv + vec2(time * .003 ,0.0);

  vec4 r = texture2D( uTex,ruv);
  vec4 g = texture2D( uTex,guv);
  vec4 b = texture2D( uTex,buv);
  vec4 n = texture2D( uTex,vUv);

  vec4 c = vec4((1.0-r.a),(1.0-g.a),(1.0-b.a), (r.a+g.a+b.a+n.a) * is_show);
  gl_FragColor = c;
}
