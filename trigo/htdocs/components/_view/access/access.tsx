import styles from "./access.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { ReactNode } from "react";
import Link from "next/link";

type accessItem = {
  title: string;
  detail: ReactNode;
};
const data: accessItem[] = [
  {
    title: "住所",
    detail: (
      <>
        〒06-6493-3625
        <br />
        兵庫県尼崎市東園田町9-21-21岡崎ハイツ1階
        <br />
        <span>
          <a
            href="https://goo.gl/maps/dCsUdXSeSkmgk3u96"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google mapで見る
          </a>
        </span>
      </>
    ),
  },
  { title: "電話番号", detail: "06-6493-3625" },
  { title: "営業時間", detail: "6:30~21:00（年中無休)" },
];

export const Access = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.imgarea}>
          <img src="/svg/map.svg" alt="" />
        </div>
        <div className={styles.txtarea}>
          <div className={styles.titlearea}>
            <H2Title>アクセス</H2Title>
          </div>
          <div className={styles.detail}>
            <ul className={styles.list}>
              {data.map((el, i) => {
                return (
                  <li className={styles.item} key={`item${i}`}>
                    <div className={styles.itemTitleArea}>
                      <p className={styles.itemTitle}>{el.title}</p>
                    </div>
                    <div className={styles.itemDetailArea}>
                      <p className={styles.itemDetail}>{el.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
