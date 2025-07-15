import { useEffect } from "react";
import { useFirstRender } from "@/hooks";

export default function useUpdateEffect(effect: () => void | (() => void | undefined), deps: ReadonlyArray<any>) {
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      return effect();
    }
  }, deps);
}
