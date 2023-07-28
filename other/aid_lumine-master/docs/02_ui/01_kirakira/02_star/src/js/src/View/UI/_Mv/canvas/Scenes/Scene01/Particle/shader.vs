#pragma glslify: import('../../../GLSL/common_var.vs')
// #pragma glslify: noise3d = require(glsl-noise/simplex/3d)
#pragma glslify: curlNoise = require(glsl-curl-noise)

varying vec3 vColor;
varying vec3 vPos;
uniform float power;

void main() {
  

	vec3 pos = position;
	

	// motion curl  
	  // 大きい移動を作る
	// float noise1 = cnoise3(
	vec3 noise1 = curlNoise(
	    vec3(
	      pos.x * 0.006 + frame * 0.1,
	      pos.y * 0.012,
	      pos.z * 0.006
	    )
	  );
	// float noise2 = cnoise3(
	vec3 noise2 = curlNoise(
	    vec3(
	      pos.x * 0.02,
	      pos.y * 0.016 + frame * 0.05,
	      pos.z * 0.02
	    )
	  );


	// pos
	float dis = length(pos);
	pos.y = pos.y + sin(dis * 0.15 + frame*3.0) * 3.0 * power;
	// pos.y += sin(pos.x * 0.1 + frame*0.001) * 5.0;
	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	// vec4 noisePosition = vec4(pos * 2.0 + (normalize(pos) * (300.0 * noise1)), 1.0);
	// vec4 noisePosition = vec4(pos + (normalize(pos) * (5.0 * noise1)), 1.0);
	// vec4 mvPosition = modelViewMatrix * noisePosition;

	// size
	// float distanceFromCamera = 500.0 / length(mvPosition.xyz);
	// float distanceFromCamera = 6.0;
	float distanceFromCamera = 3.0;

	vColor = color;
	vPos = (projectionMatrix * mvPosition).xyz;

	gl_Position = projectionMatrix * mvPosition;
	gl_PointSize = distanceFromCamera;

}
