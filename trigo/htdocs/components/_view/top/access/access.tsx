import styles from "./access.module.scss";
import { H2Title } from "@/components/_atoms/h2Title/h2Title";
import { ReactNode } from "react";
import ClockSVG from "@/public/svg/clock.svg";
import MapIconSVG from "@/public/svg/mapicon.svg";
import TelephoneSVG from "@/public/svg/telephone.svg";

type accessItem = {
  title: string;
  detail: ReactNode;
  icon: ReactNode;
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
        <a
          href="https://goo.gl/maps/L7wJgnMxbpSoWZ6cA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google mapで見る
        </a>
      </>
    ),
    icon: <MapIconSVG></MapIconSVG>,
  },
  {
    title: "電話番号",
    detail: <a href="tel:06-6493-3625">06-6493-3625</a>,
    icon: <TelephoneSVG></TelephoneSVG>,
  },
  {
    title: "営業時間",
    detail: "6:30~21:00（年中無休)",
    icon: <ClockSVG></ClockSVG>,
  },
];

export const Access = () => {
  return (
    <section className={styles.wrap} id="access">
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
                      <div className={styles.itemTitleIcon}>{el.icon}</div>
                      <h3 className={styles.itemTitle}>{el.title}</h3>
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
    </section>
  );
};
