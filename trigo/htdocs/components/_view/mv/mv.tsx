import styles from "./mv.module.scss";
import AnniversarySVG from "../../../public/svg/anniversary.svg";

export const Mv = () => {
  return (
    <section className={styles.mv}>
      <div className={styles.imgwrap}>
        <div className={styles.img}>
          <img src="/img/pic_mv.png" alt="" />
        </div>
      </div>
      <div className={styles.txtwrap}>
        <p className={styles.txt}>いらっしゃいませ〜</p>
      </div>
      <div className={styles.aniversary}>
        {/* <img
          src="/img/pic_emblem.png"
          alt="創業35年の昭和レトロな園田の手焼きパン屋トリーゴ"
        /> */}
        <AnniversarySVG></AnniversarySVG>
        <div className={styles.year}>35</div>
      </div>
    </section>
  );
};
