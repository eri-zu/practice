precision mediump float;
uniform float uTime; 
uniform float uProgress;
uniform float uIntensity;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform vec4 uResolution;

varying vec2 vUv;

vec2 mirrored(vec2 v) {
	vec2 m = mod(v, 2.0);
	return mix(m, 2.0 - m, step(1.0 ,m));
}

void main() {
	vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	vec4 textureColor0 = texture2D(uTexture0, newUV);
	vec4 textureColor1 = texture2D(uTexture1, newUV);

	// float displace0 = (textureColor0.r + textureColor0.g + textureColor0.b) * 0.33;
	// float displace1 = (textureColor1.r + textureColor1.g + textureColor1.b) * 0.33;
	// vec4 t1 = texture2D(uTexture0, vec2(newUV.x, newUV.y + uProgress * (displace1 * uIntensity)));
	// vec4 t2 = texture2D(uTexture1, vec2(newUV.x, newUV.y + (1.0 - uProgress) * (displace0 * uIntensity)));

	vec4 t1 = texture2D(uTexture0, vec2(newUV.x, newUV.y + uProgress * (textureColor1 * uIntensity)));
	vec4 t2 = texture2D(uTexture1, vec2(newUV.x, newUV.y + (1.0 - uProgress) * (textureColor0 * uIntensity)));

	gl_FragColor = mix(t1, t2, uProgress);
}

// vec4にfloat かけたら何？vec4が返ってくる？
// uProgress=0の時、(1.0 - uProgress) * (textureColor0 * uIntensity)は - newUV.y？？