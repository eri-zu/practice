import { ReactElement } from "react";
import styles from "./message.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import classNames from "classnames";

const txts: string[] = [
  "いつもありがとうございます。",
  "トリーゴは昭和時代から続く昔懐かしのパン屋です。",
  "おいしさの秘密は\n素材へのこだわりと手焼き。",
  "機械焼きには出せない素朴で\n優しいお味をお楽しみください。",
  "みなさまに支えられ創業から早35年経ちました。",
  "これからもおいしいパンを\nご家庭にお届けします。",
  'どこよりも愛されるお店を目指して。"',
  "ー 店長 ー",
];

export const Message = (): ReactElement => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <H2Title>メッセージ</H2Title>
        </div>
        <div className={styles.txtarea}>
          {txts.map((el, i) => {
            return (
              <p
                key={`txt${i}`}
                className={classNames([
                  styles.txt,
                  i !== txts.length - 1 && styles.italic,
                ])}
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
