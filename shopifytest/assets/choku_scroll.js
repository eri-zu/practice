/*  スムーススクロール
---------------------------------------------------*/
function smooth_scroll() {
	$('a[href*="#"]').click(function () {//先頭一致では動かないので部分一致にする
		var headerHight=250; //ヘッダーの高さ指定
		var speed = 500;//スピード指定
		var href = $(this).attr('href').split("#").slice(-1);//クリックした要素のhrefを取得
		var target = $(href == "#" || href == "" ? 'html' : '#'+href);//移動先を指定
		var position = target.offset().top - headerHight;//ポジションからヘッダーの高さ分引く
		var w = $(window).width();//レスポンシブ分岐用　ウインドウ幅取得
		if (w <= 734) {// 749だとずれる　//スマホ版のヘッダー高さ指定
			headerHight = 0;//SP版は固定ヘッダーなし
		}
		$("html, body").animate({
			scrollTop: position//スムーススクロール実行
		}, speed, "swing");
		return false;
	});
}