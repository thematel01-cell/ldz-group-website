"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { t } from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "./BrandLogo";
import { TriColorMotif } from "./TriColorMotif";
import { useLocale } from "./LocaleProvider";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(219,229,240,0.95)] bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <BrandLogo compact />
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)] md:text-base">
              {t(siteConfig.companyName, locale)}
            </div>
            <div className="text-xs tracking-[0.18em] text-[var(--muted)]">LDZ Group</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-[var(--primary)]" : "text-[#35506e] hover:text-[var(--primary-dark)]"
                }`}
              >
                {t(item.label, locale)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <TriColorMotif size="sm" className="hidden lg:block" />
          <div className="hidden rounded-2xl border border-[var(--line)] bg-white p-1 lg:flex">
            <button
              type="button"
              className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                locale === "zh" ? "bg-[var(--primary-dark)] text-white" : "text-[var(--muted)]"
              }`}
              onClick={() => setLocale("zh")}
            >
              中
            </button>
            <button
              type="button"
              className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                locale === "en" ? "bg-[var(--primary-dark)] text-white" : "text-[var(--muted)]"
              }`}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-2xl bg-[linear-gradient(135deg,var(--primary-dark),var(--primary))] px-5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] lg:inline-flex"
          >
            {t(siteConfig.navItems[6].label, locale)}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-[var(--primary-dark)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={locale === "zh" ? "開啟選單" : "Open menu"}
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-white lg:hidden">
          <nav className="container-shell grid gap-1 py-4">
            <div className="mb-2 flex justify-end">
              <TriColorMotif size="sm" />
            </div>
            <div className="mb-2 flex rounded-2xl border border-[var(--line)] bg-white p-1">
              <button
                type="button"
                className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${
                  locale === "zh" ? "bg-[var(--primary-dark)] text-white" : "text-[var(--muted)]"
                }`}
                onClick={() => setLocale("zh")}
              >
                中
              </button>
              <button
                type="button"
                className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${
                  locale === "en" ? "bg-[var(--primary-dark)] text-white" : "text-[var(--muted)]"
                }`}
                onClick={() => setLocale("en")}
              >
                EN
              </button>
            </div>
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {t(item.label, locale)}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
