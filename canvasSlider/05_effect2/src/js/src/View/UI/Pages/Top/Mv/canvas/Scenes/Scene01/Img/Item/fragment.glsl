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

	// uProgress + newUv.x < 0の時、0 
	// uProgress + newUv.x >1.0の時、1
	// 0 < uProgress + newUv.x < 1の時0-1の範囲の単調増加する値を返す 
	// float progress = smoothstep(0.0, 1.0, uProgress + newUv.y); 
	// float progress = smoothstep(0.0, 1.0, uProgress * 2.0 + newUv.y - 1.0); 

	// // vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5);
	// // vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5);
	// vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5); // 1.0 → 0.9        
	// vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5) ;
	// vec4 color = mix(texture0, texture1, progress);


	// float progress = smoothstep(0.0, 1.0, uProgress + newUv.y); // maxが1帰ってきちゃうからだめ

	// uProgressが1の時あかん
	// uProgressが0の時おk
	// float progress = smoothstep(0.0, 1.0, uProgress + newUv.y - 1.0); // newUv.yが〇の時0が帰ってきてtexture0がmaxで帰ってきちゃう

	float progress = smoothstep(0.0, 1.0, uProgress * 2.0 + newUv.y - 1.0); 	

	vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5);
	vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5);
	vec4 color = mix(texture0, texture1, progress);

  // progressは0sの時0で帰ってきて欲しい
	// progressは最初0, アニメーション終わったら1が帰ってきて欲しい
	// uProgresが1の時、progressは１が帰ってき欲しい

	gl_FragColor = color;
}

// uProgressが１の時 progressが1帰ってき欲しい newUv.yがいかなる値であっても
// 値を0から１に収めたい

// ① 左下に向かってzoomしつつ画像切り替え
// float progress = smoothstep(0.0, 1.0, uProgress); 	
// vec4 texture0 = texture2D(uTexture0, (newUv) * (1.0 - progress));
// vec4 texture1 = texture2D(uTexture1, (newUv) * progress);
// vec4 color = mix(texture0, texture1, progress);

// ②中心を起点にzoomしつつ画像切り替え
// float progress = smoothstep(0.0, 1.0, uProgress); 
// vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5);
// vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5);
// vec4 color = mix(texture0, texture1, progress);
// ★0.5引いて真ん中起点にしつつ、帰り値も0 から 1の範囲にするために最後0.5を足す

// ③下向きにグニッといって欲しいのでuvyを動かせばいいかなと思う
// float progress = smoothstep(0.0, 1.0, uProgress + newUv.y); 
// vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5); // 1.0 → 0.9        
// vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5) ;
// vec4 color = mix(texture0, texture1, progress);
// gl_FragColor = color;

// ④progressが最初は0, 最後は1であれば、うまくいきそう？
// vec4 texture0 = texture2D(uTexture0, (newUv - 0.5) * (1.0 - progress) + 0.5); 
// vec4 texture1 = texture2D(uTexture1, (newUv - 0.5) * progress + 0.5) ;
// について、progressが最初は0, 最後は1であれば、問題なさそう（最初の画像がきちんと表示される）
