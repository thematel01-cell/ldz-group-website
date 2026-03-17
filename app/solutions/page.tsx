"use client";

import { PageHero } from "@/components/PageHero";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow={{ zh: "解決方案", en: "Solutions" }}
        title={{ zh: "解決方案", en: "Solutions" }}
        description={{
          zh: "針對不同場域需求規劃完整整合方案，從設備、平台到維運流程皆可延伸。",
          en: "Complete integration solutions for different site scenarios, spanning equipment, platforms, and operations workflows."
        }}
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.id} id={solution.id}>
              <SolutionCard
                title={solution.title}
                description={solution.description}
                image={solution.image}
                bullets={solution.bullets}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
