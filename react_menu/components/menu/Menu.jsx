import { useEffect, useRef, useState } from "react";
import { Drawer } from "./Drawer";
import { MenuButton } from "./MenuButton";
import { hideDrawer, showDrawer } from "./RendererDrawer";
import {
  showOpenBtnTimeline,
  onEnterCloseBtn,
  onEnterOpenBtn,
  showCloseBtnTimeline,
} from "./RendererMenuButton";
import gsap from "gsap";

export const Menu = () => {
  const tl = useRef(gsap.timeline());
  const btn = useRef(null);
  const drawer = useRef(null);
  const isFirstRender = useRef(false);
  const [isOpen, setMenuStatus] = useState(false);

  const open = () => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add(showCloseBtnTimeline(btn.current))
      // drawer
      .add(showDrawer(drawer.current), 0);
  };

  const close = () => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add(showOpenBtnTimeline(btn.current))
      // drawer
      .add(hideDrawer(drawer.current), 0);
  };

  const onClickHandler = () => {
    setMenuStatus(!isOpen);
  };

  const onEnter = () => {
    isOpen
      ? tl.current.add(onEnterCloseBtn(btn.current))
      : tl.current.add(onEnterOpenBtn(btn.current));
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isOpen ? open() : close();
    } else {
      isFirstRender.current = true;
    }
  }, [isOpen]);

  return (
    <>
      <MenuButton
        ref={btn}
        onClick={onClickHandler}
        isOpen={isOpen}
        onMouseEnter={onEnter}
      />
      <Drawer ref={drawer} isOpen={isOpen} />
    </>
  );
};
