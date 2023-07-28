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
uniform float uTime;

attribute vec3 a_pos;
attribute vec3 a_scale;
attribute vec3 a_props;

varying vec2 vUv;
varying vec2 vOffset;

void main() {

    vec3 pos = position;

    pos *= a_scale;

    pos += a_pos;

    vec4 viewModelPosition = modelViewMatrix * vec4(pos.xyz, 1.0);

    gl_Position = projectionMatrix * viewModelPosition;

    float leftDirection = abs(a_props.x - 1.);
    float rightDirection = ceil(a_props.x);
    float firstTrees = abs( smoothstep( 27., 29.2, a_pos.z) - 1. );
    float panLength = 2.5;
    float pan = panLength * ( abs( min( 4.5, -viewModelPosition.z ) - 4.5) / 4.5 ) * firstTrees;
    gl_Position.x -= pan * leftDirection - pan * rightDirection;

    vUv = uv;
    vOffset = vec2(a_props.x, a_props.y);
}
