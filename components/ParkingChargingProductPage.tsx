"use client";

import Image from "next/image";
import Link from "next/link";

const heroChips = [
  "車牌辨識與門禁控制",
  "停車收費與車位管理",
  "EV 充電設備導入",
  "雲端營運與報表後台"
];

const overviewCards = [
  {
    title: "停車管理整合",
    description:
      "整合車位資訊、車流進出、收費規則與月租 / 訪客身分，讓停車管理邏輯集中且一致。",
    icon: "P"
  },
  {
    title: "充電設備管理",
    description:
      "從設備狀態、遠端啟停到充電紀錄管理，建立可營運、可追蹤的充電服務基礎。",
    icon: "C"
  },
  {
    title: "雲端營運後台",
    description:
      "集中查看交易、預約、會員、設備告警與多站點營運資料，提升管理效率。",
    icon: "O"
  },
  {
    title: "能源調度控制",
    description:
      "結合 EMS 進行契約容量保護、群組限流與時間電價調度，兼顧安全與效率。",
    icon: "E"
  }
];

const painPoints = [
  "停車管理與充電系統彼此分離",
  "車位、授權、計費流程繁瑣",
  "多車同時充電易造成過載跳電",
  "設備品牌不同，整合困難",
  "後台管理分散，缺乏即時狀態與報表"
];

const solutions = [
  "停車、充電、會員、金流整合為單一平台",
  "建立標準化授權、計費與管理流程",
  "透過 EMS 進行群組限流與負載調度",
  "支援多設備串接與 API 擴充",
  "建立雲端營運後台與告警報表中心"
];

const architectureLayers = [
  {
    title: "使用入口層",
    subtitle: "車主 / 住戶 / 訪客",
    items: ["LINE", "Web", "QR Code", "RFID", "NFC"]
  },
  {
    title: "會員與授權管理",
    subtitle: "身份、權限與支付綁定",
    items: ["帳號管理", "車輛綁定", "權限設定", "支付方式綁定"]
  },
  {
    title: "場域控制層",
    subtitle: "停車與充電設備控制",
    items: [
      "車牌辨識柱",
      "門禁 / 柵欄控制",
      "車位偵測 / 停車管理",
      "充電樁控制",
      "智慧電表 / 電力資料採集"
    ]
  },
  {
    title: "雲端營運平台",
    subtitle: "營運、交易與 API 中樞",
    items: ["充電樁管理", "停車場管理", "預約與排程", "費率與帳務", "交易紀錄", "推播通知", "API 串接"]
  },
  {
    title: "能源管理 EMS",
    subtitle: "用電安全與調度優化",
    items: ["群組限流", "負載平衡", "契約容量保護", "時間電價調度", "儲能 / 太陽能整合"]
  },
  {
    title: "管理後台 / 報表中心",
    subtitle: "營運看板與維運機制",
    items: ["即時狀態看板", "異常告警", "收費報表", "使用統計", "設備維運"]
  }
];

const featureCards = [
  {
    title: "車牌辨識與門禁控制",
    description:
      "支援智慧車辨柱導入，可用於車輛進出辨識、白名單授權、場域控管與停車流程整合。"
  },
  {
    title: "停車收費與車位管理",
    description:
      "整合停車狀態、車位資訊、住戶 / 月租 / 訪客等不同身分管理，提升停車場營運效率。"
  },
  {
    title: "EV 充電設備管理",
    description:
      "支援充電設備狀態監控、遠端啟停、參數設定、設備分群與維運管理。"
  },
  {
    title: "會員與支付機制",
    description:
      "可整合 LINE、QR Code、RFID / NFC、會員綁定與支付方式設定，建立完整使用流程。"
  },
  {
    title: "預約與智慧排程",
    description:
      "可依場域規則進行預約充電、排程控制與充電時段安排，提升資源使用效率。"
  },
  {
    title: "費率與帳務管理",
    description:
      "支援費率設定、交易紀錄、收費統計、帳務彙整與後續對帳管理。"
  },
  {
    title: "異常告警與維運通報",
    description:
      "設備或系統異常時可推播通知，協助管理者即時掌握狀況。"
  },
  {
    title: "EMS 能源調度控制",
    description:
      "針對契約容量、群組限流、負載平衡與尖離峰時段進行智慧調控，兼顧用電安全與充電效率。"
  }
];

