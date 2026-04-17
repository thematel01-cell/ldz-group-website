import type { Metadata } from "next";

export const securityVisionPageData = {
  seo: {
    title: "LDZ 智慧安防影像｜AI 視覺辨識・周邊告警・控制連動｜立達興科技",
    description:
      "LDZ 智慧安防影像整合影像可視化、AI 視覺辨識、周界防護、告警通知、控制連動與平台管理，協助場域更早發現風險、更快處理事件。"
  },
  hero: {
    title: "LDZ 智慧安防影像",
    subtitle: "透過影像可視化與 AI 偵測能力，讓場域能更早發現風險、更快處理事件。",
    description:
      "LDZ 智慧安防影像整合前端攝影機部署、AI 視覺辨識、周界防護、事件告警、控制連動與管理平台，協助工廠、停車場、社區、醫院、校園與公共場域建立更即時、更主動的智慧安防系統。",
    chips: ["了解功能", "應用場景", "聯絡洽詢"],
    note: "從被動監看，走向主動預警與智慧處置。"
  },
  valueHighlights: {
    title: "從被動監看，走向主動預警",
    description:
      "傳統監控多停留在事後回看，LDZ 智慧安防影像則透過 AI 偵測、即時告警與控制連動，讓場域管理從「看到畫面」升級為「理解事件、快速反應、提前預防」。",
    cards: [
      {
        title: "影像可視化",
        content: "即時掌握場域畫面與事件狀態，提升管理透明度與現場可視性。"
      },
      {
        title: "AI 視覺辨識",
        content: "透過 AI 模型進行目標辨識、異常事件偵測與自動分析，減少人工盯控負擔。"
      },
      {
        title: "告警與連動",
        content: "當異常事件發生時，可立即觸發告警通知、設備控制或平台聯動，加快處置速度。"
      },
      {
        title: "早期預防",
        content: "透過即時偵測、預警與通知機制，協助場域在事件擴大前提早介入處理。"
      }
    ]
  },
  equipmentGraphic: {
    eyebrow: "設備示意",
    title: "邊緣運算與安防物聯網設備",
    description:
      "以邊緣運算攝影機與智慧車辨柱為核心，整合運算效能、防護能力、感知能力與維運機制，支撐智慧安防場域的前端部署基礎。",
    image: "/images/products/security-edge-camera.jpg"
  },
  features: {
    title: "核心功能模組",
    description:
      "從前端影像設備到 AI 分析與平台管理，LDZ 智慧安防影像提供完整的智慧安防功能架構。",
    items: [
      {
        title: "影像設備與前端部署",
        content:
          "依場域需求部署攝影機與前端設備，建立穩定的影像採集與監看基礎，支撐後續 AI 辨識與事件管理。"
      },
      {
        title: "周界與區域防護",
        content:
          "支援電子圍籬、禁入區、越界偵測、重點區域監控等應用，協助建立主動式周界防護機制。"
      },
      {
        title: "AI 事件辨識分析",
        content:
          "可針對人員、車輛、異常停留、入侵、聚集與違規行為進行辨識分析，提升事件判讀效率。"
      },
      {
        title: "告警通知機制",
        content:
          "當系統偵測到異常事件時，可透過平台、訊息、Email、LINE 或其他方式進行即時通知。"
      },
      {
        title: "控制連動",
        content:
          "可與聲光設備、門禁、柵欄、警報器、廣播或其他控制系統進行連動，形成完整處置流程。"
      },
      {
        title: "平台管理與事件追蹤",
        content:
          "整合事件記錄、畫面查詢、影像回放、告警管理與儀表板介面，協助管理者快速掌握整體狀況。"
      }
    ]
  },
  aiVision: {
    title: "AI 視覺辨識能力",
    description:
      "透過 AI 模型與影像分析邏輯，系統可針對場域常見風險事件進行辨識、分類與預警，協助管理者從大量畫面中快速聚焦異常，提升事件處理效率。",
    items: [
      {
        title: "人員出現與逗留偵測",
        content: "可辨識指定區域是否有人員進入、停留過久或異常徘徊。"
      },
      {
        title: "區域入侵與越界偵測",
        content: "針對禁入區、周界線與重點區域進行監控，當發生侵入或越界時立即告警。"
      },
      {
        title: "車輛進出與違停辨識",
        content: "可用於停車場、出入口與周邊車道，掌握車流動態與異常停放情形。"
      },
      {
        title: "人流與聚集分析",
        content: "協助判斷特定區域的人流變化與異常聚集情形，支援管理決策。"
      },
      {
        title: "異常事件辨識",
        content: "針對場域定義的異常狀況進行自動分析，降低漏看與延誤風險。"
      },
      {
        title: "事件快照與影像追溯",
        content: "事件發生後可快速查詢快照、告警紀錄與前後影像，提高追蹤與查證效率。"
      }
    ]
  },
  workflow: {
    title: "從偵測到處置的智慧流程",
    description:
      "LDZ 智慧安防影像不只停留在辨識事件，而是延伸至告警通知、設備聯動、平台管理與事件追蹤，形成完整的智慧安防處置閉環。",
    steps: [
      {
        title: "AI 偵測異常事件",
        content: "系統持續分析場域影像，自動辨識異常目標、入侵行為或風險事件。"
      },
      {
        title: "平台自動產生告警",
        content: "當符合告警條件時，平台立即建立事件並標示異常位置與影像資訊。"
      },
      {
        title: "聯動控制設備",
        content: "可依規則觸發聲光警示、門禁控制、警報器、柵欄或其他周邊設備動作。"
      },
      {
        title: "即時通知管理人員",
        content: "透過平台、LINE、Email 或其他方式，將事件即時傳送給管理人員處理。"
      },
      {
        title: "事件追蹤與後續管理",
        content: "保留事件紀錄、畫面回放與處理狀態，方便後續追蹤、統計與改善。"
      }
    ]
  },
  applications: {
    title: "應用場景",
    description: "可依不同產業與場域需求，導入相對應的影像設備、AI 邏輯與告警聯動機制。",
    showcaseImage: "/images/products/security1.jpg",
    showcaseAlt: "LDZ 智慧安防影像應用場景示意",
    items: [
      {
        title: "工廠園區",
        content: "支援出入口管理、危險區域監看、異常入侵預警與廠區安全巡檢。"
      },
      {
        title: "停車場",
        content: "可結合車流監控、區域異常偵測、車輛辨識與停車安防整合應用。"
      },
      {
        title: "社區大樓",
        content: "針對公共區域、出入口與夜間環境進行安全監控與異常事件預警。"
      },
      {
        title: "醫院",
        content: "可用於重點區域監控、夜間巡檢、出入口安全管理與異常事件即時通知。"
      },
      {
        title: "校園",
        content: "支援校園安全監控、重點區域入侵偵測與事件回溯管理。"
      },
      {
        title: "公共場域",
        content: "可導入於車站、園區、開放場域與公共設施，提升整體安全管理效率。"
      }
    ]
  },
  summary: {
    title: "為什麼選擇 LDZ 智慧安防影像",
    bullets: [
      "以立達興自研攝影機與影像能力為基礎",
      "支援 AI 視覺辨識與事件分析",
      "支援告警通知與設備控制連動",
      "可依不同場域需求進行客製導入",
      "可與停車、門禁、能源與平台系統整合",
      "從監看走向主動預防，提升管理效率與安全等級"
    ],
    description:
      "LDZ 智慧安防影像不只是監控設備，而是結合 AI、告警、連動與平台管理的智慧場域安全解決方案。"
  },
  cta: {
    title: "想了解適合您場域的智慧安防方案？",
    description:
      "歡迎與立達興團隊聯繫，我們可依場域需求提供影像設備部署、AI 偵測、告警連動與整合方案規劃。",
    primary: {
      label: "聯絡我們",
      href: "/contact"
    },
    secondary: {
      label: "索取方案資料",
      href: "/contact"
    }
  }
};

export const securityVisionMetadata: Metadata = {
  title: securityVisionPageData.seo.title,
  description: securityVisionPageData.seo.description
};
