"use client";

import Image from "next/image";
import Link from "next/link";

import type { ProductCategory } from "@/data/products";
import { securityVisionPageData } from "@/data/product-pages/securityVision";

type SecurityVisionProductPageProps = {
  product: ProductCategory;
};

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}

export function SecurityVisionProductPage({ product }: SecurityVisionProductPageProps) {
  const { hero, valueHighlights, equipmentGraphic, features, aiVision, workflow, applications, summary, cta } =
    securityVisionPageData;

  return (
    <>
      <section
        id="hero"
        className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,247,255,0.96)_100%)] py-16 md:py-24"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
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
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {hero.subtitle}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="btn-light">
                {hero.chips[0]}
              </a>
              <a href="#applications" className="btn-light">
                {hero.chips[1]}
              </a>
            </div>
            <p className="mt-6 inline-flex rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
              {hero.note}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-4 shadow-[var(--shadow-card)] md:p-6">
            <Image src={product.image} alt={hero.title} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle eyebrow="產品定位" title={valueHighlights.title} description={valueHighlights.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valueHighlights.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={equipmentGraphic.eyebrow}
            title={equipmentGraphic.title}
            description={equipmentGraphic.description}
          />
          <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src={equipmentGraphic.image}
                alt={equipmentGraphic.title}
                width={1600}
                height={920}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow="功能模組" title={features.title} description={features.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)] md:p-10">
            <SectionTitle eyebrow="AI 視覺" title={aiVision.title} description={aiVision.description} />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {aiVision.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] p-6"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow="智慧流程" title={workflow.title} description={workflow.description} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workflow.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
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

      <section id="applications" className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow="應用場景" title={applications.title} description={applications.description} />
          <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src={applications.showcaseImage}
                alt={applications.showcaseAlt}
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">產品特色</p>
            <h2 className="mt-4 text-3xl font-semibold">{summary.title}</h2>
            <ul className="mt-6 space-y-4">
              {summary.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">總結說明</p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{summary.description}</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section-space pt-0">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_55%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">CONTACT LDZ</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">{cta.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base">{cta.description}</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href={cta.primary.href} className="btn-light">
                  {cta.primary.label}
                </Link>
                <Link href={cta.secondary.href} className="btn-light">
                  {cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
