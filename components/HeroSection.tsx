"use client";

import Link from "next/link";

import { t } from "@/data/i18n";
import { homeHero } from "@/data/home";
import { BrandLogo } from "./BrandLogo";
import { TriColorMotif } from "./TriColorMotif";
import { useLocale } from "./LocaleProvider";

export function HeroSection() {
  const { locale } = useLocale();
  const heroDescription =
    locale === "zh"
      ? "提供各類環境與場域更安全、更高效、更智慧的 AI 智慧解決方案，整合能源管理、充電樁系統、儲能設備、智慧停車、影像監控、自助服務設備與雲端平台應用。"
      : t(homeHero.description, locale);

  return (
    <section className="relative overflow-hidden pb-10 pt-16 md:pb-14 md:pt-24">
      <div className="absolute right-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(34,196,214,0.16),_transparent_68%)]" />
      <div className="absolute left-[-6rem] top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(127,217,184,0.12),_transparent_72%)]" />
      <div className="container-shell relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <BrandLogo />
            <TriColorMotif size="lg" className="hidden md:block" />
          </div>
          <span className="inline-flex rounded-full border border-[#d5e5f6] bg-[var(--primary-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
            {t(homeHero.eyebrow, locale)}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-6xl">
            {t(homeHero.title, locale)}
            <span className="mt-3 block text-[0.55em] font-medium text-[var(--primary)]">
              {t(homeHero.subtitle, locale)}
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={homeHero.primaryCta.href}
              className="btn-light"
            >
              {t(homeHero.primaryCta.label, locale)}
            </Link>
            <Link
              href={homeHero.secondaryCta.href}
              className="btn-light"
            >
              {t(homeHero.secondaryCta.label, locale)}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeHero.stats.map((stat, index) => {
              const displayValue = index === 3 ? "1000+" : stat.value;
              const displayLabel =
                index === 3
                  ? locale === "zh"
                    ? "應用場域"
                    : "Application Sites"
                  : t(stat.label, locale);

              return (
                <div
                  key={`hero-stat-${displayValue}-${index}`}
                  className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbfeff_82%)] p-5 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-3xl font-semibold text-[var(--primary-dark)]">
                    {displayValue}
                  </div>
                  <div className="mt-2 text-sm font-medium text-[var(--muted)]">
                    {displayLabel}
                  </div>
                  <div className="brand-divider mt-4" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#0a2b62_0%,#0d4da2_58%,#1d8bdb_100%)] p-8 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)]">
          <div className="absolute right-6 top-6 opacity-90">
            <TriColorMotif size="md" />
          </div>
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-[48px] bg-[radial-gradient(circle_at_bottom_left,_rgba(255,219,31,0.28),_transparent_74%)]" />
          <div className="absolute bottom-8 right-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(127,217,184,0.16),_transparent_70%)]" />
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white">
            {t(homeHero.vision.badge, locale)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight">
            {t(homeHero.vision.title, locale)}
          </h2>
          <div className="mt-6 space-y-3">
            {homeHero.vision.items.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] px-4 py-4 text-sm leading-6 text-white/90"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(255,219,31,0.16)] text-xs font-bold text-[var(--brand-yellow)]">
                    {item.key}
                  </span>
                  <div className="font-semibold">{t(item.heading, locale)}</div>
                </div>
                <div className="mt-1 text-white/78">{t(item.description, locale)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
