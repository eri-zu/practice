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

// uniform float uFlick;
varying vec2 vUv;
// varying vec3 vPos;
uniform float uProgressY;
uniform float uProgressX;
// uniform float fDeltaX;

void main() {

	vUv = uv;

	vec3 vPos = position.xyz;

    float power = 8.5;

	vec3 pos = position;
	vPos.xy/=-512.0;
	vPos.x = ((vPos.x * 0.5) + 0.5) + uProgressX;

	// pos.x -= (1.0 - pow(abs(sin(M_PI * vPos.x / 2.0)), power)) * -1.0 * fDeltaX;
	pos.y -= (1.0 - pow(abs(sin(M_PI * vPos.x / 2.0)), power)) * -1.0 * uProgressY;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}