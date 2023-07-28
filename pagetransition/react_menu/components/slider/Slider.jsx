import classNames from "classnames";
import styles from "../../styles/components/slider/slider.module.scss";
import Link from "next/link";
import { ArrowLeftSVG } from "./ArrowLeftSVG";
// import { ArrowLeftSVG } from "./ArrowLeftSVG.svg";
import { ArrowRightSVG } from "./ArrowRightSVG";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Order from "./Order";
import Renderer from "./Renderer";
import Swipe from "./Swipe";

export const Slider = () => {
  /**
   * init
   */
  // num
  const len = 10;
  const array = [...Array(len).keys()];

  // dom
  const wrap = useRef(null);
  const timer = useRef(null);
  const arrowL = useRef(null);
  const arrowR = useRef(null);
  const tl = useRef(gsap.timeline());
  const order = useRef(null);
  const renderer = useRef(null);
  const swipe = useRef(null);

  // val
  const number = useRef(1);
  const visibleNum = useRef(1);
  const [isActiveArrowL, setArrowLStatus] = useState(false);
  const [isActiveArrowR, setArrowRStatus] = useState(true);
  const [isSwipeR, setSwipeStatusR] = useState(true);
  const [isSwipeL, setSwipeStatusL] = useState(true);

  useEffect(() => {
    // instance
    order.current = new Order(len);
    renderer.current = new Renderer(wrap.current, len);
    swipe.current = new Swipe(wrap.current, wrap.current);

    // 見えてる枚数計算
    const w = renderer.current.calcWidth();
    visibleNum.current =
      window.innerWidth >= 768 ? Math.floor((window.innerWidth - 100) / w) : 1;

    // swipe
    swipe.current.onStart = () => {};
    swipe.current.onMove = () => {};
    swipe.current.onEnd = () => {};
    swipe.current.onSwipe = (sign) => {
      if (sign > 0) {
        if (!isSwipeR) return;
        change("next");
      } else {
        if (!isSwipeL) return;
        change("prev");
      }
    };

    // update
    update();
    return () => {
      cancelAnimationFrame(timer.current);
    };
  }, []);

  /**
   * func
   */
  // update
  const update = useCallback(() => {
    timer.current = requestAnimationFrame(update);
    renderer.current.updatePos();
  }, []);

  // change
  const change = useCallback((direction) => {
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

    // timeline
    tl.current = gsap.timeline();
    tl.current.add(renderer.current.changePos(number.current));

    // pointer events
    if (order.current.current == len - visibleNum.current) {
      setArrowRStatus(false);
      setSwipeStatusR(false);
    } else if (order.current.current == 0) {
      setArrowLStatus(false);
      setSwipeStatusL(false);
    } else {
      setArrowRStatus(true);
      setArrowLStatus(true);
      setSwipeStatusR(true);
      setSwipeStatusL(true);
    }
  }, []);

  return (
    <div className={classNames([styles.slider])} ref={wrap}>
      <div
        className={classNames([
          styles.arrow,
          styles.arrowLeft,
          "js-slider_arrow_left",
          isActiveArrowL ? styles.isActive : styles.isNotActive,
        ])}
        onClick={() => {
          change("prev");
        }}
        ref={arrowL}
      >
        <ArrowLeftSVG />
      </div>
      <div
        className={classNames([
          styles.arrow,
          styles.arrowRight,
          "js-slider_arrow_right",
          isActiveArrowR ? styles.isActive : styles.isNotActive,
        ])}
        onClick={() => {
          change("next");
        }}
        ref={arrowR}
      >
        <ArrowRightSVG />
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
                  <Link href="/">
                    <a>
                      <p className={styles.imgwrap}>
                        <img src={`img/${i + 1}.jpg`}></img>
                      </p>
                      <div className={styles.titlewrap}>
                        <p className={styles.title}>{`title${i}`}</p>
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

// svg?
// arrow status?
// swipe

// orderは親のstateで管理
// useAnimationFrame
// ロジックは全てjsxに書く
