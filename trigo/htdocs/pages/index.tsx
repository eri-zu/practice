import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/pages/home.module.scss";
import { Mv } from "@/components/_view/top/mv/mv";
import { BreadMenu } from "@/components/_view/top/breadmenu/breadmenu";
import { Message } from "@/components/_view/top/message/message";
import { Service } from "@/components/_view/top/service/service";
import { TopNews } from "@/components/_view/top/news/news";
import { Access } from "@/components/_view/top/access/access";
import { Gallery } from "@/components/_view/top/gallery/gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TRIGO（トリーゴ） | 尼崎市園田のパン屋</title>
        <meta
          name="description"
          content="トリーゴは尼崎市の阪急神戸線園田駅前近くに立地するパン屋です。地元の方々に愛され創業35年を迎えました。朝6時半から夜9時まで営業していますのでぜひお立ち寄りください。これからもご家庭においしいパンをお届けします。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Mv></Mv>
        <BreadMenu></BreadMenu>
        <Message></Message>
        <Service></Service>
        <TopNews></TopNews>
        <Access></Access>
        <Gallery></Gallery>
      </main>
    </>
  );
}
