"use client";

import Link from "next/link";

import { t } from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-[var(--line)] bg-white/85 py-10">
      <div className="container-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="text-lg font-semibold text-[var(--foreground)]">
            {t(siteConfig.companyName, locale)}
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            {locale === "zh"
              ? "以智慧能源、智慧停車與充電、智慧安防影像、自動化設備與雲平台整合，打造高信任感的企業級智慧基礎設施。"
              : "Delivering trusted enterprise-grade smart infrastructure through smart energy, parking and EV charging, AI security vision, automation, and cloud integration."}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">
              {locale === "zh" ? "快速連結" : "Quick Links"}
            </div>
            <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
              {siteConfig.footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[var(--primary)]">
                  {t(item.label, locale)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">
              {locale === "zh" ? "聯絡資訊" : "Contact Info"}
            </div>
            <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
              <span>{siteConfig.contact.phone}</span>
              <span>{siteConfig.contact.email}</span>
              <span>{t(siteConfig.contact.address, locale)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-[var(--line)] pt-6 text-xs tracking-[0.12em] text-[var(--muted)]">
        © {new Date().getFullYear()} LDZ Group. All rights reserved.
      </div>
    </footer>
  );
}
