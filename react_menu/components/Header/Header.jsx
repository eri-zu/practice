import Link from "next/link";
import classNames from "classnames";
import styles from "../../styles/components/header.module.scss";
import { useEffect } from "react";
import { Item } from "./Item";

export const Header = () => {
  const menus = [
    { name: "top", link: "/" },
    { name: "about", link: "/about" },
    { name: "works", link: "/works" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={classNames([styles.nav])}>
          <ul className={classNames([styles.navList])}>
            {menus.map((menu) => {
              return (
                // <li className={classNames([styles.navItem])} key={menu.name}>
                //   <Link href={menu.link}>
                //     <a>
                //       <span className={styles.navText}>
                //         {menu.name.toUpperCase()}
                //       </span>
                //       <span className={classNames([styles.navLine])}></span>
                //     </a>
                //   </Link>
                // </li>
                <Item menu={menu} key={menu.name} />
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
