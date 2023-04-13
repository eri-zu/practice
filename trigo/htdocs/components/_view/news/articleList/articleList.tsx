import styles from "./articleList.module.scss";
import ClockSVG from "../../../../public/svg/clock.svg";

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

export const ArticleList = () => {
  return (
    <ul className={styles.list}>
      {data.map((el, i) => {
        return (
          <li className={styles.item}>
            <div className={styles.titlewrap}>
              <h3 className={styles.title}>{el.title}</h3>
              <div className={styles.datewrap}>
                <div className={styles.iconwrap}>
                  <ClockSVG />
                </div>
                <p className={styles.date}>{el.date}</p>
              </div>
            </div>
            <div className={styles.txtarea}>
              <p className={styles.txt}>{el.txt}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
