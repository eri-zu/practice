import styles from "./h2Title.module.scss";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// 関数コンポーネントの型
// FC
// propsの型はFC<Props>で

export const H2Title: FC<Props> = (props) => {
  const { children } = props;
  return <h2 className={styles.title}>{children}</h2>;
};
