"use client";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { t } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={{ zh: "聯絡我們", en: "Contact" }}
        title={{ zh: "聯絡我們", en: "Contact Us" }}
        description={{
          zh: "可作為詢價、專案合作或技術洽詢入口，未來可再串接實際表單服務。",
          en: "A contact entry point for quotations, project collaboration, and technical inquiries, ready for future form integration."
        }}
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {locale === "zh" ? "公司資訊" : "Company Information"}
            </h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--muted)]">
              <div>
                <div className="font-semibold text-[var(--foreground)]">
                  {locale === "zh" ? "電話" : "Phone"}
                </div>
                <div>{siteConfig.contact.phone}</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--foreground)]">Email</div>
                <div>{siteConfig.contact.email}</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--foreground)]">
                  {locale === "zh" ? "地址" : "Address"}
                </div>
                <div>{t(siteConfig.contact.address, locale)}</div>
              </div>
            </div>
            <div className="mt-8 rounded-[24px] border border-dashed border-[var(--line)] bg-[var(--surface-muted)] p-6 text-sm text-[var(--muted)]">
              {locale === "zh" ? "地圖區塊預留" : "Map section placeholder"}
            </div>
          </div>

          <form className="rounded-[28px] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {locale === "zh" ? "聯絡表單" : "Contact Form"}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
                {locale === "zh" ? "聯絡姓名" : "Contact Name"}
                <input className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
                {locale === "zh" ? "公司名稱" : "Company Name"}
                <input className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
                Email
                <input
                  type="email"
                  className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
                {locale === "zh" ? "聯絡電話" : "Phone"}
                <input className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)] md:col-span-2">
                {locale === "zh" ? "詢問項目" : "Inquiry Type"}
                <select className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none">
                  <option>{locale === "zh" ? "詢問專案合作" : "Project Collaboration"}</option>
                  <option>{locale === "zh" ? "取得產品資料" : "Request Product Information"}</option>
                  <option>{locale === "zh" ? "聯絡業務團隊" : "Contact Sales Team"}</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)] md:col-span-2">
                {locale === "zh" ? "需求說明" : "Project Details"}
                <textarea className="min-h-36 rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary-dark),var(--primary))] px-6 text-sm font-semibold text-white"
            >
              {locale === "zh" ? "送出表單" : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
