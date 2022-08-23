import { useEffect, useRef } from "react";
import styles from "../../styles/pages/about/home.module.scss";
import gsap from "gsap";
import { showTL, hideTL } from "../../components/pageAnime";

export default function About({ hide, hideDone }) {
  const tl = useRef(gsap.timeline());
  const spans = useRef(null);
  const imgs = useRef(null);

  useEffect(() => {
    const _spans = spans.current.querySelectorAll("span");
    const _imgs = imgs.current.querySelectorAll("img");

    if (hide) {
      tl.current = gsap.timeline();
      tl.current.add(hideTL(_spans));
      _imgs.forEach((img, i) => {
        tl.current.to(
          img,
          0.1,
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          i * 0.05
        );
      });
      tl.current.eventCallback("onComplete", hideDone);
    } else {
      tl.current = gsap.timeline();
      tl.current.add(showTL(_spans));
      _imgs.forEach((img, i) => {
        tl.current.to(
          img,
          0.5,
          {
            opacity: 1,
            ease: "power2.inOut",
          },
          i * 0.05 + 0.1
        );
      });
    }
    return (e) => tl.current.kill();
  }, [hide]);

  const pagename = "ABOUT";

  return (
    <div className={styles.wrap}>
      <div>
        <div ref={spans}>
          {pagename.split("").map((t, i) => (
            <span key={i + pagename}>{t}</span>
          ))}
        </div>
        <div className={styles.imgs} ref={imgs}>
          {[...Array(3)]
            .map((_, i) => i + 1)
            .map((i) => (
              <img
                src={"/img/" + i + ".jpg"}
                key={i + pagename + "img"}
                width={1600}
                height={900}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
