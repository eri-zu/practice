import { ReactElement } from "react";
import styles from "./message.module.scss";

const txts: string[] = [
  "いつもありがとうございます。",
  "トリーゴは昭和時代から続く昔懐かしのパン屋です。",
  "おいしさの秘密は\n素材へのこだわりと手焼き。",
  "機械焼きには出せない素朴で\n優しいお味をお楽しみください。",
  "みなさまに支えられ創業から早35年経ちました。",
  "これからもおいしいパンを\nご家庭にお届けします。",
  'どこよりも愛されるお店を目指して。"',
];

export const Message = (): ReactElement => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <h2 className={styles.title}>メッセージ</h2>
        </div>
        <div className={styles.txtarea}>
          {txts.map((el, i) => {
            return (
              <p className={styles.italic} key={`txt${i}`}>
                {el}
              </p>
            );
          })}
          <p>ー 店長 ー</p>
        </div>
      </div>
    </section>
  );
};
