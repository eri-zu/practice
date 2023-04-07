import styles from "./serviceTitle.module.scss";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ServiceTitle: FC<Props> = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};
