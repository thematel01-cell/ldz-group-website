import type { LocalizedText } from "./i18n";

export type ProductCategory = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  items: LocalizedText[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "smart-energy",
    title: { zh: "智慧能源系統", en: "Smart Energy Systems" },
    description: {
      zh: "整合 EMS、儲能、太陽能、配電監控與微電網管理，協助企業提升能源效率與彈性。",
      en: "Integrates EMS, storage, solar, distribution monitoring, and microgrid management for better energy efficiency and resilience."
    },
    image: "/images/products/smart-energy.svg",
    items: [
      { zh: "EMS 平台", en: "EMS Platform" },
      { zh: "電力監控", en: "Power Monitoring" },
      { zh: "儲能整合", en: "Energy Storage Integration" },
      { zh: "太陽能與微電網", en: "Solar and Microgrid" }
    ]
  },
  {
    id: "parking-charging",
    title: { zh: "智慧停車與充電", en: "Smart Parking & EV Charging" },
    description: {
      zh: "從進出場控制到充電營運管理，串接車牌辨識、收費、場控與雲端平台。",
      en: "From vehicle entry control to charging operations, connecting LPR, billing, site control, and cloud management."
    },
    image: "/images/products/parking-charging.svg",
    items: [
      { zh: "LPR 車牌辨識", en: "LPR Recognition" },
      { zh: "停管系統", en: "Parking Management" },
      { zh: "EV 充電樁工程", en: "EV Charger Deployment" },
      { zh: "營運後台", en: "Operations Dashboard" }
    ]
  },
  {
    id: "security-vision",
    title: { zh: "智慧安防影像", en: "Smart Security Vision" },
    description: {
      zh: "以立達興自研攝影機與 AI 影像分析為核心，強化事件偵測與場域治理。",
      en: "Built on LDZ-developed cameras and AI analytics to strengthen event detection and site governance."
    },
    image: "/images/products/ai-security.svg",
    items: [
      { zh: "自研攝影機", en: "LDZ Cameras" },
      { zh: "周界防護", en: "Perimeter Protection" },
      { zh: "AI 分析", en: "AI Analytics" },
      { zh: "事件告警整合", en: "Event Alert Integration" }
    ]
  },
  {
    id: "automation-cloud",
    title: { zh: "自動化與雲平台", en: "Automation & Cloud Platform" },
    description: {
      zh: "整合設備控制、資料交換、機器人與雲端服務，打造可擴充的營運架構。",
      en: "Integrates equipment control, data exchange, robotics, and cloud services into a scalable operating architecture."
    },
    image: "/images/products/automation-service.svg",
    items: [
      { zh: "設備整合", en: "Equipment Integration" },
      { zh: "機器人應用", en: "Robotics Applications" },
      { zh: "Kiosk 平台", en: "Kiosk Platform" },
      { zh: "IT / OT / Cloud 串接", en: "IT / OT / Cloud Connectivity" }
    ]
  },
  {
    id: "self-service-medical",
    title: { zh: "自助服務與智慧醫療", en: "Self-Service & Smart Healthcare" },
    description: {
      zh: "支援自助報到、流程導引、資訊看板與醫療場域數位化整合需求。",
      en: "Supports self check-in, guided workflows, digital signage, and healthcare site digitization."
    },
    image: "/images/products/self-service-medical.svg",
    items: [
      { zh: "自助報到", en: "Self Check-In" },
      { zh: "智慧櫃台", en: "Smart Counter" },
      { zh: "資訊看板", en: "Digital Signage" },
      { zh: "醫療場域流程整合", en: "Healthcare Workflow Integration" }
    ]
  }
];
