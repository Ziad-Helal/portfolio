import { useEffect } from "react";
import { useFirstRender } from "@/hooks";

// eslint-disable-next-line
export default function useUpdateEffect(effect: () => void | (() => void | undefined), deps: ReadonlyArray<any>) {
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      return effect();
    }
  }, deps);
}
