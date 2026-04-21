"use client";

import { useLocale } from "@/components/LocaleProvider";
import { PageHero } from "@/components/PageHero";
import { t } from "@/data/i18n";
import { siteConfig } from "@/data/site";

const mapsLink =
  "https://www.google.com/maps/place/241%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%89%E9%87%8D%E5%8D%80%E9%87%8D%E6%96%B0%E8%B7%AF5%E6%AE%B5609%E5%B7%B714%E8%99%9F8+%E4%B9%8B+8/@25.0458035,121.4679036,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a860839262c1:0x4345556ff41e87c5!8m2!3d25.0458035!4d121.4679036?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";

const mapsEmbed =
  "https://www.google.com/maps?q=%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%89%E9%87%8D%E5%8D%80%E9%87%8D%E6%96%B0%E8%B7%AF%E4%BA%94%E6%AE%B5609%E5%B7%B714%E8%99%9F8%E6%A8%93%E4%B9%8B8&z=17&output=embed";

export default function ContactPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={{ zh: "聯絡我們", en: "Contact" }}
        title={{ zh: "聯絡我們", en: "Contact Us" }}
        description={{
          zh: "可作為詢價、專案合作或技術洽詢入口，並提供公司資訊與地圖位置查詢。",
          en: "A contact entry point for quotations, project collaboration, and technical inquiries, with company details and map access."
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
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-[var(--primary)] hover:underline"
                >
                  {t(siteConfig.contact.address, locale)}
                </a>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface-muted)]">
              <iframe
                title={locale === "zh" ? "立達興公司地圖位置" : "LDZ office map"}
                src={mapsEmbed}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4">
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-white px-5 text-sm font-semibold text-[var(--primary)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
              >
                {locale === "zh" ? "在 Google 地圖中開啟" : "Open in Google Maps"}
              </a>
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
                {locale === "zh" ? "洽詢類型" : "Inquiry Type"}
                <select className="rounded-2xl border border-[var(--line)] bg-[#fbfdff] px-4 py-3 outline-none">
                  <option>{locale === "zh" ? "專案合作" : "Project Collaboration"}</option>
                  <option>{locale === "zh" ? "索取產品資料" : "Request Product Information"}</option>
                  <option>{locale === "zh" ? "聯絡業務團隊" : "Contact Sales Team"}</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--foreground)] md:col-span-2">
                {locale === "zh" ? "專案說明" : "Project Details"}
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
