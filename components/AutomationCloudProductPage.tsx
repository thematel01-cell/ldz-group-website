"use client";

import type { ProductCategory } from "@/data/products";
import { ContactCTA } from "./ContactCTA";
import { ProductDetailShared } from "./ProductDetailShared";

type AutomationCloudProductPageProps = {
  product: ProductCategory;
};

export function AutomationCloudProductPage({
  product
}: AutomationCloudProductPageProps) {
  return (
    <>
      <ProductDetailShared product={product} />
      <ContactCTA />
    </>
  );
}
