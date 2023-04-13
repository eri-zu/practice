import styles from "./breadCrumbs.module.scss";
import Link from "next/link";

const data = [
  { href: "/", name: "ホーム" },
  { href: "/news", name: "ニュース" },
];

export const BreadCrumbs = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {data.map((el, i) => {
            return (
              <li className={styles.item}>
                <Link href={el.href}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
