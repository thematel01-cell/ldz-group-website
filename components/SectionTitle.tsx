type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false
}: SectionTitleProps) {
  const centered = align === "center";
  const titleClass = invert ? "text-white" : "text-[var(--foreground)]";
  const bodyClass = invert ? "text-white/80" : "text-[var(--muted)]";
  const eyebrowClass = invert
    ? "border-white/15 bg-white/10 text-white/88"
    : "border-[var(--line)] bg-[var(--primary-soft)] text-[var(--primary)]";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span
          className={`mb-4 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold tracking-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${bodyClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
