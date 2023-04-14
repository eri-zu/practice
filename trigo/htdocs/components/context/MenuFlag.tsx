import { createContext, useState } from "react";

export const MenuFlagContext = createContext<Boolean>(false);

export const MenuFlag = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  return <MenuFlagContext.Provider value={menuFlag}></MenuFlagContext.Provider>;
};
