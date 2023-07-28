const collections = [
  "casablranca","cintreecurvex","longisland","vanguard"
];
const tags = [
  "basic","complication","supercomplication","philosophy",
  "elegant","active","regular","large","skeleton"
];

const categories = [
  "mens","ladies","share"
];

const img = [
  "../assets/img/watch/collections/01.png",
  "../assets/img/watch/collections/02.png",
  "../assets/img/watch/collections/03.png",
  "../assets/img/watch/collections/04.png",
  "../assets/img/watch/collections/05.png",
];

const title = [
  "ブラック クロコ クレイジー アワーズ",
  "ヴァンガード　クロノグラフ",
  "トノウ カーベックス イレギュラー レトログラード アワー",
  "トノウ カーベックス レトログラード セコンド 25th",
  "ラウンド ギガ トゥールビヨン スケルトン",
  "クロノグラフヴァンガード",
  "トノウ カーベックス 25th",
  "ハート トゥ ハート",
  "ヴァンガード 7デイズ パワーリザーブ スケルトン"
]

const watchNum = 200;
const collectionsNum = collections.length;
const tagsNum = tags.length;
const categoriesNum = categories.length;
const imgNum = img.length;
const titleNum = title.length;

const watchList = [];
for (var i = 0; i < watchNum; i++) {
  const tagselectNum = Math.floor(Math.random()*tagsNum);
  const randomMonth = Math.floor(Math.random()*12);
  const randomDay = Math.floor(Math.random()*31);
  const d = yyyymmdd(2018,randomMonth,randomDay);
  const watch = {
    id : i+1,
    title:title[Math.floor(Math.random()*titleNum)],
    isNew: i<5 ? true : false,
    link:'',
    img:img[Math.floor(Math.random()*imgNum)],
    category:categories[Math.floor(Math.random()*categoriesNum)],
    price:Math.floor(Math.random() * 20000000 + 500000), // 50万〜2050万,
    tag:random(tags,tagselectNum),
    date:`${d}`,
    casesize : Math.floor(Math.random() * 1000 + 1000) ,//1000~2000,
    collection:collections[Math.floor(Math.random()*collectionsNum)]
  }
  watchList.push(watch);
}


function random(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

function yyyymmdd(y, m, d) {
    var y0 = ('0000' + y).slice(-4);
    var m0 = ('00' + m).slice(-2);
    var d0 = ('00' + d).slice(-2);
    return y0 + m0 + d0;
}

console.log(JSON.stringify(watchList));
