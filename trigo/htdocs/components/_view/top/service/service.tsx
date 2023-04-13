import styles from "./service.module.scss";
import { ServiceTitle } from "@/components/_atoms/serviceTitle/serviceTitle";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { LeadText } from "@/components/_atoms/leadText/leadText";

type serviceItem = {
  title: string;
  txt: string;
  img?: string;
};

const data: serviceItem[] = [
  {
    title: "アレンジオーダー",
    txt: "サンドイッチのパーティーメニューなど、ご要望に応じてアレンジしています。\nクリスマス、各種イベント等にご利用ください。\n",
  },
  {
    title: "大きなお祝いパン",
    txt: "記念日のお祝いパン、ご相談くださいませ！\nフランスパンの生地を約1.8kg使って焼き上げます。",
    img: "/img/pic_service02.jpg",
  },
];

export const Service = () => {
  return (
    <section className={styles.wrap} id="service">
      <div className={styles.bg}></div>
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <H2Title>サービス</H2Title>
        </div>
        <div className={styles.leadarea}>
          <LeadText>
            トリーゴのサービスをご存知ですか？<br></br>
            お気軽にお声掛けください。<br></br>
            お電話(<a href="tel:06-6493-3625">06-6493-3625</a>) もどうぞ！
          </LeadText>
        </div>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {data.map((el, i) => {
              return (
                <li className={styles.item} key={`el${i}`}>
                  <div className={styles.itemTxtArea}>
                    <div className={styles.itemTitleWrap}>
                      <ServiceTitle>
                        {i + 1}．{el.title}
                      </ServiceTitle>
                    </div>
                    <div className={styles.itemTxtWrap}>
                      <p className={styles.itemTxt}>{el.txt}</p>
                    </div>
                  </div>
                  {el.img && (
                    <div className={styles.itemImgArea}>
                      <div className={styles.itemImgWrap}>
                        <img src={el.img} alt="" />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
