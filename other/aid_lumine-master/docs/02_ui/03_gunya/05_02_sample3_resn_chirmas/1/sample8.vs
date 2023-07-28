precision highp float;
precision highp int;
#define SHADER_NAME ShaderMaterial
#define VERTEX_TEXTURES
#define GAMMA_FACTOR 2
#define MAX_BONES 0
#define BONE_TEXTURE
#define NUM_CLIPPING_PLANES 0
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
#ifdef USE_COLOR
	attribute vec3 color;
#endif
#ifdef USE_MORPHTARGETS
	attribute vec3 morphTarget0;
	attribute vec3 morphTarget1;
	attribute vec3 morphTarget2;
	attribute vec3 morphTarget3;
	#ifdef USE_MORPHNORMALS
		attribute vec3 morphNormal0;
		attribute vec3 morphNormal1;
		attribute vec3 morphNormal2;
		attribute vec3 morphNormal3;
	#else
		attribute vec3 morphTarget4;
		attribute vec3 morphTarget5;
		attribute vec3 morphTarget6;
		attribute vec3 morphTarget7;
	#endif
#endif
#ifdef USE_SKINNING
	attribute vec4 skinIndex;
	attribute vec4 skinWeight;
#endif

#define GLSLIFY 1
// precision highp float;
// #pragma glslify: pnoise = require(glsl-noise/periodic/3d);

varying vec3 vPos;
varying vec2 vUv;
varying float vAlpha;

uniform float u_time;
uniform float u_speed;
uniform float u_progress;

attribute vec3 a_pos;
attribute float a_scale;
attribute float a_speed;
attribute float a_alpha;
attribute float a_angle;

const float PI = 3.1415926535897932384626433832795;

void main() {

    vec3 pos = position;
    vec3 posInit = position;

    vec3 posBase = a_pos;
    vec3 posOffset = vec3(0.0);//a_offset;

    // posOffset.x += posBase.x;// + ( u_time * -15.0 * a_speed );
    // posOffset.y += posBase.y;// + ( u_time * -15.0 * a_speed );
    // posOffset.x += posBase.x + ( u_time * -15.0 * a_speed );

    // float noise = pnoise(posBase * 1.0 , vec3(0.0));

    // posOffset.xy *= pnoise(posBase * (u_time * -0.01) , vec3(0.0));
    // posOffset.x *= cos(posBase.x * PI * noise + (u_time * -1.05)) * 0.1;
    // posOffset.y *= sin(posBase.x * PI * noise + (u_time * -1.05)) * 0.1;
    pos.xy *= a_scale + u_progress;

    posOffset.x = posBase.x + cos( a_angle * PI ) * 35. * u_progress * a_speed;
    posOffset.y = posBase.y + sin( a_angle * PI ) * 35. * u_progress * a_speed;

    // vec4 or = u_orientation;
    // vec3 vcV = cross(or.xyz, pos);
    // pos = vcV * ( 2.0 * or.w ) + ( cross( or.xyz, vcV ) * 2.0 + pos );

    // pos.x += u_max_dist.x + mod( posOffset.x, -u_max_dist.x * 2.0 );;
    pos.xy += posOffset.xy;

    // pos.z += posBase.z + posOffset.z;

    vec4 posMv = modelViewMatrix * vec4(pos.xyz, 1.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

    vUv = uv;
    vAlpha = a_alpha;
    vPos = a_pos;
    // vAlpha = a_alpha * clamp(abs(-posMv.z) / 40., 0.0, 1.0);
}
