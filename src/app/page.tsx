import { Authority } from "@/components/sections/Authority";
import { ContactForm } from "@/components/sections/ContactForm";
import { Differentials } from "@/components/sections/Differentials";
import { FaqSection } from "@/components/sections/FaqSection";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
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
        <Results />
        <Authority />
        <Differentials />
        <Testimonials />
        <ContactForm />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
