<?php
 $ac = '';
 $url = $_SERVER['REQUEST_URI'];
 if (strpos($url, 'project')) $ac = 'project';
 else if (strpos($url, 'people')) $ac = 'people';
 else if (strpos($url, 'event')) $ac = 'event';
 else if (strpos($url, 'recruit')) $ac = 'recruit';
 else if (strpos($url, 'message')) $ac = 'message';
?>

<header class="blk_header">
  <h1 class="logo"><a href="/freshers/" onClick="trEventBe(this,'【click】新卒採用','ヘッダー_サイトロゴ','KDDI RECRUIT2020',event);"><img class="forPc" src="/freshers/img/logo.png" alt="Tomorrow, Together KDDI RECRUIT 2020"><img class="forSp" src="/freshers/img/logo_sp.png" alt="Tomorrow, Together KDDI RECRUIT 2020"></a></h1>
  <!-- pc -->
  <nav>
    <ul>
      <li><a class="<?php if ($ac == 'message') echo 'is-active' ?>" href="/freshers/message/" onClick="trEventBe(this,'【click】新卒採用  PC','ヘッダー_MESSAGE','MESSAGE',event);">MESSAGE</a></li>
      <li><a class="<?php if ($ac == 'project') echo 'is-active' ?>" href="/freshers/project/" onClick="trEventBe(this,'【click】新卒採用  PC','ヘッダー_PROJECT','PROJECT',event);">PROJECT</a></li>
      <li><a class="<?php if ($ac == 'people') echo 'is-active' ?>" href="/freshers/people/" onClick="trEventBe(this,'【click】新卒採用  PC','ヘッダー_PEOPLE','PEOPLE',event);">PEOPLE</a></li>
      <li><a class="<?php if ($ac == 'event') echo 'is-active' ?>" href="/freshers/event/" onClick="trEventBe(this,'【click】新卒採用  PC','ヘッダー_EVENT','EVENT',event);">EVENT</a></li>
      <li><a class="<?php if ($ac == 'recruit') echo 'is-active' ?>" href="/freshers/recruit/" onClick="trEventBe(this,'【click】新卒採用  PC','ヘッダー_RECRUIT','RECRUIT',event);">RECRUIT</a></li>
    </ul>
  </nav>
  <ul class="btn_user">
    <!-- <li><a href="https://job.axol.jp/gs/s/kddi_2020/entry/" target="_blank" onClick="trEventBe(this,'【click】新卒採用','ヘッダー_ENTRY','ENTRY',event);">2020<br>ENTRY</a></li> -->
    <li><a href="https://job.axol.jp/gs/s/kddi_2020/mypage/login" target="_blank" onClick="trEventBe(this,'【click】新卒採用','ヘッダー_MY PAGE','MY PAGE',event);">2020<br>MY PAGE</a></li>
  </ul>
  <!-- /pc -->
  <!-- spBtn -->
  <div class="forSP" id="btn_modalopen"><img src="/freshers/img/ico_menu_open.png" alt="Menu Open" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_メニュー（開く）','メニュー（開く）',event);"></div>
  <!-- /spBtn -->
</header>
<!-- spNavi -->
<nav class="blk_modalmenu">
  <div id="btn_modalclose" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_メニュー（閉じる）','メニュー（閉じる）',event);"><img src="/freshers/img/ico_menu_close.png" alt="Menu Close"></div>
  <ul class="menu">
    <li><a href="/freshers/message/" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_MESSAGE','MESSAGE',event);">MESSAGE</a></li>
    <li><a href="/freshers/project/" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_PROJECT','PROJECT',event);">PROJECT</a></li>
    <li><a href="/freshers/people/" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_PEOPLE','PEOPLE',event);">PEOPLE</a></li>
    <li><a href="/freshers/event/" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_EVENT','EVENT',event);">EVENT</a></li>
    <li><a href="/freshers/recruit/" onClick="trEventBe(this,'【click】新卒採用  SP','ヘッダー_RECRUIT','RECRUIT',event);">RECRUIT</a></li>
  </ul>
</nav>
<!-- /spNavi -->
<!-- /header -->
