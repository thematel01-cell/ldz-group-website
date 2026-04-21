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
            {hero.buttons.slice(0, 1).map((button) => (
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
          <Image src={hero.image.src} alt={hero.image.title} width={1600} height={900} className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
