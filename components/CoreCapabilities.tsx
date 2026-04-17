"use client";

import { coreCapabilities } from "@/data/home";

import { useLocale } from "./LocaleProvider";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

export function CoreCapabilities() {
  const { locale } = useLocale();

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle
          eyebrow={locale === "zh" ? "核心優勢" : "Core Capabilities"}
          title={locale === "zh" ? "一站式 OEM / ODM 開發整合" : "One-Stop OEM / ODM Integration"}
          description={
            locale === "zh"
              ? "聚焦在案場環境與智慧化需求，整合設備、系統、資料與營運流程，提供可長期維運與持續擴充的解決方案。"
              : "Built for smart energy and site operations, integrating equipment, systems, data, and workflows into maintainable, scalable solutions."
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coreCapabilities.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
