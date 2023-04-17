import { ReactElement } from "react";
import styles from "./breadmenu.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { LeadText } from "@/components/_atoms/leadText/leadText";
import Rank1SVG from "../../../../public/svg/rank1.svg";
import Rank2SVG from "../../../../public/svg/rank2.svg";
// import { ScrollShowRank } from "@/components/_module/scrollShow/rank/scrollShowRank";

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

export const BreadMenu = (): ReactElement => {
  return (
    <div className={styles.wrap} id="breadmenu">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.titlewrap}>
            <H2Title>パン</H2Title>
          </div>
          <div className={styles.leadwrap}>
            <LeadText>
              一部のパンをご紹介します。<br></br>
              店内にはその他にもたくさんございますので、
              <br className={styles.isSP}></br>ぜひお越しください。
              <br />
              <span>日替わりでお得なパン</span>もご用意しています♪
            </LeadText>
          </div>
        </div>

        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <div className={styles.imgwrap}>
                    <img src={el.img} alt="" />
                  </div>
                  <div className={styles.namewrap}>
                    <h3 className={styles.name}>
                      <span>{el.name}</span>
                      {i == 0 && (
                        <div className={styles.rank}>
                          <Rank1SVG></Rank1SVG>
                        </div>
                      )}
                      {i == 1 && (
                        <div className={styles.rank}>
                          <Rank2SVG></Rank2SVG>
                        </div>
                      )}
                    </h3>
                  </div>
                  <div className={styles.txtwrap}>
                    <p className={styles.txt}>{el.txt}</p>
                  </div>
                </li>
              );
            })}

            {/* <li className={styles.item}>
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
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
