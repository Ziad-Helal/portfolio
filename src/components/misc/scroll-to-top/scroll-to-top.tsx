"use client";

import { Button } from "@/components";
import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getLangDir } from "rtl-detect";

export default function ScrollToTop() {
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    const progressWrapper = document.querySelector<HTMLButtonElement>(".progress-wrap")!;
    const progressPath = document.querySelector<SVGPathElement>(".progress-wrap path")!;
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.webkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength.toString();
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.webkitTransition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = scrollY;
      const height = document.documentElement.scrollHeight - innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;

      if (scroll < 300) progressWrapper.classList.add("translate-y-20");
      else {
        progressWrapper.classList.remove("translate-y-20");
        progressPath.style.strokeDashoffset = progress.toString();
      }
    };

    addEventListener("scroll", updateProgress);

    return () => {
      removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <Button
      size="icon"
      variant="outline"
      tooltip={t("keyWords.toTop")}
      className={cn(
        "border-none bg-primary/10 hover:bg-primary/20 progress-wrap rounded-full fixed bottom-5 translate-y-20 z-50 shadow",
        getLangDir(locale) == "rtl" ? "right-5" : "left-5"
      )}
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="sr-only">{t("keyWords.toTop")}</span>
      <svg className="progress-circle svg-content size-full" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" strokeWidth={2} className="stroke-primary" />
      </svg>
      <ChevronUpIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
    </Button>
  );
}
