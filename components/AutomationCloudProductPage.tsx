"use client";

import { ApplicationScenes } from "./automation-cloud/ApplicationScenes";
import { ContactCTA } from "./automation-cloud/ContactCTA";
import { CoreCapabilitiesSection } from "./automation-cloud/CoreCapabilitiesSection";
import { ExperienceGrid } from "./automation-cloud/ExperienceGrid";
import { FutureOpportunitySection } from "./automation-cloud/FutureOpportunitySection";
import { ImplementationFlow } from "./automation-cloud/ImplementationFlow";
import { PlatformValueSection } from "./automation-cloud/PlatformValueSection";
import { ProductHero } from "./automation-cloud/ProductHero";
import { ValueCards } from "./automation-cloud/ValueCards";

export function AutomationCloudProductPage() {
  return (
    <>
      <ProductHero />
      <ValueCards />
      <CoreCapabilitiesSection />
      <ExperienceGrid />
      <PlatformValueSection />
      <ImplementationFlow />
      <ApplicationScenes />
      <FutureOpportunitySection />
      <ContactCTA />
    </>
  );
}
