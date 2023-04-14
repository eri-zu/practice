import styles from "../../styles/pages/news.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { BreadCrumbs } from "@/components/_block/breadCrumbs/breadCrumbs";
import { ArticleList } from "@/components/_view/news/articleList/articleList";

export default function News() {
  return (
    <>
      <BreadCrumbs></BreadCrumbs>

      <div className={styles.contents}>
        <div className={styles.inner}>
          <div className={styles.titlearea}>
            <H2Title>ニュース</H2Title>
          </div>
          <div className={styles.articlearea}>
            <ArticleList></ArticleList>
          </div>
        </div>
      </div>
    </>
  );
}
