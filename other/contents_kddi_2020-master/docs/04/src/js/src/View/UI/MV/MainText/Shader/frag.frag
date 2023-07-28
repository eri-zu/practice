uniform vec2 imageResolution;
uniform vec2 resolution;
varying vec2 vUv;
uniform float time;
uniform sampler2D uTex;
uniform float is_show;
uniform float threshold;
uniform float w;
uniform float blocksize;

float rnd(vec2 n){
    float a = 0.129898;
    float b = 0.78233;
    float c = 437.585453;
    float dt = dot(n ,vec2(a, b));
    float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float getBlock(){
  float b = blocksize;
  float a = floor((gl_FragCoord.t) / b) * b;
  return a;
}

void main(void){
  float block = getBlock();
  float n1 = rnd(vec2(block,time * .5));
  float ng1 = rnd(vec2(block,time * .7));
  float nb1 = rnd(vec2(block,time * .2));

  //
  float s = step(n1, threshold);
  float s2 = step(ng1, threshold);
  float s3 = step(nb1, threshold);
  //
  float n2 = rnd(vec2(time)) * 2.0 - 1.0;
  //
  // width
  // float w = .2;
  float t = n2 * w;
  float t2 = ng1 * w;
  float t3 = nb1 * w;


  float r = 1.0 - texture2D( uTex,vUv + vec2(s * t,0.0)).a;
  float g = 1.0 - texture2D( uTex,vUv + vec2(s2 * t2,0.0)).a;
  float b = 1.0 - texture2D( uTex,vUv + vec2(s3 * t3,0.0)).a;
  float a = max(max(r,g),b);
  vec4 color2 = texture2D( uTex,vUv).rgba;
  gl_FragColor = vec4(r,g,b,1.0 * is_show);
}
