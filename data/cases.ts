import type { LocalizedText } from "./i18n";

export type CaseItem = {
  title: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
};

export const caseStudies: CaseItem[] = [
  {
    title: { zh: "科技園區能源管理專案", en: "Science Park Energy Management Project" },
    category: { zh: "智慧能源", en: "Smart Energy" },
    location: { zh: "新竹", en: "Hsinchu" },
    summary: {
      zh: "整合電力監測與告警機制，協助多棟建築提升能源可視化。",
      en: "Integrated power monitoring and alerting to improve energy visibility across multiple buildings."
    }
  },
  {
    title: { zh: "複合式停車與充電場站", en: "Integrated Parking and EV Charging Site" },
    category: { zh: "停車充電", en: "Parking & Charging" },
    location: { zh: "台中", en: "Taichung" },
    summary: {
      zh: "串接停車流程、LPR 與充電設備，建立統一營運後台。",
      en: "Connected parking flow, LPR, and charging equipment into a unified operations backend."
    }
  },
  {
    title: { zh: "企業總部 AI 安防升級", en: "Enterprise HQ AI Security Upgrade" },
    category: { zh: "AI 影像", en: "AI Vision" },
    location: { zh: "台北", en: "Taipei" },
    summary: {
      zh: "導入自研攝影機與事件告警整合，強化門禁與周界安全。",
      en: "Introduced LDZ-developed cameras and event alerts to strengthen access control and perimeter security."
    }
  },
  {
    title: { zh: "自助服務櫃台整合案", en: "Self-Service Counter Integration Project" },
    category: { zh: "自動化設備", en: "Automation Equipment" },
    location: { zh: "高雄", en: "Kaohsiung" },
    summary: {
      zh: "建置前台自助設備與後台資料交換流程，提升服務效率。",
      en: "Built front-end self-service equipment and backend data exchange workflows to improve service efficiency."
    }
  }
];
