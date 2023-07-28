'use strict';

// 目標：ドラッグ量を取得

{
	const amount = document.querySelector('.amount');
	let isDrag = false;
	let startPosX = 0;
	let currentPosX = 0;

	document.addEventListener('mousedown', mouseDownHandler);
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);

	function mouseDownHandler (e) {
		isDrag = true;
		startPosX = e.pageX;
	}

	function mouseMoveHandler (e) {
		currentPosX = e.pageX;
		if(isDrag) {
			amount.innerHTML = currentPosX - startPosX;
		}
	}

	function mouseUpHandler (e) {
		isDrag = false;
	}

}