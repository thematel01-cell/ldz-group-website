"use client";

import Image from "next/image";

import { useLocale } from "@/components/LocaleProvider";
import { t } from "@/data/i18n";
import { technologyMapSection } from "@/data/home";

import { SectionTitle } from "./SectionTitle";

export function TechnologyMapSection() {
  const { locale } = useLocale();

  return (
    <section className="section-space bg-white/70">
      <div className="container-shell">
        <SectionTitle
          eyebrow={t(technologyMapSection.eyebrow, locale)}
          title={t(technologyMapSection.title, locale)}
          description={t(technologyMapSection.description, locale)}
          align="center"
        />

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--line)] bg-white shadow-[var(--shadow-card)]">
          <div className="relative aspect-[2/3] w-full bg-[var(--surface-muted)] md:aspect-[16/10]">
            <Image
              src={technologyMapSection.image}
              alt={t(technologyMapSection.imageAlt, locale)}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-[24px] border border-[var(--line)] bg-[var(--primary-soft)] px-6 py-5 text-center text-sm leading-7 text-[var(--primary-dark)] shadow-[var(--shadow-soft)]">
          {t(technologyMapSection.replaceHint, locale)}
        </div>
      </div>
    </section>
  );
}
