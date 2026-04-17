"use client";

import Image from "next/image";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function PlatformValueSection() {
  const { platformValue } = automationCloudPageData;

  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_55%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">平台價值</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">{platformValue.title}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/82">{platformValue.description}</p>
          </div>
          <div className="mt-10 grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <div className="overflow-hidden rounded-[26px] border border-white/12 bg-white/8">
              <Image
                src={platformValue.architecture.src}
                alt={platformValue.architecture.title}
                width={1600}
                height={980}
                className="h-auto w-full"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {platformValue.points.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.07))] px-5 py-4 text-sm font-medium leading-6 text-white/92"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
