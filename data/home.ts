import type { LocalizedText } from "./i18n";

export type HeroStat = {
  value: string;
  label: LocalizedText;
};

export type CapabilityCard = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  tag: string;
  href: string;
};

export type FeatureEntry = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  image: string;
  tag: string;
};

export const homeHero = {
  eyebrow: {
    zh: "智慧能源與場域整合基礎建設服務供應商",
    en: "Smart Energy and Site Integration Infrastructure Service Provider"
  },
  title: {
    zh: "立達興科技 LDZ Group",
    en: "LDZ Group"
  },
  subtitle: {
    zh: "智慧能源、停車充電、安防影像與自動化系統",
    en: "Smart Energy, Parking & EV Charging, AI Vision, and Automation Systems"
  },
  description: {
    zh: "從智慧能源系統、停車充電、安防影像到自動化設備與雲端平台，立達興提供場域級的智慧基礎建設整合方案。",
    en: "From energy systems and EV charging to AI security, automation equipment, and cloud platforms, LDZ delivers site-scale smart infrastructure solutions."
  },
  primaryCta: {
    label: { zh: "瀏覽產品", en: "Explore Products" },
    href: "/products"
  },
  secondaryCta: {
    label: { zh: "聯絡我們", en: "Contact Us" },
    href: "/contact"
  },
  stats: [
    { value: "2013", label: { zh: "成立年份", en: "Established" } },
    { value: "B2B", label: { zh: "企業導向", en: "Enterprise Focus" } },
    { value: "AIoT", label: { zh: "整合核心", en: "Integration Core" } },
    { value: "1000+", label: { zh: "應用場域", en: "Application Sites" } }
  ] satisfies HeroStat[],
  vision: {
    badge: {
      zh: "LDZ 願景",
      en: "LDZ Vision"
    },
    title: {
      zh: "以整合技術驅動智慧場域升級",
      en: "Driving Smart Site Upgrades Through Integrated Technology"
    },
    items: [
      {
        key: "L",
        heading: {
          zh: "智慧能源整合",
          en: "Leadership in Smart Energy"
        },
        description: {
          zh: "透過能源系統、EMS 與儲能整合能力，協助客戶提升效率與韌性。",
          en: "Expanding efficiency and resilience through integrated energy systems, EMS, and storage."
        }
      },
      {
        key: "D",
        heading: {
          zh: "數位驅動製造",
          en: "Digital-Driven Manufacturing"
        },
        description: {
          zh: "整合設備、自動化流程與資料平台，加速工業場域的數位升級。",
          en: "Accelerating industrial transformation through equipment, automation workflows, and connected data platforms."
        }
      },
      {
        key: "Z",
        heading: {
          zh: "永續低碳轉型",
          en: "Zero-Carbon Transformation"
        },
        description: {
          zh: "透過智慧用能與系統整合，協助企業朝向可持續營運前進。",
          en: "Helping organizations move toward sustainable operations through smart energy usage and integrated systems."
        }
      }
    ]
  }
};

