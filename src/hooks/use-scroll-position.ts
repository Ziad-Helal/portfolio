import { useState } from "react";
import useEventListener from "./use-event-listener";

const getPosition = () => (typeof window !== "undefined" ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 });

const setPosition = ({ x, y }: { x?: number; y?: number }) => {
  if (typeof window !== "undefined") {
    const scrollOptions: ScrollToOptions = { behavior: "smooth" };

    if (typeof x === "number") scrollOptions.left = x;
    if (typeof y === "number") scrollOptions.top = y;

    window.scrollTo(scrollOptions);
  }
};

export default function useScrollPosition(): [{ x: number; y: number }, typeof setPosition] {
  const [currentPosition, setCurrentPosition] = useState(getPosition());

  // ["scroll", "resize"].forEach((item) => useEventListener(item, () => setCurrentPosition(getPosition())));
  useEventListener("scroll", () => setCurrentPosition(getPosition()));
  useEventListener("resize", () => setCurrentPosition(getPosition()));

  return [currentPosition, setPosition];
}
