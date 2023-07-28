precision highp float;

#pragma glslify: import('../../../GLSL/common_var.fs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// random
#pragma glslify: random = require(glsl-random)

#pragma glslify: grain = require(glsl-film-grain)
#pragma glslify: blend = require(glsl-blend-soft-light)
#pragma glslify: luma = require(glsl-luma)

uniform float opacity;

// main
void main() {

  vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );


  // -------------------------
  // normal
  // vec4 color = texture2D(texture, uv);
  // gl_FragColor = color - vec4(0.0,0.0,0.0,1.0-opacity);

  // -------------------------
  // noise
  // vec4 color = texture2D(texture, uv);
  // vec3 noise = vec3(random(gl_FragCoord.xy / resolution.xy + frame/10000.0));
  // gl_FragColor = color - vec4(0.0,0.0,0.0,1.0-opacity) + vec4(noise * 0.3, 0.0);

  // -------------------------
  // grain
  // float grainSize = 2.0;
  // float g = grain(vUv, resolution / grainSize);
  // vec3 color = vec3(g);
  // gl_FragColor = vec4(color, 1.0);

  // -------------------------
  // grain + image
  vec3 texColor = texture2D(texture, vUv).rgb;

  //some large grain for this demo
  // float zoom = 0.35;
  float zoom = 0.35;
  vec3 g = vec3(grain(vUv, resolution * zoom, time));

  //get the luminance of the image
  float luminance = luma(texColor);
  vec3 desaturated = vec3(luminance);

  //now blend the noise over top the backround 
  //in our case soft-light looks pretty good
  vec3 color = blend(desaturated, g);

  //and further reduce the noise strength based on some 
  //threshold of the background luminance
  // float response = smoothstep(0.05, 0.5, luminance);
  // color = mix(color, desaturated, pow(response,2.0));

  float response = smoothstep(0.05, 0.3, luminance);
  color = mix(color, texColor, pow(response,1.0)) + g * 0.1;
  // color = texColor + g * 0.4;

  gl_FragColor = vec4(color, 1.0);

}