export const coreCapabilities: CapabilityCard[] = [
  {
    slug: "energy",
    title: { zh: "智慧能源系統與設備", en: "Smart Energy Systems & Equipment" },
    description: {
      zh: "整合 EMS、儲能、太陽能與微電網系統，提升能源效率與供使用可視化。",
      en: "Integrating EMS, storage, solar, and microgrids to improve efficiency and energy visibility."
    },
    image: "/images/home/energy-systems-equipment.svg",
    tag: "Energy",
    href: "/products#smart-energy"
  },
  {
    slug: "parking-charging",
    title: { zh: "智慧停車與充電", en: "Smart Parking & EV Charging" },
    description: {
      zh: "整合車牌辨識、停車管理、充電樁設備與雲端營運平台，打造一致的場站服務流程。",
      en: "Unified integration of LPR, parking management, charging infrastructure, and cloud operations."
    },
    image: "/images/home/parking-ev-operations.svg",
    tag: "Parking & EV",
    href: "/products#smart-energy"
  },
  {
    slug: "security",
    title: { zh: "智慧安防影像", en: "Smart Security Vision" },
    description: {
      zh: "結合影像設備、AI 分析、周界防護與事件告警，提升場域安全與管理效率。",
      en: "Combining imaging devices, AI analytics, perimeter protection, and event alerts to enhance site safety and management."
    },
    image: "/images/home/security-vision-ops.svg",
    tag: "AI Vision",
    href: "/products#security-vision"
  },
  {
    slug: "automation",
    title: { zh: "自動化設備與機器人開發", en: "Automation & Robotics Development" },
    description: {
      zh: "整合開發自動化設備、控制系統、機器人、運動控制系統。",
      en: "Integrated development of automation equipment, control systems, robotics, and motion control systems."
    },
    image: "/images/home/automation-motion-control.svg",
    tag: "Automation",
    href: "/products#automation-cloud"
  },
  {
    slug: "kiosk",
    title: { zh: "KIOSK 無人化", en: "KIOSK Unmanned Solutions" },
    description: {
      zh: "開發符合應用環境的無人化服務、自助售票機、自助申辦機、自助導覽機。",
      en: "Developing unmanned services for real application environments, including self-service ticketing, application, and guidance kiosks."
    },
    image: "/images/home/kiosk-unmanned-solutions.svg",
    tag: "KIOSK",
    href: "/about"
  },
  {
    slug: "oem-odm-product",
    title: { zh: "OEM / ODM 產品開發", en: "OEM / ODM Product Development" },
    description: {
      zh: "支援產品規劃、設計整合、打樣與量產導入。",
      en: "Supporting product planning, design integration, prototyping, and production rollout."
    },
    image: "/images/home/oem-odm-product-development.svg",
    tag: "OEM / ODM",
    href: "/about"
  },
  {
    slug: "aiot",
    title: { zh: "AIoT 雲端軟硬體整合", en: "AIoT Cloud Integration" },
    description: {
      zh: "軟硬體整合與可視化平台開發與 IT / OT / Cloud 串接能力。",
      en: "Combining hardware, software, visualization platforms, and IT / OT / Cloud connectivity into one integrated stack."
    },
    image: "/images/home/aiot-cloud-platform.svg",
    tag: "AIoT",
    href: "/future-ai"
  }
];

export const aboutSummary = {
  title: { zh: "關於立達興", en: "About LDZ" },
  description: {
    zh: "立達興科技股份有限公司成立於 2013 年，專注於智慧能源、自動化設備、AIoT、雲端平台與整合型系統開發。公司具備 OEM / ODM、軟硬體整合、電器承裝、可視化平台開發與專案落地能力，協助企業與各類場域打造更高效率、更安全、更智慧的應用環境。\n\n立達興的服務範圍涵蓋能源服務工程、太陽能系統、儲能系統、充電樁系統、能源管理系統、機器人設備、無人化服務系統、AIoT 系統與智慧場域整合。從需求評估、方案規劃、設計製造、系統整合到交付維運，提供一站式整合服務。",
    en: "Founded in 2013, LDZ Group Co., Ltd. focuses on smart energy, automation equipment, AIoT, cloud platforms, and integrated system development. The company provides OEM / ODM services, hardware-software integration, electrical contracting, visualization platform development, and end-to-end project delivery.\n\nLDZ covers energy engineering, solar and storage systems, EV charging, energy management, robotics, unmanned service systems, AIoT platforms, and smart-site integration. From requirements and planning to design, delivery, and operations, LDZ offers one-stop integrated services."
  },
  highlights: [
    {
      zh: "工程整合與跨系統協作能力",
      en: "Engineering integration and cross-system coordination"
    },
    {
      zh: "能源、停車、充電、AI 影像與雲端平台整合",
      en: "Integrated energy, parking, EV charging, AI vision, and cloud platforms"
    },
    {
      zh: "具備可持續擴充的智慧場域導入基礎",
      en: "A scalable foundation for future smart-site applications"
    }
  ]
};

