"use client";

import Image from "next/image";
import Link from "next/link";

import { ContactCTA } from "./ContactCTA";

const smartEnergyChips = [
  "AI 節能控制",
  "用電監測與告警",
  "儲能整合與 EMS",
  "綠電與能源治理",
  "能源服務業 / 能源顧問服務"
];

const threeTracks = [
  {
    title: "節能管理與用電優化",
    examples: ["空調節能", "設備節能", "需量管理", "AI 優化控制"],
    effects: ["降低耗能", "降低電費", "提升效率"],
    note: "從資料盤點、用能分析到控制策略優化，協助企業建立可持續執行的節能管理機制。"
  },
  {
    title: "綠電整合與能源治理",
    examples: ["太陽能系統整合", "綠電使用規劃", "憑證與揭露配套"],
    effects: ["提升綠電使用透明度", "支援 ESG 與對外揭露", "建立能源治理制度"],
    note: "不只導入設備，也從能源顧問角度協助企業評估綠電配置、揭露需求與治理架構。"
  },
  {
    title: "儲能系統與 EMS 調度",
    examples: ["削峰填谷", "備援策略", "群組限流", "負載平衡", "儲能與綠電協同"],
    effects: ["提升供電韌性", "降低契約風險", "改善整體用電效率"],
    note: "透過 EMS 與儲能調度能力，協助企業在安全、成本與能源效率之間取得平衡。"
  }
];

const businessGroups = [
  {
    title: "A. 節能服務型專案",
    selling: ["用電盤點", "節能診斷", "改善規劃", "效益追蹤"],
    value: ["節能績效", "節費成果", "ESG 報表", "管理制度建立"]
  },
  {
    title: "B. 綠電與顧問型專案",
    selling: ["綠電導入評估", "綠電治理規劃", "顧問陪跑", "揭露與制度建議"],
    value: ["RE100 支援", "供應鏈要求", "品牌 ESG", "對外揭露能力"]
  },
  {
    title: "C. 儲能與調度型專案",
    selling: ["儲能評估", "EMS 設計", "設備整合", "策略調度與優化"],
    value: ["供電韌性", "降低風險", "提升效率", "能源調度能力"]
  }
];

const comparisonRows = [
  ["服務面向", "常見需求", "立達興可提供內容", "是否可整合"],
  ["節能管理", "希望降低耗能與用電成本", "用能診斷、節能改善、監測與持續優化", "是"],
  ["儲能與 EMS", "希望降低尖峰風險與提升供電韌性", "儲能規劃、EMS 策略、設備整合與調度", "是"],
  ["綠電與治理", "希望建立可揭露、可證明的能源治理架構", "綠電整合規劃、使用管理、揭露顧問", "是"]
];

const misconceptions = [
  {
    title: "常見誤解 1",
    question: "智慧能源是不是只等於電表監看？",
    answer: "不是。監看只是基礎，真正的智慧能源還包括節能策略、儲能調度、綠電治理、告警管理與持續優化。"
  },
  {
    title: "常見誤解 2",
    question: "有了儲能，就不需要能源顧問服務嗎？",
    answer:
      "不一定。儲能設備本身只是工具，仍需要搭配能源顧問服務，從場域條件、負載特性、投資效益與調度策略去規劃，才能真正發揮價值。"
  },
  {
    title: "常見誤解 3",
    question: "綠電導入只要買電或裝太陽能就完成了嗎？",
    answer:
      "並非如此。企業往往還需要面對用能盤點、憑證管理、揭露需求與內部管理制度等問題，因此能源顧問角色同樣重要。"
  }
];

const scenarios = [
  "工廠、園區與高用電場域的能源管理專案",
  "商辦、連鎖據點與多站點營運的用能優化需求",
  "結合太陽能、儲能、綠電與 ESG 揭露需求的企業"
];

const deliverables = [
  "能源儀表板、告警、報表與電表整合",
  "儲能 EMS 與削峰調度策略",
  "綠電規劃、能源治理制度與顧問建議"
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
              把節能、儲能、綠電與能源治理分清楚，才能讓企業在提案、導入、營運與 ESG 溝通上不混淆。立達興除了提供系統與設備整合，也能以能源服務業與能源顧問服務角色，協助企業建立完整的能源管理路徑。
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">服務定位</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">從系統整合延伸到能源服務與顧問陪跑</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              立達興智慧能源系統不僅著重於用電監測，更協助企業從整體能源治理角度，系統化梳理節能管理、儲能管理與綠電整合三大面向。除了系統與設備供應，我們也可提供能源顧問服務，包含用能盤點、節能改善建議、儲能與綠電配置評估、投資效益分析，以及專案導入前後的管理機制設計，作為企業推動能源轉型與 ESG 管理的重要基礎。
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">核心價值</p>
            <ul className="mt-5 space-y-4">
              {[
                "把節能、儲能、綠電與能源服務角色清楚分工",
                "支援 EMS、監測、告警、策略調度與營運管理",
                "能源服務業與能源顧問服務可協助企業從盤點、診斷、規劃到落地執行"
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
          <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src="/images/products/ECCO.png"
                alt="LDZ 節能、儲能、創能與淨零路徑示意"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)] md:p-10">
            <SectionTitle eyebrow="三大主軸" title="用節能、綠電、儲能建立完整能源管理架構" />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {threeTracks.map((track) => (
                <article
                  key={track.title}
                  className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] p-6"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{track.title}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">應用內容</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                    {track.examples.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">可創造效益</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">智慧建築能源舒適管理系統</p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
                  以智慧建築能源舒適管理系統
                  <br />
                  串接設備、環控與能源管理資料
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                智慧建築能源舒適管理系統可整合空調、照明、感測器、電表與建築設備資料，協助管理者同步掌握能源使用、環境舒適度與系統運行狀態，作為節能控制、維運管理與智慧建築優化的核心平台。
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src="/images/products/%E6%99%BA%E6%85%A7%E5%BB%BA%E7%AF%89%E8%83%BD%E6%BA%90%E8%88%92%E9%81%A9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1.png"
                alt="智慧建築能源舒適管理系統"
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
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">可提供內容</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground)]">
                  {group.selling.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">可創造價值</p>
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
                  服務比較
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
                  用同一個頁面說清楚設備、系統與顧問角色
                </h2>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--line)]">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white text-left">
                  <thead className="bg-[linear-gradient(180deg,#eef4fd_0%,#e6eefb_100%)]">
                    <tr>
                      {comparisonRows[0].map((header) => (
                        <th key={header} className="border-b border-[var(--line)] px-5 py-4 text-sm font-semibold text-[var(--foreground)]">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.slice(1).map((row) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">常見觀念釐清</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">頁面主張</p>
            <p className="mt-5 text-2xl font-semibold leading-10">
              智慧能源不只是設備買賣，而是從資料、策略、顧問、系統與營運機制一路串起來的長期治理工程。
            </p>
            <div className="mt-8 rounded-[24px] border border-white/14 bg-white/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">適合溝通的關鍵字</p>
              <h3 className="mt-3 text-xl font-semibold">LDZ 智慧能源 / 能源服務 / 能源顧問</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/88">
                {["節能管理", "儲能調度", "綠電治理 / 顧問服務"].map((item) => (
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
        <div className="container-shell">
          <article className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-white shadow-[var(--shadow-card)]">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/10]">
              <Image
                src="/images/products/iso5001.png"
                alt="LDZ 能源管理系統 ISO 50001 能源輔導實績"
                fill
                className="object-contain bg-[linear-gradient(180deg,#f9fbff_0%,#eef4fd_100%)]"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">可交付內容</p>
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
