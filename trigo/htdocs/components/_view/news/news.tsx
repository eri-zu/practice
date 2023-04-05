import { ReactElement } from "react";
import styles from "./news.module.scss";
import Link from "next/link";

const data = [
  { date: "2020年12月28日", title: "年末年始のお知らせ" },
  { date: "2020年7月1日", title: " レジ袋有料化がスタートします。" },
  {
    date: "2020年4月5日",
    title: "アルバイト・パートさんを募集します！ 受付は終了しました！",
  },
  { date: "2020年1月29日", title: "TRIGOのWEBサイトを公開いたします。" },
];

export const TopNews = (): ReactElement => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.titlearea}>
          <h2 className={styles.title}>ニュース</h2>
        </div>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <div className={styles.datewrap}>
                    <p className={styles.date}>{el.date}</p>
                  </div>
                  <div className={styles.newsTitlewrap}>
                    <p className={styles.newsTitle}>{el.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.btnarea}>
          <Link href="/news">詳しく見る</Link>
        </div>
      </div>
    </div>
  );
};
