"use client";

import Link from "next/link";

import { t } from "@/data/i18n";
import { contactCta } from "@/data/home";
import { useLocale } from "./LocaleProvider";

export function ContactCTA() {
  const { locale } = useLocale();

  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_55%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">
            Contact LDZ
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                {t(contactCta.title, locale)}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base">
                {t(contactCta.description, locale)}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href={contactCta.primary.href}
                className="btn-light"
              >
                {t(contactCta.primary.label, locale)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
