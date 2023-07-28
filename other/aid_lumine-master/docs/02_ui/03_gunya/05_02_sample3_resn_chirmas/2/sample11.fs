precision highp float;
precision highp int;
#define SHADER_NAME ShaderMaterial
#define GAMMA_FACTOR 2
#define NUM_CLIPPING_PLANES 0
#define UNION_CLIPPING_PLANES 0
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
#define TONE_MAPPING
#define saturate(a) clamp( a, 0.0, 1.0 )
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
  return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  color = max( vec3( 0.0 ), color - 0.004 );
  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}

vec3 toneMapping( vec3 color ) { return LinearToneMapping( color ); }

vec4 LinearToLinear( in vec4 value ) {
  return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );
}
vec4 sRGBToLinear( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );
}
vec4 LinearTosRGB( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );
}
vec4 RGBEToLinear( in vec4 value ) {
  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
  float maxComponent = max( max( value.r, value.g ), value.b );
  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
  return vec4( value.xyz * value.w * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
  float maxRGB = max( value.x, max( value.g, value.b ) );
  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );
  M            = ceil( M * 255.0 ) / 255.0;
  return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
  return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
  float maxRGB = max( value.x, max( value.g, value.b ) );
  float D      = max( maxRange / maxRGB, 1.0 );
  D            = min( floor( D ) / 255.0, 1.0 );
  return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;
  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));
  vec4 vResult;
  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
  vResult.w = fract(Le);
  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;
  return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
  float Le = value.z * 255.0 + value.w;
  vec3 Xp_Y_XYZp;
  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);
  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;
  return vec4( max(vRGB, 0.0), 1.0 );
}

vec4 mapTexelToLinear( vec4 value ) { return LinearToLinear( value ); }
vec4 envMapTexelToLinear( vec4 value ) { return LinearToLinear( value ); }
vec4 emissiveMapTexelToLinear( vec4 value ) { return LinearToLinear( value ); }
vec4 linearToOutputTexel( vec4 value ) { return LinearToLinear( value ); }

#define GLSLIFY 1
#define PI 3.14159265359

uniform sampler2D tDiffuse;
uniform sampler2D tLight;
uniform sampler2D tGrain;
// uniform sampler2D u_UI;
// uniform sampler2D u_title;
// uniform sampler2D tBackground;
uniform vec2 uResolution;

uniform float u_time;
uniform float u_dpr;

// uniform sampler2D gBufferNormalRoughness;

varying vec2 vUv;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main () {

    float maxSize = max( uResolution.x, uResolution.y );
    vec2 scale = vec2( maxSize / uResolution.x, maxSize / uResolution.y);

    vec2 scaleTop = vec2(0.5, 0.85);
    vec2 uvBg = (vUv - scaleTop) / vec2( scale.x * 100. / 100., scale.y * 100. / 100. ) + scaleTop;

    vec2 uvGrain = vUv;
    uvGrain -= vec2(.5);
    uvGrain /= 1024. / ( uResolution * u_dpr );
    uvGrain = rotate2d( floor( u_time * 18. ) * ( PI * .5 ) ) * uvGrain;
    uvGrain += vec2(.5);

    vec3 bgColor = vec3( .039, .021, .058 );

    vec4 texelColor = texture2D( tDiffuse, vUv );
    vec4 texelColorLight = texture2D( tLight, vUv );
    vec4 texelColorGrain = texture2D( tGrain, uvGrain );

    texelColorLight.rgb *= vec3(1., .77, .65); // tint the light

    texelColorGrain.rgb *= texelColorGrain.a * 2.;
    texelColorGrain.rgb *= vec3(0.95, 0.61, 0.99);

    vec3 color = ( texelColor.rgb * texelColor.a ) + ( bgColor.rgb * ( 1. - texelColor.a ) );
         color += texelColorLight.rgb;
         color += texelColorGrain.rgb * min( u_dpr * .195, .265 );
         // color = mix(color, texelColorLight.rgb, texelColorLight.r);
        // color += texelTitle.rgb;
        // color = ( texelColorGrain.rgb * texelColorGrain.a ) + ( color.rgb * ( 1. - texelColorGrain.a ) );
        // color += texelColorGrain.rgb * .5;
        // color += texelColorGrain.rgb * texelColorGrain.a;
        // color = ( texelColorGrain.rgb * texelColorGrain.a ) + ( color.rgb * ( 1. - texelColorGrain.a ) );

    float alpha = 1.;

    // color = ( texelUI.rgb * texelUI.a ) + ( color.rgb * ( 1. - texelUI.a ) );
 //    vec4 tc = vec4(1.0, 1.0, 1.0, 1.0 );
 //    tColor1.rgb *= 1.0;
  // vec4 tColor = vec4( color, alpha );
 //    vec4 mix_c = tColor1 + tc * tColor1.a;

    gl_FragColor = vec4( color.rgb, alpha );
    // gl_FragColor = vec4( 1.,0.,0., alpha );

    // gl_FragColor = tColor1;
    // gl_FragColor = vec4( color, alpha );
}
