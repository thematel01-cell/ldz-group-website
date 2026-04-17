"use client";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function ExperienceGrid() {
  const { experience } = automationCloudPageData;

  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">既有經驗</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {experience.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experience.items.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]/72">{item.tag}</p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
