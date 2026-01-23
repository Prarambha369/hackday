import React from "react";
import { teams } from "../data/sampleData";

const TeamGallery: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Team Projects & Winners</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.team_name} className="border rounded-lg p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{team.project_title}</h3>
            <p className="text-purple-600 font-semibold mb-2">{team.team_name}</p>
            <p className="text-gray-600 mb-4 text-sm">{team.description}</p>
            <div className="mb-4">
              <p className="text-sm font-semibold mb-1">Team Members:</p>
              <p className="text-sm text-gray-600">{team.members.join(", ")}</p>
            </div>
            <div className="flex gap-3">
              <a 
                href={team.github_repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition text-sm font-semibold"
              >
                GitHub
              </a>
              <a 
                href={team.devpost_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
              >
                Devpost
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
