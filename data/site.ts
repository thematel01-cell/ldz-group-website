import type { LocalizedText } from "./i18n";

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export const siteConfig = {
  companyName: {
    zh: "立達興科技股份有限公司 LDZ Group",
    en: "LDZ Group Co., Ltd."
  },
  shortName: "LDZ Group",
  englishTagline: "Smart Energy · Smart Parking · AI Vision · Automation Integration",
  description: {
    zh: "立達興科技專注於智慧能源、智慧停車與充電、智慧安防影像、自動化設備、雲平台整合與未來 AI 場域應用。",
    en: "LDZ Group specializes in smart energy, smart parking and EV charging, AI vision security, automation equipment, cloud platform integration, and future AI applications."
  },
  since: "2013",
  navItems: [
    { label: { zh: "首頁", en: "Home" }, href: "/" },
    { label: { zh: "關於立達興", en: "About" }, href: "/about" },
    { label: { zh: "產品與服務", en: "Products" }, href: "/products" },
    { label: { zh: "解決方案", en: "Solutions" }, href: "/solutions" },
    { label: { zh: "成功案例", en: "Cases" }, href: "/cases" },
    { label: { zh: "未來 AI", en: "Future AI" }, href: "/future-ai" },
    { label: { zh: "聯絡我們", en: "Contact" }, href: "/contact" }
  ] satisfies NavItem[],
  contact: {
    phone: "02-2999-3670",
    email: "hank@ldzrobot.com",
    address: {
      zh: "新北市三重區重新路五段609巷14號8樓之8",
      en: "8 F.-8, No. 14, Ln. 609, Sec. 5, Chongxin Rd., Sanchong Dist., New Taipei City 241407, Taiwan (R.O.C.)"
    }
  },
  footerLinks: [
    { label: { zh: "首頁", en: "Home" }, href: "/" },
    { label: { zh: "產品與服務", en: "Products" }, href: "/products" },
    { label: { zh: "解決方案", en: "Solutions" }, href: "/solutions" },
    { label: { zh: "聯絡我們", en: "Contact" }, href: "/contact" }
  ] satisfies NavItem[]
};
