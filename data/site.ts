import type { LocalizedText } from "./i18n";

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export const siteConfig = {
  companyName: {
    zh: "立達興科技股份有限公司",
    en: "LDZ Group Co., Ltd."
  },
  shortName: "LDZ Group",
  englishTagline: "Smart Energy | Smart Parking | AI Vision | Automation Integration",
  description: {
    zh: "立達興科技專注於智慧能源、智慧停車與 EV 充電、AI 視覺安防、自動化設備、雲端平台整合與未來 AI 應用。",
    en: "LDZ Group specializes in smart energy, smart parking and EV charging, AI vision security, automation equipment, cloud platform integration, and future AI applications."
  },
  since: "2013",
  navItems: [
    { label: { zh: "首頁", en: "Home" }, href: "/" },
    { label: { zh: "關於立達興", en: "About" }, href: "/about" },
    { label: { zh: "產品與服務", en: "Products" }, href: "/products" },
    { label: { zh: "未來AI", en: "Future AI" }, href: "/future-ai" },
    { label: { zh: "聯絡我們", en: "Contact" }, href: "/contact" }
  ] satisfies NavItem[],
  contact: {
    phone: "02-2999-3670",
    email: "hank@ldzrobot.com",
    address: {
      zh: "新北市三重區重新路五段609巷14號8樓之8",
      en: "8F.-8, No. 14, Ln. 609, Sec. 5, Chongxin Rd., Sanchong Dist., New Taipei City, Taiwan"
    }
  },
  footerLinks: [
    { label: { zh: "首頁", en: "Home" }, href: "/" },
    { label: { zh: "產品與服務", en: "Products" }, href: "/products" },
    { label: { zh: "未來AI", en: "Future AI" }, href: "/future-ai" },
    { label: { zh: "聯絡我們", en: "Contact" }, href: "/contact" }
  ] satisfies NavItem[]
};
