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
          eyebrow={locale === "zh" ? "核心能力" : "Core Capabilities"}
          title={locale === "zh" ? "一站式 OEM / ODM 整合服務" : "One-Stop OEM / ODM Integration"}
          description={
            locale === "zh"
              ? "聚焦智慧能源與智慧場域需求，整合設備、系統、資料與營運流程，提供可長期維運且持續擴充的整合服務。"
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
