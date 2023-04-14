const scrollLock = (e: Event) => {
  e.preventDefault();
};
const scrollLockListener = (e: Event) => {
  scrollLock(e as WheelEvent | TouchEvent);
};

const events = ["wheel", "touchmove"];

export const addScrollLock = () => {
  events.forEach((event, i) => {
    document.addEventListener(event, scrollLockListener, { passive: false });
  });
};

export const removeScrollLock = () => {
  events.forEach((event, i) => {
    document.removeEventListener(
      event as keyof DocumentEventMap,
      scrollLockListener,
      { passive: false } as EventListenerOptions
    );
  });
};
