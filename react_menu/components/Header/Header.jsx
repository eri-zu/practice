import Link from "next/link";
import classNames from "classnames";
import styles from "../../styles/components/header.module.scss";
import { Item } from "./Item";
import { useRouter } from "next/router";

export const Header = () => {
  const menus = [
    { name: "top", link: "/" },
    { name: "about", link: "/about" },
    { name: "works", link: "/works" },
  ];

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {router.pathname == menus[0].link ? (
            <li className={styles.item}>
              <Link href="">
                <a href="/">ロゴ入ります</a>
              </Link>
            </li>
          ) : null}
          <li className={styles.item}>
            <div className={classNames([styles.nav])}>
              <ul className={classNames([styles.navList])}>
                {menus.map((menu) => {
                  return (
                    <li
                      className={classNames([styles.navItem])}
                      key={menu.name}
                    >
                      <Link href={menu.link}>
                        <a>
                          <span className={styles.navText}>
                            {menu.name.toUpperCase()}
                          </span>
                          <span className={classNames([styles.navLine])}></span>
                        </a>
                      </Link>
                    </li>
                    // <Item menu={menu} key={menu.name} />
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

// active変更多い？
// cssで初期設定
// 子コンポーネント使わないとできない？
