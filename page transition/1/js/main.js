'use strict';

// 目標:ページ遷移アニメーション（カバーが横から出てくる）

{
	const body = document.body;
	const links = document.querySelectorAll('a');

	window.addEventListener('load', () => {
		body.classList.remove('slideOut');
	});

	links.forEach(link => {
		link.addEventListener('click', (e) => {

			e.preventDefault();
			const url = link.getAttribute('href');

			body.classList.add('slideIn');

			setTimeout(() => {
				window.location = url;
			}, 500);

		});
	});




	
}