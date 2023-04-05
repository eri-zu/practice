import { ReactElement } from "react";
import styles from "./menu.module.scss";

type MenuItem = {
  img: string;
  name: string;
  txt: string;
};

const data: MenuItem[] = [
  {
    img: "/img/menu_img00.png",
    name: "あんドーナツ",
    txt: "トリーゴのロングセラー商品。つぶあんたっぷり、グラニュー糖をまぶした昔懐かしの揚げパンです。老若男女問わず不動の人気を誇ります。ぜひご賞味ください。",
  },
  {
    img: "/img/menu_img01.png",
    name: "クリームパン",
    txt: "人気No.２のパン。卵、牛乳をたっぷり使ったオリジナルカスタードクリームを使用しています。",
  },
  {
    img: "/img/menu_img02.png",
    name: "チョコドーナツ",
    txt: "菓子パンを揚げて、たっぷりのチョコをダブルでトッピング。パン屋のドーナツはモチっとしていて美味しいんです！",
  },
  {
    img: "/img/menu_img03.png",
    name: "フランクフルト",
    txt: "子供に大人気のパン。丸ごとフランクフルトを手に持って。お腹いっぱいになってハッピーになること間違いなしです。",
  },
  {
    img: "/img/menu_img04.png",
    name: "アマンド",
    txt: "クロワッサン生地にオリジナルアーモンドペーストをトッピング。菓子パン好きの店長娘の一押し品。",
  },
  {
    img: "/img/menu_img05.png",
    name: "チョコクロワッサン",
    txt: "アーモンドミルクチョコを包みクロワッサンの香りと贅沢な味わいをお楽しみください。",
  },
  {
    img: "/img/menu_img06.png",
    name: "エッグピザ",
    txt: "マヨネーズで和えた卵と、ハム入りのおかずパン。ランチにぴったりですね♪",
  },
  {
    img: "/img/menu_img07.png",
    name: "ナッツデニッシュ",
    txt: "アーモンド、クルミ、カシューナッツ、パンプキンシードをキャラメルでコーティング。",
  },
  {
    img: "/img/menu_img08.png",
    name: "くるみパン",
    txt: "ほんのり甘さのソフトな生地にくるみを混ぜ込んだ香ばしいパンです。お食事パンにもどうぞ。",
  },
];

export const Menu = (): ReactElement => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.titlewrap}>
            <h2 className={styles.title}>メニュー</h2>
          </div>
          <div className={styles.leadwrap}>
            <p className={styles.lead}>
              一部のメニューをご紹介します。<br></br>
              店内にはその他にもたくさんございますのでぜひお越しください。
            </p>
          </div>
        </div>

        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <div className={styles.img}>
                    <img src={el.img} alt="" />
                  </div>
                  <div className={styles.namewrap}>
                    <p className={styles.name}>{el.name}</p>
                  </div>
                  <div className={styles.txtwrap}>
                    <p className={styles.txt}>{el.txt}</p>
                  </div>
                </li>
              );
            })}

            <li className={styles.item}>
              <div className={styles.sale}>
                <div className={styles.saleTitle}>
                  <p className={styles.saleTitleJp}>セール</p>
                  <p className={styles.saleTitleEn}>SALE</p>
                </div>
                <div className={styles.saleTxtWrap}>
                  <p className={styles.saleTxt}>
                    日替わりでお得なパンをご用意しています。店前のボードにて、その日のお買い得なパンの種類をお知らせしております♪
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
