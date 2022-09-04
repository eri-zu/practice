precision mediump float;
uniform float uTime; 
uniform float uProgress;
uniform float uRadius;
uniform float uWidth;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uDisplacement;
uniform vec4 uResolution;

varying vec2 vUv;



void main() {

	// background-size: coverぽく
	vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	vec2 start = vec2(0.5, 0.5);
	vec2 aspect = uResolution.wz;
	
	vec4 noise = texture2D(uDisplacement, fract(vUv + uTime * 0.04));
	float prog = uProgress * 0.66 + noise.g * 0.04;

	// -0.35から0の値返ってくる
	// 1.35から1.0返ってくる
	float circ = 
	  1.0 - smoothstep(-uWidth, 0.0, uRadius * distance(start * aspect, newUv * aspect) - prog * (1.0 + uWidth));
	float intpl = pow(abs(circ), 1.0);
	
	vec4 t1 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - intpl) + 0.5);
	vec4 t2 = texture2D(uTexture1, (newUv - 0.5) * intpl + 0.5);
	gl_FragColor = mix(t1, t2, intpl);

}

// fract(x) : x-floor(x)を返す