const equipmentCards = [
  {
    title: "智慧車牌辨識柱",
    description: "作為車輛辨識與進出控管前端設備。",
    image: "/images/products/parking-license-pillar.svg",
    features: ["車牌辨識與授權管理", "可整合門禁控制", "支援後台串接"]
  },
  {
    title: "停車場控制設備",
    description: "用於停車場出入口、車位狀態與停管流程整合。",
    image: "/images/products/parking-control-device.svg",
    features: ["場域管制", "車位資訊整合", "可擴充停車管理邏輯"]
  },
  {
    title: "AC / DC 充電設備",
    description: "對應不同場域需求導入 EV 充電基礎設備。",
    image: "/images/products/parking-ev-charger.svg",
    features: ["支援遠端控制", "可納入雲端平台管理", "適合社區 / 商辦 / 停車場"]
  },
  {
    title: "智慧電表 / 電力採集設備",
    description: "用於用電監測與能源資料回傳。",
    image: "/images/products/parking-smart-meter.svg",
    features: ["即時監測", "電力資料採集", "供 EMS 調度分析使用"]
  },
  {
    title: "雲端營運管理平台",
    description: "整合會員、交易、設備、場域與報表的核心平台。",
    image: "/images/products/parking-cloud-platform.svg",
    features: ["多站點管理", "雲端操作", "可延伸串接 API"]
  },
  {
    title: "EMS 能源管理模組",
    description: "針對整體充電負載進行保護與優化調度。",
    image: "/images/products/parking-ems-module.svg",
    features: ["群組限流", "時間電價調度", "負載平衡控制"]
  }
];

const siteCards = [
  { title: "社區住宅", description: "適合住戶授權管理、月租車位與住戶充電場景。" },
  { title: "合宜住宅", description: "滿足多住戶使用、統一收費與長期營運管理需求。" },
  { title: "商辦大樓", description: "整合訪客停車、員工授權與日常營運管理流程。" },
  { title: "飯店與商場", description: "支援臨停、會員、消費導流與充電服務體驗。" },
  { title: "公有 / 民營停車場", description: "提升停車與充電資源利用率，建立營運報表基礎。" },
  { title: "園區與複合式場域", description: "適用多入口、多身分與多設備整合的大型場域。" }
];

const benefitColumns = [
  {
    title: "對業主 / 管委會",
    items: ["降低人工管理負擔", "建立標準化收費流程", "提升設施使用率", "降低用電風險"]
  },
  {
    title: "對物業 / 營運方",
    items: ["集中管理多場域", "快速查看設備狀態", "提升維運效率", "建立營運報表機制"]
  },
  {
    title: "對使用者",
    items: ["停車與充電流程更直覺", "授權與支付更方便", "充電資訊透明", "使用體驗更完整"]
  }
];

const processSteps = [
  { title: "需求訪談", description: "釐清場域目標、使用對象、設備條件與營運需求。" },
  { title: "場域評估", description: "盤點車流、車位、電力容量與設備配置可行性。" },
  { title: "架構規劃", description: "規劃停車、充電、會員、金流與 EMS 的整合架構。" },
  { title: "設備建置", description: "完成前端設備安裝、場域佈線與控制邏輯設定。" },
  { title: "平台整合上線", description: "串接後台、報表、通知與營運管理流程後正式啟用。" },
  { title: "維運與優化", description: "持續追蹤使用狀況、告警事件與後續優化需求。" }
];

const faqs = [
  {
    question: "是否可以整合既有停車管理系統？",
    answer: "可依現場條件評估，透過 API 或設備層整合方式串接既有系統。"
  },
  {
    question: "是否只能搭配特定品牌充電樁？",
    answer: "平台可朝多設備整合方向規劃，實際支援品牌與協定依專案需求確認。"
  },
  {
    question: "若同時多台車充電，是否會跳電？",
    answer: "可搭配 EMS 能源管理機制進行群組限流、負載平衡與排程控制，降低過載風險。"
  },
  {
    question: "是否能支援收費與會員管理？",
    answer: "可，系統可規劃會員權限、費率設定、交易紀錄與帳務管理流程。"
  },
  {
    question: "是否適合社區與商辦導入？",
    answer: "非常適合，這類場域正是智慧停車與充電整合需求最明確的應用場景。"
  }
];

