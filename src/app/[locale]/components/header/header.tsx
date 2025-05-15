import { Link } from "@/i18n/navigation";
import { LocaleToggler, ThemeToggler } from "@/components";
import { Container, Desktop_NavigationMenu, Mobile_NavigationMenu } from "../../components";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="py-2 border-b-2" aria-label={t("aria")}>
      <Container className="flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-medium">
          <Link href="/">ZZZZZZZZZ</Link>
        </h1>
        <Desktop_NavigationMenu />
        <div className="flex items-center gap-1">
          <LocaleToggler />
          <ThemeToggler />
          <Mobile_NavigationMenu />
        </div>
      </Container>
    </header>
  );
}
