import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

interface Loading_Props {
  className?: string;
  iconClassName?: string;
  loadingText?: ReactNode;
  isFullPage?: boolean;
}

export default function Loading({ className, iconClassName, loadingText, isFullPage }: Loading_Props) {
  const t = useTranslations("keyWords");

  return (
    <span className={cn("flex items-center justify-center gap-2 capitalize", isFullPage ? "size-full absolute top-0 left-0 text-xl bg-background/50" : "", className)}>
      <LoaderCircleIcon className={cn("animate-spin aspect-square h-full", isFullPage ? "size-9" : "", iconClassName)} aria-hidden />
      {loadingText || <span className="sr-only">{t("loading")}</span>}
    </span>
  );
}
