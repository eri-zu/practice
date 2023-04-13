import styles from "./layout.module.scss";
import { Header } from "./_view/header/header";
import { Footer } from "./_view/footer/footer";
import { FC, ReactNode } from "react";
import { SpNav } from "./_view/spnav/spnav";
import { FixedBtn } from "./_atoms/fixedBtn/fixedBtn";
import { GoTop } from "./_module/goTop/goTop";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <SpNav></SpNav>
      {children}
      <GoTop>
        <FixedBtn />
      </GoTop>
      <Footer></Footer>
    </>
  );
};
