import { NextIntlClientProvider } from "next-intl";
import { getLangDir } from "rtl-detect";
import { Theme } from "@/store";
// import { SplashCursor } from "@/components/animated";
import { Toaster, TooltipProvider } from "@/components/ui";
import { ScrollToTop } from "@/components";
import { Footer, Header } from "./components";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziad",
  description: "Ziad's Portfolio",
};

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dir = getLangDir(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-svh flex flex-col">
        <NextIntlClientProvider>
          <Theme attribute="class" defaultTheme="system" themes={["light", "dark"]} enableSystem disableTransitionOnChange>
            {/* <SplashCursor SPLAT_RADIUS={0.1} SPLAT_FORCE={3000} /> */}
            <TooltipProvider>
              <Header />
              <main className="flex-auto relative overflow-hidden">{children}</main>
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
