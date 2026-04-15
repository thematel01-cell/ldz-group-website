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
          title={locale === "zh" ? "核心服務" : "Four Core Capabilities"}
          description={
            locale === "zh"
              ? "將原型中的核心卡片升級為正式官網版資訊模組，統一圖片比例、卡片節奏與內容結構。"
              : "The prototype's key cards are upgraded into a formal corporate website module with consistent image ratio, rhythm, and structure."
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
