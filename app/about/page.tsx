"use client";

import Image from "next/image";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineSection } from "@/components/TimelineSection";
import { aboutCertifications, partnerSection } from "@/data/about";
import { t } from "@/data/i18n";
import { aboutSummary, coreCapabilities } from "@/data/home";

export default function AboutPage() {
  const { locale } = useLocale();
  const aboutCapabilities = coreCapabilities;

  return (
    <>
      <PageHero
        eyebrow={{ zh: "關於立達興", en: "About LDZ" }}
        title={{ zh: "關於立達興", en: "About LDZ" }}
        description={{
          zh: "立達興以系統整合為基礎，持續拓展智慧能源、自動化、AIoT 與平台化技術服務，協助企業與各類場域提升營運效率與管理品質。",
          en: "Built on system integration, LDZ continues to expand into smart energy, automation, AIoT, and platform-based technology services."
        }}
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle
              title={locale === "zh" ? "公司簡介" : "Company Overview"}
              description={t(aboutSummary.description, locale)}
            />
          </div>
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle
              title={locale === "zh" ? "品牌理念" : "Brand Philosophy"}
              description={
                locale === "zh"
                  ? "立達興以正直、承諾、創新與夥伴關係作為品牌核心價值，重視長期合作與實際成果。我們不只提供產品或工程服務，更希望在客戶轉型升級的過程中，成為值得信賴的技術整合夥伴。\n\n從需求評估、方案規劃、設計製造、系統整合到交付維運，立達興堅持以客戶需求為中心，透過一站式整合服務協助客戶提升效率、降低風險並創造持續價值。"
                  : "LDZ is built on the core values of integrity, commitment, innovation, and partnership. We value long-term collaboration and measurable outcomes, aiming to be a trusted technology integration partner in every client's transformation journey.\n\nFrom requirement assessment and planning to design, system integration, delivery, and operations, LDZ remains customer-centric and focuses on creating sustainable value through one-stop integrated services."
              }
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container-shell">
          <SectionTitle
            eyebrow={locale === "zh" ? "核心優勢" : "Core Strength"}
            title={locale === "zh" ? "一站式 OEM / ODM 與整合能力" : "Integrated OEM / ODM and Delivery Capabilities"}
            description={
              locale === "zh"
                ? "聚焦企業與場域智慧化需求，整合設備、系統、資料與營運流程，提供可長期維運與持續擴充的解決方案。"
                : "Focused on enterprise and site-scale digital transformation by integrating equipment, systems, data, and workflows."
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutCapabilities.map((item) => (
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

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle
            eyebrow={t(aboutCertifications.eyebrow, locale)}
            title={t(aboutCertifications.title, locale)}
            description={t(aboutCertifications.description, locale)}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {aboutCertifications.items.map((item, index) => (
              <article
                key={`certification-${index}`}
                className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/5] w-full bg-[var(--surface-muted)]">
                  <Image
                    src={item.image}
                    alt={t(item.title, locale)}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <div className="border-t border-[var(--line)] p-6">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {t(item.title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {t(item.summary, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container-shell">
          <SectionTitle
            eyebrow={t(partnerSection.eyebrow, locale)}
            title={t(partnerSection.title, locale)}
            description={t(partnerSection.description, locale)}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerSection.logos.map((logo, index) => (
              <article
                key={`partner-logo-${index}`}
                className="flex min-h-40 items-center justify-center rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`relative h-[6.5rem] w-full ${
                    logo.name === "Partner 03" ? "scale-[1.19]" : logo.name === "Partner 04" ? "scale-[1.5]" : ""
                  }`}
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="320px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
    </>
  );
}
