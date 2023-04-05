import styles from "./access.module.scss";

const data = [
  {
    title: "住所",
    detail:
      "〒06-6493-3625\n兵庫県尼崎市東園田町9-21-21岡崎ハイツ1階\nマップピンのアイコンGoogle mapで見る",
  },
  { title: "電話番号", detail: "06-6493-3625" },
  { title: "営業時間", detail: "時計のアイコン6:30~21:00（年中無休)" },
];

export const Access = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.imgarea}>
          <img src="" alt="" />
        </div>
        <div className={styles.txtarea}>
          <div className={styles.titlearea}>
            <h2 className={styles.title}>アクセス</h2>
          </div>
          <div className={styles.detail}>
            <ul className={styles.list}>
              {data.map((el, i) => {
                return (
                  <li className={styles.list} key={`item${i}`}>
                    <div className={styles.titlearea}>
                      <p className={styles.title}></p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detail}></p>
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
