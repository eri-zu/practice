import { useEffect } from "react";

export const useResize = (cb: () => void = () => {}) => {
  useEffect(() => {
    window.addEventListener("scroll", cb);

    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);
};
