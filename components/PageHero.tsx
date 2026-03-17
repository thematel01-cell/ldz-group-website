"use client";

import type { LocalizedText } from "@/data/i18n";
import { t } from "@/data/i18n";
import { useLocale } from "./LocaleProvider";

type PageHeroProps = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const { locale } = useLocale();

  return (
    <section className="border-b border-[var(--line)] bg-white/80 py-16 md:py-24">
      <div className="container-shell">
        <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--primary-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {t(eyebrow, locale)}
        </span>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
          {t(title, locale)}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t(description, locale)}
        </p>
      </div>
    </section>
  );
}
