'use strict';

// 目標:TweenMaxでテキストアニメーション

{
	const txt = document.querySelector('.text');
	txt.innerHTML = '<span>' + txt.innerHTML.split('').join('</span><span>') + '</span>';
	// txtの文字を取得して、splitで分解して配列に入れる、配列に入れた文字を</span><span>でつなげる
	// ただし、最初と最後の文字には<span>がついてないので（サンドイッチ状態）文字の連結でくっつけてあげる

	const spans = document.querySelectorAll('span');

	spans.forEach(span => {
		span.style.display = 'inline-block';
	});

	TweenMax.staggerFrom(spans, 0.8, {
		rotationX: '360deg', 
		z: 300,
		opacity: 0,
		scale: 2.0,
		ease: Back.easeOut
	}, 0.02);

}