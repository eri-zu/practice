import styles from "./header.module.scss";
import Link from "next/link";
import { ReactElement } from "react";

interface NavItem {
  name: string;
  link: string;
}

// array: number[]  中の要素の型[]

// 何も返却しない
// func = (): void=> {
//   const
// }
// 何も返却しない
// func = (): number=> {
//   return 1
// }

const nav: NavItem[] = [
  { name: "メニュー", link: "" },
  { name: "メッセージ", link: "" },
  { name: "サービス", link: "" },
  { name: "ニュース", link: "" },
  { name: "アクセス", link: "" },
];

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.logoarea}>
        <div className={styles.logo}></div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {nav.map((el, i) => {
            return (
              <li className={styles.item} key={`item${i}`}>
                <Link href={el.link}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
