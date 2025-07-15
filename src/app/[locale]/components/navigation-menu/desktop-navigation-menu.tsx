"use client";

import { mainNavigationRoutes } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MotionHighlight, MotionHighlightItem } from "@/components/animated";
import { useState } from "react";
import { useUpdateEffect } from "@/hooks";

export default function Desktop_NavigationMenu() {
  const [activeLink, setActiveLink] = useState("#home");
  const t = useTranslations("navigationMenu");

  // For Hydration
  useUpdateEffect(() => {
    setActiveLink(location.hash.length > 0 ? location.hash : "#home");
  }, []);

  return (
    <div className="max-md:hidden">
      <MotionHighlight
        defaultValue={activeLink}
        onValueChange={(value) => (value == null ? setActiveLink(activeLink) : undefined)}
        className="!h-full !top-0 rounded-md"
        containerClassName="flex items-center gap-2 h-[33px]"
        as="ul"
        mode="parent"
        aria-label={t("description")}
        controlledItems
        hover
      >
        {mainNavigationRoutes.map(({ label, href }) => (
          <li key={label}>
            <MotionHighlightItem value={href || "#home"} defaultValue={activeLink}>
              <Link href={"/" + href} className="capitalize rounded-md py-1.5 px-4" onClick={() => setActiveLink(href || "#home")}>
                {t(`routes.${label}`)}
              </Link>
            </MotionHighlightItem>
          </li>
        ))}
      </MotionHighlight>
    </div>
  );
}
