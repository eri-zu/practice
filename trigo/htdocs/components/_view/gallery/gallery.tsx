import styles from "./gallery.module.scss";

export const Gallery = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.titlewrap}>
        <h2 className={styles.title}>ギャラリー</h2>
      </div>
      <div className={styles.leadwrap}>
        <p className={styles.lead}>
          古き良き「昭和のレトロ感」漂うお店です。
          <br />
          オーナーが早朝から、仕込み、発酵、焼き上げております。
        </p>
      </div>
      <div className={styles.sliderarea}>
        <div className={styles.slider}></div>
      </div>
    </div>
  );
};
