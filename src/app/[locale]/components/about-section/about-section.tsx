import { useTranslations } from "next-intl";
import { Section } from "@/app/[locale]/components";
import { Courses, Education, Experience } from "./components";

export default function About_Section() {
  const t = useTranslations("pages.home.about");

  return (
    <Section heading={t("heading")} id="about" className="scroll-mt-14 bg-secondary/50" containerClassName="space-y-5">
      <Experience />
      <Education />
      <Courses />
    </Section>
  );
}
