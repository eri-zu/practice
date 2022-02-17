<?php
 $ac = '';
 $url = $_SERVER['REQUEST_URI'];
 if (strpos($url, 'about')) $ac = 'about';
 else if (strpos($url, 'business')) $ac = 'business';
 else if (strpos($url, 'environment')) $ac = 'environment';
?>

<header class="hdBlock" id="js-hd">
  <div class="hdBlock__inner">
    <h1 class="hdBlock__logo"><a href="/" onClick="trEventBe(this,'【click】採用ポータル','ヘッダー_サイトロゴ','KDDI RECRUIT',event);"><img src="/img/common/logo.png" alt="Tomorrow, Together KDDI RECRUIT"></a></h1>
    <!-- pc -->
    <nav class="navPC">
      <ul class="hdBlock__listBox">
        <li><a href="/about/" class="link <?php if ($ac == 'about') echo 'is-active' ?>" onClick="trEventBe(this,'【click】採用ポータル PC','ヘッダー_KDDIについて','KDDIについて',event);">KDDIについて</a></li>
        <li><a href="/business/" class="link <?php if ($ac == 'business') echo 'is-active' ?>" onClick="trEventBe(this,'【click】採用ポータル PC','ヘッダー_KDDIの事業','KDDIの事業',event);">KDDIの事業</a></li>
        <li><a href="/environment/" class="link <?php if ($ac == 'environment') echo 'is-active' ?>" onClick="trEventBe(this,'【click】採用ポータル PC','ヘッダー_働く環境','働く環境',event);">働く環境</a></li>
      </ul>
    </nav>
    <!-- /pc -->
    <!-- spBtn -->
    <div class="forSP hdBlock__btn" id="js-gMenuBtn" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_メニュー','メニュー',event);"><span></span><span></span><span></span></div>
    <!-- /spBtn -->
  </div>
</header>
<!-- spNavi -->
<nav class="navSP" id="js-nav">
  <div class="navSP__bg"></div>
  <ul class="hdBlock__hi1Box js-bl1">
    <li class="hdBlock__hi1Box--list"><a href="/" class="hi1Link" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_HOME','HOME',event);">HOME</a></li>
    <li class="hdBlock__hi1Box--list"><a href="/about/" class="hi1Link" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_KDDIについて','KDDIについて',event);">KDDIについて</a></li>
    <li class="hdBlock__hi1Box--list"><a href="/business/" class="hi1Link" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_KDDIの事業','KDDIの事業',event);">KDDIの事業</a></li>
    <li class="hdBlock__hi1Box--list"><a href="/environment/" class="hi1Link" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_働く環境','働く環境',event);">働く環境</a></li>
    <li class="hdBlock__hi1Box--list is-under">
      <span class="hi1Link js-under" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_採用情報（開く、閉じる）','採用情報（開く、閉じる）',event);">採用情報</span>
      <ul class="hdBlock__hi2Box js-bl2">
        <li class="hdBlock__hi2Box--list"><a href="/freshers/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_新卒採用','新卒採用',event);">新卒採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="/internship/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_インターンシップ','インターンシップ',event);">インターンシップ</a></li>
        <li class="hdBlock__hi2Box--list"><a href="https://recruiting-site.jp/s/career-kddi-864/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_キャリア採用','キャリア採用',event);">キャリア採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="/innovation/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_イノベーション人材採用','イノベーション人材採用',event);">イノベーション人材採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="/3up/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_第二新卒採用','第二新卒採用',event);">第二新卒採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="http://www.kddi.com/corporate/recruit/rehirement/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_カムバック採用','カムバック採用',event);">カムバック採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="https://sa-kddi.com/jobfind-pc/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_セールスアドバイザー採用','セールスアドバイザー採用',event);">セールスアドバイザー採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="https://www.cservice.jp/c/K-Evolva/job_detail.php?id=173a4ad3deb7&mode=items&c_id=&c_sub_id=" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_事務契約社員採用','事務契約社員採用',event);">事務契約社員採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="https://www.cservice.jp/c/K-Evolva/job_detail.php?id=174a59c5daab&mode=items&c_id=&c_sub_id=" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_料金アドバイザー採用','料金アドバイザー採用',event);">料金アドバイザー採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="http://www.kddi.com/corporate/recruit/disability/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_障がい者採用','障がい者採用',event);">障がい者採用</a></li>
        <li class="hdBlock__hi2Box--list"><a href="http://www.challenged.kddi.com/saiyo/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_KDDIチャレンジド','KDDIチャレンジド',event);">KDDIチャレンジド</a></li>
        <li class="hdBlock__hi2Box--list"><a href="http://www.kddi.com/corporate/recruit/group/" class="hi2Link" target="_blank" onClick="trEventBe(this,'【click】採用ポータル  SP','ヘッダー_グループ企業採用','グループ企業での採用',event);">グループ企業採用</a></li>
      </ul>
    </li>
  </ul>
</nav>
<!-- /spNavi -->
<!-- /header -->
