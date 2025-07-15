"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { Button } from "@/components/ui-upgraded";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import languages from "@/constants/languages";

export default function LocaleToggler() {
  const t = useTranslations("locale");
  const { locale: currentLocale } = useParams<{ locale: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const { locales } = routing;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" tooltip={t("tooltip")} className="uppercase">
          {currentLocale}
          <span className="sr-only">{t("tooltip")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => router.replace(pathname, { locale })} isChoosen={locale == currentLocale}>
            <span className="uppercase font-light">{locale}</span>
            {languages[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
