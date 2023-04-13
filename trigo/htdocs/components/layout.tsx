import styles from "./layout.module.scss";
import { Header } from "./_view/header/header";
import { Footer } from "./_view/footer/footer";
import { FC, ReactNode } from "react";
import { Menu } from "./_view/menu/menu";
import { GoTopBtn } from "./_view/goTopBtn/goTopBtn";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      {children}
      <GoTopBtn></GoTopBtn>
      <Footer></Footer>
    </>
  );
};
