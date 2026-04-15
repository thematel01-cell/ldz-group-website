"use client";

import Image from "next/image";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineSection } from "@/components/TimelineSection";
import { aboutCertifications, partnerSection } from "@/data/about";
import { t } from "@/data/i18n";
import { aboutSummary, coreCapabilities, type CapabilityCard } from "@/data/home";

const aboutCapabilityExtras: CapabilityCard[] = [
  {
    slug: "oem-odm",
    title: {
      zh: "產品代工 OEM / ODM",
      en: "OEM / ODM Product Manufacturing"
    },
    description: {
      zh: "產品開發、設計製造與專案執行",
      en: "Product development, design manufacturing, and project execution."
    },
    image: "",
    tag: "OEM / ODM",
    href: "/about"
  },
  {
    slug: "aiot-platform",
    title: {
      zh: "AIoT 雲端軟硬體整合",
      en: "AIoT Cloud Hardware-Software Integration"
    },
    description: {
      zh: "軟硬體整合與可視化平台開發與 IT / OT / Cloud 串接能力。",
      en: "Hardware-software integration, visualization platform development, and IT / OT / Cloud connectivity."
    },
    image: "",
    tag: "AIoT",
    href: "/about"
  }
];

export default function AboutPage() {
  const { locale } = useLocale();
  const aboutCapabilities = [...coreCapabilities, ...aboutCapabilityExtras];

  return (
    <>
      <PageHero
        eyebrow={{ zh: "關於立達興", en: "About LDZ" }}
        title={{ zh: "關於立達興", en: "About LDZ" }}
        description={{
          zh: "立達興以系統整合為基礎，持續拓展智慧能源、自動化、AIoT 與平台化技術服務，協助企業與各類場域提升營運效率與管理能力。",
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
                  ? "立達興科技以正直、承諾、創新、伙伴關係作為品牌核心價值，秉持以人為本、以誠待人、以信立身的經營理念，致力與客戶、夥伴及產業鏈共同成長。品牌不只是提供產品或工程服務，更重視長期合作關係與實際成效，期望以穩健可信的方式，成為客戶轉型升級過程中的重要夥伴。\n\n在服務精神上，立達興堅持以客戶為中心，提供一站式整合服務，快速回應需求，並以創造長期價值作為工作標準。從需求評估、方案規劃、設計製造、系統整合到交付維運，立達興希望每一次合作都不只是完成專案，而是真正協助客戶提升效率、降低風險並創造新價值。\n\n在品牌願景上，立達興希望運用創新技術與共享資源，提升整體工作效率與能力，進一步打造更安全、更便利的生活與產業環境，為社會創造更美好的未來。這也讓立達興的品牌定位不只是工程導向公司，而是朝向智慧能源、智慧自動化、智慧場域整合的科技整合品牌發展。"
                  : "LDZ is built on the core brand values of integrity, commitment, innovation, and partnership. Guided by a people-centered philosophy grounded in sincerity and trust, we are committed to growing together with our clients, partners, and the broader industry ecosystem. Our brand is not only about delivering products or engineering services. We place equal importance on long-term collaboration and measurable outcomes, aiming to become a trusted partner in every client's transformation and upgrade journey.\n\nIn service, LDZ remains firmly customer-centric. We provide one-stop integrated services, respond quickly to client needs, and measure our work by the long-term value we create. From requirement assessment and solution planning to design, manufacturing, system integration, delivery, and ongoing operations, we believe every collaboration should go beyond completing a project and should truly help clients improve efficiency, reduce risk, and create new value.\n\nIn terms of brand vision, LDZ seeks to use innovative technologies and shared resources to enhance overall productivity and capability, creating safer and more convenient environments for both daily life and industry while contributing to a better future for society. This is why LDZ is evolving beyond a purely engineering-oriented company into a technology integration brand focused on smart energy, smart automation, and smart-site integration."
              }
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container-shell">
          <SectionTitle
            eyebrow={locale === "zh" ? "核心優勢" : "Core Strength"}
            title={locale === "zh" ? "一站式OEM/ODM 開發整合" : "Core Capabilities"}
            description={
              locale === "zh"
                ? "聚焦企業與場域智慧化需求，整合設備、系統、資料與營運流程，提供可長期維運與持續擴充的解決方案。"
                : "Focused on enterprise and site-scale intelligence by integrating equipment, systems, data, and operations workflows."
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
                    logo.name === "Partner 03"
                      ? "scale-[1.19]"
                      : logo.name === "Partner 04"
                        ? "scale-[1.5]"
                        : ""
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
