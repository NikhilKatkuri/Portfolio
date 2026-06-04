import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Hero from "@/components/sections/Hero";
import Philosphy from "@/components/sections/Philosphy";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import IconFlow from "@/components/ui/IconFlow";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { homeMetadata } from "@/constants/meta";

export const metadata: Metadata = homeMetadata;

const Home = () => {
  return (
    <main className="h-auto w-full">
      <Navbar isStatic={false} />
      <div
        className="w-full pointer-events-none transition-all duration-75"
        style={{
          height: "400px",
        }}
      />
      <Hero />
      <IconFlow />
      <FeaturedProject />
      <TechnicalExpertise />
      <Experience />
      <Philosphy />
      <Footer />
    </main>
  );
};

export default Home;
