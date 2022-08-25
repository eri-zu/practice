import classNames from "classnames";
import styles from "../../styles/components/slider/slider.module.scss";
import Link from "next/link";
import ArrowLeftSVG from "./ArrowLeftSVG.js";
import ArrowRightSVG from "./ArrowRightSVG.js";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Order from "./Order";
import Renderer from "./Renderer";

export const Slider = () => {
  // num
  const len = 18;
  const array = [...Array(len).keys()];

  // dom
  const arrowRight = useRef(null);
  const arrowLeft = useRef(null);
  const wrap = useRef(null);

  // val
  const tl = useRef(gsap.timeline());
  const order = useRef(null);
  const renderer = useRef(null);
  const number = useRef(1);

  // init
  useEffect(() => {
    order.current = new Order(len);
    renderer.current = new Renderer(wrap.current, len);
  }, []);

  // change
  const change = (direction) => {
    if (!order.current) return;

    if (tl.current) tl.current.kill();

    // index
    if (direction == "next") {
      order.current.go();
      number.current = -1;
    } else if (direction == "prev") {
      order.current.back();
      number.current = 1;
    } else if (direction == "jump") {
      order.current.jump(0);
      number.current = "reset";
    }

    tl.current = gsap.timeline();

    tl.current
      // move
      .add(renderer.current.changePos(number.current));
  };

  return (
    <div className={classNames([styles.slider])} ref={wrap}>
      <div
        className={classNames([
          styles.arrow,
          styles.arrowLeft,
          "js-slider_arrow_left",
        ])}
        onClick={change("prev")}
      >
        {/* <ArrowLeftSVG /> */}LEFT
      </div>
      <div
        className={classNames([
          styles.arrow,
          styles.arrowRight,
          "js-slider_arrow_right",
        ])}
        onClick={change("next")}
      >
        {/* <ArrowRightSVG /> */}RIGHT
      </div>
      <div className={classNames([styles.inner, "js-slider_inner"])}>
        <div className={classNames([styles.list])}>
          <div className={classNames([styles.listInner])}>
            {array.map((el, i) => {
              return (
                <div
                  className={classNames([styles.item, "js-slider_item"])}
                  key={i}
                >
                  <Link href="">
                    <a>
                      <p className={styles.imgwrap}>
                        <img src={`img/${i + 1}.jpg`}></img>
                      </p>
                      <div className={styles.titlewrap}>
                        <p className={styles.title}>title</p>
                      </div>
                      <div className={styles.txtwrap}>
                        <p className={styles.txt}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Minus voluptates veniam quibusdam
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
