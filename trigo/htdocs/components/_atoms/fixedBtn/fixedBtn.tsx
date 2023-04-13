import styles from "./fixedBtn.module.scss";
import TopArrowSVG from "@/public/svg/arrowtop.svg";

export const FixedBtn = () => {
  return (
    <div className={styles.btn}>
      <div className={styles.icon}>
        <TopArrowSVG />
      </div>
    </div>
  );
};
