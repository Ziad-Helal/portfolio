"use client";

import { LoaderCircleIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { useIsMounted } from "@/hooks";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function ThemeToggler() {
  const isMounted = useIsMounted();
  const { setTheme, themes, resolvedTheme, theme: currentTheme } = useTheme();
  const t = useTranslations("colorTheme");

  // For Hydration
  const icon = isMounted ? (resolvedTheme == "dark" ? MoonIcon : SunIcon) : LoaderCircleIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" icon={icon} iconClassName={cn(icon == LoaderCircleIcon ? "animate-spin" : "")} tooltip={t("tooltip")}>
          {t("tooltip")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} className={cn(theme == currentTheme ? "bg-accent" : "")} onClick={() => setTheme(theme)}>
            {theme == "system" ? <MonitorIcon /> : theme == "dark" ? <MoonIcon /> : <SunIcon />}
            {t(`themes.${theme as "light" | "dark" | "system"}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
