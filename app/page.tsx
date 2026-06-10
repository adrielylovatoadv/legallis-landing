import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Header />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
