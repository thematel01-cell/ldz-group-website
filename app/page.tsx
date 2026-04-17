"use client";

import Link from "next/link";

import { ContactCTA } from "@/components/ContactCTA";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { HeroSection } from "@/components/HeroSection";
import { useLocale } from "@/components/LocaleProvider";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TechnologyMapSection } from "@/components/TechnologyMapSection";
import { TimelineSection } from "@/components/TimelineSection";
import { t } from "@/data/i18n";
import { aboutSummary, featuredEntries, futureAiSection } from "@/data/home";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <>
      <HeroSection />
      <CoreCapabilities />

      <section className="section-space bg-white/75">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionTitle
            eyebrow="About LDZ"
            title={t(aboutSummary.title, locale)}
            description={t(aboutSummary.description, locale)}
          />
          <div className="grid gap-4 lg:pt-24">
            {aboutSummary.highlights.map((item, index) => (
              <div
                key={`about-highlight-${index}`}
                className="rounded-[24px] border border-[var(--line)] bg-white p-6 text-sm leading-7 text-[var(--foreground)] shadow-[var(--shadow-soft)]"
              >
                {t(item, locale)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle
            eyebrow={locale === "zh" ? "精選入口" : "Featured Access"}
            title={locale === "zh" ? "解決方案" : "Solutions"}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredEntries.map((item, index) => (
              <ProductCard key={`featured-entry-${index}`} {...item} />
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
      <TechnologyMapSection />

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_58%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
            <SectionTitle
              eyebrow="Future AI"
              title={t(futureAiSection.title, locale)}
              description={t(futureAiSection.description, locale)}
              invert
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="grid gap-4 md:grid-cols-3">
                {futureAiSection.items.map((item, index) => (
                  <div
                    key={`future-ai-item-${index}`}
                    className="rounded-[24px] border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/88"
                  >
                    {t(item, locale)}
                  </div>
                ))}
              </div>
              <Link href={futureAiSection.href} className="btn-light">
                {locale === "zh" ? "探索 Future AI" : "Explore Future AI"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
