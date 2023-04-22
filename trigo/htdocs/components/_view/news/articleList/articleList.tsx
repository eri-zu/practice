import styles from "./articleList.module.scss";
import ClockSVG from "../../../../public/svg/clock.svg";
import type { News } from "@/types/news";
import { formatDate } from "@/helpers/formatDate";

type Props = {
  posts: News[];
};

export const ArticleList = ({ posts }: Props) => {
  return (
    <ul className={styles.list}>
      {posts.map((el, i) => {
        return (
          <li className={styles.item} id={`article${i}`} key={`article${i}`}>
            <div className={styles.titlewrap}>
              <h3 className={styles.title}>{el.title}</h3>
              <div className={styles.datewrap}>
                <div className={styles.iconwrap}>
                  <ClockSVG />
                </div>
                <p className={styles.date}>
                  {el.date ? formatDate(el.date) : formatDate(el.publishedAt)}
                </p>
              </div>
            </div>
            <div
              className={styles.txtarea}
              dangerouslySetInnerHTML={{ __html: `${el.contents}` }}
            ></div>
          </li>
        );
      })}
    </ul>
  );
};
