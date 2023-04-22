import { ReactElement } from "react";
import styles from "./news.module.scss";
import Link from "next/link";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import NewsArrowSVG from "@/public/svg/newsArrow.svg";
import { MenuFlagContext } from "@/components/context/MenuFlag";
import { useContext } from "react";
import { useRouter } from "next/router";
import type { News } from "@/types/news";
import { formatDate } from "@/helpers/formatDate";

type Props = {
  posts: News[];
};

export const TopNews = ({ posts }: Props): ReactElement => {
  const [menuFlag, setMenuFlag] = useContext(MenuFlagContext);
  const router = useRouter();

  const onClick = () => {
    if (!menuFlag) {
      router.push("/news");
    } else {
      setMenuFlag(false); // ？
      router.push("/news");
    }
  };

  return (
    <section className={styles.wrap} id="news">
      <div className={styles.inner}>
        <div className={styles.titlearea}>
          <H2Title>ニュース</H2Title>
        </div>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {posts.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <Link href={`/news#article${i}`}>
                    <div className={styles.datewrap}>
                      <p className={styles.date}>
                        {el.date
                          ? formatDate(el.date)
                          : formatDate(el.publishedAt)}
                      </p>
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
          <div
            className={styles.btn}
            onClick={() => {
              onClick();
            }}
          >
            <span className={styles.btntxt}>すべてのニュースを見る</span>
            <span className={styles.btnicon}>
              <NewsArrowSVG />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
