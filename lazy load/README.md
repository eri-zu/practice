<h1>lazy load</h1>
<p>画像読み込み遅延を複数の方法で実装</p>
<p>【メモ】</p>
<ul>
  <li>imgタグのsrcは空にしておく　例：src="" data-src="img/img01.jpg"</li>
  <li>読み込みを開始したいタイミングでdata-srcの値を取得し、srcにsetAttributeする</li>
</ul>

<h2>1 / スクロール</h2>
<p>スクロール量に応じて画像の読み込みをスタート</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/lazy%20load/1/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/lazy%20load/1/js/main.js</p>

<h2>2 / ロード後</h2>
<p>windowのロードが終わったら、画像の読み込みを開始
<p>デモ ：https://eri-tsutsui.github.io/UIpractice2/lazy%20load/2/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/lazy%20load/2/js/main.js</p>

<h2>3 / ロード後、数秒後</h2>
<p>6枚目と7枚目の写真だけ、windowのロードが終わって2秒後に読み込み開始
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/lazy%20load/3/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/lazy%20load/3/js/main.js</p>
