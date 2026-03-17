"use client";

import Image from "next/image";

import type { LocalizedText } from "@/data/i18n";
import { t } from "@/data/i18n";
import { useLocale } from "./LocaleProvider";

type SolutionCardProps = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  bullets?: LocalizedText[];
};

export function SolutionCard({
  title,
  description,
  image,
  bullets
}: SolutionCardProps) {
  const { locale } = useLocale();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow-card)]">
      <div className="relative aspect-[16/9]">
        <Image src={image} alt={t(title, locale)} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,25,50,0.5)] to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{t(title, locale)}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t(description, locale)}</p>
        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-[var(--foreground)]">
            {bullets.map((bullet) => (
              <li key={t(bullet, locale)} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{t(bullet, locale)}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
