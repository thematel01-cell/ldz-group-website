"use client";

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
      <ContactCTA />
    </>
  );
}
