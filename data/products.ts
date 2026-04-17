import type { LocalizedText } from "./i18n";

export type ProductCategory = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  items: LocalizedText[];
  href: string;
  detail: {
    summary: LocalizedText;
    intro: LocalizedText;
    highlights: LocalizedText[];
    scenarios: LocalizedText[];
    deliverables: LocalizedText[];
  };
};

export const productCategories: ProductCategory[] = [
  {
    id: "smart-energy",
    title: { zh: "智慧能源系統", en: "Smart Energy Systems" },
    description: {
      zh: "整合節能管理、儲能調度、太陽能監控與能源數據治理，協助企業建立更清楚的能源營運架構。",
      en: "Integrates efficiency management, storage dispatch, solar monitoring, and energy data governance into a clear operating architecture."
    },
    image: "/images/products/smart-energy.svg",
    href: "/products/smart-energy",
    items: [
      { zh: "AI 節能控制", en: "AI Energy Optimization" },
      { zh: "用電監控與告警", en: "Power Monitoring and Alerts" },
      { zh: "儲能整合與 EMS", en: "Storage Integration and EMS" },
      { zh: "太陽能與綠電報表", en: "Solar and Green Power Reporting" }
    ],
    detail: {
      summary: {
        zh: "把節能、儲能、綠電三條產品線分清楚，才能讓企業在提案、導入與 ESG 溝通上不混淆。",
        en: "Separating efficiency, storage, and green-power offerings helps enterprises avoid confusion across proposals, rollout, and ESG communication."
      },
      intro: {
        zh: "立達興智慧能源系統不僅著重於用電監測，更協助企業從整體能源治理角度，系統化梳理節能管理、儲能管理與綠電整合三大面向。透過明確區分各模組之技術定位、應用情境與商業價值，可有效提升提案溝通效率，並作為企業推動能源轉型與 ESG 管理的重要基礎。",
        en: "LDZ smart energy is more than power monitoring. It separates energy offerings into efficiency management, storage management, and green-power integration so each module maps to a clear technical logic and business value."
      },
      highlights: [
        { zh: "把節能、綠電、儲能從同一頁面明確區分", en: "Clearly separates efficiency, green power, and storage on one page" },
        { zh: "支援 EMS、電表、告警、策略控制與報表管理", en: "Supports EMS, metering, alerts, control strategy, and reporting" },
        { zh: "適合用於提案、顧問銷售與企業能源治理溝通", en: "Fits proposal work, consultative sales, and enterprise energy-governance communication" }
      ],
      scenarios: [
        { zh: "工廠與園區的能源管理專案", en: "Energy-management projects for factories and campuses" },
        { zh: "商辦、多據點與高用電場域優化", en: "Optimization for commercial buildings and multi-site operations" },
        { zh: "結合太陽能、儲能與 ESG 揭露需求的企業", en: "Enterprises combining solar, storage, and ESG disclosure needs" }
      ],
      deliverables: [
        { zh: "能源儀表板、告警、報表與電表整合", en: "Energy dashboards, alerts, reports, and meter integration" },
        { zh: "儲能 EMS 與削峰填谷調度策略", en: "Storage EMS and peak-shaving dispatch strategy" },
        { zh: "綠電來源追蹤與使用報表架構", en: "Green-power source tracking and usage-report framework" }
      ]
    }
  },
  {
    id: "parking-charging",
    title: { zh: "智慧停車與充電", en: "Smart Parking & EV Charging" },
    description: {
      zh: "串接車牌辨識、停車管理、充電設備與雲端後台，打造從進出場到營運結算的一體化服務。",
      en: "Connects license-plate recognition, parking systems, charging hardware, and cloud operations into one end-to-end service flow."
    },
    image: "/images/products/parking-charging.svg",
    href: "/products/parking-charging",
    items: [
      { zh: "車牌辨識與門禁控制", en: "LPR and Access Control" },
      { zh: "停車收費與車位管理", en: "Parking Billing and Space Management" },
      { zh: "EV 充電設備導入", en: "EV Charger Deployment" },
      { zh: "雲端營運與報表後台", en: "Cloud Operations and Reporting" }
    ],
    detail: {
      summary: {
        zh: "讓停車、充電與場域控制整合成同一套營運流程，降低管理複雜度並提升使用體驗。",
        en: "Combines parking, charging, and site control into one operation flow to reduce complexity and improve user experience."
      },
      intro: {
        zh: "此方案適合停車場、商場、社區、企業總部與交通樞紐，能依據車流特性與充電需求配置前端設備、管理平台與結算機制，形成完整的智慧停車充電生態。",
        en: "Designed for parking facilities, malls, residential sites, headquarters, and transit hubs, this solution matches front-end devices, management software, and settlement workflows to local traffic and charging needs."
      },
      highlights: [
        { zh: "停車與充電資料集中管理，便於營運分析", en: "Centralizes parking and charging data for operations analysis" },
        { zh: "可整合會員、支付、費率與權限規則", en: "Integrates membership, payments, pricing, and access rules" },
        { zh: "支援多站點設備監控與遠端管理", en: "Supports multi-site monitoring and remote administration" }
      ],
      scenarios: [
        { zh: "商場與複合式停車場", en: "Retail and mixed-use parking facilities" },
        { zh: "社區與企業停車充電站", en: "Residential and corporate charging sites" },
        { zh: "交通節點與公共停車場升級", en: "Transit nodes and public parking upgrades" }
      ],
      deliverables: [
        { zh: "車牌辨識、閘門與充電設備整合", en: "LPR, gate, and charger integration" },
        { zh: "營運管理平台與費率設定模組", en: "Operations platform and pricing modules" },
        { zh: "月結、支付、報表與客服支援流程", en: "Billing, payments, reports, and support workflows" }
      ]
    }
  },
  {
    id: "security-vision",
    title: { zh: "智慧安防影像", en: "Smart Security Vision" },
    description: {
      zh: "結合影像設備、AI 分析與事件告警，協助場域提升安防監測能力與事件應變效率。",
      en: "Combines imaging hardware, AI analytics, and alerts to strengthen security monitoring and incident response."
    },
    image: "/images/products/ai-security.svg",
    href: "/products/security-vision",
    items: [
      { zh: "影像設備與前端部署", en: "Camera Systems and Edge Deployment" },
      { zh: "周界與區域防護", en: "Perimeter and Zone Protection" },
      { zh: "AI 事件辨識分析", en: "AI Event Detection" },
      { zh: "告警聯動與管理平台", en: "Alert Workflow and Management Platform" }
    ],
    detail: {
      summary: {
        zh: "透過影像可視化與 AI 偵測能力，讓場域能更早發現風險、更快處理事件。",
        en: "Pairs visual surveillance with AI detection so sites can identify risk earlier and respond faster."
      },
      intro: {
        zh: "方案可依需求配置固定式、球型、熱顯像或特殊應用攝影機，並結合 AI 模型進行入侵、異常、人流、設備狀態等事件辨識，再透過後台告警流程快速通知相關人員。",
        en: "The solution supports fixed, PTZ, thermal, and special-purpose cameras with AI models for intrusion, anomaly, people-flow, and equipment-status detection, connected to fast alert workflows."
      },
      highlights: [
        { zh: "支援即時監看、回放、權限與告警管理", en: "Supports live view, playback, access control, and alert management" },
        { zh: "AI 模組可依場域需求調整偵測條件", en: "AI modules can be tuned to each site's detection rules" },
        { zh: "可串接門禁、廣播、警示燈等聯動設備", en: "Integrates with access control, PA systems, and warning devices" }
      ],
      scenarios: [
        { zh: "工廠、倉儲與物流園區", en: "Factories, warehouses, and logistics parks" },
        { zh: "企業總部、校園與公共場域", en: "Corporate offices, campuses, and public sites" },
        { zh: "需要高風險區域監控的特殊環境", en: "Special environments requiring high-risk zone monitoring" }
      ],
      deliverables: [
        { zh: "前端攝影機與錄影架構規劃", en: "Camera and recording architecture design" },
        { zh: "AI 偵測規則與事件告警設定", en: "AI detection rules and alert configuration" },
        { zh: "平台導入、教育訓練與維運服務", en: "Platform rollout, training, and maintenance services" }
      ]
    }
  },
  {
    id: "automation-cloud",
    title: { zh: "自動化與雲端平台", en: "Automation & Cloud Platform" },
    description: {
      zh: "整合設備控制、資料交換、機器人應用與雲端服務，建立可持續擴充的智慧營運架構。",
      en: "Integrates equipment control, data exchange, robotics, and cloud services into a scalable smart-operations architecture."
    },
    image: "/images/products/automation-service.svg",
    href: "/products/automation-cloud",
    items: [
      { zh: "設備控制與系統串接", en: "Equipment Control and System Integration" },
      { zh: "機器人與自動化應用", en: "Robotics and Automation Applications" },
      { zh: "Kiosk 與前台互動服務", en: "Kiosk and Front-End Service" },
      { zh: "IT / OT / Cloud 資料整合", en: "IT / OT / Cloud Integration" }
    ],
    detail: {
      summary: {
        zh: "將現場設備、自動化流程與雲端資料平台連成一體，為企業建立可演進的數位營運基礎。",
        en: "Connects field equipment, automation workflows, and cloud platforms into a digital operations foundation that can evolve over time."
      },
      intro: {
        zh: "立達興協助客戶從單點設備整合走向跨系統平台化治理，涵蓋 PLC、感測器、Kiosk、機器人、資料中台與雲端應用，讓現場運作與後端服務可以同步優化。",
        en: "LDZ helps teams move from isolated device integration to platform-level coordination across PLCs, sensors, kiosks, robots, middleware, and cloud applications."
      },
      highlights: [
        { zh: "串接現場設備與既有資訊系統，降低資料斷點", en: "Bridges field equipment with existing information systems" },
        { zh: "支援自動化流程設計與資料交換機制", en: "Supports workflow automation and data-exchange design" },
        { zh: "可搭配雲端儀表板與 API 架構延伸服務", en: "Extends through cloud dashboards and API-based services" }
      ],
      scenarios: [
        { zh: "智慧工廠與設備聯網場域", en: "Smart factories and connected equipment sites" },
        { zh: "需導入 Kiosk 或自助流程的服務據點", en: "Service locations adding kiosk or self-service flows" },
        { zh: "跨部門資料整合與營運可視化專案", en: "Cross-team data integration and operations-visibility projects" }
      ],
      deliverables: [
        { zh: "設備通訊整合、資料轉接與 API 介接", en: "Device connectivity, middleware, and API integration" },
        { zh: "前台服務介面與後台管理機制", en: "Front-end service interfaces and admin management" },
        { zh: "雲端部署、監控告警與持續維運", en: "Cloud deployment, monitoring, and ongoing operations" }
      ]
    }
  },
  {
    id: "self-service-medical",
    title: { zh: "自助服務與智慧醫療", en: "Self-Service & Smart Healthcare" },
    description: {
      zh: "支援自助報到、引導流程、數位看板與醫療場域數位化，提升民眾體驗與現場作業效率。",
      en: "Supports self check-in, guided workflows, digital signage, and healthcare digitization to improve service experience and on-site efficiency."
    },
    image: "/images/products/self-service-medical.svg",
    href: "/products/self-service-medical",
    items: [
      { zh: "自助報到與取號流程", en: "Self Check-In and Queue Flow" },
      { zh: "智慧櫃台與服務導引", en: "Smart Counter and Service Guidance" },
      { zh: "數位看板與資訊顯示", en: "Digital Signage and Information Display" },
      { zh: "醫療流程與系統整合", en: "Healthcare Workflow Integration" }
    ],
    detail: {
      summary: {
        zh: "把櫃台、人流引導與資訊顯示流程數位化，減少人工負擔並提升現場服務品質。",
        en: "Digitizes counters, queue guidance, and information display to reduce manual workload and improve front-line service quality."
      },
      intro: {
        zh: "本方案適用於醫療院所、公共服務櫃台與需要高流量接待的場域，可整合報到、取號、指引、看板、後台管理與資料串接，形成一致的服務流程。",
        en: "This solution fits medical institutions, public service counters, and other high-traffic reception sites, integrating check-in, queueing, guidance, signage, management, and back-end data connectivity."
      },
      highlights: [
        { zh: "提升櫃台分流效率與使用者自助完成率", en: "Improves service distribution and self-service completion rates" },
        { zh: "整合看板、語音、導引與作業流程", en: "Connects signage, voice guidance, navigation, and service workflows" },
        { zh: "可銜接既有掛號、叫號或院內資訊系統", en: "Connects with existing registration, queueing, or hospital systems" }
      ],
      scenarios: [
        { zh: "醫院、診所與健檢中心", en: "Hospitals, clinics, and health-screening centers" },
        { zh: "政府與公共服務櫃台", en: "Government and public service counters" },
        { zh: "需提升接待效率的企業與場館", en: "Enterprises and venues improving visitor reception" }
      ],
      deliverables: [
        { zh: "Kiosk、自助報到與叫號系統導入", en: "Kiosk, self check-in, and queue-system rollout" },
        { zh: "現場動線設計與數位看板整合", en: "On-site service-flow design and digital signage integration" },
        { zh: "後台管理、報表與教育訓練", en: "Admin platform, reporting, and user training" }
      ]
    }
  },
  {
    id: "oem-odm",
    title: { zh: "OEM / ODM 產品開發", en: "OEM / ODM Product Development" },
    description: {
      zh: "支援產品規劃、設計整合、打樣驗證與量產導入，協助客戶加速硬體產品落地。",
      en: "Supports planning, design integration, prototyping, validation, and mass-production rollout for hardware product development."
    },
    image: "/images/products/oem-odm.svg",
    href: "/products/oem-odm",
    items: [
      { zh: "產品規劃與規格定義", en: "Product Planning and Specification" },
      { zh: "機構 / 電子 / 韌體整合", en: "Mechanical, Electronics, and Firmware Integration" },
      { zh: "打樣驗證與測試", en: "Prototype Validation and Testing" },
      { zh: "量產導入與供應鏈協作", en: "Mass Production and Supply Chain Coordination" }
    ],
    detail: {
      summary: {
        zh: "從概念規劃到量產交付，建立完整的 OEM / ODM 產品開發與整合流程。",
        en: "Builds a complete OEM / ODM workflow from concept planning to mass-production delivery."
      },
      intro: {
        zh: "立達興提供從需求釐清、工業設計、硬體整合、韌體開發、樣機驗證到量產導入的完整服務，協助品牌商與系統業者降低開發風險、縮短時程，並讓產品更穩定地進入市場。",
        en: "LDZ supports the full path from requirement definition and industrial design to hardware integration, firmware development, prototype validation, and production transfer."
      },
      highlights: [
        { zh: "支援品牌商、系統商與專案型客製產品開發", en: "Supports branded, system-integrator, and custom project product development" },
        { zh: "涵蓋機構、電子、韌體與測試驗證整合", en: "Covers mechanical, electronic, firmware, and validation integration" },
        { zh: "協助打樣、試產、量產與供應鏈協作", en: "Supports prototyping, pilot runs, mass production, and supply-chain collaboration" }
      ],
      scenarios: [
        { zh: "品牌端新品導入與客製設備開發", en: "New branded product launches and custom device development" },
        { zh: "智慧設備、工控設備與專用終端產品", en: "Smart devices, industrial-control hardware, and dedicated terminals" },
        { zh: "需要從設計一路銜接量產的整合專案", en: "Integrated projects that must bridge design all the way to production" }
      ],
      deliverables: [
        { zh: "產品規格定義、BOM 與設計文件", en: "Product specs, BOMs, and design documentation" },
        { zh: "樣機打樣、測試驗證與修正建議", en: "Prototypes, validation testing, and revision recommendations" },
        { zh: "試產導入、量產協作與製造交付", en: "Pilot-run transfer, production coordination, and manufacturing handoff" }
      ]
    }
  }
];

export function getProductCategoryById(id: string) {
  return productCategories.find((category) => category.id === id);
}
