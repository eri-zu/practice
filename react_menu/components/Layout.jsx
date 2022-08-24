import { Header } from "./Header";
import { Menu } from "./menu/Menu";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Menu></Menu>
      <Header />
      <main>{children}</main>
    </div>
  );
};
