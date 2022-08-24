import classNames from "classnames";
import style from "../../styles/components/Menu/menuButton.module.scss";
import React from "react";
import { onEnterOpenButton, onEnterCloseButton } from "./RendererMenuButton";

export const MenuButton = React.forwardRef((props, ref) => {
  const { onClick, isOpen, onMouseEnter } = props;

  return (
    <div
      className={style.btnwrap}
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div className={classNames([style.btn, "js-menubtn"])}>
        <div
          className={classNames([style.inner, style.open, "js-menubtn_open"])}
          style={{ pointerEvents: isOpen ? "none" : "auto" }}
        >
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
        </div>

        <div
          className={classNames([style.inner, style.close, "js-menubtn_close"])}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div className={classNames([style.barwrap, "js-menubtn_barwrap"])}>
            <div className={classNames([style.bar], "js-menubtn_bar")}></div>
          </div>
          <div className={classNames([style.barwrap, "js-menubtn_barwrap"])}>
            <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
