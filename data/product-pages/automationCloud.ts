import type { Metadata } from "next";

export const automationCloudPageData = {
  seo: {
    title: "自動化機器人與雲端平台｜設備整合・AIoT 串接・遠端監控｜立達興科技",
    description:
      "立達興科技提供自動化設備、機器手臂、控制系統與雲端平台整合方案，串接設備、控制、資料可視化、平台管理與未來 AI 延伸能力，協助企業建立更完整的智慧營運架構。"
  },
  hero: {
    title: "自動化機器人與雲端平台",
    subtitle: "從設備控制走向資料上雲，建立可持續延伸的智慧營運架構。",
    description:
      "立達興科技整合自動化設備、機器手臂、控制系統、資料交換與雲端平台能力，協助客戶從設備端、控制端、資料端一路延伸到平台端，建立可監控、可分析、可優化、可持續擴充的智慧整合方案。",
    tags: ["Automation", "Robotics", "Cloud", "AIoT"],
    buttons: [
      { label: "了解能力", href: "#capabilities", variant: "light" },
      { label: "洽詢整合方案", href: "#contact", variant: "primary" }
    ],
    metrics: [
      { label: "整合主軸", value: "設備 → 控制 → 平台" },
      { label: "核心能力", value: "Robotics / AIoT / Cloud" },
      { label: "服務方向", value: "Remote Monitoring & Data Ops" }
    ],
    image: {
      path: "/public/images/products/automation-cloud/hero-v2.jpg",
      src: "/images/products/automation-cloud/hero-v2.jpg",
      title: "自動化機器人與雲端平台 Hero 圖"
    }
  },
  valueProps: {
    title: "從設備到平台的整合價值",
    cards: [
      {
        icon: "01",
        title: "設備與機器人整合",
        content: "整合自動化設備、機器手臂與周邊控制系統，建立完整設備協作架構。"
      },
      {
        icon: "02",
        title: "資料可視化",
        content: "將設備狀態、控制資訊與事件資料整合上雲，形成可追蹤的營運畫面。"
      },
      {
        icon: "03",
        title: "遠端監控與管理",
        content: "透過平台即時掌握設備運作、告警事件與多站點狀態，提升管理效率。"
      },
      {
        icon: "04",
        title: "未來 AI 延伸能力",
        content: "為後續 AI 分析、智能調度、代理應用與平台化服務建立資料基礎。"
      }
    ]
  },
  coreCapabilities: {
    title: "核心能力",
    blocks: [
      {
        eyebrow: "設備整合",
        title: "把自動化設備、機器人與控制系統串成一體",
        description:
          "立達興具備自動化設備整合、機器人應用、控制系統與運動整合能力，能將設備本體、控制邏輯與現場流程整合成可運作、可維護、可擴充的完整架構。",
        bullets: [
          "自動化設備整合",
          "機器人應用整合",
          "控制系統與運動整合",
          "客製化系統開發"
        ],
        image: {
          path: "/public/images/products/automation-cloud/capabilities.jpg",
          src: "/images/products/automation-cloud/capabilities.jpg",
          title: "自動化設備與機器人整合圖片"
        },
        reverse: false
      },
      {
        eyebrow: "資料與平台",
        title: "讓設備資料真正成為平台化管理能力",
        description:
          "除了設備控制本身，立達興也重視資料交換、雲端平台與 AIoT 串接能力，讓設備端資料可被收集、可被呈現、可被追蹤，並作為後續遠端管理與 AI 延伸的基礎。",
        bullets: [
          "雲端平台與 AIoT 串接",
          "遠端監控與告警管理",
          "資料分析與平台整合",
          "跨系統資訊交換"
        ],
        image: {
          path: "/public/images/products/automation-cloud/platform-value.jpg",
          src: "/images/products/automation-cloud/platform-value.jpg",
          title: "雲端平台與 AIoT 圖片"
        },
        reverse: true
      }
    ]
  },
  experience: {
    title: "既有經驗與能力延伸",
    items: [
      {
        tag: "Experience",
        title: "自動化設備與智動化整合",
        content: "累積設備控制、流程整合與現場導入經驗，支撐智動化應用延伸。"
      },
      {
        tag: "Integration",
        title: "機器手臂與應用機器人",
        content: "可整合機器手臂、末端設備與應用流程，形成完整工作站方案。"
      },
      {
        tag: "Deployment",
        title: "自助設備與智慧終端",
        content: "具備自助設備、Kiosk 與智慧終端的整合與平台化經驗。"
      },
      {
        tag: "Platform",
        title: "AIoT 與雲服務平台",
        content: "從設備上雲、監控管理到平台延伸，建立可持續成長的服務能力。"
      },
      {
        tag: "Systems",
        title: "能源與場域設備整合",
        content: "可結合能源設備、場域基礎設施與控制平台進行跨系統整合。"
      },
      {
        tag: "Extension",
        title: "控制與平台化延伸",
        content: "不只做控制，更延伸到資料治理、遠端管理與智慧場域平台服務。"
      }
    ]
  },
  platformValue: {
    title: "為什麼要結合雲端平台",
    description:
      "自動化與機器人專案若只有設備控制，價值往往停留在單機運作。當設備資料能被平台收斂、呈現與追蹤時，管理效率、跨場域延伸與未來 AI 導入才真正具備規模化基礎。",
    image: {
      path: "/public/images/products/automation-cloud/platform-value.jpg",
      src: "/images/products/automation-cloud/platform-value.jpg",
      title: "平台儀表板 / 系統架構示意圖"
    },
    architecture: {
      path: "/public/images/products/automation-cloud/platform-architecture.svg",
      src: "/images/products/automation-cloud/platform-architecture.svg",
      title: "設備、控制、資料與平台串接架構圖"
    },
    points: [
      "即時監控",
      "跨場域管理",
      "事件與告警追蹤",
      "資料分析與優化",
      "未來 AI 導入基礎"
    ]
  },
  implementationFlow: {
    title: "導入流程",
    steps: [
      {
        title: "需求盤點與場景定義",
        content: "釐清設備需求、流程情境、控制範圍與平台目標。"
      },
      {
        title: "系統架構與方案規劃",
        content: "建立設備、控制、資料與平台之間的整體設計。"
      },
      {
        title: "設備整合與控制建置",
        content: "完成設備串接、控制邏輯、通訊設計與現場建置。"
      },
      {
        title: "平台串接與資料可視化",
        content: "將設備資料上雲並形成監控畫面、告警與管理介面。"
      },
      {
        title: "驗證優化與正式導入",
        content: "透過驗證、優化與持續調整，提升正式導入穩定性。"
      }
    ]
  },
  applicationScenes: {
    title: "應用場景",
    items: [
      {
        title: "智慧製造產線",
        content: "適合設備協作、資料可視化與產線控制整合需求。",
        image: {
          path: "/public/images/products/automation-cloud/scene-smart-manufacturing.svg",
          src: "/images/products/automation-cloud/scene-smart-manufacturing.svg",
          title: "智慧製造產線示意圖"
        }
      },
      {
        title: "機器人工作站",
        content: "可整合手臂控制、工作站邏輯、流程連動與遠端管理。",
        image: {
          path: "/public/images/products/automation-cloud/scene-robot-workstation.svg",
          src: "/images/products/automation-cloud/scene-robot-workstation.svg",
          title: "機器人工作站示意圖"
        }
      },
      {
        title: "自動搬運與無人化流程",
        content: "支援搬運設備、自動流程與多設備協同運作。",
        image: {
          path: "/public/images/products/automation-cloud/scene-automated-logistics.svg",
          src: "/images/products/automation-cloud/scene-automated-logistics.svg",
          title: "自動搬運與無人化流程示意圖"
        }
      },
      {
        title: "智慧設備遠端管理",
        content: "透過平台進行設備監控、事件管理與跨站點狀態掌握。",
        image: {
          path: "/public/images/products/automation-cloud/scene-remote-management.svg",
          src: "/images/products/automation-cloud/scene-remote-management.svg",
          title: "智慧設備遠端管理示意圖"
        }
      },
      {
        title: "醫療 / 公共服務終端",
        content: "可導入自助設備、智慧終端與後台管理整合應用。",
        image: {
          path: "/public/images/products/automation-cloud/scene-medical-terminal.svg",
          src: "/images/products/automation-cloud/scene-medical-terminal.svg",
          title: "醫療與公共服務終端示意圖"
        }
      },
      {
        title: "智慧場域整合",
        content: "延伸至能源、安防、停車與設備資料的整體整合方案。",
        image: {
          path: "/public/images/products/automation-cloud/scene-smart-site.svg",
          src: "/images/products/automation-cloud/scene-smart-site.svg",
          title: "智慧場域整合示意圖"
        }
      }
    ]
  },
  futureOpportunity: {
    title: "未來商機與成長方向",
    description:
      "立達興的價值不只在於設備整合本身，更在於未來能往平台化、服務化與 AI 智能應用持續延伸，讓專案從單次交付走向長期系統型合作。",
    image: {
      path: "/public/images/products/automation-cloud/future-opportunity.jpg",
      src: "/images/products/automation-cloud/future-opportunity.jpg",
      title: "未來商機主圖"
    },
    items: [
      "智慧製造平台化",
      "Robot + Platform 模式",
      "遠端維運服務",
      "AI 智能調度與代理應用",
      "跨系統智慧場域整合",
      "客製化設備產品化"
    ]
  },
  cta: {
    title: "正在規劃自動化、機器人或平台整合專案？",
    description:
      "無論您需要的是設備自動化、機器人工作站、遠端監控平台、AIoT 系統整合，或跨場域智慧化升級，歡迎與立達興團隊聯繫。",
    primary: {
      label: "聯絡我們",
      href: "/contact"
    },
    secondary: {
      label: "洽詢整合方案",
      href: "/contact"
    }
  }
};

export const automationCloudMetadata: Metadata = {
  title: automationCloudPageData.seo.title,
  description: automationCloudPageData.seo.description
};
