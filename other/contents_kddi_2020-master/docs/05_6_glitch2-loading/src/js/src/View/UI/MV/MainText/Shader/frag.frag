uniform vec3 angle;
uniform float amount;
varying vec2 vUv;
uniform float time;
uniform sampler2D uTex;
uniform float is_show;
uniform float threshold;
uniform float w;
uniform float blocksize;


void main(void){

  float val1 = sin(angle.x);
  float val2 = cos(angle.x);
  vec2 offset = amount * vec2( cos(angle.x), sin(angle.x));

  vec4 r = texture2D( uTex,vUv + offset);
  vec4 g = texture2D( uTex,vUv);
  vec4 b = texture2D( uTex,vUv - offset);

  float a = clamp(r.a+g.a+b.a,0.0,1.0);
  vec4 c = vec4((1.0 - r.a),(1.0 - g.a),(1.0 - b.a),a * is_show);
  gl_FragColor = c;

}
