import classNames from "classnames";
import style from "../../style/components/Menu/menuButton.module.scss";
import React from "react";

export const MenuButton = React.forwardRef((props, ref) => {
  const { onClick } = props;

  return (
    <div className={style.btnwrap} onClick={onClick} ref={ref}>
      <div className={classNames([style.btn, "js-menubtn"])}>
        <div
          className={classNames([style.inner, style.open, "js-menubtn_inner"])}
        >
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
        </div>
        <div
          className={classNames([style.inner, style.close, "js-menubtn_inner"])}
        >
          <div className={classNames([style.barwrap, "js-menubtn_barwrap"])}>
            <div className={classNames([style.bar], "js-menubtn_bar")}></div>
          </div>
          <div className={classNames([style.bar])}></div>
          <div className={classNames([style.barwrap, "js-menubtn_barwrap"])}>
            <div className={classNames([style.bar, "js-menubtn_bar"])}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
