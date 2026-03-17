"use client";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { t } from "@/data/i18n";
import { caseStudies } from "@/data/cases";

export default function CasesPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={{ zh: "成功案例", en: "Case Studies" }}
        title={{ zh: "成功案例", en: "Case Studies" }}
        description={{
          zh: "先建立案例列表頁骨架，後續可再延伸為案例詳情頁或接 CMS。",
          en: "A first-pass case listing page that can later expand into detail pages or connect to a CMS."
        }}
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <article
              key={`case-study-${index}`}
              className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                <span>{t(item.category, locale)}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
                <span>{t(item.location, locale)}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                {t(item.title, locale)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {t(item.summary, locale)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
