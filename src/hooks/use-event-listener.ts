import { type RefObject, useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "./use-effect";

// eslint-disable-next-line
export default function useEventListener(eventName: string, handler: (e: Event) => any, element?: RefObject<any>) {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current || window;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    const eventListener = (event: Event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
