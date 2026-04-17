"use client";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function ValueCards() {
  const { valueProps } = automationCloudPageData;

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">價值主張</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {valueProps.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueProps.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                {card.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
