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
//declare uniforms
uniform sampler2D u_texture;
uniform float u_resolution;
uniform float u_radius;
uniform vec2 u_direction;

varying vec2 vUv;

/*void main( void ) {

    // float factor = u_factor;
    float factor = 0.89;

    vec2 uv = vUv;
    vec2 direction = vec2(0.0, 0.0);
    
    vec2 off1 = vec2(1.3333333333333333) * direction;
    vec2 off2 = vec2(3.2307692308) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;

    vec3 color = vec3(0.0);
    // vec3 backgroundColor = vec3( 0.03921568627, 0.07843137255, 0.1843137255 );

    vec4 texture = vec4(0.0);
    // vec4 texture = texture2D(u_texture, uv);

    texture += texture2D(u_texture, uv) * 0.1964825501511404;
    texture += texture2D(u_texture, uv + (off1 / u_resolution)) * 0.2969069646728344;
    texture += texture2D(u_texture, uv - (off1 / u_resolution)) * 0.2969069646728344;
    texture += texture2D(u_texture, uv + (off2 / u_resolution)) * 0.09447039785044732;
    texture += texture2D(u_texture, uv - (off2 / u_resolution)) * 0.09447039785044732;
    texture += texture2D(u_texture, uv + (off3 / u_resolution)) * 0.010381362401148057;
    texture += texture2D(u_texture, uv - (off3 / u_resolution)) * 0.010381362401148057;


    color = texture.rgb;
    // color = mix( lighter, darker, smoothstep( 0., 0.05, texture.r ) );
    // color.rgb *= factor;
    // color.rgb *= smoothstep( 0., factor * 0.005, color.rgb );


    float alpha = texture.a;
    // float alpha = 1.;


    gl_FragColor = vec4( color, alpha );
}*/

// blur 9
void main() {

    vec2 uv = vUv;

    float resolution = u_resolution;

    vec2 direction = u_direction;

    vec4 color = vec4(0.0);
    
    vec2 off1 = vec2(1.3846153846) * direction;
    vec2 off2 = vec2(3.2307692308) * direction;
    
    color += texture2D(u_texture, uv) * 0.2270270270;
    color += texture2D(u_texture, uv + (off1 / resolution)) * 0.3162162162;
    color += texture2D(u_texture, uv - (off1 / resolution)) * 0.3162162162;
    color += texture2D(u_texture, uv + (off2 / resolution)) * 0.0702702703;
    color += texture2D(u_texture, uv - (off2 / resolution)) * 0.0702702703;
    
    gl_FragColor = color;
}

// blur 13
/*void main() {

    vec2 uv = vUv;

    float resolution = u_resolution;

    vec2 direction = u_direction;

    vec4 color = vec4(0.0);

    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;

    color += texture2D(u_texture, uv) * 0.1964825501511404;
    color += texture2D(u_texture, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(u_texture, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(u_texture, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(u_texture, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(u_texture, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(u_texture, uv - (off3 / resolution)) * 0.010381362401148057;

    gl_FragColor = color;
}*/

/*void main() {

    vec2 uv = vUv;

    vec2 direction = u_direction;

    vec4 color = vec4(0.0);

    float resolution = u_resolution;

    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;

    color += texture2D(u_texture, uv) * 0.1964825501511404;
    color += texture2D(u_texture, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(u_texture, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(u_texture, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(u_texture, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(u_texture, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(u_texture, uv - (off3 / resolution)) * 0.010381362401148057;

    gl_FragColor = color;
}*/

// matt deslauriers one
/*void main() {
    //this will be our RGBA sum
    vec4 sum = vec4(0.0);

    //our original texcoord for this fragment
    vec2 tc = vUv;

    //the amount to blur, i.e. how far off center to sample from 
    //1.0 -> blur by one pixel
    //2.0 -> blur by two pixels, etc.
    float blur = u_radius/u_resolution; 

    //the direction of our blur
    //(1.0, 0.0) -> x-axis blur
    //(0.0, 1.0) -> y-axis blur
    float hstep = u_direction.x;
    float vstep = u_direction.y;

    //apply blurring, using a 9-tap filter with predefined gaussian weights

    sum += texture2D(u_texture, vec2(tc.x - 4.0*blur*hstep, tc.y - 4.0*blur*vstep)) * 0.0162162162;
    sum += texture2D(u_texture, vec2(tc.x - 3.0*blur*hstep, tc.y - 3.0*blur*vstep)) * 0.0540540541;
    sum += texture2D(u_texture, vec2(tc.x - 2.0*blur*hstep, tc.y - 2.0*blur*vstep)) * 0.1216216216;
    sum += texture2D(u_texture, vec2(tc.x - 1.0*blur*hstep, tc.y - 1.0*blur*vstep)) * 0.1945945946;

    sum += texture2D(u_texture, vec2(tc.x, tc.y)) * 0.2270270270;

    sum += texture2D(u_texture, vec2(tc.x + 1.0*blur*hstep, tc.y + 1.0*blur*vstep)) * 0.1945945946;
    sum += texture2D(u_texture, vec2(tc.x + 2.0*blur*hstep, tc.y + 2.0*blur*vstep)) * 0.1216216216;
    sum += texture2D(u_texture, vec2(tc.x + 3.0*blur*hstep, tc.y + 3.0*blur*vstep)) * 0.0540540541;
    sum += texture2D(u_texture, vec2(tc.x + 4.0*blur*hstep, tc.y + 4.0*blur*vstep)) * 0.0162162162;

    //discard alpha for our simple demo, multiply by vertex color and return
    gl_FragColor = vec4(sum.rgb, 1.0);
}*/
