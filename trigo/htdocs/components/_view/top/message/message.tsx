import { ReactElement } from "react";
import styles from "./message.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import classNames from "classnames";
import { ReactNode } from "react";
import { EstablishYear } from "@/components/_module/establishYear/establishYear";
import { currentYear } from "@/helpers/currentYear";
const txts: ReactNode = (
  <>
    <p className={classNames([styles.txt, styles.italic])}>
      "いつもありがとうございます。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      トリーゴは昭和時代から続く
      <br className={styles.isSP} />
      昔懐かしのパン屋です。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      おいしさの秘密は
      <br />
      素材へのこだわりと手焼き。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      機械焼きには出せない素朴で
      <br />
      優しいお味をお楽しみください。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      みなさまに支えられ創業から早{currentYear() - 1985}年経ちました。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      これからもおいしいパンを
      <br />
      ご家庭にお届けします。
    </p>
    <p className={classNames([styles.txt, styles.italic])}>
      どこよりも愛されるお店を目指して。"
    </p>
    <p className={styles.txt}>ー 店長 ー</p>
  </>
);

export const Message = (): ReactElement => {
  return (
    <section className={styles.wrap} id="message">
      <div className={styles.inner}>
        <div className={styles.titlewrap}>
          <H2Title>メッセージ</H2Title>
        </div>
        <div className={styles.txtarea}>{txts}</div>
      </div>
    </section>
  );
};
