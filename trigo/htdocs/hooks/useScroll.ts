import { useEffect } from "react";

export const useScroll = (cb: () => void = () => {}) => {
  useEffect(() => {
    window.addEventListener("scroll", cb);

    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);
};
