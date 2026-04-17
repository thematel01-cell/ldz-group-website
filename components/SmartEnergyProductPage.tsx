"use client";

import Image from "next/image";
import Link from "next/link";

import { ContactCTA } from "./ContactCTA";

const smartEnergyChips = [
  "AI 節能控制",
  "用電監控與告警",
  "儲能整合與 EMS",
  "太陽能與綠電報表"
];

const threeTracks = [
  {
    title: "節能是「少用電」",
    examples: ["空調優化", "照明節能", "馬達變頻", "AI 控制設備開關"],
    effects: ["電費下降", "用電量下降", "碳排下降"],
    note: "這是減少消耗，不是產生綠電。"
  },
  {
    title: "綠電是「再生能源發出來的電」",
    examples: ["太陽能板發電", "風力發電", "小水力發電"],
    effects: ["綠電來源可追蹤", "可對應綠電憑證", "可支撐企業綠電比例管理"],
    note: "憑證的核心概念是：這一度電是再生能源產生的。"
  },
  {
    title: "儲能是「搬運與調度電」",
    examples: ["白天存電", "晚上放電", "尖峰支援", "避免超約", "提高綠電自用率"],
    effects: ["電費優化", "韌性供電", "需量風險降低"],
    note: "儲能很重要，但它本身不是綠電來源，因此儲能不等於綠電憑證。"
  }
];

const businessGroups = [
  {
    title: "A. 節能案在賣什麼？",
    selling: ["省電", "降低電費", "降低碳排", "提高能源效率"],
    value: ["節能績效", "節費分潤", "ESG 報表", "減碳成果"]
  },
  {
    title: "B. 綠電案在賣什麼？",
    selling: ["再生能源使用量", "綠電來源證明", "綠電憑證", "企業綠電比例"],
    value: ["RE100", "供應鏈要求", "品牌 ESG", "對外揭露"]
  },
  {
    title: "C. 儲能案在賣什麼？",
    selling: ["削峰填谷", "備援", "穩定供電", "提高太陽能自用率", "降低需量風險"],
    value: ["電費優化", "降低罰款", "韌性供電", "能源調度能力"]
  }
];

const comparisonRows = [
  ["能源效率管理", "降低浪費、減少購電、提升設備效率", "節費、節能績效、減碳報告", "否"],
  ["儲能調度管理", "存電、移峰、備援、提升能源韌性", "削峰填谷、備援、提高綠電自用率", "否"],
  ["綠電與憑證管理", "取得可證明的再生能源電力價值", "綠電使用證明、T-REC、ESG 揭露", "是"]
];

const misconceptions = [
  {
    title: "錯誤觀念 1",
    question: "我省下來的電，可不可以當成綠電？",
    answer: "不行。省下來的是少用，不是再生能源發出來。"
  },
  {
    title: "錯誤觀念 2",
    question: "我有儲能，是不是就有綠電憑證？",
    answer:
      "不一定，而且通常不是。除非儲能搭配再生能源發電且制度上有認列，但儲能本身不直接生憑證。"
  },
  {
    title: "錯誤觀念 3",
    question: "節能價值是不是就完全沒辦法交易？",
    answer: "不是。它不能直接變成綠電憑證，但可以形成節費價值、碳減量價值與減量專案價值。"
  }
];

const scenarios = [
  "工廠與園區的能源管理專案",
  "商辦、多據點與高用電場域優化",
  "結合太陽能、儲能與 ESG 揭露需求的企業"
];

const deliverables = [
  "能源儀表板、告警、報表與電表整合",
  "儲能 EMS 與削峰填谷調度策略",
  "綠電來源追蹤與使用報表架構"
];

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

export function SmartEnergyProductPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,247,255,0.96)_100%)] py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              返回產品與服務
            </Link>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              智慧能源系統
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              把節能、儲能、綠電三條產品線分清楚，才能讓企業在提案、導入與 ESG 溝通上不混淆。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {smartEnergyChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-4 shadow-[var(--shadow-card)] md:p-6">
            <Image src="/images/products/smart-energy.svg" alt="智慧能源系統" fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">方案說明</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">這個方案能為場域帶來什麼</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              立達興智慧能源系統不僅著重於用電監測，更協助企業從整體能源治理角度，系統化梳理節能管理、儲能管理與綠電整合三大面向。透過明確區分各模組之技術定位、應用情境與商業價值，可有效提升提案溝通效率，並作為企業推動能源轉型與 ESG 管理的重要基礎。
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">核心亮點</p>
            <ul className="mt-5 space-y-4">
              {[
                "把節能、綠電、儲能從同一頁面明確區分",
                "支援 EMS、電表、告警、策略控制與報表管理",
                "適合用於提案、顧問銷售與企業能源治理溝通"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)] md:p-10">
            <SectionTitle
              eyebrow="能源三分法"
              title="節能、綠電、儲能都重要，但不是同一件事"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {threeTracks.map((track) => (
                <article
                  key={track.title}
                  className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] p-6"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{track.title}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">例如</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                    {track.examples.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">效果</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                    {track.effects.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-[20px] bg-[var(--primary-soft)] px-4 py-4 text-sm leading-7 text-[var(--foreground)]">
                    {track.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  LDZ AI EMS 架構圖
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
                  整合太陽能、儲能、節能與智慧分析的能源管理平台
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                以 LDZ AI EMS 為核心，串接 PCS、BMS、感測資料、AI 分析與大數據模組，形成可持續擴充的能源治理架構。
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src="/images/products/ldz-ai-ems-diagram.svg"
                alt="LDZ AI EMS 智慧能源整合架構圖"
                width={1400}
                height={920}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {businessGroups.map((group) => (
              <article key={group.title} className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{group.title}</h3>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">你賣的是</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                  {group.selling.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">對應的商業價值</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                  {group.value.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)] md:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="inline-flex rounded-full bg-[var(--primary-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--primary)]">
                  差異說明
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
                  三者都重要，但不能混為一談
                </h2>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--line)]">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white text-left">
                  <thead className="bg-[linear-gradient(180deg,#eef4fd_0%,#e6eefb_100%)]">
                    <tr>
                      {["項目", "核心目的", "可創造價值", "可直接對應綠電憑證"].map((header) => (
                        <th key={header} className="border-b border-[var(--line)] px-5 py-4 text-sm font-semibold text-[var(--foreground)]">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]} className="align-top">
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`border-b border-[var(--line)] px-5 py-5 text-sm leading-7 text-[var(--foreground)] ${
                              index === 0 ? "font-semibold" : ""
                            } ${index === row.length - 1 ? "font-semibold text-[var(--primary)]" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">客戶常見誤解</p>
            <div className="mt-5 space-y-5">
              {misconceptions.map((item) => (
                <div key={item.title} className="rounded-[24px] bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5">
                  <p className="text-sm font-semibold text-[var(--primary)]">{item.title}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{item.question}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_58%,#1d8bdb_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">給客戶的一段話</p>
            <p className="mt-5 text-2xl font-semibold leading-10">
              節能著重於降低用電成本與提升能源效率，儲能著重於優化用電調度與提升供電韌性，綠電則是可對應憑證的再生能源電力。
            </p>
            <div className="mt-8 rounded-[24px] border border-white/14 bg-white/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">建議下一步</p>
              <h3 className="mt-3 text-xl font-semibold">LDZ 能源產品三分法架構</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/88">
                {["節能", "儲能", "綠電 / 憑證"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">適用場域</p>
            <ul className="mt-5 space-y-4">
              {scenarios.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">交付內容</p>
            <ul className="mt-5 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
