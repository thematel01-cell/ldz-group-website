import type { LocalizedText } from "./i18n";

export type TimelineItem = {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const timelineItems: TimelineItem[] = [
  {
    year: "2013",
    title: { zh: "公司成立", en: "Company Founded" },
    description: {
      zh: "以系統整合與工程執行為基礎，建立企業級專案交付能力。",
      en: "Established an enterprise-grade delivery foundation through system integration and engineering execution."
    }
  },
  {
    year: "2015",
    title: { zh: "能源工程與 EPC 發展", en: "Energy Engineering and EPC Expansion" },
    description: {
      zh: "導入能源管理、電力監控與場域工程整合，擴大智慧能源能力。",
      en: "Expanded smart energy capabilities through energy management, power monitoring, and integrated field engineering."
    }
  },
  {
    year: "2019",
    title: { zh: "智慧製造與自動化拓展", en: "Smart Manufacturing and Automation Growth" },
    description: {
      zh: "延伸至設備控制、自助服務、工業現場整合與智慧製造應用。",
      en: "Extended into equipment control, self-service solutions, industrial integration, and smart manufacturing applications."
    }
  },
  {
    year: "2021",
    title: { zh: "智慧場域整合深化", en: "Deeper Smart-Site Integration" },
    description: {
      zh: "整合停車、充電、安防影像與雲端平台，形成跨域場域方案。",
      en: "Integrated parking, EV charging, security vision, and cloud platforms into cross-domain site solutions."
    }
  },
  {
    year: "2025",
    title: { zh: "AI 與平台化發展", en: "AI and Platform Development" },
    description: {
      zh: "朝向 AI Energy OS、智慧停車代理人與智慧維運平台持續發展。",
      en: "Advancing toward AI Energy OS, smart parking agents, and intelligent operations platforms."
    }
  }
];
