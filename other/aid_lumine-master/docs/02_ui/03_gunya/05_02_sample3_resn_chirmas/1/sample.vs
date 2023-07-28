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
#define M_PI 3.1415926535897932384626433832795
varying vec2 vUv;
// varying vec3 vPos;
uniform float uProgressY;
uniform float uProgressX;
uniform float uFactor;

void main() {
    vUv = uv;
    vec3 vPos = position.xyz;
    vec3 pos = position;

    float factor = step( 0., sign(uProgressX) * -1. ) * smoothstep( 0.4, 0.8, uv.x) + step( 0., sign(uProgressX) ) * smoothstep( 0.4, 0.8, abs(uv.x - 1.));
    factor += min( 1., uFactor );

    vPos.xy /= -512.0;
    vPos.y = ((vPos.y * 0.5) + 0.5) + (1.0 - uProgressY);
    pos.x -= pow(abs(sin(M_PI * vPos.y / 2.0)), 10.0) * -1.0 * uProgressX * factor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
