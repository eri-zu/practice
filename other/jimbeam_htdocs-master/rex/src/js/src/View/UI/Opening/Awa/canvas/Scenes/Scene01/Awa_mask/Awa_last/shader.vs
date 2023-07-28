#pragma glslify: import('../../../../GLSL/common_var.vs')
#pragma glslify: noise3d = require(glsl-noise/simplex/3d)

// #pragma glslify: ease1 = require(glsl-easings/exponential-in-out) 
#pragma glslify: ease1 = require(glsl-easings/exponential-out) 
// #pragma glslify: ease1 = require(glsl-easings/exponential-in) 

#pragma glslify: ease = require(glsl-easings/elastic-out) 
// #pragma glslify: ease = require(glsl-easings/back-out) 
// #pragma glslify: ease = require(glsl-easings/back-in) 
// #pragma glslify: ease = require(glsl-easings/elastic-in-out) 
// #pragma glslify: ease = require(glsl-easings/cubic-out) 

uniform float h;

varying vec3 vColor;
attribute float size;
attribute float sizeDelay;
attribute float frs;
attribute float delay;
attribute float spdy;
attribute vec2 rad;

void main() {

  // time
  float interval = 2.0;
  // float ti = mod(frame - delay, interval); // loop
  float ti = clamp(frame - delay, 0.0, interval); // stop
  float current = ti / interval;
  current = ease1(current);

  // pos

  vec3 move = vec3(
      // x
      // current * 100.0,
      // 0.,
      sin(rad.x + current * 2.0) * rad.y,

      // y
      // -h + current * spdy * h * 2., // 上がる
      // -h + current * h * 1., // 上がる
      (1.0 - current) * spdy * h * .01 * -1., // 戻る
      // 0.,

      // z
      0.
    );
    // cn = curlNoise(
    //     vec3(
    //       pos.x * 0.006 - frame * 0.2,
    //       pos.y * 0.02,
    //       pos.z * 0.006
    //     )
    //   );

  vec3 pos = position;
  pos = move + pos;
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPos;

  // size
  float t = frame * .45 - (delay * 1.);
  float s = frame * .45 - (delay * 1.);
  t = clamp(t, 0.0, 1.0);
  t = ease(t);
  t *= 70.0;

  s *= t;
  t += (s * 3.5);

  // t = clamp(t, 0., 200.);

  float distanceFromCamera = 800.0 * size / length(mvPos.xyz);
  gl_PointSize = distanceFromCamera * t;
  // gl_PointSize = distanceFromCamera * s * .5;
  // float distanceFromCamera = 30.0;
  // gl_PointSize = distanceFromCamera;

  vColor = color;

}
