"use client";

import Image from "next/image";
import Link from "next/link";

import { oemOdmPageData } from "@/data/product-pages/oemOdm";
import { OemOdmImagePlaceholder } from "./OemOdmImagePlaceholder";

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

export function OemOdmProductPage() {
  const {
    hero,
    valueProps,
    framework,
    strengths,
    productTypes,
    process,
    capabilities,
    useCases,
    reasons,
    cta
  } = oemOdmPageData;

  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,247,255,0.96)_100%)] py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              返回產品與服務
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {hero.slogan}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
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
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <OemOdmImagePlaceholder
            title={hero.image.title}
            path={hero.image.path}
            src={hero.image.src}
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle eyebrow="價值主張" title={valueProps.title} description={valueProps.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.cards.map((card) => (
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
          <SectionTitle eyebrow={framework.eyebrow} title={framework.title} description={framework.description} />
          <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src={framework.image.src}
                alt={framework.image.title}
                width={1600}
                height={1040}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow="開發強項" title={strengths.title} description={strengths.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {strengths.items.map((item, index) => (
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
          <SectionTitle eyebrow="產品範圍" title={productTypes.title} description={productTypes.description} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {productTypes.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.88fr] xl:items-start">
            <div>
              <SectionTitle eyebrow="開發流程" title={process.title} description={process.description} />
              <p className="mt-6 inline-flex rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
                {process.tagline}
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {process.items.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                      {index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
                  </article>
                ))}
              </div>
            </div>
            <OemOdmImagePlaceholder title={process.image.title} path={process.image.path} src={process.image.src} />
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <OemOdmImagePlaceholder
              title={capabilities.image.title}
              path={capabilities.image.path}
              src={capabilities.image.src}
            />
            <div>
              <SectionTitle eyebrow="能力模組" title={capabilities.title} description={capabilities.description} />
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {capabilities.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
                  >
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle eyebrow="適用場景" title={useCases.title} description={useCases.description} />
          <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1fr]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {useCases.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.content}</p>
                </article>
              ))}
            </div>
            <OemOdmImagePlaceholder title={useCases.image.title} path={useCases.image.path} src={useCases.image.src} />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">合作理由</p>
            <h2 className="mt-4 text-3xl font-semibold">{reasons.title}</h2>
            <ul className="mt-6 space-y-4">
              {reasons.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">總結說明</p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{reasons.description}</p>
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
