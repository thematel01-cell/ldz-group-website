"use client";

import Image from "next/image";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { t } from "@/data/i18n";
import { futureAiArchitecture, futureAiPrograms } from "@/data/future-ai";

export default function FutureAiPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={{ zh: "未來 AI", en: "Future AI" }}
        title={{
          zh: "Future AI for Smart Infrastructure",
          en: "Future AI for Smart Infrastructure"
        }}
        description={{
          zh: "立達興正朝向平台型科技公司發展，將 AI、能源與場域資料整合成持續演進的智慧服務能力。",
          en: "LDZ is evolving toward a platform-oriented technology company, combining AI, energy, and site data into continually improving smart services."
        }}
      />
      <section className="section-space pb-0">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                {t(futureAiArchitecture.eyebrow, locale)}
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
                {t(futureAiArchitecture.title, locale)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {t(futureAiArchitecture.description, locale)}
              </p>
              <div className="mt-6 rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-5">
                <h3 className="text-base font-semibold text-[var(--primary-dark)]">
                  {t(futureAiArchitecture.architectureTitle, locale)}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {futureAiArchitecture.architecturePoints.map((point, index) => (
                    <li key={`architecture-point-${index}`} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{t(point, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 rounded-[24px] border border-[rgba(127,217,184,0.45)] bg-[linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)] p-5">
                <h3 className="text-base font-semibold text-[var(--primary-dark)]">
                  {t(futureAiArchitecture.benefitsTitle, locale)}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--primary-dark)]">
                  {futureAiArchitecture.benefits.map((benefit, index) => (
                    <li key={`benefit-point-${index}`} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--brand-mint)]" />
                      <span>{t(benefit, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[#081b43] shadow-[0_30px_80px_rgba(12,77,162,0.22)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={futureAiArchitecture.image}
                  alt={t(futureAiArchitecture.alt, locale)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 760px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {futureAiPrograms.map((program, index) => (
            <article
              key={`future-ai-program-${index}`}
              className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                {locale === "zh" ? "AI 計畫" : "AI Program"}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                {t(program.title, locale)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {t(program.description, locale)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
