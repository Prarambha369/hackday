import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Challenges from "@/components/Challenges";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Challenges />
      <Workshops />
      <Sponsors />
      <Team />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
