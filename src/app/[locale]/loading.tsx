import { Loading as LoadingSpinner } from "@/components";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("keyWords");

  return <LoadingSpinner loadingText={t("loading")} isFullPage />;
}
