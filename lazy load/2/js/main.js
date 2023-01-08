'use strict';

// 目標:時間差でimg06とimg07だけlazyload 

{
	const imgs = document.querySelectorAll('.lazyload');

	window.addEventListener('load', () => {

		imgs.forEach(img => {

			const src = img.getAttribute('data-src');
			img.setAttribute('src', src);
			
		});
		
	});


}