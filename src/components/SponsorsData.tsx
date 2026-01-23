import React from "react";
import { sponsors } from "../data/sampleData";

const SponsorsData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
        {sponsors.map((sponsor) => (
          <div key={sponsor} className="p-4 border rounded text-center font-semibold bg-gray-50 hover:bg-purple-50 transition">
            {sponsor}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsData;
