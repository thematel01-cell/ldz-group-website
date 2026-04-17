"use client";

import Image from "next/image";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function FutureOpportunitySection() {
  const { futureOpportunity } = automationCloudPageData;

  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0b1d45_0%,#103c83_55%,#1568c4_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.92fr] xl:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">未來商機</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                {futureOpportunity.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/82">{futureOpportunity.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {futureOpportunity.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.07))] px-5 py-4 text-sm font-medium leading-6 text-white/92"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[26px] border border-white/12 bg-white/8">
              <Image
                src={futureOpportunity.image.src}
                alt={futureOpportunity.image.title}
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
