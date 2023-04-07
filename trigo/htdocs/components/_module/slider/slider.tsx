import { useEffect, useRef } from "react";
import styles from "./slider.module.scss";
import { useRequestAnimationFrame } from "@/hooks/useRequestAnimationFrame";
import { useResize } from "@/hooks/useResize";
import Controller from "./Controller";
import classNames from "classnames";

export const Slider = () => {
  const inner = useRef<HTMLDivElement | null>(null);
  const controller = useRef<Controller | null>(null);

  useRequestAnimationFrame(() => {
    controller.current?.update();
  });

  useResize(() => {
    controller.current?.onResize();
  });

  useEffect(() => {
    controller.current = new Controller(inner.current);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.inner} ref={inner}>
        {[...Array(2)].map((list, i) => {
          return (
            <ul
              key={`list${i}`}
              className={classNames([styles.list, "js-list"])}
            >
              {[...Array(4)].map((item, j) => {
                return (
                  <li className={styles.item} key={`item${j}`}>
                    <div className={styles.imgwrap}>
                      <img src={`/img/pic_gallety0${j + 1}.jpg`} alt="" />
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};