export const featuredEntries: FeatureEntry[] = [
  {
    title: { zh: "智慧能源系統", en: "Smart Energy Systems" },
    description: {
      zh: "整合監測、儲能、再生能源調度與 EMS 應用，提升能源效率與管理品質。",
      en: "Integrating monitoring, storage, renewable dispatch, and EMS applications for better energy performance."
    },
    href: "/products#smart-energy",
    image: "/images/products/smart-energy.svg",
    tag: "Products"
  },
  {
    title: { zh: "停車與充電營運", en: "EV Charging & Parking Management" },
    description: {
      zh: "串接停車動線、計費、車牌辨識與充電營運，打造完整場站流程。",
      en: "Connecting parking flow, billing, license plate recognition, and charging operations into one service loop."
    },
    href: "/solutions#parking-ev",
    image: "/images/solutions/parking-ev.svg",
    tag: "Solutions"
  },
  {
    title: { zh: "AI 安防影像", en: "AI Security Vision" },
    description: {
      zh: "以影像設備結合 AI 分析，支援主動式安全管理、告警與事件追蹤。",
      en: "Combining imaging devices with AI analytics for proactive safety management, alerts, and event tracking."
    },
    href: "/products#security-vision",
    image: "/images/products/ai-security.svg",
    tag: "AI Vision"
  },
  {
    title: { zh: "自動化與自助服務", en: "Automation & Self-Service" },
    description: {
      zh: "涵蓋自動化設備、Kiosk、自助流程與後台資料整合，支援多元場域應用。",
      en: "Supporting equipment automation, kiosks, self-service workflows, and backend connectivity for diverse use cases."
    },
    href: "/products#self-service-medical",
    image: "/images/products/automation-service.svg",
    tag: "Automation"
  }
];

export const futureAiSection = {
  title: {
    zh: "Future AI 智慧營運",
    en: "Future AI for Smart Operations"
  },
  description: {
    zh: "立達興正從系統整合持續擴展到平台導向服務，結合 AI、能源與現場資料，打造可持續演進的智慧營運能力。",
    en: "LDZ is evolving from system integration toward platform-oriented services by combining AI, energy, and site data into scalable smart operations."
  },
  items: [
    {
      zh: "AI Energy OS：能源資料治理、告警與優化",
      en: "AI Energy OS: governance, alerts, and optimization for energy data"
    },
    {
      zh: "智慧停車 Agent：串接停車、充電與場域營運",
      en: "Smart parking agent: coordination across parking, charging, and site operations"
    },
    {
      zh: "AI 維運協作：支援巡檢、通知與多場域管理",
      en: "AI operations: support for inspections, notifications, and multi-site management"
    }
  ],
  href: "/future-ai"
};

