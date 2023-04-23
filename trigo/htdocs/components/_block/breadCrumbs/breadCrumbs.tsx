import styles from "./breadCrumbs.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { MenuFlagContext } from "@/components/context/MenuFlag";
import { useRouter } from "next/router";

const data = [
  { href: "/", name: "ホーム" },
  { href: "/news", name: "ニュース" },
];

export const BreadCrumbs = () => {
  const [menuFlag, setMenuFlag] = useContext(MenuFlagContext);
  const router = useRouter();

  const onClick = () => {
    if (menuFlag) {
      setMenuFlag(false);
    }
    router.push("/");
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {data.map((el, i) => {
            return (
              <li className={styles.item} key={`item${i}`}>
                <a
                  data-href={el.href}
                  onClick={() => {
                    if (i == 0) onClick();
                  }}
                >
                  {el.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
