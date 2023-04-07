import styles from "./service.module.scss";
import { ServiceTitle } from "@/components/_atoms/serviceTitle/serviceTitle";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { LeadText } from "@/components/_atoms/leadText/leadText";

type serviceItem = {
  title: string;
  txt: string;
};

const data: serviceItem[] = [
  {
    title: "アレンジオーダー",
    txt: "サンドイッチのパーティーメニューなど、ご要望に応じてアレンジしています。\nクリスマス、各種イベント等にご利用ください。\n",
  },
  {
    title: "一升パン",
    txt: "１歳のバースデーに、一升パン、ご相談くださいませ！",
  },
];

export const Service = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.bg}></div>
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <H2Title>サービス</H2Title>
        </div>
        <div className={styles.leadarea}>
          <LeadText>
            トリーゴのサービスをご存知ですか？<br></br>
            お気軽にお声掛けください。<br></br>
            お電話も承っております！（06-6493-3625）
          </LeadText>
        </div>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`el${i}`}>
                  <div className={styles.itemTitleWrap}>
                    <ServiceTitle>
                      {i + 1}．{el.title}
                    </ServiceTitle>
                  </div>
                  <div className={styles.itemTxtWrap}>
                    <p className={styles.itemTxt}>{el.txt}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
