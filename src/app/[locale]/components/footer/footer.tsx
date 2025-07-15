import { useFormatter, useTranslations } from "next-intl";
import { Container } from "../../components";
import { Wave } from "@/components/animated";

export default function Footer() {
  const t = useTranslations("footer");
  const format = useFormatter();

  return (
    <footer className="py-6">
      <Container>
        <p className="text-center capitalize">
          &copy; {format.number(new Date().getFullYear(), "normal")} {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
