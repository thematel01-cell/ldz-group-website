import type { LocalizedText } from "./i18n";

export const futureAiArchitecture = {
  image: "/images/future-ai/ai-energy-os-architecture.jpg",
  alt: {
    zh: "LDZ AI Energy OS 架構圖",
    en: "LDZ AI Energy OS architecture diagram"
  },
  eyebrow: {
    zh: "AI Energy OS 架構",
    en: "AI Energy OS Architecture"
  },
  title: {
    zh: "LDZ AI Energy OS",
    en: "LDZ AI Energy OS"
  },
  description: {
    zh: "LDZ AI Energy OS 是一套面向智慧能源與智慧場域的 AI 原生平台架構，從現場設備連接、資料治理、代理人協作到應用服務層，建立可持續擴充的智慧營運基礎。",
    en: "LDZ AI Energy OS is an AI-native platform architecture for smart energy and intelligent site operations, spanning equipment connectivity, data governance, agent collaboration, and application services."
  },
  architectureTitle: {
    zh: "架構說明",
    en: "Architecture Overview"
  },
  architecturePoints: [
    {
      zh: "裝置層與通訊層負責整合太陽能、儲能、充電樁、AGV / AMR、攝影機與 IoT 設備，並透過 PLC、Gateway、OPC UA、MQTT 等協定完成現場資料接入。",
      en: "The device and communication layers integrate solar, battery storage, EV chargers, AGV / AMR, cameras, and IoT devices through PLC, gateway, OPC UA, and MQTT protocols."
    },
    {
      zh: "資料與平台層建立能源資料平台、IoT 資料平台與碳數據平台，提供資料彙整、標準化、儲存與跨系統交換能力。",
      en: "The data and platform layer establishes energy, IoT, and carbon data platforms for aggregation, standardization, storage, and cross-system exchange."
    },
    {
      zh: "AI Agent 層由監控、分析、派工與維護代理人組成，讓系統從單純監看進化為可判讀、可決策、可協作的智慧維運架構。",
      en: "The AI agent layer combines monitoring, analysis, dispatch, and maintenance agents to evolve operations from passive monitoring into coordinated intelligent action."
    },
    {
      zh: "應用層可向上延伸至能源儀表板、智慧工廠、EV 充電與智慧建築等場域應用，形成跨場域的統一營運入口。",
      en: "The application layer extends upward into energy dashboards, smart factories, EV charging, and smart building use cases as a unified operational entry point."
    }
  ],
  benefitsTitle: {
    zh: "導入效益",
    en: "Key Benefits"
  },
  benefits: [
    {
      zh: "打通設備、資料與應用之間的斷點，降低多系統整合成本與後續擴充難度。",
      en: "Breaks silos between devices, data, and applications to reduce integration cost and future expansion complexity."
    },
    {
      zh: "以 AI Agent 架構提升告警判讀、派工協調、事件追蹤與預防維護效率。",
      en: "Improves alert interpretation, dispatch coordination, event tracking, and predictive maintenance through AI agents."
    },
    {
      zh: "同時支援能源管理、碳管理與智慧場域營運，形成可視化、可分析、可執行的管理閉環。",
      en: "Supports energy, carbon, and smart-site operations within a closed loop of visibility, analysis, and execution."
    }
  ]
};

export const futureAiPrograms: Array<{
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    title: { zh: "AI Energy OS", en: "AI Energy OS" },
    description: {
      zh: "結合能源資料、設備狀態與策略控制，打造可學習的能源營運平台。",
      en: "Combines energy data, equipment status, and strategy control into a learnable energy operations platform."
    }
  },
  {
    title: { zh: "智慧停車代理人", en: "Smart Parking Agent" },
    description: {
      zh: "以代理人邏輯協調車位、充電、動線與營運規則，提高場站效率。",
      en: "Uses agent-based coordination for parking, charging, traffic flow, and operations rules to improve site efficiency."
    }
  },
  {
    title: { zh: "AI 維運與事件通知", en: "AI Operations and Event Notifications" },
    description: {
      zh: "對異常事件進行分類、派送與追蹤，協助維運團隊更快反應。",
      en: "Classifies, dispatches, and tracks abnormal events to help operations teams respond faster."
    }
  },
  {
    title: { zh: "智慧場域平台願景", en: "Smart Site Platform Vision" },
    description: {
      zh: "整合能源、安防、停車、自助服務與數據治理，形成平台型科技服務。",
      en: "Integrates energy, security, parking, self-service, and data governance into a platform-driven technology service."
    }
  }
];
