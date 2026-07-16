import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LegalStrip } from "@/components/legal-strip";
import { Features } from "@/components/features";
import { CliShowcase } from "@/components/cli-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LegalStrip />
        <Features />
        <CliShowcase />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
