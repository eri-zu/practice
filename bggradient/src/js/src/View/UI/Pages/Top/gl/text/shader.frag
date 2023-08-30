precision highp float;

uniform vec2 resolution;
uniform vec2 imageResolution;
uniform sampler2D uTex;
uniform sampler2D uColorTex;
uniform float uTime;
uniform float uColorTime;
uniform float showY;
varying vec2 vUv;

void main() {
     vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );

  vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    vec2 uv2 = vec2(uv.x + uTime,uv.y);
    vec2 texUv = fract(uv2) + vec2(0.0,showY);
    vec4 tex = texture2D(uTex, texUv);
    if(texUv.y > 1.0){
        discard;
    }

    // if(tex.a == 0.0){
    //     discard;
    // }
    vec4 color = texture2D(uColorTex,fract(vec2(uv.x - uColorTime * 10.0,uv.y)));
    color.rgb *= tex.a;
    tex.rgb = color.rgb;

    tex.a *= 0.1;
    gl_FragColor = tex;

}