precision mediump float;
uniform float uProgress; // 0 - 1.0
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform vec4 uResolution;

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {

	// background-size: coverぽく
	vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

	// smooth stepで帰ってくる値
	// float progress = smoothstep(0.0, 1.0, (uProgress * 2.0 + newUv.y - 1.0)); // -1 から 3とかの値
	// float progress = smoothstep(0.0, 1.0, uProgress * 2.0 + newUv.y); // 0から1の値 なんかeasing的なイメージ？
	// float progress = uProgress * 2.0 + newUv.y; // 0から1の値 なんかeasing的なイメージ？

	// x < 0の時、0, x >1.0の時、0 < x < 1の時0-1の範囲の単調増加する値を返す 
	float progress = smoothstep(0.0, 1.0, uProgress + newUv.x); 

	// vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5);
	// vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5);
	vec4 texture0 = texture2D(uTexture0, newUv * (1.0 - progress)); // 1.0 → 0.9        
	vec4 texture1 = texture2D(uTexture1, newUv * progress);

	vec4 color = mix(texture0, texture1, progress);

	gl_FragColor = color;


	// x = 0.1 y = 0 x = -0.8 => x = 0;
	// x = 0.1 y = 0.8 => x= x = 0
	// x = 0.1 y = 0.81 => x = 0.01
	// x= 0.1 y =0.9 => x = 0.1
	// x= 0.1y = 1, x = 0.2 => 0.2

	// newUv.y 0.5 x（） 0.1

	// 0.8以下はxは0になる

}