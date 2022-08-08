precision mediump float;
uniform float uProgress; // 0 - 1.0
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uDisp;

varying vec2 vUv; // fragementに送るが、同じ名前は使えないので変えること

void main() {
	float intensity = 0.5; // 値が大きいと、大きいグニャ

	// 元画像の1pixelごとの色情報
	vec4 texture0Color = texture2D(uTexture0, vUv); 
	vec4 texture1Color = texture2D(uTexture1, vUv);

	// yを時間ごとに変える
	vec4 _currentImg = texture2D(uTexture0, vec2(vUv.x, vUv.y + uProgress * (texture1Color * intensity)));
	vec4 _nextImg = texture2D(uTexture1, vec2(vUv.x, vUv.y + (1.0 - uProgress) * (texture0Color * intensity)));

	// uProgressが0の時_currentImg
	// uProgressが1の時_nextImg
	// uProgressが0.3の時、_currentImg30%, _nextImg70%
	vec4 finalTexture = mix(_currentImg, _nextImg, uProgress);
	gl_FragColor = finalTexture;
}

// 上が伸びちゃうので、高さのある画像使って、background-coverみたいに配置しないとダメかも
// https://qiita.com/ykob/items/4ede3cb11684c8a403f8