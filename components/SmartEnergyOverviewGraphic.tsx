"use client";

import type { Locale } from "@/data/i18n";

type SmartEnergyOverviewGraphicProps = {
  locale: Locale;
};

const copy = {
  zh: {
    title: "三分法整合架構",
    efficiency: "節能",
    efficiencySub: "少買台電的電",
    green: "綠電",
    greenSub: "對應綠電憑證",
    storage: "儲能",
    storageSub: "削峰、備援、調度",
    core: "LDZ",
    coreSub: "Energy OS"
  },
  en: {
    title: "Three-Lane Framework",
    efficiency: "Efficiency",
    efficiencySub: "Use less grid power",
    green: "Green Power",
    greenSub: "Aligned with certificates",
    storage: "Storage",
    storageSub: "Peak shave, backup, dispatch",
    core: "LDZ",
    coreSub: "Energy OS"
  }
};

export function SmartEnergyOverviewGraphic({
  locale
}: SmartEnergyOverviewGraphicProps) {
  const text = copy[locale];

  return (
    <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#173f88_0%,#1f4f9f_58%,#2663bb_100%)] p-5 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-semibold tracking-tight">
          {text.title}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#7fd9f7]" />
          <span className="h-3 w-3 rounded-full bg-[#8be5a5]" />
          <span className="h-3 w-3 rounded-full bg-[#ffd84f]" />
        </div>
      </div>

      <div className="mt-5 rounded-[28px] bg-white/8 p-4 md:p-5">
        <div className="rounded-[24px] border border-white/10 bg-white/6 px-4 py-6 md:px-5 md:py-7">
          <div className="grid min-h-[320px] grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_auto] items-center gap-x-4 gap-y-4 md:min-h-[360px] md:gap-x-6">
            <div className="flex justify-center md:justify-end">
              <div className="w-[108px] rounded-[22px] bg-[linear-gradient(180deg,#76c9f7_0%,#5b9ee7_100%)] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] md:w-[128px] md:px-5">
                <div className="text-[1.55rem] font-semibold tracking-tight">{text.efficiency}</div>
                <div className="mt-2 text-xs leading-5 text-white/84 md:text-sm">
                  {text.efficiencySub}
                </div>
              </div>
            </div>

            <div className="relative row-span-2 flex h-full min-h-[250px] items-center justify-center">
              <div className="absolute inset-x-[12%] top-[38%] hidden border-t border-dashed border-white/35 md:block" />
              <div className="absolute left-1/2 top-[38%] hidden h-[36%] -translate-x-1/2 border-l border-dashed border-white/35 md:block" />

              <div className="relative z-10 flex h-[124px] w-[124px] items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_100%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] md:h-[138px] md:w-[138px]">
                <div>
                  <div className="text-[2.1rem] font-semibold tracking-tight">{text.core}</div>
                  <div className="text-sm text-white/82">{text.coreSub}</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 w-[156px] -translate-x-1/2 rounded-[22px] bg-[linear-gradient(180deg,#c8bbff_0%,#978fec_100%)] px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] md:w-[176px] md:px-5 md:py-5">
                <div className="text-[1.7rem] font-semibold tracking-tight">{text.storage}</div>
                <div className="mt-1 text-xs leading-5 text-white/86 md:text-sm">
                  {text.storageSub}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className="w-[108px] rounded-[22px] bg-[linear-gradient(180deg,#78dd9d_0%,#54bb80_100%)] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] md:w-[128px] md:px-5">
                <div className="text-[1.55rem] font-semibold tracking-tight">{text.green}</div>
                <div className="mt-2 text-xs leading-5 text-white/84 md:text-sm">
                  {text.greenSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
