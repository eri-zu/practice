precision mediump float;
uniform float uTime; 
uniform float uProgress;
uniform float uIntensity;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform vec4 uResolution;

varying vec2 vUv;

mat2 rotate(float a) {
	float s = sin(a);
	float c = cos(a);
	return mat2(c, -s, s, c);
}

void main() {
	vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	vec2 uvDivided = fract(newUV * vec2(uIntensity, 1.0));
	vec2 uvDisplaced1 = newUV + rotate(3.1415926 / 4.0) * uvDivided * uProgress * 0.1;
	vec2 uvDisplaced2 = newUV + rotate(3.1415926 / 4.0) * uvDivided * (1.0 - uProgress) * 0.1;
	vec4 textureColor0 = texture2D(uTexture0, uvDisplaced1);
	vec4 textureColor1 = texture2D(uTexture1, uvDisplaced2);

	gl_FragColor = mix(textureColor0, textureColor1, uProgress);
}
