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
          zh: "以分類式頁面整理立達興各項產品與服務模組，方便後續持續擴充內容。",
          en: "Organized by category so LDZ product and service modules can be expanded easily over time."
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
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
