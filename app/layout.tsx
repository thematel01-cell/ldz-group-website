import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/components/LocaleProvider";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.companyName.zh,
  description: siteConfig.description.zh
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <LocaleProvider>
          <div className="site-shell">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
