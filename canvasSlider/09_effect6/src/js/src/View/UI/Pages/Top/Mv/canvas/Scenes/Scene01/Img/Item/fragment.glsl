precision mediump float;
uniform float uTime; 
uniform float uProgress;
uniform float uIntensity;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uDisplacement;
uniform vec4 uResolution;

varying vec2 vUv;

mat2 getRotM(float angle) {
	float s = sin(angle);
	float c = cos(angle);
	return mat2(c, -s, s, c);
}
const float PI = 3.1415;
const float angle1 = PI *0.25;
const float angle2 = -PI *0.75;

void main() {
	vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	vec4 disp = texture2D(uDisplacement, newUV);
	vec2 dispVec = vec2(disp.r, disp.g);

	vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * uIntensity * uProgress;
	vec4 textureColor0 = texture2D(uTexture0, distortedPosition1);
	
	vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * uIntensity * (1.0 - uProgress);
	vec4 textureColor1 = texture2D(uTexture1, distortedPosition2);

	gl_FragColor = mix(textureColor0, textureColor1, uProgress);
}
