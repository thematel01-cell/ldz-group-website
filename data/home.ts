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
    en: "Smart Infrastructure Integrator"
  },
  title: {
    zh: "立達興科技 LDZ Group",
    en: "LDZ Group"
  },
  subtitle: {
    zh: "智慧能源・智慧停車與充電・AI 視覺・自動化整合",
    en: "Smart Energy • Parking & EV Charging • AI Vision • Automation Integration"
  },
  description: {
    zh: "提供各類環境與場域更安全、更高效、更智慧的 AI 智慧解決方案，整合能源管理、充電樁系統、儲能設備、智慧停車、影像監控、自助服務設備與雲端平台應用。",
    en: "From energy management, EV charging, and smart parking to AI security and cloud platforms, we deliver site-scale smart infrastructure solutions."
  },
  primaryCta: {
    label: { zh: "探索產品", en: "Explore Products" },
    href: "/products"
  },
  secondaryCta: {
    label: { zh: "聯絡我們", en: "Contact Us" },
    href: "/contact"
  },
  stats: [
    { value: "2013", label: { zh: "成立年份", en: "Established" } },
    { value: "B2B", label: { zh: "企業服務", en: "Enterprise Focus" } },
    { value: "AIoT", label: { zh: "整合核心", en: "Integration Core" } },
    { value: "1000+", label: { zh: "應用場域", en: "Application Sites" } }
  ] satisfies HeroStat[],
  vision: {
    badge: {
      zh: "LDZ 願景",
      en: "LDZ Vision"
    },
    title: {
      zh: "LDZ 願景",
      en: "LDZ Vision"
    },
    items: [
      {
        key: "L",
        heading: {
          zh: "L｜智慧能源領航",
          en: "L · Leadership in Smart Energy"
        },
        description: {
          zh: "以智慧能源系統推動場域升級與節能轉型。",
          en: "Driving innovation in intelligent energy systems"
        }
      },
      {
        key: "D",
        heading: {
          zh: "D｜數位驅動製造",
          en: "D · Digital-Driven Manufacturing"
        },
        description: {
          zh: "以自動化與數位整合強化產業運作效率。",
          en: "Empowering industry through automation and digital integration"
        }
      },
      {
        key: "Z",
        heading: {
          zh: "Z｜零碳永續轉型",
          en: "Z · Zero-Carbon Transformation"
        },
        description: {
          zh: "協助企業朝向永續與淨零未來持續前進。",
          en: "Advancing toward a sustainable and net-zero future"
        }
      }
    ]
  }
};

export const coreCapabilities: CapabilityCard[] = [
  {
    slug: "energy",
    title: { zh: "智慧能源", en: "Smart Energy" },
    description: {
      zh: "整合 EMS、儲能、太陽能與微電網系統，提升能源效率與使用可視化。",
      en: "Integrating EMS, storage, solar, and microgrids to improve efficiency and energy visibility."
    },
    image: "/images/home/energy.svg",
    tag: "Energy",
    href: "/products#smart-energy"
  },
  {
    slug: "parking-charging",
    title: { zh: "智慧停車與充電", en: "Smart Parking & EV Charging" },
    description: {
      zh: "整合車牌辨識、停車管理、充電設備與雲端營運平台，打造一致的場域服務流程。",
      en: "Unified integration of LPR, parking management, charging infrastructure, and cloud operations."
    },
    image: "/images/home/parking-charging.svg",
    tag: "Parking & EV",
    href: "/products#parking-charging"
  },
  {
    slug: "security",
    title: { zh: "智慧安防影像", en: "Smart Security Vision" },
    description: {
      zh: "結合影像設備、AI 分析、周界防護與事件告警，提升場域安全與管理效率。",
      en: "Built around LDZ-developed cameras with AI analytics, perimeter protection, people flow analysis, and event alerts."
    },
    image: "/images/home/security-camera.svg",
    tag: "AI Vision",
    href: "/products#security-vision"
  },
  {
    slug: "automation-cloud",
    title: { zh: "自動化設備與機器人開發", en: "Automation & Robotics Development" },
    description: {
      zh: "整合開發自動化設備與控制系統、機器人、Kiosk、自助服務、無人化。",
      en: "Integrated development of automation equipment, control systems, robotics, kiosks, self-service, and unmanned solutions."
    },
    image: "/images/home/automation-cloud.svg",
    tag: "Automation",
    href: "/products#automation-cloud"
  }
];

