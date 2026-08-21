import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueProps from "@/components/ValueProps";
import Differentiators from "@/components/Differentiators";
import IntegrationNote from "@/components/IntegrationNote";
import DemoSection from "@/components/Demo/DemoSection";
import SocialProof from "@/components/SocialProof";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ValueProps />
        <Differentiators />
        <IntegrationNote />
        <DemoSection />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
