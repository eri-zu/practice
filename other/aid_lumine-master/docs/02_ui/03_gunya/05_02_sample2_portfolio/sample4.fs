#extension GL_OES_standard_derivatives : enable

      
      
      precision highp float;
      precision highp int;
    
      #define GLSLIFY 1
#define SHADER_NAME MSDF

uniform float uOpacity;
uniform vec3 uColor;
uniform sampler2D uMap;
varying vec2 vUv;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  vec3 sample = 1. - texture2D(uMap, vUv).rgb;
  float sigDist = median(sample.r, sample.g, sample.b) - 0.5;
  float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);
  gl_FragColor = vec4(uColor.xyz, alpha * uOpacity);
  // if (gl_FragColor.r > .99  ) discard;
}
    