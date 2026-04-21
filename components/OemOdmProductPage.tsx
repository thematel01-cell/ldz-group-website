"use client";

import Image from "next/image";
import Link from "next/link";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function ImageCard({
  src,
  alt,
  width = 1600,
  height = 900,
  className = "",
  frameClassName = "",
  imageClassName = ""
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[30px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6 ${className}`}
    >
      <div
        className={`overflow-hidden rounded-[22px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-auto w-full ${imageClassName}`}
        />
      </div>
    </div>
  );
}

const heroButtons = [
  { label: "了解開發流程", href: "#process" },
  { label: "查看開發能力", href: "#capabilities" }
];

const heroHighlights = ["Product Planning", "Design Integration", "Prototype Validation", "Mass Production Readiness"];

const valueCards = [
  {
    title: "整合型開發能力",
    content: "從需求確認、規格定義、電控設計到設備整合，建立完整且可執行的 OEM / ODM 開發流程。"
  },
  {
    title: "跨領域協作導入",
    content: "可串接機構、電子、控制、通訊與平台資料，降低多模組整合時的溝通與導入成本。"
  },
  {
    title: "驗證與量產支援",
    content: "協助樣機製作、功能驗證、問題改善與量產導入，讓產品更穩定地走向市場。"
  },
  {
    title: "客製產品規劃",
    content: "依不同產業場域與商業模式調整功能與介面，打造更貼近實務需求的產品方案。"
  }
];

const strengthItems = [
  "IOT 模組開發",
  "EtherCAT 控制模組整合",
  "機械手臂與運動系統周邊",
  "客製化設備與控制器",
  "冷氣控制器與遠端控制器",
  "充電樁與儲能櫃整合",
  "電力監測與能源設備介接",
  "雲端平台與資料串接",
  "量產導入與後續優化"
];

const productTypes = [
  "IOT 通訊模組",
  "EtherCAT 控制模組",
  "設備控制器",
  "遠端控制器",
  "冷氣控制器",
  "機械手臂周邊模組",
  "充電樁相關設備",
  "儲能櫃整合設備",
  "電力監控周邊",
  "其他客製化產品"
];

const processItems = [
  {
    title: "需求訪談與規格定義",
    content: "依據場域需求、應用目標與導入條件，建立產品定位、功能需求與技術規格。"
  },
  {
    title: "設計整合與樣機開發",
    content: "整合機構、電子、韌體、控制與通訊邏輯，快速推進樣機製作與測試。"
  },
  {
    title: "測試驗證與認證規劃",
    content: "協助功能驗證、耐久測試與改善調整，並配合產品導入需求規劃檢測與認證。"
  },
  {
    title: "量產導入與持續優化",
    content: "完成量產前確認與導入流程，並依實際使用回饋持續優化產品穩定度與效率。"
  }
];

const capabilityItems = [
  {
    title: "電控與控制邏輯整合",
    content: "支援控制架構規劃、設備介接與邏輯控制，提升產品功能完整度。"
  },
  {
    title: "通訊與平台串接",
    content: "可串接感測器、設備資料、雲端平台與監控畫面，建立可視化管理基礎。"
  },
  {
    title: "設備應用模組開發",
    content: "針對客製化設備、運動模組、控制器與能源應用產品進行功能設計與整合。"
  },
  {
    title: "驗證導入與優化",
    content: "從樣機、測試到量產導入，持續檢視問題並優化實際應用表現。"
  }
];

const useCaseItems = [
  "工業設備控制模組",
  "自動化產線周邊設備",
  "能源管理與電力監測產品",
  "EV 充電樁與配套設備",
  "客製化人機介面與控制平台",
  "智慧場域整合型產品"
];

const reasonsBullets = [
  "具備跨機構、電子、控制、通訊與平台的整合能力",
  "可依不同產業需求提供 OEM / ODM 客製化支援",
  "兼顧樣機驗證、導入效率與量產可行性",
  "能配合認證需求規劃檢測與驗證作業",
  "與 SGS 合作相關檢測與認證流程支援",
  "以工程整合視角協助客戶降低開發風險"
];

const summaryDescription =
  "立達興科技不只是執行開發工作，而是以整合型工程能力陪伴客戶完成產品化、驗證化與量產化，讓 OEM / ODM 專案更穩定、更有效率地走向落地。從前期需求訪談、規格定義、機構與電子整合、控制邏輯設計，到樣機製作、測試驗證、量產導入與後續優化，我們都能依據不同產業與應用情境提供對應支援。無論是 IOT 模組、EtherCAT 控制模組、機械手臂周邊、客製化設備、冷氣控制器、遠端控制器、充電樁、儲能櫃或其他整合型產品需求，立達興都可協助客戶縮短開發週期、降低跨領域整合風險，並提升產品導入市場的成熟度與可行性。在認證面向，LDZ 亦可配合產品導入需求，與 SGS 合作進行相關檢測與認證作業，協助客戶在開發、驗證與上市階段更順利銜接。";

export function OemOdmProductPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(241,247,255,0.98)_100%)] py-16 md:py-24">
        <div className="container-shell grid gap-12 xl:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)] xl:items-center">
          <div className="mx-auto w-full max-w-[620px] xl:mx-0">
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              返回產品與服務
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              BUILD FROM CONCEPT TO PRODUCTION.
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              OEM / ODM 產品開發
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              從概念規劃到量產導入，協助客戶把產品真正做出來。
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              立達興科技具備跨領域產品開發與整合實務，涵蓋 IOT 模組、EtherCAT 模組、機械手臂、運動系統、動力系統、客製化設備、冷氣控制器、遠端控制器、充電樁、儲能櫃與相關能源應用，協助客戶從需求定義、規格設計、開發驗證到量產導入穩定落地。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroButtons.map((button) => (
                <a key={button.label} href={button.href} className="btn-light">
                  {button.label}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ImageCard
            src="/images/products/oem-odm/hero.jpg"
            alt="OEM / ODM hero visual"
            width={1600}
            height={1200}
            className="mx-auto w-full max-w-[660px] p-5"
          />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle
            eyebrow="核心價值"
            title="一站式 OEM / ODM 開發整合能力"
            description="從產品規劃、功能設計、系統整合到驗證導入，建立更可控的產品開發流程。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[188px] flex-col rounded-[24px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="整合架構"
            title="OEM / ODM 產品開發整合架構"
            description="從控制模組、設備介接到平台資料串接，形成可擴充的產品化能力。"
            align="center"
          />
          <div className="mt-12">
            <ImageCard
              src="/images/products/oem-odm/capability-framework.svg"
              alt="OEM / ODM capability framework"
              width={1600}
              height={1040}
              className="mx-auto max-w-[1240px]"
            />
          </div>
        </div>
      </section>

      <section id="process" className="section-space pt-0">
        <div className="container-shell">
          <ImageCard
            src="/images/products/oem-odm/process.jpg"
            alt="OEM / ODM process"
            className="mx-auto max-w-[1240px]"
          />
          <div className="mx-auto mt-12 w-full max-w-[860px]">
            <SectionTitle
              eyebrow="開發流程"
              title="從需求定義到量產導入的實務流程"
              description="以工程導向方式推進 OEM / ODM 專案，降低開發與導入風險。"
              align="center"
            />
            <div className="mt-6 flex justify-center">
              <p className="inline-flex rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
                Concept / Integration / Prototype / Validation / Production
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {processItems.map((item, index) => (
                <article
                  key={item.title}
                  className="flex min-h-[188px] flex-col rounded-[24px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="開發範圍"
            title="可支援的 OEM / ODM 開發項目"
            description="依不同場域需求提供模組、設備、控制器與整合型產品開發支援。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {strengthItems.map((item, index) => (
              <article
                key={item}
                className="flex min-h-[148px] flex-col rounded-[26px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="產品類型"
            title="可規劃的客製化產品方向"
            description="支援控制模組、設備控制、能源應用與場域整合型產品。"
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {productTypes.map((item) => (
              <article
                key={item}
                className="flex min-h-[116px] items-center rounded-[22px] border border-[var(--line)] bg-white p-4 text-center shadow-[var(--shadow-soft)]"
              >
                <h3 className="w-full text-base font-semibold text-[var(--foreground)]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-10 xl:grid-cols-[minmax(560px,1.08fr)_minmax(0,0.92fr)] xl:items-stretch">
            <ImageCard
              src="/images/products/oem-odm/capabilities.jpg"
              alt="OEM / ODM capabilities"
              className="mx-auto order-1 flex h-full w-full max-w-[680px] xl:order-1"
              frameClassName="flex h-full items-center justify-center"
              imageClassName="h-full w-full object-contain object-center"
            />
            <div className="mx-auto order-2 flex w-full max-w-[620px] flex-col xl:mx-0 xl:order-2">
              <SectionTitle
                eyebrow="開發能力"
                title="跨機構、電子、控制與平台的整合支援"
                description="讓產品不只完成設計，也能更順利串接實際設備與應用場域。"
              />
              <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2">
                {capabilityItems.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full min-h-[180px] flex-col rounded-[24px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)]"
                  >
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="應用場景"
            title="適用於多種設備與場域產品開發"
            description="可因應工業控制、能源管理、自動化設備與智慧場域等不同應用需求。"
            align="center"
          />
          <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(560px,1.12fr)] xl:items-start">
            <div className="order-2 grid gap-5 md:grid-cols-2 xl:order-1 xl:grid-cols-2">
              {useCaseItems.map((item) => (
                <article
                  key={item}
                  className="flex min-h-[148px] items-center rounded-[24px] border border-[var(--line)] bg-white p-5 text-center shadow-[var(--shadow-soft)]"
                >
                  <h3 className="w-full text-lg font-semibold text-[var(--foreground)]">{item}</h3>
                </article>
              ))}
            </div>
            <ImageCard
              src="/images/products/oem-odm/applications.jpg"
              alt="OEM / ODM applications"
              className="order-1 mx-auto w-full max-w-[700px] xl:order-2"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
          <article className="flex h-full flex-col rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#0b1d45_0%,#1558b8_100%)] p-7 text-white shadow-[0_30px_70px_rgba(12,77,162,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">選擇立達興</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold">為什麼適合作為 OEM / ODM 開發夥伴</h2>
            <ul className="mt-6 space-y-4">
              {reasonsBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="flex h-full flex-col rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">總結說明</p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{summaryDescription}</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section-space pt-0">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#081b43_0%,#0c4da2_55%,#1d8bdb_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(12,77,162,0.24)] md:px-12 md:py-14">
            <div className="mx-auto max-w-[1080px]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">CONTACT LDZ</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                    讓 OEM / ODM 專案更快進入可驗證、可量產的狀態
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base">
                    若你正在規劃模組、控制器、客製設備、充電樁、儲能櫃或其他整合型產品，立達興可協助你從開發到導入建立更完整的落地方案。
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link href="/contact" className="btn-light">
                    聯絡立達興
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
