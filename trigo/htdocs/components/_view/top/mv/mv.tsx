import styles from "./mv.module.scss";
import AnniversarySVG from "@/public/svg/anniversary.svg";
import { EstablishYear } from "@/components/_module/establishYear/establishYear";

export const Mv = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.imgwrap}>
        <div className={styles.img}>
          <img src="/img/pic_mv.png" alt="" />
        </div>
      </div>
      <div className={styles.txtwrap}>
        <p className={styles.txt}>いらっしゃいませ〜</p>
      </div>
      <div className={styles.aniversary}>
        <AnniversarySVG></AnniversarySVG>
        <div className={styles.year}>
          <EstablishYear></EstablishYear>
        </div>
      </div>
    </section>
  );
};
