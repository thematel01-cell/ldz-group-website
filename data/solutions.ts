import type { LocalizedText } from "./i18n";

export type SolutionItem = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  bullets: LocalizedText[];
};

export const solutions: SolutionItem[] = [
  {
    id: "community-building",
    title: { zh: "社區大樓方案", en: "Residential & Building Solution" },
    description: {
      zh: "整合門禁、停車、安防、充電與公共設備管理，提升住戶體驗與營運效率。",
      en: "Integrates access control, parking, security, charging, and shared facility management for better resident experience and operations."
    },
    image: "/images/solutions/community-building.jpg",
    bullets: [
      { zh: "住戶出入整合", en: "Resident Access Integration" },
      { zh: "停車與充電管理", en: "Parking and Charging Management" },
      { zh: "公共區域影像監控", en: "Common Area Vision Monitoring" }
    ]
  },
  {
    id: "parking-ev",
    title: { zh: "停車場與充電整合方案", en: "Parking and EV Charging Solution" },
    description: {
      zh: "以停車動線與充電服務為核心，建立完整場站營運邏輯與雲端控管能力。",
      en: "Centers on parking flow and EV charging to build complete station operations with cloud-based control."
    },
    image: "/images/solutions/parking-ev.jpg",
    bullets: [
      { zh: "車位與充電調度", en: "Parking and Charging Dispatch" },
      { zh: "收費與帳務整合", en: "Billing and Account Integration" },
      { zh: "多站點管理平台", en: "Multi-Site Management Platform" }
    ]
  },
  {
    id: "factory-energy",
    title: { zh: "工廠能源管理方案", en: "Factory Energy Management Solution" },
    description: {
      zh: "導入能源可視化、需量管控、異常告警與設備聯動，支援節能與穩定供電。",
      en: "Introduces energy visibility, demand control, alerts, and equipment coordination for stable and efficient plant operations."
    },
    image: "/images/solutions/factory-energy.jpg",
    bullets: [
      { zh: "電力監控", en: "Power Monitoring" },
      { zh: "需量優化", en: "Demand Optimization" },
      { zh: "異常事件通知", en: "Abnormal Event Alerts" }
    ]
  },
  {
    id: "smart-security",
    title: { zh: "智慧安防方案", en: "Smart Security Solution" },
    description: {
      zh: "以自研攝影機、邊緣分析與雲端事件流整合，建構主動型安全管理架構。",
      en: "Combines LDZ cameras, edge analytics, and cloud event flows to create a proactive security architecture."
    },
    image: "/images/solutions/smart-security.jpg",
    bullets: [
      { zh: "周界防護", en: "Perimeter Protection" },
      { zh: "AI 事件辨識", en: "AI Event Recognition" },
      { zh: "告警派送與追蹤", en: "Alert Dispatch and Tracking" }
    ]
  },
  {
    id: "medical-public",
    title: { zh: "醫療與公共場域方案", en: "Healthcare and Public-Site Solution" },
    description: {
      zh: "針對高流量公共空間，提供自助服務、資訊導引與事件回報機制。",
      en: "Designed for high-traffic public spaces with self-service, guidance, and event reporting capabilities."
    },
    image: "/images/solutions/medical-public.jpg",
    bullets: [
      { zh: "自助流程", en: "Self-Service Workflow" },
      { zh: "資訊顯示", en: "Information Display" },
      { zh: "服務效率提升", en: "Service Efficiency Improvement" }
    ]
  }
];
