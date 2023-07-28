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

vec2 mirrored(vec2 v) {
	vec2 m = mod(v, 2.0);
	return mix(m, 2.0 - m, step(1.0 ,m));
}

void main() {
	vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	vec4 noise = texture2D(uDisplacement, mirrored(newUv + uTime * 0.04));
	float progress = uProgress * 0.8 - 0.05 + noise.g * 0.06;
	float intpl = pow(abs(smoothstep(0.1, 1.0, (progress * 2.0 - vUv.x + 0.5))), 10.0);
	
	vec4 t1 = texture2D( uTexture0, (newUv - 0.5) * (1.0 - intpl) + 0.5 ) ;
	vec4 t2 = texture2D( uTexture1, (newUv - 0.5) * intpl + 0.5 );

	gl_FragColor = mix( t1, t2, intpl );
}


