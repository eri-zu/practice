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
uniform vec2 uWindow;

attribute vec4 a_pos;
attribute vec3 a_scale;
attribute vec4 a_props;

varying vec2 vUv;
varying float vOpacity;
varying float vAlphaSpeed;

void main() {
  vec3 pos = vec3(0.);
  vec2 customWindow = vec2(uWindow.x * 1.2, uWindow.y * 1.2);

  pos.x = mod( uWindow.x * a_pos.x + uTime * 60. * a_pos.y * a_props.z, uWindow.x ) - uWindow.x * 0.5;
  pos.y = mod( customWindow.y * a_pos.x + customWindow.y * ( sin(uTime * a_pos.y * 0.2 * a_props.w) * 0.5 + 0.5 ), customWindow.y ) - customWindow.y * 0.5;

  vec3 scale = a_scale;
  scale.xy *= 2.;

  vec4 viewModelPosition = modelViewMatrix * vec4(position * scale + pos, 1.0);
  gl_Position = projectionMatrix * viewModelPosition;

  vOpacity = a_pos.w;
  vAlphaSpeed = a_pos.z;
  vUv = uv;
}
