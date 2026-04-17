import type { Metadata } from "next";

export const oemOdmPageData = {
  seo: {
    title:
      "OEM / ODM 產品開發｜IOT 模組・EtherCAT 模組・機械手臂・充電樁・儲能櫃｜立達興科技",
    description:
      "立達興科技提供 OEM / ODM 產品開發服務，涵蓋 IOT 模組、EtherCAT 模組、機械手臂、運動系統、動力系統、客製化設備、冷氣控制器、遠端控制器、充電樁、儲能櫃與 POWERWELL 相關整合，從概念規劃到量產導入，協助客戶穩定完成產品落地。"
  },
  hero: {
    title: "OEM / ODM 產品開發",
    subtitle: "從概念規劃到量產導入，協助客戶把產品真正做出來。",
    description:
      "立達興科技具備跨領域產品開發與整合實務，涵蓋 IOT 模組、EtherCAT 模組、機械手臂、運動系統、動力系統、客製化設備、冷氣控制器、遠端控制器、充電樁、儲能櫃與 POWERWELL 相關應用。我們從需求定義、規格規劃、機構 / 電子 / 韌體整合，到樣機打樣、驗證測試、量產導入與供應鏈協作，協助客戶更穩定地完成產品落地。",
    slogan: "Build from Concept to Production.",
    buttons: [
      { label: "了解開發流程", href: "#process", variant: "light" },
      { label: "查看開發能力", href: "#capabilities", variant: "light" },
      { label: "聯絡洽詢", href: "#contact", variant: "primary" }
    ],
    highlights: [
      "Product Planning",
      "Design Integration",
      "Prototype Validation",
      "Mass Production Readiness"
    ],
    image: {
      path: "/public/images/products/oem-odm/hero.jpg",
      src: "/images/products/oem-odm/hero.jpg",
      title: "Hero 圖片預留"
    }
  },
  valueProps: {
    title: "不只是代工，而是能共同完成產品落地的開發夥伴",
    description:
      "對許多企業而言，真正的挑戰不只是把想法畫出來，而是如何把規格、設計、測試、供應鏈與量產流程串成一條完整路徑。立達興科技以整合導向的開發能力，協助客戶從產品概念走到可製造、可驗證、可量產的落地成果。",
    cards: [
      {
        title: "產品規劃與定義能力",
        content: "從需求訪談、使用情境、功能邏輯到規格整理，協助客戶建立可執行的產品藍圖。"
      },
      {
        title: "跨專業整合能力",
        content: "整合機構、電子、控制、韌體、通訊與系統架構，降低開發斷點與溝通成本。"
      },
      {
        title: "驗證與量產導向",
        content: "從樣機打樣、測試修正，到量產導入與供應鏈協作，提升產品落地穩定性。"
      },
      {
        title: "客製化與應用導向",
        content: "依據不同產業、設備與場域需求，設計對應的 OEM / ODM 產品方案。"
      }
    ]
  },
  framework: {
    eyebrow: "能力架構",
    title: "OEM / ODM 產品開發整合架構",
    description:
      "以需求定義為起點，串接設計整合、樣機驗證、量產導入與供應鏈協作，讓產品從概念走向可交付、可量產的完整路徑。",
    image: {
      path: "/public/images/products/oem-odm/capability-framework.svg",
      src: "/images/products/oem-odm/capability-framework.svg",
      title: "產品開發能力架構圖"
    }
  },
  strengths: {
    title: "立達興的開發強項",
    description:
      "立達興科技長期累積設備整合、控制系統、模組開發與產品導入經驗，具備從控制核心到終端設備的整體開發能力。",
    items: [
      {
        title: "IOT 模組開發",
        content: "可依據應用需求開發資料採集、通訊控制、遠端監控與場域端整合模組，支援智慧設備與平台串接。"
      },
      {
        title: "EtherCAT 模組與控制應用",
        content: "具備工業通訊與控制模組整合能力，可應用於設備控制、伺服架構、自動化流程與高精度控制場景。"
      },
      {
        title: "機械手臂與運動系統",
        content: "涵蓋機械手臂、運動控制、動力模組與設備動作協調整合，支援智慧製造與自動化設備開發。"
      },
      {
        title: "動力系統整合",
        content: "可整合馬達、驅動器、控制邏輯與能源配套，提升設備運轉穩定性與系統整體效率。"
      },
      {
        title: "客製化設備開發",
        content: "依據客戶應用需求開發專用設備、控制設備與場域型產品，兼顧功能、結構、維護與量產可行性。"
      },
      {
        title: "冷氣控制器與遠端控制器",
        content: "具備控制器產品設計與應用整合經驗，可延伸至空調控制、設備控制與遠端管理應用。"
      },
      {
        title: "充電樁產品與周邊整合",
        content: "可延伸至 AC / DC 充電設備、控制模組、通訊整合與充電系統周邊應用。"
      },
      {
        title: "儲能櫃與能源設備整合",
        content: "結合能源管理、控制、櫃體設備與電力整合能力，支援儲能設備與能源產品開發。"
      },
      {
        title: "POWERWELL 相關產品整合",
        content: "可結合立達興既有能源、控制與設備整合能力，支援 POWERWELL 相關產品開發與系統延伸。"
      }
    ]
  },
  productTypes: {
    title: "立達興曾參與與可延伸的產品類型",
    description:
      "立達興的 OEM / ODM 能力可應用於控制模組、設備型產品、機電整合設備與能源應用裝置，並依客戶需求進行客製化調整。",
    items: [
      { title: "IOT 通訊模組", content: "用於設備資料採集、遠端管理、場域連線與平台通訊整合。" },
      { title: "EtherCAT 控制模組", content: "適用於工業自動化、設備控制與高速同步控制應用。" },
      { title: "機械手臂系統", content: "可整合手臂機構、動作控制、末端工具與應用流程。" },
      { title: "運動 / 動力控制系統", content: "適用於設備驅動、定位控制、動作協調與能源控制應用。" },
      { title: "客製化設備", content: "依據場域或產線需求開發專用型設備、控制器與整合裝置。" },
      { title: "冷氣控制器", content: "針對空調與機電設備進行控制邏輯設計、遠端監控與整合應用。" },
      { title: "遠端控制器", content: "可延伸至設備遠端操作、狀態管理與控制命令下發應用。" },
      { title: "充電樁設備", content: "包含充電樁控制、通訊、管理與設備端整合應用。" },
      { title: "儲能櫃", content: "整合能源設備、控制系統、機構設計與量產導入需求。" },
      { title: "POWERWELL 延伸應用", content: "可依產品方向延伸控制、通訊、能源與設備整合設計。" }
    ]
  },
  process: {
    title: "從概念到量產的開發流程",
    description: "立達興以實務導向流程推進 OEM / ODM 專案，協助客戶降低開發風險，提升導入效率。",
    tagline: "Concept → Integration → Prototype → Validation → Production",
    image: {
      path: "/public/images/products/oem-odm/process.jpg",
      src: "/images/products/oem-odm/process.jpg",
      title: "開發流程圖片預留"
    },
    items: [
      {
        title: "產品規劃與規格定義",
        content:
          "從市場需求、應用情境、功能需求、技術條件與整體目標出發，建立清楚的產品規格與開發方向。"
      },
      {
        title: "機構 / 電子 / 韌體整合",
        content: "整合機構設計、電子電路、控制邏輯、韌體架構與通訊設計，形成完整產品方案。"
      },
      {
        title: "樣機打樣與驗證測試",
        content: "進行樣機製作、功能驗證、穩定性測試、設計修正與問題排除，逐步提升產品成熟度。"
      },
      {
        title: "量產導入與供應鏈協作",
        content: "串接製造、採購、組裝、測試與供應鏈協作，協助產品從開發完成順利推進至量產導入。"
      }
    ]
  },
  capabilities: {
    title: "完整的開發整合能力",
    description:
      "除了產品本身的設計與打樣，立達興也重視開發過程中的跨部門整合與量產準備，讓產品更容易真正落地。",
    image: {
      path: "/public/images/products/oem-odm/capabilities.jpg",
      src: "/images/products/oem-odm/capabilities.jpg",
      title: "開發能力圖片預留"
    },
    items: [
      {
        title: "需求定義與規格整理",
        content: "協助客戶釐清需求，轉化為可執行、可開發、可驗證的產品規格。"
      },
      {
        title: "機構設計與設備整合",
        content: "依產品應用與場域需求進行結構規劃、設備配置與外觀整合。"
      },
      {
        title: "電子控制與模組設計",
        content: "支援控制板、通訊模組、驅動整合與相關電子設計應用。"
      },
      {
        title: "韌體與控制邏輯開發",
        content: "建立設備運作邏輯、通訊流程、控制策略與系統整體穩定性。"
      },
      {
        title: "測試驗證與設計修正",
        content: "從樣機測試、功能驗證、問題追蹤到設計調整，提升產品可用性與穩定性。"
      },
      {
        title: "量產導入與供應鏈對接",
        content: "考量零件、組裝、測試、交期與供應協作，提升量產導入效率與可控性。"
      }
    ]
  },
  useCases: {
    title: "適合哪些客戶與專案需求",
    description:
      "立達興的 OEM / ODM 開發服務，適合需要產品客製化、設備整合與量產導入支援的企業客戶。",
    image: {
      path: "/public/images/products/oem-odm/applications.jpg",
      src: "/images/products/oem-odm/applications.jpg",
      title: "應用場景圖片預留"
    },
    items: [
      { title: "新產品開發", content: "從概念出發，建立產品規格、樣機與驗證流程。" },
      { title: "既有設備升級", content: "針對既有設備導入控制模組、通訊功能、遠端管理或自動化能力。" },
      { title: "控制器產品開發", content: "適用於冷氣控制器、遠端控制器、通訊模組與設備控制器開發。" },
      { title: "自動化設備整合", content: "適合需要運動控制、機械手臂、動力模組與設備協調整合的應用。" },
      { title: "能源設備產品化", content: "適用於充電樁、儲能櫃、能源管理周邊與相關產品開發。" },
      { title: "品牌客製與代工合作", content: "適合需要 OEM / ODM 模式導入市場、建立自有產品線的合作需求。" }
    ]
  },
  reasons: {
    title: "為什麼選擇立達興作為 OEM / ODM 開發夥伴",
    bullets: [
      "具備跨領域整合經驗，涵蓋控制、模組、設備、能源與場域應用",
      "能從需求定義一路推進到樣機、驗證與量產導入",
      "熟悉機構、電子、韌體與系統整合的實務流程",
      "可依客戶應用需求進行客製化設計與產品調整",
      "具備設備整合與供應鏈協作能力，提升產品落地穩定性",
      "不只做設計，更重視能否真正量產與導入市場"
    ],
    description:
      "立達興科技不只是執行開發工作，而是以整合型工程能力陪伴客戶完成產品化、驗證化與量產化，讓 OEM / ODM 專案更穩定、更有效率地走向落地。"
  },
  cta: {
    title: "正在規劃您的下一個產品開發專案？",
    description:
      "無論是 IOT 模組、控制器、機械手臂、客製化設備、充電樁、儲能櫃或其他 OEM / ODM 產品需求，歡迎與立達興團隊聯繫，我們可依需求協助規劃開發方向、技術整合與量產導入方案。",
    primary: {
      label: "聯絡開發團隊",
      href: "/contact"
    },
    secondary: {
      label: "洽詢合作方式",
      href: "/contact"
    }
  }
};

export const oemOdmMetadata: Metadata = {
  title: oemOdmPageData.seo.title,
  description: oemOdmPageData.seo.description
};
