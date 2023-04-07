import styles from "./gallery.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { LeadText } from "@/components/_atoms/leadText/leadText";
import { Slider } from "@/components/_module/slider/slider";

export const Gallery = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.titlewrap}>
        <H2Title>ギャラリー</H2Title>
      </div>
      <div className={styles.leadwrap}>
        <LeadText>
          古き良き「昭和のレトロ感」漂うお店です。
          <br />
          オーナーが早朝から、仕込み、発酵、焼き上げております。
        </LeadText>
      </div>
      <div className={styles.sliderarea}>
        <Slider></Slider>
      </div>
    </div>
  );
};
