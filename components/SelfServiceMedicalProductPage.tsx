"use client";

import Image from "next/image";
import type { ProductCategory } from "@/data/products";
import { ContactCTA } from "./ContactCTA";
import { ProductDetailShared } from "./ProductDetailShared";

type SelfServiceMedicalProductPageProps = {
  product: ProductCategory;
};

export function SelfServiceMedicalProductPage({
  product
}: SelfServiceMedicalProductPageProps) {
  return (
    <>
      <ProductDetailShared product={product} />
      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
            <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
              <Image
                src="/images/products/self-service-medical-demo.png"
                alt="自助服務與智慧醫療整合示意圖"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
