import languages from "@/constants/languages";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: Object.keys(languages) as (keyof typeof languages)[],
  defaultLocale: "en",
});
