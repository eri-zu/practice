import { ReactElement } from "react";
import styles from "./news.module.scss";
import Link from "next/link";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import NewsArrowSVG from "@/public/svg/newsArrow.svg";
import { MenuFlagContext } from "@/components/context/MenuFlag";
import { useContext } from "react";
import { useRouter } from "next/router";
const data = [
  {
    date: "2023.4.15",
    title: "サービス券終了のお知らせ",
    txt: "サービス券配布を終了いたしました。\nお手元にあるサービス券は、1枚12円でご利用くださいませ。長らくご利用いただきありがとうございました。",
  },
  {
    date: "2020.12.28",
    title: "年末年始のお知らせ",
    txt: "2020年は12/31〜1/3まで休業いたします。",
  },
  {
    date: "2020.7.1",
    title: "レジ袋有料化がスタートします。",
    txt: "法律の改正に伴い、レジ袋を有料化させていただきます。\nマイバッグのご持参等、ご協力をお願いいたします。",
  },
  {
    date: "2020.4.5",
    title: "アルバイト・パートさんを募集します！",
    txt: "土曜日17時〜20時、日曜日13時〜17時のシフトで、長期勤務可能な方を募集しています。 \nアットホームなお店でとても働きやすいですよ♪\n委細面談ですので、お気軽にお問い合わせくださいませ。（06-6493-3625）",
  },
  {
    date: "2020.1.29",
    title: "TRIGOのWEBサイトを公開いたします。",
    txt: "みなさまにTRIGOのことをもっと知ってもらえるように、webサイトを作りました。\n今後ともTRIGOをよろしくお願いいたします。",
  },
];

export const TopNews = (): ReactElement => {
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
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`item${i}`}>
                  <Link href={`/news#article${i}`}>
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
