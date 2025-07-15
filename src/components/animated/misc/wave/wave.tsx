"use client";

import { useRef, useState } from "react";
import { useEventListener, useIsMounted, useIsomorphicLayoutEffect } from "@/hooks";
import { cn } from "@/lib/utils";

interface Wave_Props {
  position: "top" | "bottom";
  className?: string;
}

export default function Wave({ position, className }: Wave_Props) {
  const isMounted = useIsMounted();
  const waveRef = useRef<HTMLDivElement>(null);
  const [waveTranslation, setWaveTranslation] = useState("100%");

  useIsomorphicLayoutEffect(() => {
    if (isMounted) {
      setWaveTranslation((waveRef.current!.getBoundingClientRect().y - innerHeight) * 1.5 + "px");
      setTimeout(() => {
        waveRef.current!.style.transitionDuration = "0ms";
      }, 1000);
    }
  }, [isMounted]);

  useEventListener("scroll", () => {
    if (waveRef.current) setWaveTranslation((waveRef.current.getBoundingClientRect().y - innerHeight) * 1.5 + "px");
  });

  return (
    <div
      ref={waveRef}
      className={cn(
        "wave bg-inherit h-20 xl:h-40 w-[500vw] sm:w-[400vw]: md:w-[300vw] absolute transition-transform duration-1000",
        position == "top" ? "left-0 bottom-full" : "right-0 top-full rotate-180",
        className
      )}
      style={{ transform: `translateX(${waveTranslation})`, transition: isMounted ? undefined : "transform" }}
    />
  );
}
