import { Header } from "./header/Header";
import { Menu } from "./menu/Menu";
import styles from "../styles/components/layout.module.scss";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Menu></Menu>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
