import "../styles/global.scss";
import { ConfigContext } from "../components/context";
import { useCallback, useEffect, useReducer, useState } from "react";
import { config } from "../components/context/config";
import { useRouter } from "next/router";
import { Header } from "../components/header.jsx";
import styles from "../styles/pages/centerComp.module.scss";

const reducer = (state, action) => {
  return { comp: action.comp };
};

function MyApp({ Component }) {
  const router = useRouter();

  const callback = useCallback((data) => {
    setSiteConfig({ ...siteConfig, ...data });
  }, []);

  const [siteConfig, setSiteConfig] = useState({
    ...config,
    onChangePage: callback,
  });

  const [CurrentComp, dispatch] = useReducer(reducer, {
    comp: Component,
  });

  const [pageName, setPageName] = useState(router.pathname);

  const [isHide, setIsHide] = useState(false);

  const hideDone = useCallback(() => {
    console.log("aaa");
    setIsHide(false);
    setPageName(router.pathname);
    dispatch({
      comp: Component,
    });
  }, [setIsHide, Component, dispatch, setPageName]);

  useEffect(() => {
    if (pageName != router.pathname) {
      setIsHide(true);
    }
  }, [router.pathname, pageName]);

  return (
    <ConfigContext.Provider value={siteConfig}>
      <Header />
      <div className={styles.centerComp}>
        <CurrentComp.comp hide={isHide} hideDone={hideDone} />
      </div>
    </ConfigContext.Provider>
  );
}

export default MyApp;
