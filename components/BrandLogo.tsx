type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#0d4da2_0%,#0a3f8e_100%)] shadow-[0_14px_32px_rgba(10,43,98,0.18)] ${
        compact ? "h-12 w-[96px]" : "h-16 w-[128px]"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-[28%] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
      <div className="flex h-full items-center justify-center">
        <span
          className={`font-black uppercase tracking-[-0.12em] text-white ${
            compact ? "text-[2rem]" : "text-[2.7rem]"
          }`}
          style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
        >
          LDZ
        </span>
      </div>
    </div>
  );
}
