import { ReactElement } from "react";
import styles from "./news.module.scss";
import Link from "next/link";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";

const data = [
  { date: "2023年4月15日", title: "サービス券終了のお知らせ" },
  { date: "2020年12月28日", title: "年末年始のお知らせ" },
  { date: "2020年7月1日", title: " レジ袋有料化がスタートします。" },
  {
    date: "2020年4月5日",
    title: "アルバイト・パートさんを募集します！",
  },
  { date: "2020年1月29日", title: "TRIGOのWEBサイトを公開いたします。" },
];

export const TopNews = (): ReactElement => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.titlearea}>
          <H2Title>ニュース</H2Title>
        </div>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <Link href="/news">
                    <div className={styles.datewrap}>
                      <p className={styles.date}>{el.date}</p>
                    </div>
                    <div className={styles.newsTitlewrap}>
                      <p className={styles.newsTitle}>{el.title}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.btnarea}>
          <div className={styles.btn}>
            <Link href="/news">詳しく見る</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
