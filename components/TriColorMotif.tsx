type TriColorMotifProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-20",
  md: "h-10 w-24",
  lg: "h-14 w-32"
};

export function TriColorMotif({
  size = "md",
  className = ""
}: TriColorMotifProps) {
  return (
    <div className={`relative ${sizeMap[size]} ${className}`} aria-hidden="true">
      <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-b-[18px] border-l-[34px] border-t-[18px] border-b-transparent border-l-[var(--brand-yellow)] border-t-transparent opacity-95" />
      <div className="absolute right-6 top-1/2 h-0 w-0 -translate-y-1/2 border-b-[16px] border-l-[28px] border-t-[16px] border-b-transparent border-l-[var(--brand-cyan)] border-t-transparent opacity-95" />
      <div className="absolute right-14 top-1/2 h-0 w-0 -translate-y-1/2 border-b-[14px] border-l-[24px] border-t-[14px] border-b-transparent border-l-[var(--brand-mint)] border-t-transparent opacity-95" />
    </div>
  );
}
