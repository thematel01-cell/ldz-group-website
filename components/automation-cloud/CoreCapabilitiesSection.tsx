"use client";

import Image from "next/image";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function CoreCapabilitiesSection() {
  const { coreCapabilities } = automationCloudPageData;

  return (
    <section id="capabilities" className="section-space pt-0">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">核心能力</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {coreCapabilities.title}
          </h2>
        </div>
        <div className="mt-10 space-y-10">
          {coreCapabilities.blocks.map((block) => (
            <div
              key={block.title}
              className={`grid gap-8 rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center ${
                block.reverse ? "xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
                <Image src={block.image.src} alt={block.image.title} width={1600} height={900} className="h-auto w-full" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{block.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">{block.title}</h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{block.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {block.bullets.map((item) => (
                    <li key={item} className="rounded-[18px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
