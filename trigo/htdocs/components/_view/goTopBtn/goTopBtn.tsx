import styles from "./goTopBtn.module.scss";
import { GoTop } from "@/components/_module/goTop/goTop";
import { FadeIn } from "@/components/_module/fadeIn/fadeIn";
import { FixedBtn } from "@/components/_atoms/fixedBtn/fixedBtn";

export const GoTopBtn = () => {
  return (
    <div className={styles.wrap}>
      <FadeIn>
        <GoTop>
          <FixedBtn />
        </GoTop>
      </FadeIn>
    </div>
  );
};
