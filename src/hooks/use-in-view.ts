import { type RefObject, useState } from "react";
import { useIsomorphicLayoutEffect } from "./use-effect";

export default function useInView(elementRef: RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return isInView;
}
