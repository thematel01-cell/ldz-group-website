"use client";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineSection } from "@/components/TimelineSection";
import { t } from "@/data/i18n";
import { aboutSummary, coreCapabilities } from "@/data/home";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={{ zh: "關於立達興", en: "About LDZ" }}
        title={{ zh: "關於立達興", en: "About LDZ" }}
        description={{
          zh: "立達興科技以系統整合為根基，持續向智慧能源、自動化、AIoT 與平台化科技服務拓展。",
          en: "Built on system integration, LDZ continues to expand into smart energy, automation, AIoT, and platform-based technology services."
        }}
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle
              title={locale === "zh" ? "公司介紹" : "Company Overview"}
              description={t(aboutSummary.description, locale)}
            />
          </div>
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle
              title={locale === "zh" ? "品牌理念" : "Brand Philosophy"}
              description={
                locale === "zh"
                  ? "用工程能力建立信任，以平台與資料能力放大場域價值，讓每個智慧系統都能真正落地、維運並持續進化。"
                  : "We build trust through engineering execution and amplify site value through platforms and data so every smart system can be deployed, maintained, and continuously improved."
              }
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container-shell">
          <SectionTitle
            eyebrow={locale === "zh" ? "核心優勢" : "Core Strength"}
            title={locale === "zh" ? "核心能力" : "Core Capabilities"}
            description={
              locale === "zh"
                ? "聚焦企業與場域級智慧化需求，整合設備、系統、資料與維運流程。"
                : "Focused on enterprise and site-scale intelligence by integrating equipment, systems, data, and operations workflows."
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreCapabilities.map((item) => (
              <div
                key={item.slug}
                className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                  {t(item.title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {t(item.description, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
    </>
  );
}
