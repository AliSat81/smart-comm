import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import localFont from "next/font/local";

import "./globals.css";
import "../../public/icons/icon-font/style.css";

const iransans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_UltraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum).woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
});

export async function generateMetadata() {
  const t = await getTranslations({
    undefined,
    namespace: "HomePage.metadata",
  });

  return {
    title: t("title"), // Dynamic title
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={iransans.variable}>
      <body>
        <ThemeProvider {...{ theme }}>
          <AppRouterCacheProvider>
            <NextIntlClientProvider {...{ messages }}>
              {children}
            </NextIntlClientProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
