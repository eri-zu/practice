import styles from "./servide.module.scss";
import { ServiceTitle } from "@/components/_atoms/serviceTitle/serviceTitle";

// const data = [
//   {
//     title: "０１ サービス券",
//     txt: "食パンをご購入いただくとサービス券をお渡しします。20枚集めていただくと、食パン一斤とお引き換えさせていただきます。",
//   },
// ];

export const Service = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <h2 className={styles.title}>サービス</h2>
        </div>
        <div className={styles.leadarea}>
          <p className={styles.lead}>
            トリーゴのサービスをご存知ですか？<br></br>
            お気軽にお声掛けください。
          </p>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.titlewrap}>
              <ServiceTitle>０１ サービス券</ServiceTitle>
            </div>
            <div className={styles.txtwrap}>
              <p className={styles.txt}>
                食パンをご購入いただくとサービス券をお渡しします。<br></br>
                20枚集めていただくと、食パン一斤とお引き換えさせていただきます。
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.titlewrap}>
              <ServiceTitle>０２ アレンジオーダー</ServiceTitle>
            </div>
            <div className={styles.txtwrap}>
              <p className={styles.txt}>
                サンドイッチのパーティーメニューなど、ご要望に応じてアレンジしています。
                <br></br>
                クリスマス、各種イベント等にご利用ください。<br></br>
                電話のアイコン06-6493-3625
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
