import { createContext, useState, FC, ReactNode } from "react";

export const MenuFlagContext = createContext<[boolean, (arg: boolean) => void]>(
  [false, () => {}]
);

type Props = {
  children: ReactNode;
};

export const MenuFlag: FC<Props> = (props) => {
  const { children } = props;
  const [menuFlag, setMenuFlag] = useState(false);

  return (
    <MenuFlagContext.Provider value={[menuFlag, setMenuFlag]}>
      {children}
    </MenuFlagContext.Provider>
  );
};
