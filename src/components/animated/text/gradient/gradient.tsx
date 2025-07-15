"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import type { ReactNode } from "react";
import { getLangDir } from "rtl-detect";

interface GradientText_Props {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({ children, className = "", colors = ["#ffaa40", "#9c40ff", "#ffaa40"], animationSpeed = 8, showBorder = false }: GradientText_Props) {
  const lang = useLocale();
  const dir = getLangDir(lang);
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={cn(
        "relative flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500  cursor-pointer",
        className
      )}
    >
      {showBorder && (
        <span
          className="block absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <span
            className="block absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: dir == "ltr" ? "50%" : undefined,
              right: dir == "ltr" ? undefined : "50%",
              top: "50%",
              transform: `translate(${dir == "ltr" ? "-" : ""}50%, -50%)`,
            }}
          ></span>
        </span>
      )}
      <span
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </span>
    </span>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };
