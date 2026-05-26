import Experience from "@/components/sections/Experience";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Hero from "@/components/sections/Hero"; 
import Philosphy from "@/components/sections/Philosphy";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import IconFlow from "@/components/ui/IconFlow";  

const Home = () => {
  return (
    <main className="h-auto w-full">
      <Hero />
      <IconFlow/>
      <FeaturedProject/>
      <TechnicalExpertise/>
      <Experience/>
      <Philosphy/> 
    </main>
  );
};

export default Home;
