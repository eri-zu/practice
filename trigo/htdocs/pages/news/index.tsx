import styles from "../../styles/pages/news.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { BreadCrumbs } from "@/components/_block/breadCrumbs/breadCrumbs";
import { ArticleList } from "@/components/_view/news/articleList/articleList";
import { GetStaticProps } from "next";
import { getPosts } from "@/libs/getPosts";
import type { News } from "@/types/news";

type Props = {
  posts: News[];
};

export default function News({ posts }: Props) {
  return (
    <>
      <BreadCrumbs></BreadCrumbs>

      <div className={styles.contents}>
        <div className={styles.inner}>
          <div className={styles.titlearea}>
            <H2Title>ニュース</H2Title>
          </div>
          <div className={styles.articlearea}>
            <ArticleList posts={posts}></ArticleList>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
