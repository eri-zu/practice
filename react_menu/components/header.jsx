import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/components/header.module.scss";

export const Header = () => {
  const menus = [
    { name: "top", link: "/" },
    { name: "about", link: "/about/" },
    { name: "works", link: "/works/" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={classNames([styles.nav])}>
          <ul className={classNames([styles.navList])}>
            {menus.map((menu) => {
              return (
                <li className={classNames([styles.navItem])} key={menu.name}>
                  <Link href={menu.link} className={styles.navLink}>
                    <a>
                      <span className={styles.navText}>{menu.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
