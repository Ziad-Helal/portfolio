import messages from "./messages/en.json";
import { routing } from "@/i18n/routing";
import type { RequestConfig } from "next-intl/server";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: RequestConfig["formats"];
  }
}
