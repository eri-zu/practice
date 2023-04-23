import styles from "./mv.module.scss";
import AnniversarySVG from "@/public/svg/anniversary.svg";
import Anniversary1SVG from "@/public/svg/anniversary_1.svg";
import Anniversary2SVG from "@/public/svg/anniversary_2.svg";
import { currentYear } from "@/helpers/currentYear";

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
        <div className={styles.year}>{currentYear() - 1985}</div>
      </div>
    </section>
  );
};
