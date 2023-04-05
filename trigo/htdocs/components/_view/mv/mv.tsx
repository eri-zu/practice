import styles from "./mv.module.scss";

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
      <div className={styles.aniversary}></div>
    </section>
  );
};
