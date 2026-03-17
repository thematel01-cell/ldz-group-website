"use client";

import { t } from "@/data/i18n";
import { timelineItems } from "@/data/timeline";

import { useLocale } from "./LocaleProvider";
import { SectionTitle } from "./SectionTitle";

export function TimelineSection() {
  const { locale } = useLocale();

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle
          eyebrow={locale === "zh" ? "發展歷程" : "Milestones"}
          title={locale === "zh" ? "發展歷程" : "Development Timeline"}
          description={
            locale === "zh"
              ? "從系統整合出發，逐步擴展至能源、自動化、AIoT 與平台化能力。"
              : "Starting from system integration, LDZ expanded into energy, automation, AIoT, and platform services."
          }
        />
        <div className="relative mt-10 space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[linear-gradient(180deg,var(--primary),rgba(29,139,219,0.18))] md:ml-4">
          {timelineItems.map((item) => (
            <article
              key={item.year}
              className="relative rounded-[24px] border border-[var(--line)] bg-white p-6 pl-12 shadow-[var(--shadow-soft)]"
            >
              <span className="absolute left-[0.65rem] top-8 h-4 w-4 rounded-full border-4 border-white bg-[var(--primary)] shadow-[0_0_0_1px_rgba(12,77,162,0.2)]" />
              <div className="text-2xl font-semibold text-[var(--primary-dark)]">{item.year}</div>
              <h3 className="mt-1 text-xl font-semibold text-[var(--foreground)]">
                {t(item.title, locale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {t(item.description, locale)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
