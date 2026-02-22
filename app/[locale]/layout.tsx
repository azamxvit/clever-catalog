import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProviders";
import { Header } from "@/components/layouts/index";
import { Footer } from "@/components/layouts/index";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Clever — Напольные покрытия в Атырау",
    default:  "Clever — Напольные покрытия в Атырау",
  },
  description: "Магазин ламината и керамогранита в Атырау.",
};

export default async function LocaleLayout({
  children,
  params, 
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  const { locale } = await params;
  
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-cream dark:bg-navy-dark antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}