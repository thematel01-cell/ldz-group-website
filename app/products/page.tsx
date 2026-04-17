"use client";

import { PageHero } from "@/components/PageHero";
import { SolutionCard } from "@/components/SolutionCard";
import { productCategories } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow={{ zh: "產品與服務", en: "Products & Services" }}
        title={{ zh: "產品與服務", en: "Products & Services" }}
        description={{
          zh: "將各項產品與服務整理成可點擊的模組卡片，點入後即可查看對應的一頁式介紹內容。",
          en: "Browse each product and service as a clickable module card, then open its dedicated one-page overview."
        }}
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {productCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <SolutionCard
                title={category.title}
                description={category.description}
                image={category.image}
                bullets={category.items}
                href={category.href}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
