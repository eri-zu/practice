import styles from "../styles/pages/top/Home.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { showTL, hideTL } from "../components/pageAnime";

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
      <div ref={spans}>
        {pagename.split("").map((t, i) => (
          <span key={i + pagename}>{t}</span>
        ))}
      </div>
    </div>
  );
}
