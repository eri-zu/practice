precision highp float;
precision highp int;
#define SHADER_NAME ShaderMaterial
#define GAMMA_FACTOR 2
#define NUM_CLIPPING_PLANES 0
#define UNION_CLIPPING_PLANES 0
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
#define TONE_MAPPING
#ifndef saturate
  #define saturate(a) clamp( a, 0.0, 1.0 )
#endif
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
uniform sampler2D map;
uniform sampler2D mapNext;

varying vec2 vUv;
uniform float disp;
uniform float angle;
uniform float mouseOffsetX;
uniform float mouseOffsetY;
uniform float random;
uniform float dispVertex;
uniform float burned;

uniform sampler2D dispMap;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec3 hue(vec3 rgb, float adjustment)
{
    const mat3 toYIQ = mat3(0.299,     0.587,     0.114,
                            0.595716, -0.274453, -0.321263,
                            0.211456, -0.522591,  0.311135);
    const mat3 toRGB = mat3(1.0,  0.9563,  0.6210,
                            1.0, -0.2721, -0.6474,
                            1.0, -1.107,   1.7046);

    vec3 yiq = toYIQ * rgb;
    float hue = atan(yiq.z, yiq.y) + adjustment;
    float chroma = sqrt(yiq.z * yiq.z + yiq.y * yiq.y);

    vec3 color = vec3(yiq.x, chroma * cos(hue), chroma * sin(hue));
    return toRGB * color;
}

float applyColorBurnToChannel( float base, float blend ) {
  return ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0));
}

void main() {

  // vec2 myUV = vUv;

  // vec2 offset = myUV + mouseOffsetX;

  // vec4 texture1 = texture2D(map, myUV);
  // vec4 texture2 = texture2D(mapNext, myUV);
  //
  // vec2 dispVec = vec2(texture2.r, texture2.g);
  // vec2 distortedPosition1 = vUv * dispVec * 10.0 * mouseOffsetX;

  float dir = -0.5 * max(random, 0.75);
  if(dispVertex < 0.0)
  {
      dir = 0.5 * max(random, 0.75);
  }



  vec2 offsetUV = vUv;

  if(random > 0.0)
  {
      offsetUV.y = vUv.y;
      offsetUV.x = 1.0 - offsetUV.x;
  } else {
      offsetUV.y = 1.0 - offsetUV.y;
      offsetUV.x = vUv.x;
  }


  vec2 scaleCenter = vec2(0.5, 0.5);
  offsetUV = (offsetUV - scaleCenter) * max(random, 0.75) + scaleCenter;

  vec4 test = texture2D(map, offsetUV);

  vec4 dispMap = texture2D(dispMap, offsetUV);
  dispMap.rgb = hue(dispMap.rgb, random);

  vec2 dispVec = vec2(dispMap.r, dispMap.g);


  vec2 distortedPosition1 = vUv + getRotM(angle) * dispVec * (dir) * (disp*2.0);
  vec2 distortedPosition2 = vUv + getRotM(angle) * dispVec * (-dir) * (1.0 - (disp*2.0));

  vec4 _texture1 = texture2D(map, distortedPosition1);
  vec4 _texture2 = texture2D(mapNext, distortedPosition2);

  _texture1.r = mix(_texture1.r, _texture2.r, disp*2.0);//(disp * dispMap.r) * 1.25);
  _texture1.g = mix(_texture1.g, _texture2.g, disp*2.0);//(disp * dispMap.g) * 1.5);
  _texture1.b = mix(_texture1.b, _texture2.b, disp*2.0);//(disp * dispMap.b) * 1.75);

  // if(burned >= 1.0)
  // {
  //     gl_FragColor = _texture1;
  // } else {
      gl_FragColor = vec4(
          applyColorBurnToChannel( _texture1.r, burned ),
          applyColorBurnToChannel( _texture1.g, burned ),
          applyColorBurnToChannel( _texture1.b, burned ),
          1.0
        );
  // }
}
