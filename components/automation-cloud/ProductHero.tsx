"use client";

import Image from "next/image";
import Link from "next/link";

import { automationCloudPageData } from "@/data/product-pages/automationCloud";

export function ProductHero() {
  const { hero } = automationCloudPageData;

  return (
    <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,247,255,0.96)_100%)] py-16 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_480px] lg:items-center">
        <div>
          <Link
            href="/products"
            className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            返回產品與服務
          </Link>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{hero.subtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {hero.buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={button.variant === "primary" ? "btn-primary" : "btn-light"}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 shadow-[var(--shadow-card)]">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(8,27,67,0.72)_0%,rgba(12,77,162,0.4)_50%,rgba(29,139,219,0.18)_100%)]" />
          <Image src={hero.image.src} alt={hero.image.title} width={1600} height={900} className="h-auto w-full" />
          <div className="absolute left-6 top-6 z-20 flex flex-wrap gap-2">
            {hero.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute inset-x-6 bottom-6 z-20 hidden gap-3 md:grid md:grid-cols-3">
            {hero.metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] px-4 py-4 text-white backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/72">{item.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-white/92">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
