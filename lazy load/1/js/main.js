'use strict';

// 目標:lazyload
{
	const lists = document.querySelectorAll('.img-item');

	lazyload();

	window.addEventListener('scroll', lazyload);

	function lazyload() {

		const lazyTop = window.innerHeight + window.scrollY - 400;

		lists.forEach(item => {

			if(!item.classList.contains('loaded') && lazyTop > item.getBoundingClientRect().top) {

				item.classList.add('loaded');

				const img = item.querySelector('img');
				const src = img.getAttribute('data-src');

				// わかりやすくするために記載
				img.addEventListener('load', () => {
					console.log('load.comp');
					item.classList.add('imgLoaded');
				});

				img.setAttribute('src', src);

			}
			
		});

	}
}