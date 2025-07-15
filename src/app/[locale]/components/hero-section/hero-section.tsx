import { useLocale, useTranslations } from "next-intl";
import { Container } from "../../components";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern, TextAnimate, TextPressure } from "@/components/animated";

export default function Hero_Section() {
  const t = useTranslations("pages.home.hero");
  const locale = useLocale();

  return (
    <section className="pt-15.5 pb-2 min-h-svh relative overflow-hidden">
      <Container>
        <p className="[@media_(min-height:_450px)]:mt-[25svh] sm:ms-[20%] italic">
          <TextAnimate as="span" once>
            {t("1")}
          </TextAnimate>{" "}
          <TextAnimate
            className={cn("block font-semibold text-9xl uppercase not-italic -mt-1.5", locale == "ar" ? "mb-8" : "mb-3")}
            as="span"
            animation="scaleDown"
            delay={0.5}
            once
          >
            {t("2")}
          </TextAnimate>{" "}
          <TextAnimate as="span" animation="slideRight" className="[&>*]:flex [&>*]:gap-1 block w-1/2 md:w-1/3" delay={1} once>
            {t("3")}
            <TextPressure text={t("4")} className="px-1 sm:px-2" scale />
            {t("5")}
          </TextAnimate>
        </p>
      </Container>
      <InteractiveGridPattern
        opacity={0.25}
        className="skew-12 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />
    </section>
  );
}
