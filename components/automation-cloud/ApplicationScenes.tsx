"use client";

import Image from "next/image";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function ApplicationScenes() {
  const { applicationScenes } = automationCloudPageData;

  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">應用場景</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {applicationScenes.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applicationScenes.items.map((item, index) => (
            <article key={item.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
                <Image
                  src={item.image.src}
                  alt={item.image.title}
                  width={1600}
                  height={960}
                  className="h-auto w-full"
                  priority={index < 2}
                />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
