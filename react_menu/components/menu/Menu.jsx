import { useCallback, useEffect, useRef, useState } from "react";
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
  const dom = useRef(null);
  const [isOpen, setMenuStatus] = useState(false);

  const open = useCallback(() => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add(showCloseBtnTimeline(dom.current))
      // drawer
      .add(showDrawer(drawer.current), 0);
  }, []);

  const close = useCallback(() => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add(showOpenBtnTimeline(dom.current))
      // drawer
      .add(hideDrawer(drawer.current), 0);
  }, []);

  const onClickHandler = useCallback(() => {
    setMenuStatus(!isOpen);
  }, [isOpen]);

  const onEnter = useCallback(() => {
    isOpen
      ? tl.current.add(onEnterCloseBtn(dom.current))
      : tl.current.add(onEnterOpenBtn(dom.current));
  }, [isOpen]);

  useEffect(() => {
    if (isFirstRender.current) {
      isOpen ? open() : close();
    } else {
      isFirstRender.current = true;
    }
  }, [isOpen]);

  useEffect(() => {
    const openbtn = btn.current.querySelector(".js-menubtn_open");
    const closebtn = btn.current.querySelector(".js-menubtn_close");

    dom.current = {
      openBars: openbtn.querySelectorAll(".js-menubtn_bar"),
      closeBars: closebtn.querySelectorAll(".js-menubtn_bar"),
    };
  }, []);

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
