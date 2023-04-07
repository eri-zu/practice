import { useEffect, useRef } from "react";

export const useRequestAnimationFrame = (cb: () => void = () => {}) => {
  const timer = useRef<number | null>(null);

  const update = () => {
    timer.current = requestAnimationFrame(update);

    cb();
  };

  useEffect(() => {
    update();

    return () => {
      if (timer.current !== null) cancelAnimationFrame(timer.current);
    };
  }, []);
};
