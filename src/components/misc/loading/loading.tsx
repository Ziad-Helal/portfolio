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
    <span className={cn("flex items-center justify-center gap-2 capitalize", isFullPage ? "h-svh text-xl" : "", className)}>
      <LoaderCircleIcon className={cn("animate-spin h-full aspect-square", iconClassName)} aria-hidden />
      {loadingText || <span className="sr-only">{t("loading")}</span>}
    </span>
  );
}
