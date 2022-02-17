uniform vec3 angle;
uniform float amount;
varying vec2 vUv;
uniform float time;
uniform sampler2D uTex;
uniform float is_show;
// uniform float is_kangi;
uniform float threshold;
uniform float w;
//


void main(void){

  // vec2 ruv = vUv + vec2(time * .03,0.0);
  // vec2 guv = vUv + vec2(time * .04,0.0);
  // vec2 buv = vUv + vec2(time * .05,0.0);

  // vec4 r = texture2D( uTex,ruv);
  // vec4 g = texture2D( uTex,guv);
  // vec4 b = texture2D( uTex,buv);

  // gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);

  float val1 = sin(angle.y * 0.003 * angle.z);
  float val2 = cos(angle.y * 0.003 * angle.z);

  vec2 offset = amount * vec2( cos(angle.x + val1), sin(angle.x + val2));

  vec4 r = texture2D( uTex,vUv + offset);
  vec4 g = texture2D( uTex,vUv);
  vec4 b = texture2D( uTex,vUv - offset);

  gl_FragColor = vec4(r.r,g.g,b.b, (r.a+g.a+b.a) * is_show);


}

