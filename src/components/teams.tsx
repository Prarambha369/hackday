import teams from '../content/teams.json';
export default function Teams() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Team Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <div key={team.team_name} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{team.project_title}</h3>
            <p className="text-gray-600">{team.team_name}</p>
            <div className="mt-2 flex gap-4">
              <a href={team.github_repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
              <a href={team.devpost_link} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Devpost</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
