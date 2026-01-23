import React from "react";
import { hackathonInfo, participationRequirements } from "../data/sampleData";

const AboutData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About {hackathonInfo.name}</h2>
      <p className="mb-4">
        {hackathonInfo.name} is a one-day event where students and young developers
        come together to build projects in a focused and friendly environment. Learn, create, and collaborate!
      </p>
      <h3 className="text-xl font-semibold mb-2">Participation Requirements</h3>
      <ul className="list-disc list-inside">
        {participationRequirements.map((req) => (
          <li key={req}>{req}</li>
        ))}
      </ul>
    </section>
  );
};

export default AboutData;
