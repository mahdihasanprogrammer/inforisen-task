import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Payments from "@/components/Payments";
import GrowthTimeline from "@/components/GrowthTimeline";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1C1917] flex flex-col font-sans selection:bg-[#D95900] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1 flex flex-col space-y-8 sm:space-y-16">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Payments />
        <GrowthTimeline />
        <Advantages />
        <FAQ />
        <CtaBanner />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
