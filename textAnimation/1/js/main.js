'use strict';

// 目標:タイプライターアニメーションの基本
// forEachを使う
// 文字はJSで指定（htmlでは空）

{
	const target = document.querySelector('.text');
	const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati possimus, eaque ullam delectus vitae, perspiciatis recusandae, modi aliquam cupiditate sint quia consequuntur quis. Laudantium, accusamus totam! Optio, eum molestias!';
	let letters = txt.split(''); 
	const speed = 50;

	letters.forEach((letter, index) => {

		setTimeout(() => {
			target.textContent += letter;
		}, speed * index);
		
	});

}