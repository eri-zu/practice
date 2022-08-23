import { Menu } from "./menu/Menu";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
};
