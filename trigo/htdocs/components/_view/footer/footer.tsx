import styles from "./footer.module.scss";
import { currentYear } from "@/helpers/currentYear";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.txt}>
          <small>&copy; {currentYear()} TRIGO inc.</small>
        </p>
      </div>
    </footer>
  );
};
