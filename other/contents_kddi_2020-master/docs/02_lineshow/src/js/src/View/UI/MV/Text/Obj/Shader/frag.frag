uniform vec2 imageResolution;
uniform vec2 resolution;
varying vec2 vUv;
uniform float time;
uniform sampler2D uTex;
uniform float is_show;
uniform float is_kangi;
uniform float threshold;
uniform float w;
//


void main(void){

  vec2 ruv = vUv + vec2(time * .03,0.0);
  vec2 guv = vUv + vec2(time * .04,0.0);
  vec2 buv = vUv + vec2(time * .05,0.0);

  vec4 r = texture2D( uTex,ruv);
  vec4 g = texture2D( uTex,guv);
  vec4 b = texture2D( uTex,buv);
  // vec3 color3 = rnd(vec2(color.))
  // vec4 c;
  // float a = length(vUv * );


  // vec4 m = mix(color,color)
  // vec4 g = grayscale(color);
  gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);
}
// r.a+g.a+b.a
