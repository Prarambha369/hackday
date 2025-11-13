import Navbar from "@/components/Navbar";
import CodeOfConduct from "@/components/CodeOfConduct";
import Footer from "@/components/Footer";

const CodeOfConductPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 md:pt-40">
        <CodeOfConduct />
      </div>
      <Footer />
    </div>
  );
};

export default CodeOfConductPage;
