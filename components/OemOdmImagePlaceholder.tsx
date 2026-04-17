"use client";

import Image from "next/image";

type OemOdmImagePlaceholderProps = {
  title: string;
  path: string;
  src: string;
  className?: string;
};

export function OemOdmImagePlaceholder({
  title,
  path,
  src,
  className = "aspect-[16/9]"
}: OemOdmImagePlaceholderProps) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6 ${className}`}
    >
      <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
        <Image src={src} alt={title} width={1600} height={900} className="h-auto w-full" />
      </div>
      <div className="mt-4 rounded-[18px] bg-[var(--primary-soft)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{path}</p>
      </div>
    </div>
  );
}
