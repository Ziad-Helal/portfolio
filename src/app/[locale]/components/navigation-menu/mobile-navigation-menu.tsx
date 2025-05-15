"use client";

import { Button } from "@/components";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui";
import { mainNavigationRoutes } from "@/constants/routes";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Mobile_NavigationMenu() {
  const pathname = usePathname();
  const t = useTranslations("navigationMenu");
  const kt = useTranslations("keyWords");

  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon" icon={MenuIcon} tooltip={t("trigger")}>
          {t("trigger")}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="capitalize text-2xl font-medium">{t("title")}</SheetTitle>
          <SheetDescription className="sr-only" aria-label={kt("description")}>
            {t("description")}
          </SheetDescription>
        </SheetHeader>
        <ul className="p-4 pt-0 space-y-0.5" aria-label={t("description")}>
          {mainNavigationRoutes.map(({ label, href }) => (
            <li key={label} aria-label={t(`routes.${label}`)}>
              <SheetClose asChild>
                <Link href={href}>
                  <Button variant="ghost" className={cn("w-full justify-start", pathname === href ? "bg-accent text-accent-foreground" : "")}>
                    {t(`routes.${label}`)}
                  </Button>
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
