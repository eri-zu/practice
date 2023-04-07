import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.txt}>
          <small>&copy; 2023 TRIGO inc.</small>
        </p>
      </div>
    </footer>
  );
};
