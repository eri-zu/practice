'use strict';

// 目標:TweenMaxでテキストアニメーション

{
	const txt = document.querySelector('.text');
	txt.innerHTML = '<span>' + txt.innerHTML.split('').join('</span><span>') + '</span>';
	// txtの文字を取得して、splitで分解して配列に入れる、配列に入れた文字を</span><span>でつなげる
	// ただし、最初と最後の文字には<span>がついてないので（サンドイッチ状態）文字の連結でくっつけてあげる

	const spans = document.querySelectorAll('span');

	spans.forEach((span, index) => {

		span.style.display = 'inline-block';

		TweenMax.from(span, 2.8, {
			x: random(-500, 500),
			y: random(-500, 500),
			z: random(-500, 500),
			opacity: 0,
			scale: 0.1,
			delay: index * 0.02
		});

	});

	function random(min, max){
		return (Math.random() * (max - min)) + min;
	}

}