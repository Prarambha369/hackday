import React from "react";
import { prizes } from "../data/sampleData";

const PrizesData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Prizes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div key={prize.title} className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{prize.title}</h3>
            {prize.cash && <p className="font-bold">{prize.cash}</p>}
            {prize.perks && <p className="mt-2">{prize.perks}</p>}
            <p className="mt-2 text-gray-600">{prize.winners} winner(s)</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesData;
