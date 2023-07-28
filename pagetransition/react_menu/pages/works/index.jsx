import { useEffect, useRef } from "react";
import styles from "../../styles/pages/works/home.module.scss";
import gsap from "gsap";
import { showTL, hideTL } from "../../components/pageAnime";
export default function About({ hide, hideDone }) {
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

  const pagename = "WORKS";
  return (
    <div className={styles.wrap}>
      <div>
        <div ref={spans}>
          {pagename.split("").map((t, i) => (
            <span key={i + pagename}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
