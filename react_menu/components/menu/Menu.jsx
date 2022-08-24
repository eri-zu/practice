import { useEffect, useRef, useState } from "react";
import { Drawer } from "./Drawer";
import { MenuButton } from "./MenuButton";
import { closeDrawer, openDrawer } from "./RendererDrawer";
import {
  closeMenuButton,
  onEnterCloseButton,
  onEnterOpenButton,
  openMenuButton,
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
      .add(openMenuButton(btn.current))
      // drawer
      .add(openDrawer(drawer.current), 0);
  };

  const close = () => {
    tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      // btn
      .add(closeMenuButton(btn.current))
      // drawer
      .add(closeDrawer(drawer.current), 0);
  };

  const onClickHandler = () => {
    setMenuStatus(!isOpen);
  };

  const onEnter = () => {
    isOpen
      ? tl.current.add(onEnterCloseButton(btn.current))
      : tl.current.add(onEnterOpenButton(btn.current));
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
