"use client";

import { mainNavigationRoutes } from "@/constants/routes";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function Desktop_NavigationMenu() {
  const pathname = usePathname();
  const t = useTranslations("navigationMenu");

  return (
    <div className="max-md:hidden">
      <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8" aria-label={t("description")}>
        {mainNavigationRoutes.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={cn("capitalize hover:text-primary", pathname === href ? "text-primary" : "")}>
              {t(`routes.${label}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
