// import Head from "next/head";
import styles from "@/styles/pages/home.module.scss";
import { Mv } from "@/components/_view/top/mv/mv";
import { BreadMenu } from "@/components/_view/top/breadmenu/breadmenu";
import { Message } from "@/components/_view/top/message/message";
import { Service } from "@/components/_view/top/service/service";
import { TopNews } from "@/components/_view/top/news/news";
import { Access } from "@/components/_view/top/access/access";
import { Gallery } from "@/components/_view/top/gallery/gallery";
import { GetStaticProps } from "next";
import { getPosts } from "@/libs/getPosts";
import type { News } from "@/types/news";
import type { Bread } from "@/types/bread";
// import type Bread
import { getBreadData } from "@/libs/getPosts";

type Props = {
  posts: News[];
  breadData: Bread[];
};

export default function Home({ posts, breadData }: Props) {
  return (
    <>
      <main className={styles.main}>
        <Mv></Mv>
        <BreadMenu></BreadMenu>
        <Message></Message>
        <Service></Service>
        <TopNews posts={posts}></TopNews>
        <Access></Access>
        <Gallery></Gallery>
      </main>
    </>
  );
}

// サーバーのビルド時に呼び出される
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  const breadData = await getBreadData();

  return {
    props: {
      posts,
      breadData,
    },
  };
};
