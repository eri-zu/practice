import styles from "./leadText.module.scss";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LeadText: FC<Props> = (props) => {
  const { children } = props;
  return <p className={styles.lead}>{children}</p>;
};