export const aboutSummary = {
  title: { zh: "關於立達興", en: "About LDZ" },
  description: {
    zh: "立達興科技股份有限公司成立於 2013 年，為專注於能源系統、自動化設備、AIoT 物聯網、雲端平台與系統整合開發的科技服務企業。公司具備 OEM / ODM、軟硬體整合、電器承裝、可視化平台開發與專案落地能力，並設有台北辦事處與新竹湖口製造工廠，持續以技術整合與客製化能力，協助客戶打造更高效率、更安全、更智慧的應用場域。\n\n立達興的服務範圍涵蓋能源服務工程、太陽能系統、儲能系統、充電樁系統、能源管理系統（EMS）、機器人設備、無人化服務系統、AIoT 系統、雲端平台與智慧場域整合。公司從早期自動化設備與機器人技術出發，逐步擴展到能源與數位平台領域，形成兼具硬體製造、系統串接、平台開發與維運管理的一站式整合能力。\n\n多年來，立達興持續累積跨產業實務經驗，應用場域涵蓋工廠、商辦、學校、醫療院所、停車場、公共建設與社區住宅等，並在能源管理、充電營運、自助設備、智慧監控與儲能整合等領域建立扎實基礎。公司亦逐步發展自主整合方案，朝向「設備 + 系統 + 平台 + 維運」的完整服務模式前進。",
    en: "Founded in 2013, LDZ Group Co., Ltd. is a technology service company focused on energy systems, automation equipment, AIoT, cloud platforms, and integrated system development. The company offers OEM / ODM services, hardware-software integration, electrical contracting, visualization platform development, and end-to-end project delivery capabilities. With a Taipei office and a manufacturing facility in Hukou, Hsinchu, LDZ continues to help clients build safer, smarter, and more efficient application environments through technical integration and customization.\n\nLDZ's service scope covers energy engineering services, solar power systems, energy storage systems, EV charging systems, energy management systems (EMS), robotic equipment, unmanned service systems, AIoT systems, cloud platforms, and smart-site integration. Starting from automation equipment and robotics technologies, the company has gradually expanded into the energy and digital platform sectors, forming a one-stop integration capability that combines hardware manufacturing, system connectivity, platform development, and operations management.\n\nOver the years, LDZ has built extensive cross-industry experience across factories, office buildings, schools, medical institutions, parking facilities, public infrastructure, and residential communities. The company has established strong foundations in energy management, charging operations, self-service equipment, smart surveillance, and energy storage integration, while continuing to develop proprietary integrated solutions toward a complete service model of equipment + systems + platforms + operations."
  },
  highlights: [
    {
      zh: "工程整合與跨系統協同能力",
      en: "Engineering integration and cross-system coordination"
    },
    {
      zh: "能源、停車、充電、AI 視覺與平台服務整合",
      en: "Integrated energy, parking, EV charging, AI vision, and cloud platforms"
    },
    {
      zh: "可延伸未來 AI 場域應用的技術基礎",
      en: "Scalable foundation for future AI site applications"
    }
  ]
};

