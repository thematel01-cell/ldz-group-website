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
    zh: "智慧基礎設施整合商",
    en: "Smart Infrastructure Integrator"
  },
  title: {
    zh: "立達興科技 LDZ Group",
    en: "LDZ Group"
  },
  subtitle: {
    zh: "智慧能源 × 停車充電 × AI 影像 × 自動化整合",
    en: "Smart Energy × Parking & EV Charging × AI Vision × Automation Integration"
  },
  description: {
    zh: "從能源管理、EV 充電、智慧停車、AI 安防到雲端整合平台，提供場域級智慧化解決方案。",
    en: "From energy management, EV charging, and smart parking to AI security and cloud platforms, we deliver site-scale smart infrastructure solutions."
  },
  primaryCta: {
    label: { zh: "了解產品", en: "Explore Products" },
    href: "/products"
  },
  secondaryCta: {
    label: { zh: "聯絡我們", en: "Contact Us" },
    href: "/contact"
  },
  stats: [
    { value: "2013", label: { zh: "公司成立", en: "Established" } },
    { value: "B2B", label: { zh: "企業與場域導向", en: "Enterprise Focus" } },
    { value: "AIoT", label: { zh: "跨域整合核心", en: "Integration Core" } },
    { value: "24/7", label: { zh: "維運服務可擴充", en: "Scalable Service" } }
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
          en: "L — Leadership in Smart Energy"
        },
        description: {
          zh: "引領智慧能源與系統整合發展",
          en: "Driving innovation in intelligent energy systems"
        }
      },
      {
        key: "D",
        heading: {
          zh: "D｜數位驅動製造",
          en: "D — Digital-Driven Manufacturing"
        },
        description: {
          zh: "以自動化與數位技術推動產業升級",
          en: "Empowering industry through automation and digital integration"
        }
      },
      {
        key: "Z",
        heading: {
          zh: "Z｜零碳轉型未來",
          en: "Z — Zero-Carbon Transformation"
        },
        description: {
          zh: "實現永續能源與淨零排放目標",
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
      zh: "EMS、儲能、太陽能與微電網整合，提升能源效率與用電可視化。",
      en: "Integrating EMS, storage, solar, and microgrids to improve efficiency and energy visibility."
    },
    image: "/images/home/energy.jpg",
    tag: "Energy",
    href: "/products#smart-energy"
  },
  {
    slug: "parking-charging",
    title: { zh: "智慧停車與充電", en: "Smart Parking & EV Charging" },
    description: {
      zh: "車牌辨識、停管系統、充電樁工程與雲端管理平台一體化整合。",
      en: "Unified integration of LPR, parking management, charging infrastructure, and cloud operations."
    },
    image: "/images/home/parking-charging.jpg",
    tag: "Parking & EV",
    href: "/products#parking-charging"
  },
  {
    slug: "security",
    title: { zh: "智慧安防影像", en: "Smart Security Vision" },
    description: {
      zh: "以立達興自研攝影機為核心，結合 AI 影像分析、周界防護、人流分析與事件告警。",
      en: "Built around LDZ-developed cameras with AI analytics, perimeter protection, people flow analysis, and event alerts."
    },
    image: "/images/home/security-camera.jpg",
    tag: "AI Vision",
    href: "/products#security-vision"
  },
  {
    slug: "automation-cloud",
    title: { zh: "自動化與雲平台", en: "Automation & Cloud Platform" },
    description: {
      zh: "設備整合、機器人、Kiosk、自助服務與 IT / OT / Cloud 串接能力。",
      en: "Equipment integration, robotics, kiosks, self-service, and IT / OT / Cloud connectivity."
    },
    image: "/images/home/automation-cloud.jpg",
    tag: "Automation",
    href: "/products#automation-cloud"
  }
];

export const aboutSummary = {
  title: { zh: "關於立達興", en: "About LDZ" },
  description: {
    zh: "立達興科技成立於 2013 年，聚焦系統整合、能源、自動化、AIoT 與雲平台，為企業與場域提供從規劃、建置到維運的一站式技術服務。",
    en: "Founded in 2013, LDZ Group focuses on system integration, energy, automation, AIoT, and cloud platforms for end-to-end enterprise and site services."
  },
  highlights: [
    {
      zh: "工程整合與跨系統協作能力",
      en: "Engineering integration and cross-system coordination"
    },
    {
      zh: "能源、停車充電、AI 影像與雲平台整合",
      en: "Integrated energy, parking, EV charging, AI vision, and cloud platforms"
    },
    {
      zh: "可延伸至未來 AI 場域應用",
      en: "Scalable foundation for future AI site applications"
    }
  ]
};

