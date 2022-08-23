import { useEffect, useRef, useState } from "react";
import { Drawer } from "./Drawer";
import { MenuButton } from "./MenuButton";
import gsap from "gsap";

export const Menu = () => {
  const tl = useRef(gsap.timeline());
  const btn = useRef(null);
  const drawer = useRef(null);
  const btnRenderer = useRef(null);
  const [isOpen, setMenuStatus] = useState(false);

  // useEffect(() => {
  //   btnRenderer.current =
  // }, []);

  const open = () => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add()
      // drawer
      .add();
  };

  const close = () => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add()
      // drawer
      .add();
  };

  const onClickHandler = () => {
    console.log(isOpen);

    setMenuStatus(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen]);

  return (
    <>
      <MenuButton onClick={onClickHandler} ref={btn} />
      <Drawer ref={drawer} />
    </>
  );
};
