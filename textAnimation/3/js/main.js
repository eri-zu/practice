'use strict';

// 目標:タイプライターアニメーションの基本2
// setTimeout

{

	const target = document.querySelector('.text');
	const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et quia debitis repellat incidunt accusamus rerum odit? Nobis cum illo aliquid, est aut maiores odit, nisi distinctio aperiam quo dolor!";
	const speed = 50;
	let i = 0;

	function typeWriter() {
		if (i < txt.length) {
			target.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}	

	typeWriter();
	
}