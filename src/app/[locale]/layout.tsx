import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import { routing } from "@/i18n/routing";
import { Theme } from "@/store";
import { Toaster, TooltipProvider } from "@/components/ui";
import { Footer, Header } from "./components";
import { ScrollToTop } from "@/components";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-intl-shadcn-tailwind",
  description: "Next.JS + TypeScript + Next-Intl + Shadcn + TailwindCSS",
};

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const dir = getLangDir(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="h-svh flex flex-col">
        <NextIntlClientProvider>
          <Theme attribute="class" defaultTheme="system" themes={["light", "dark"]} enableSystem disableTransitionOnChange>
            <TooltipProvider>
              <Header />
              <main className="flex-auto [&>*]:py-2 relative">{children}</main>
              <Footer />
              <ScrollToTop />
              <Toaster position={dir == "ltr" ? "bottom-right" : "bottom-left"} duration={10000} richColors closeButton />
            </TooltipProvider>
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
