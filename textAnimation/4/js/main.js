'use strict';

// 目標:TweenMaxでテキストアニメーション

{
	const txt = document.querySelector('.text');
	txt.innerHTML = '<span>' + txt.innerHTML.split('').join('</span><span>') + '</span>';
	// txtの文字を取得して、splitで分解して配列に入れる、配列に入れた文字を</span><span>でつなげる
	// ただし、最初と最後の文字には<span>がついてないので（サンドイッチ状態）文字の連結でくっつけてあげる

	const spans = document.querySelectorAll('span');

	spans.forEach(span => {

		span.style.display = 'inline-block'; // インライン化してtranslateできるようにする

		TweenMax.set(span, {
			y: '100px',
			opacity: 0
		});
		
	});

	TweenMax.staggerTo(spans, 1, {
		y: '0px',
		opacity: 1
	}, 0.15);

}