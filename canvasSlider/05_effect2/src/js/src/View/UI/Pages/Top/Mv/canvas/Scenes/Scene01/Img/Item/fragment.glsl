precision mediump float;
uniform float uProgress; // 0 - 1.0
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform vec4 uResolution;

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {

	vec2 newUv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
	float x = uProgress;

	// uProgressに線形補完？
	// (x * 2.0 + newUv.y - 1.0) < 0.0の時 x = 0
	// (x * 2.0 + newUv.y - 1.0) > 1.0の時 x = 1.0
	// 0 < (x * 2.0 + newUv.y - 1.0) 1の時 線形補完
	float sx = smoothstep(0.0, 1.0, (x * 2.0 + newUv.y - 1.0)); // -1 から 3とかの値
	// x = smoothstep(0.0, 1.0, x); 


	// vec4 texture0 = texture2D(uTexture0, (newUv - 0.0) * (1.0 - sx) + 0.0);
	// vec4 texture1 = texture2D(uTexture1, (newUv - 0.0) * sx + 0.0);
	vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - sx) + 0.5);
	vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * sx + 0.5);

	vec4 color = mix(texture0, texture1, sx);

	gl_FragColor = color;


	// x = 0.1 y = 0 x = -0.8 => x = 0;
	// x = 0.1 y = 0.8 => x= x = 0
	// x = 0.1 y = 0.81 => x = 0.01
	// x= 0.1 y =0.9 => x = 0.1
	// x= 0.1y = 1, x = 0.2 => 0.2

	// newUv.y 0.5 x（） 0.1

	// 0.8以下はxは0になる



	// float intensity = 0.5; // 値が大きいと、大きいグニャ

	// // 元画像の1pixelごとの色情報
	// vec4 texture0Color = texture2D(uTexture0, vUv); 
	// vec4 texture1Color = texture2D(uTexture1, vUv);

	// // yを時間ごとに変える
	// vec4 _currentImg = texture2D(uTexture0, vec2(vUv.x, vUv.y + uProgress * (texture1Color * intensity)));
	// vec4 _nextImg = texture2D(uTexture1, vec2(vUv.x, vUv.y + (1.0 - uProgress) * (texture0Color * intensity)));

	// // uProgressが0の時_currentImg
	// // uProgressが1の時_nextImg
	// // uProgressが0.3の時、_currentImg30%, _nextImg70%
	// vec4 finalTexture = mix(_currentImg, _nextImg, uProgress);
	// gl_FragColor = finalTexture;
}

// 上が伸びちゃうので、高さのある画像使って、background-coverみたいに配置しないとダメかも
// https://qiita.com/ykob/items/4ede3cb11684c8a403f8