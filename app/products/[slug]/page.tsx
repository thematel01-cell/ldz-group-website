import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/ProductDetailPage";
import { getProductCategoryById, productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.id }));
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
