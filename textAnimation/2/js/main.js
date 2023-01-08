'use strict';

// 目標:タイプライターアニメーションの基本2
// forを使う
// タイピングバー（縦）を追加

{
	const target = document.querySelector('.text');
	const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et quia debitis repellat incidunt accusamus rerum odit? Nobis cum illo aliquid, est aut maiores odit, nisi distinctio aperiam quo dolor!";
	target.textContent = '';
	let letters = txt.split(''); 

	const num = letters.length; // 245
	const speed = 50;

	for(let i = 0; i < num; i ++) {

		setTimeout(() => {
			target.textContent += letters[i];
		}, i * speed);

	}
	
}