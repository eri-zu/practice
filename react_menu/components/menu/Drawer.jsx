import classNames from "classnames";
import Link from "next/link";
import style from "../../styles/components/Menu/drawer.module.scss";
import React from "react";

export const Drawer = React.forwardRef((props, ref) => {
  const { isOpen } = props;
  const menus = [
    { name: "top", link: "/" },
    { name: "about", link: "/about" },
    { name: "works", link: "/works" },
  ];

  return (
    <div
      className={classNames([style.drawer, "js-drawer"])}
      ref={ref}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className={classNames([style.bg, "js-drawer_bg"])}></div>

      <div className={classNames([style.inner])}>
        <div className={classNames([style.nav])}>
          <ul className={classNames([style.navList])}>
            {menus.map((menu) => {
              return (
                <li className={classNames([style.navItem])} key={menu.name}>
                  <Link href={menu.link} className={style.navLink}>
                    <a>
                      <span className={style.navText}>{menu.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});
