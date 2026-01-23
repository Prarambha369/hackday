import React from "react";
import { judges } from "../data/sampleData";

const JudgesData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Judges</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {judges.map((judge) => (
          <div key={judge.name} className="p-6 border rounded text-center">
            <p className="font-bold">{judge.name}</p>
            <p className="text-gray-600">{judge.organization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JudgesData;
