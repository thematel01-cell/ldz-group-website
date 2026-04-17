"use client";

import Image from "next/image";
import Link from "next/link";

import type { ProductCategory } from "@/data/products";
import { t } from "@/data/i18n";

export function ProductDetailShared({ product }: { product: ProductCategory }) {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,247,255,0.96)_100%)] py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              返回產品與服務
            </Link>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              {t(product.title, "zh")}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {t(product.detail.summary, "zh")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.items.map((item) => (
                <span
                  key={t(item, "zh")}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {t(item, "zh")}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-4 shadow-[var(--shadow-card)] md:p-6">
            <Image src={product.image} alt={t(product.title, "zh")} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">方案說明</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">這個方案能為場域帶來什麼</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{t(product.detail.intro, "zh")}</p>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">核心亮點</p>
            <ul className="mt-5 space-y-4">
              {product.detail.highlights.map((item) => (
                <li key={t(item, "zh")} className="flex items-start gap-3 text-sm leading-7 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{t(item, "zh")}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">適用場域</p>
            <ul className="mt-5 space-y-4">
              {product.detail.scenarios.map((item) => (
                <li key={t(item, "zh")} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{t(item, "zh")}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">交付內容</p>
            <ul className="mt-5 space-y-4">
              {product.detail.deliverables.map((item) => (
                <li key={t(item, "zh")} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{t(item, "zh")}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
