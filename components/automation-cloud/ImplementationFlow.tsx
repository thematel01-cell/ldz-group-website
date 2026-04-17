"use client";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function ImplementationFlow() {
  const { implementationFlow } = automationCloudPageData;

  return (
    <section id="process" className="section-space pt-0">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">導入流程</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {implementationFlow.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {implementationFlow.steps.map((step, index) => (
            <article key={step.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
