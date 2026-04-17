import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/ProductDetailPage";
import { automationCloudMetadata } from "@/data/product-pages/automationCloud";
import { oemOdmMetadata } from "@/data/product-pages/oemOdm";
import { securityVisionMetadata } from "@/data/product-pages/securityVision";
import { getProductCategoryById, productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "security-vision") {
    return securityVisionMetadata;
  }

  if (slug === "automation-cloud") {
    return automationCloudMetadata;
  }

  if (slug === "oem-odm") {
    return oemOdmMetadata;
  }

  const product = getProductCategoryById(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.title.zh,
    description: product.detail.summary.zh
  };
}

export default async function ProductDetailRoute({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductCategoryById(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
