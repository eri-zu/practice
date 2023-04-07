import styles from "./layout.module.scss";
import { Header } from "./_view/header/header";
import { Footer } from "./_view/footer/footer";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