export const featuredEntries: FeatureEntry[] = [
  {
    title: { zh: "智慧能源系統", en: "Smart Energy Systems" },
    description: {
      zh: "能源監控、需量優化、儲能與再生能源調度整合。",
      en: "Energy monitoring, demand optimization, storage, and renewable dispatch integration."
    },
    href: "/products#smart-energy",
    image: "/images/products/smart-energy.jpg",
    tag: "Products"
  },
  {
    title: { zh: "EV 充電與停車管理", en: "EV Charging & Parking Management" },
    description: {
      zh: "停車流程、收費管理、車牌辨識與充電營運平台整合。",
      en: "Integrated parking flow, billing, license plate recognition, and charging operations."
    },
    href: "/solutions#parking-ev",
    image: "/images/solutions/parking-ev.jpg",
    tag: "Solutions"
  },
  {
    title: { zh: "AI 安防影像", en: "AI Security Vision" },
    description: {
      zh: "自研攝影機搭配 AI 視覺演算法，打造主動式安全管理。",
      en: "LDZ-developed cameras paired with AI vision algorithms for proactive safety management."
    },
    href: "/products#security-vision",
    image: "/images/products/ai-security.jpg",
    tag: "AI Vision"
  },
  {
    title: { zh: "自動化設備與自助服務", en: "Automation & Self-Service" },
    description: {
      zh: "工業設備整合、Kiosk、自助流程與後台平台資料串接。",
      en: "Industrial equipment integration, kiosks, self-service workflows, and backend data connectivity."
    },
    href: "/products#self-service-medical",
    image: "/images/products/automation-service.jpg",
    tag: "Automation"
  }
];

export const futureAiSection = {
  title: {
    zh: "Future AI for Smart Infrastructure",
    en: "Future AI for Smart Infrastructure"
  },
  description: {
    zh: "立達興正從系統整合商，升級為結合 AI、能源與場域數據的平台型科技公司，持續發展 AI Energy OS、智慧停車代理人與智慧維運應用。",
    en: "LDZ is evolving from a system integrator into a platform-oriented technology company combining AI, energy, and site data."
  },
  items: [
    {
      zh: "AI Energy OS：能源資料治理、告警與最佳化",
      en: "AI Energy OS: energy data governance, alerts, and optimization"
    },
    {
      zh: "智慧停車代理人：車位、充電與場域營運協調",
      en: "Smart parking agent: coordination across parking, charging, and site operations"
    },
    {
      zh: "AI 維運應用：事件通知、巡檢與多站點管理",
      en: "AI operations: event notifications, inspections, and multi-site management"
    }
  ],
  href: "/future-ai"
};

export const technologyMapSection = {
  eyebrow: {
    zh: "技術藍圖",
    en: "Technology Map"
  },
  title: {
    zh: "LDZ Group Technology Map",
    en: "LDZ Group Technology Map"
  },
  description: {
    zh: "以 AI Energy OS 為核心，串連智慧能源、自動化、AI 視覺、IoT 平台與智慧基礎設施，形成可持續擴充的技術版圖。",
    en: "Centered on AI Energy OS, LDZ connects smart energy, automation, AI vision, IoT platforms, and smart infrastructure into a scalable technology map."
  },
  image: "/images/home/technology-map.png",
  imageAlt: {
    zh: "LDZ Group Technology Map 技術藍圖",
    en: "LDZ Group Technology Map"
  },
  replaceHint: {
    zh: "未來只要替換 /public/images/home/technology-map.png，或修改 data/home.ts 中的圖片路徑，即可更新本區內容。",
    en: "To update this section later, simply replace /public/images/home/technology-map.png or change the image path in data/home.ts."
  },
  slogan: {
    zh: "驅動智慧能源、自動化、AI 與永續發展",
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
      title: { zh: "能源儲存", en: "Energy Storage" },
      items: [
        { zh: "電池系統", en: "Battery System" },
        { zh: "電網儲能", en: "Grid Storage" },
        { zh: "水力應用", en: "Hydro Power" }
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
        { zh: "檢測", en: "Inspection" },
        { zh: "監控", en: "Monitoring" },
        { zh: "分析", en: "Analytics" }
      ]
    },
    {
      title: { zh: "能源管理", en: "Energy Management" },
      items: [
        { zh: "最佳化", en: "Optimization" },
        { zh: "監測", en: "Monitoring" },
        { zh: "控制", en: "Control" }
      ]
    },
    {
      title: { zh: "IoT 平台", en: "IoT Platform" },
      items: [
        { zh: "資料整合", en: "Data Integration" },
        { zh: "裝置連接", en: "Device Connectivity" },
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
    zh: "與立達興團隊討論下一個智慧場域專案",
    en: "Plan your next smart infrastructure project with LDZ"
  },
  description: {
    zh: "詢問專案合作、取得產品資料，或與業務團隊預約技術諮詢。",
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
