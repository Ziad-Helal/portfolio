import { Link } from "@/i18n/navigation";
import { ThemeToggler } from "@/components";
import { Container, Desktop_NavigationMenu, Mobile_NavigationMenu } from "../../components";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="grid items-center border-b h-14 fixed top-0 w-[calc(100vw-10px)] z-50 bg-transparent backdrop-blur-xs shadow-lg" aria-label={t("aria")}>
      <Container className="flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-medium uppercase">
          <Link href="/">{t("logo")}</Link>
        </h1>
        <Desktop_NavigationMenu />
        <div className="flex items-center gap-1">
          {/* <LocaleToggler /> */}
          <ThemeToggler />
          <Mobile_NavigationMenu />
        </div>
      </Container>
    </header>
  );
}
