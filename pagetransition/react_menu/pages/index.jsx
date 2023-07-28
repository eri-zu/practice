import styles from "../styles/pages/top/home.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { showTL, hideTL } from "../components/pageAnime";
import { Slider } from "../components/slider/Slider";

export default function Home({ hide, hideDone }) {
  const tl = useRef(gsap.timeline());
  const spans = useRef(null);

  useEffect(() => {
    const _spans = spans.current.querySelectorAll("span");
    if (hide) {
      tl.current = gsap.timeline();
      tl.current.add(hideTL(_spans));
      tl.current.eventCallback("onComplete", hideDone);
    } else {
      tl.current = gsap.timeline();
      tl.current.add(showTL(_spans));
    }
    return (e) => tl.current.kill();
  }, [hide]);

  const pagename = "TOP";

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <section className={styles.section}>
          <div ref={spans} className={styles.title}>
            {pagename.split("").map((t, i) => (
              <span key={i + pagename}>{t}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <Slider></Slider>
        </section>
      </div>
    </div>
  );
}