function SectionHeading({
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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}

export function ParkingChargingProductPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,247,255,0.98)_100%)] py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              返回產品與服務
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Smart Parking & EV Charging
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              智慧停車與充電
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              整合停車管理、車牌辨識、EV 充電設備、雲端營運平台與能源調控，打造可管理、可收費、可擴充的智慧場域。
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              LDZ 提供從前端設備到後端平台的整合方案，協助社區、商辦、停車場與複合場域，完成停車與充電的一體化建置。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--foreground)] shadow-[var(--shadow-soft)]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-light bg-[linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)]">
                預約方案諮詢
              </a>
              <a
                href="#architecture"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white px-6 text-sm font-semibold text-[var(--primary)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
              >
                了解系統架構
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,#fafdff_0%,#e9f3ff_100%)] p-5 shadow-[var(--shadow-card)] md:p-6">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_58%,#50a9f2_100%)] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
              <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
                <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
                    Access & Parking
                  </p>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-[18px] bg-white/10 p-4">
                      <p className="text-lg font-semibold">車牌辨識與門禁</p>
                      <p className="mt-2 text-sm leading-6 text-white/82">進出辨識、白名單授權、門禁控制</p>
                    </div>
                    <div className="rounded-[18px] bg-white/10 p-4">
                      <p className="text-lg font-semibold">停車與車位管理</p>
                      <p className="mt-2 text-sm leading-6 text-white/82">車位狀態、月租 / 訪客管理、費率規則</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
                    Charging & EMS
                  </p>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-[18px] bg-white/10 p-4">
                      <p className="text-lg font-semibold">充電設備與會員支付</p>
                      <p className="mt-2 text-sm leading-6 text-white/82">預約、啟停、交易、會員權限與支付機制</p>
                    </div>
                    <div className="rounded-[18px] bg-white/10 p-4">
                      <p className="text-lg font-semibold">雲端平台與能源調度</p>
                      <p className="mt-2 text-sm leading-6 text-white/82">群組限流、負載平衡、報表與告警中心</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[24px] border border-white/12 bg-white/10 p-5">
                <div className="grid gap-3 md:grid-cols-4">
                  {["LPR", "Parking", "Charging", "EMS"].map((item) => (
                    <div key={item} className="rounded-[18px] bg-white/10 px-4 py-3 text-center text-sm font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="產品概述"
            title="一套系統，整合停車、充電、金流與管理"
            description="LDZ 智慧停車與充電方案，適用於社區住宅、商辦大樓、飯店、停車場、公共場域與複合式園區。從前端的車牌辨識、充電啟停、會員授權，到後端的帳務清分、預約管理、異常通報與能源調度，皆可由同一平台集中管理。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {overviewCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(10,43,98,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-lg font-semibold text-[var(--primary)]">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="痛點與解法"
            title="傳統停車與充電管理的常見問題"
            description="以左右對照方式梳理現場常見的營運痛點，並說明 LDZ 如何透過整合平台與能源調度能力加以解決。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">常見痛點</p>
              <div className="mt-5 space-y-4">
                {painPoints.map((item, index) => (
                  <div key={item} className="rounded-[20px] bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5">
                    <p className="text-sm font-semibold text-[var(--primary)]">0{index + 1}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-8 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/72">LDZ 解決方式</p>
              <div className="mt-5 space-y-4">
                {solutions.map((item, index) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/8 p-5">
                    <p className="text-sm font-semibold text-white/72">Solution 0{index + 1}</p>
                    <p className="mt-2 text-base leading-7 text-white/92">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="architecture" className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="系統架構"
            title="整體系統架構"
            description="以正式企業解決方案的分層方式，說明使用入口、場域控制、雲端營運平台、EMS 與後台報表之間的關係。"
          />
          <div className="mt-10 rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="grid gap-4">
              {architectureLayers.map((layer, index) => (
                <div key={layer.title} className="grid gap-4">
                  <article className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] p-5 md:p-6">
                    <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:items-start">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                          Layer 0{index + 1}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{layer.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{layer.subtitle}</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {layer.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-[18px] border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-[var(--foreground)] shadow-[var(--shadow-soft)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                  {index < architectureLayers.length - 1 ? (
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--primary-soft)] text-[var(--primary)]">
                      ↓
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="平台介面"
            title="營運管理軟體介面"
            description="透過雲端平台整合設備狀態、充電紀錄、車牌資訊與現場影像，讓管理單位可在同一畫面掌握停車與充電營運狀況。"
          />
          <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src="/images/products/parking-software-dashboard.png.bmp"
                alt="LDZ 智慧停車與充電營運管理平台介面示意"
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading eyebrow="功能模組" title="核心功能模組" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading eyebrow="設備介紹" title="產品與設備組成" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {equipmentCards.map((card) => (
              <article key={card.title} className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                <ul className="mt-4 space-y-2">
                  {card.features.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
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
          <SectionHeading eyebrow="場域應用" title="適用場域" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteCards.map((card) => (
              <article key={card.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex aspect-[16/9] items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#eef5ff_0%,#ddeaff_100%)] text-sm font-medium text-[var(--muted)]">
                  場域示意預留區
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading eyebrow="導入效益" title="導入後的核心效益" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {benefitColumns.map((column) => (
              <article key={column.title} className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--foreground)]">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
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
          <SectionHeading eyebrow="導入流程" title="導入流程" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading eyebrow="FAQ" title="常見問題" />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--foreground)]">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-[var(--primary)] transition group-open:rotate-45">+</span>
                  </div>
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space pt-0">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_55%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">
                  CONTACT LDZ
                </p>
                <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                  與立達興一起規劃下一個
                  <br />
                  智慧停車與充電專案
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82 md:text-base">
                  歡迎洽談專案合作、索取產品資料，或安排技術顧問諮詢。
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact" className="btn-light">
                  聯絡業務
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
