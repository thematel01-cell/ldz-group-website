"use client";

import type { ProductCategory } from "@/data/products";
import { ContactCTA } from "./ContactCTA";
import { AutomationCloudProductPage } from "./AutomationCloudProductPage";
import { ParkingChargingProductPage } from "./ParkingChargingProductPage";
import { ProductDetailShared } from "./ProductDetailShared";
import { SecurityVisionProductPage } from "./SecurityVisionProductPage";
import { SelfServiceMedicalProductPage } from "./SelfServiceMedicalProductPage";
import { SmartEnergyProductPage } from "./SmartEnergyProductPage";

type ProductDetailPageProps = {
  product: ProductCategory;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  if (product.id === "smart-energy") {
    return <SmartEnergyProductPage />;
  }

  if (product.id === "parking-charging") {
    return <ParkingChargingProductPage />;
  }

  if (product.id === "security-vision") {
    return <SecurityVisionProductPage product={product} />;
  }

  if (product.id === "automation-cloud") {
    return <AutomationCloudProductPage product={product} />;
  }

  if (product.id === "self-service-medical") {
    return <SelfServiceMedicalProductPage product={product} />;
  }

  return (
    <>
      <ProductDetailShared product={product} />
      <ContactCTA />
    </>
  );
}
