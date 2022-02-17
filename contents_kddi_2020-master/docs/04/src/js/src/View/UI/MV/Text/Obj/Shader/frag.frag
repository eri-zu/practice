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
// void main(void) {
//   // float brightness = 1.0;
//   // float angle = 3.1415 * 0.5;
//   // float amount = 0.1;
//   // vec2 offset = amount * vec2( cos(angle), sin(angle));
//   // vec4 color = texture2D(uTex, vUv) * brightness;
//   // vec4 cr = texture2D(uTex, vUv + offset) * brightness;
//   // vec4 cg = texture2D(uTex, vUv) * brightness;
//   // vec4 cb = texture2D(uTex, vUv - offset) * brightness;
//   // gl_FragColor = vec4(cr.r, cg.g, cb.b, color.a * is_show);
//   vec4 color = texture2D( uTex,vUv ).rgba;
//   gl_FragColor = vec4(color.rgb,color.a * is_show);
// }

float rnd(vec2 n){
    float a = 0.129898;
    float b = 0.78233;
    float c = 437.585453;
    float dt = dot(n ,vec2(a, b));
    float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float getBlock(){
  float b = 10.0;
  float a = floor((gl_FragCoord.t) / b) * b;
  return a;
}

void main(void){
  float block = getBlock();
  float n1 = rnd(vec2(block,time * .5));
  float ng1 = rnd(vec2(block,time * .1));
  float nb1 = rnd(vec2(block,time * .8));

  //
  float s = step(n1, threshold);
  //
  float n2 = rnd(vec2(time)) * 2.0 - 1.0;
  //
  // width
  // float w = .2;
  float t = n2 * w;
  float t2 = ng1 * w;
  float t3 = nb1 * w;

  float r = texture2D( uTex,vUv + vec2(s * t * is_kangi,0.0)).r;
  float g = texture2D( uTex,vUv + vec2(s * t2 * is_kangi,0.0)).g;
  float b = texture2D( uTex,vUv + vec2(s * t3 * is_kangi,0.0)).b;
  // vec3 color3 = rnd(vec2(color.))
  vec4 color2 = texture2D( uTex,vUv).rgba;
  // vec4 m = mix(color,color)
  // vec4 g = grayscale(color);
  gl_FragColor = vec4(r,g,b,color2.a * is_show);
}
