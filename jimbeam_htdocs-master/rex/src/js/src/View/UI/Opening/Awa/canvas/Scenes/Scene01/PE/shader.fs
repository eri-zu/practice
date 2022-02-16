precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: map = require(glsl-map)

#define TWO_PI 6.28318530718

uniform float opacity;
uniform sampler2D texture_mask;



// main
void main() {

  vec4 t = texture2D(texture, vUv);
  vec4 t_m = texture2D(texture_mask, vUv);

  if(t_m.r == 1.0) {

  	discard;

  } else {

  	gl_FragColor = t;
  	// gl_FragColor = t_m;
    
  }

  
}