export const technologyMapSection = {
  eyebrow: {
    zh: "技術地圖",
    en: "Technology Map"
  },
  title: {
    zh: "LDZ Group Technology Map",
    en: "LDZ Group Technology Map"
  },
  description: {
    zh: "以 AI Energy OS 為核心，串接智慧能源、自動化、AI 視覺、IoT 平台與智慧基礎建設，形成可擴充的技術布局。",
    en: "Centered on AI Energy OS, LDZ connects smart energy, automation, AI vision, IoT platforms, and smart infrastructure into a scalable technology map."
  },
  image: "/images/home/technology-map.png",
  imageAlt: {
    zh: "LDZ Group Technology Map 技術地圖",
    en: "LDZ Group Technology Map"
  },
  replaceHint: {
    zh: "後續若要更新這張技術地圖，只需要替換 `/public/images/home/technology-map.png`，或在 `data/home.ts` 修改圖片路徑。",
    en: "To update this technology map later, replace `/public/images/home/technology-map.png` or change the image path in `data/home.ts`."
  },
  slogan: {
    zh: "串接智慧能源、自動化、AI 與永續",
    en: "Connecting Smart Energy, Automation, AI, and Sustainability"
  },
  coreTitle: {
    zh: "核心平台",
    en: "Core Platform"
  },
  coreName: "LDZ AI Energy OS",
  coreChips: [
    { zh: "Data", en: "Data" },
    { zh: "AI Agent", en: "AI Agent" },
    { zh: "IoT", en: "IoT" },
    { zh: "Cloud", en: "Cloud" }
  ],
  domains: [
    {
      title: { zh: "儲能系統", en: "Energy Storage" },
      items: [
        { zh: "電池系統", en: "Battery System" },
        { zh: "電網儲能", en: "Grid Storage" },
        { zh: "備援應用", en: "Backup Applications" }
      ]
    },
    {
      title: { zh: "太陽能", en: "Solar Energy" },
      items: [
        { zh: "太陽能發電", en: "Solar PV" },
        { zh: "再生能源整合", en: "Renewable Integration" }
      ]
    },
    {
      title: { zh: "EV 充電", en: "EV Charging" },
      items: [
        { zh: "智慧充電", en: "Smart Charging" },
        { zh: "車隊充電", en: "Fleet Charging" }
      ]
    },
    {
      title: { zh: "自動化", en: "Automation" },
      items: [
        { zh: "AGV / AMR", en: "AGV / AMR" },
        { zh: "機器人", en: "Robotics" },
        { zh: "智慧工廠", en: "Smart Factory" }
      ]
    },
    {
      title: { zh: "智慧基礎建設", en: "Smart Infrastructure" },
      items: [
        { zh: "智慧建築", en: "Smart Building" },
        { zh: "HVAC / EMS", en: "HVAC / EMS" },
        { zh: "智慧停車", en: "Smart Parking" }
      ]
    },
    {
      title: { zh: "AI 視覺", en: "AI Vision" },
      items: [
        { zh: "巡檢", en: "Inspection" },
        { zh: "監控", en: "Monitoring" },
        { zh: "分析", en: "Analytics" }
      ]
    },
    {
      title: { zh: "能源管理", en: "Energy Management" },
      items: [
        { zh: "優化", en: "Optimization" },
        { zh: "監測", en: "Monitoring" },
        { zh: "控制", en: "Control" }
      ]
    },
    {
      title: { zh: "IoT 平台", en: "IoT Platform" },
      items: [
        { zh: "資料整合", en: "Data Integration" },
        { zh: "設備串接", en: "Device Connectivity" },
        { zh: "雲端協作", en: "Cloud Orchestration" }
      ]
    }
  ],
  pillars: [
    { zh: "創新", en: "Innovation" },
    { zh: "效率", en: "Efficiency" },
    { zh: "永續", en: "Sustainability" },
    { zh: "數位轉型", en: "Digital Transformation" },
    { zh: "低碳", en: "Low Carbon" }
  ],
  visionLine: {
    zh: "智慧能源領導力 | 數位驅動製造 | 永續低碳未來",
    en: "Leadership in Smart Energy | Digital-Driven Manufacturing | A Low-Carbon Future"
  }
};

export const contactCta = {
  title: {
    zh: "與立達興一起規劃下一個智慧場域專案",
    en: "Plan your next smart infrastructure project with LDZ"
  },
  description: {
    zh: "歡迎洽談專案合作、索取產品資料，或安排技術顧問諮詢。",
    en: "Discuss project collaboration, request product information, or schedule a technical consultation."
  },
  primary: {
    label: { zh: "聯絡業務", en: "Contact Sales" },
    href: "/contact"
  },
  secondary: {
    label: { zh: "瀏覽解決方案", en: "Browse Solutions" },
    href: "/solutions"
  }
};
