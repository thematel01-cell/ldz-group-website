"use client";

import Image from "next/image";
import Link from "next/link";

import type { LocalizedText } from "@/data/i18n";
import { t } from "@/data/i18n";
import { useLocale } from "./LocaleProvider";

type ProductCardProps = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  tag: string;
  href: string;
};

export function ProductCard({
  title,
  description,
  image,
  tag,
  href
}: ProductCardProps) {
  const { locale } = useLocale();

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(10,43,98,0.14)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={t(title, locale)}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,25,50,0.72)] via-[rgba(9,25,50,0.24)] to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{t(title, locale)}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
          {t(description, locale)}
        </p>
        <span className="mt-6 text-sm font-semibold text-[var(--primary)]">
          {locale === "zh" ? "查看內容" : "View Details"}
        </span>
      </div>
    </Link>
  );
}
