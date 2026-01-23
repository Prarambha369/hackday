import React from "react";
import HeroData from "../components/HeroData";
import AboutData from "../components/AboutData";
import ScheduleData from "../components/ScheduleData";
import SponsorsData from "../components/SponsorsData";
import PrizesData from "../components/PrizesData";
import JudgesData from "../components/JudgesData";
import TeamGallery from "../components/TeamGallery";
import FAQData from "../components/FAQData";
import FooterData from "../components/FooterData";

const HackathonPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroData />
      <AboutData />
      <ScheduleData />
      <SponsorsData />
      <PrizesData />
      <JudgesData />
      <TeamGallery />
      <FAQData />
      <FooterData />
    </div>
  );
};

export default HackathonPage;
