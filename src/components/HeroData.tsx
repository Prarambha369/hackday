import React from "react";
import { hackathonInfo } from "../data/sampleData";

const HeroData: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">{hackathonInfo.name}</h1>
      <p className="text-2xl mb-2">{hackathonInfo.tagline}</p>
      <p className="text-lg mb-4">{hackathonInfo.date} | {hackathonInfo.location}</p>
      <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
        Register Now
      </button>
    </section>
  );
};

export default HeroData;
