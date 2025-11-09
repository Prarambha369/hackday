import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Challenges from "@/components/Challenges";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

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
      <Community />
      <FAQ />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