export const featuredEntries: FeatureEntry[] = [
  {
    title: { zh: "智慧能源系統", en: "Smart Energy Systems" },
    description: {
      zh: "整合能源監測、需量優化、儲能與再生能源調度，提升整體能源管理效能。",
      en: "Energy monitoring, demand optimization, storage, and renewable dispatch integration."
    },
    href: "/products#smart-energy",
    image: "/images/products/smart-energy.svg",
    tag: "Products"
  },
  {
    title: { zh: "EV 充電與停車管理", en: "EV Charging & Parking Management" },
    description: {
      zh: "整合停車動線、計費、車牌辨識與充電營運，提供一致的場域管理體驗。",
      en: "Integrated parking flow, billing, license plate recognition, and charging operations."
    },
    href: "/solutions#parking-ev",
    image: "/images/solutions/parking-ev.svg",
    tag: "Solutions"
  },
  {
    title: { zh: "AI 安防影像", en: "AI Security Vision" },
    description: {
      zh: "結合自有影像設備與 AI 視覺演算法，提供主動式安全管理與事件辨識能力。",
      en: "LDZ-developed cameras paired with AI vision algorithms for proactive safety management."
    },
    href: "/products#security-vision",
    image: "/images/products/ai-security.svg",
    tag: "AI Vision"
  },
  {
    title: { zh: "自動化與自助服務", en: "Automation & Self-Service" },
    description: {
      zh: "整合工業設備、Kiosk、自助服務流程與後台資料串接，支援多元場域應用。",
      en: "Industrial equipment integration, kiosks, self-service workflows, and backend data connectivity."
    },
    href: "/products#self-service-medical",
    image: "/images/products/automation-service.svg",
    tag: "Automation"
  }
];

export const futureAiSection = {
  title: {
    zh: "智慧場域的未來 AI",
    en: "Future AI for Smart Infrastructure"
  },
  description: {
    zh: "立達興正從系統整合商持續進化為平台導向的技術服務公司，將 AI、能源與場域數據整合為可規模化的智慧營運能力。",
    en: "LDZ is evolving from a system integrator into a platform-oriented technology company combining AI, energy, and site data."
  },
  items: [
    {
      zh: "AI Energy OS：能源資料治理、告警與優化應用",
      en: "AI Energy OS: energy data governance, alerts, and optimization"
    },
    {
      zh: "智慧停車 Agent：整合停車、充電與場域營運協作",
      en: "Smart parking agent: coordination across parking, charging, and site operations"
    },
    {
      zh: "AI 維運應用：支援事件通知、巡檢與多據點管理",
      en: "AI operations: event notifications, inspections, and multi-site management"
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
    zh: "以 AI Energy OS 為核心，串聯智慧能源、自動化、AI 視覺、IoT 平台與智慧基礎設施，形成可持續擴展的場域技術藍圖。",
    en: "Centered on AI Energy OS, LDZ connects smart energy, automation, AI vision, IoT platforms, and smart infrastructure into a scalable technology map."
  },
  image: "/images/home/technology-map.png",
  imageAlt: {
    zh: "LDZ Group Technology Map 技術地圖",
    en: "LDZ Group Technology Map"
  },
  replaceHint: {
    zh: "未來只要替換 /public/images/home/technology-map.png，或修改 data/home.ts 中的圖片路徑，即可更新本區內容。",
    en: "To update this section later, simply replace /public/images/home/technology-map.png or change the image path in data/home.ts."
  },
  slogan: {
    zh: "賦能智慧能源、自動化、AI 與永續發展",
    en: "Empowering Smart Energy, Automation, AI, and Sustainability"
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
        { zh: "水力發電", en: "Hydro Power" }
      ]
    },
    {
      title: { zh: "太陽能", en: "Solar Energy" },
      items: [
        { zh: "鈣鈦礦太陽能", en: "Perovskite Solar" },
        { zh: "太陽光電", en: "Solar PV" }
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
      title: { zh: "智慧基礎設施", en: "Smart Infrastructure" },
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
    { zh: "零碳", en: "Zero Carbon" }
  ],
  visionLine: {
    zh: "智慧能源領航｜數位驅動製造｜零碳未來",
    en: "Leadership in Smart Energy | Digital-Driven Manufacturing | Zero-Carbon Future"
  }
};

export const contactCta = {
  title: {
    zh: "與立達興一起規劃下一個智慧場域專案",
    en: "Plan your next smart infrastructure project with LDZ"
  },
  description: {
    zh: "歡迎洽談專案合作、索取產品資訊，或預約技術顧問諮詢。",
    en: "Discuss project collaboration, request product information, or schedule a technical consultation."
  },
  primary: {
    label: { zh: "聯絡業務團隊", en: "Contact Sales" },
    href: "/contact"
  },
  secondary: {
    label: { zh: "瀏覽解決方案", en: "Browse Solutions" },
    href: "/solutions"
  }
};
