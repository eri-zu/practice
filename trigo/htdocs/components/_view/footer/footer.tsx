import styles from "./footer.module.scss";
import { CurrentYear } from "@/components/_module/currentYear/currentYear";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.txt}>
          <small>
            &copy; <CurrentYear></CurrentYear> TRIGO inc.
          </small>
        </p>
      </div>
    </footer>
  );
};
