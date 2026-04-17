"use client";

import type { ProductCategory } from "@/data/products";
import { ContactCTA } from "./ContactCTA";
import { ProductDetailShared } from "./ProductDetailShared";

type SecurityVisionProductPageProps = {
  product: ProductCategory;
};

export function SecurityVisionProductPage({
  product
}: SecurityVisionProductPageProps) {
  return (
    <>
      <ProductDetailShared product={product} />
      <ContactCTA />
    </>
  );
}
