precision highp float;
uniform float t;
uniform float baseTime;
uniform vec4 viewport;
uniform vec2 resolution;
uniform vec2 textureResolution;
uniform sampler2D texture;
uniform float hiding;
uniform float effectEnd;
uniform float yOffset;
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}








void main(void){
  float vx = viewport[0];
  float vy = viewport[1];
  float vw = viewport[2];
  float vh = viewport[3];

  float rw = resolution.x;
  float rh = resolution.y;
  float tw = textureResolution.x;
  float th = textureResolution.y;

  // area
  if( gl_FragCoord.x < 0.0 || gl_FragCoord.x > vw - vx || rh - gl_FragCoord.y < 0.0 || rh - gl_FragCoord.y > vh - vy ){
    discard;
    return;
  }


  // area
  float rate = min( tw / vw ,  th / vh );
  float x = rate * ( gl_FragCoord.x - 0.5 * vw + vx ) + tw * 0.5;
  float y = rate * ( rh - gl_FragCoord.y - 0.5 * vh + vy ) + th * 0.5;
  if( y < 0.0 || y > th || x < 0.0 || x > tw ){
    discard;
    return;
  }

  // area
  vec2 textureCoord  = vec2( x / tw , y / th );
  vec2 coord  = (gl_FragCoord.xy + vec2(vx,vy)) / resolution;
//  if( coord.y < 0.0 || coord.y > 1.0 || coord.x < 0.0 || coord.x > 1.0 ){
//    discard;
//    return;
//  }
  
  // progress seg bg color
  if( effectEnd > 0.5 ){
    if( hiding > 0.5 ){
      gl_FragColor = vec4(1.0,1.0,1.0,1.0);
    }else{
      gl_FragColor = vec4(texture2D(texture, textureCoord).rgb , 1.0);
    }
    return;
  }


  // change uv
  float time = ( t - baseTime ) * 1.0 * 0.7;
  float bt = fract( baseTime / 747.0 ) * 747.0;

  vec2 uv = coord.xy + 0.05 * vec2( snoise( coord + vec2(0.0, time + bt)) * 0.1 , snoise(coord + vec2(47.0, time+bt) ) );
  float n = snoise(uv - vec2(0.0, time + bt));
  n += 0.5 * snoise(uv * 2.0 - vec2(0.0, (time + bt)*1.4)); 
  n += 0.25 * snoise(uv * 4.0 - vec2(0.0, (time + bt)*2.0)); 
  n += 0.125 * snoise(uv * 8.0 - vec2(0.0, (time + bt)*2.8)); 
//  n += 0.0625 * snoise(uv * 16.0 - vec2(0.0, (time + bt)*4.0)); 
//  n += 0.03125 * snoise(uv * 32.0 - vec2(0.0, (time + bt)*5.6)); 
//  n += 0.03125 * 0.5 * snoise(uv * 64.0 - vec2(0.0, (time + bt)*8.0)); 
//  n = clamp(-1.0,1.0,n );

  float offset;
  float rgb;
  if( hiding > 0.5 ){
    offset = 1.0 + ( 1.0 / ( time * 2.0 + 0.5 ) - coord.y * 0.2) * 0.7 - time * 0.5;
    rgb = (n+1.0) * 0.5 + offset - 2.0;
    rgb *= 2.0;
    rgb = 1.0 - rgb;
  }else{
    offset = 1.0 + ( 1.6 / ( time + 0.7 ) - coord.y * 0.4) * 0.7 - time * 0.4;
    rgb = (n+1.0) * 0.5 + offset - 2.0;
    rgb *= 2.0;
//    rgb = 1.0 - rgb;
  }

  gl_FragColor = vec4(
                  texture2D(texture, textureCoord).rgb * (1.0 - rgb) + // color.rgb
                  texture2D(texture, (textureCoord + vec2(smoothstep( 0.6 , 0.9 , rgb )) * 0.1)).rgb * rgb, // color.rgb
                  1.0 - smoothstep( 0.8 , 1.0 , rgb) // op
                 );

}