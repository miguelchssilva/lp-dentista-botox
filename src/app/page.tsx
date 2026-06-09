import { Authority } from "@/components/sections/Authority";
import { ClinicalTrust } from "@/components/sections/ClinicalTrust";
import { FaqSheet } from "@/components/sections/FaqSheet";
import { FinalCta } from "@/components/sections/FinalCta";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { MobileWhatsAppBar } from "@/components/sections/MobileWhatsAppBar";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { schema } from "@/lib/site";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Authority />
        <Results />
        <Process />
        <ClinicalTrust />
        <FinalCta />
      </main>
      <Footer />
      <FaqSheet enableGlobalTrigger triggerClassName="hidden" />
      <FloatingWhatsApp />
      <MobileWhatsAppBar />
    </>
  );
}
