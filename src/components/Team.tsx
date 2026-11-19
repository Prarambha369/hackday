const Team = () => {
  // Only public @butwalhacks.com addresses here; personal phone numbers were removed.
  const teamMembers: { name: string; email?: string }[] = [
    { name: "Sirjal Adhikari" },
    { name: "Bedant Gautam" },
    { name: "Saksham Gyawali" },
    { name: "Basanta Aryal" },
    { name: "Prarambha Bashyal", email: "Prarambha@butwalhacks.com" },
    { name: "Hardik Chapagain", email: "Hardik@butwalhacks.com" },
    { name: "Rabin Chudali", email: "Rabin@butwalhacks.com" },
  ];
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Meet Our Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="bg-card text-card-foreground border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform ease-out duration-150 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-lg font-bold leading-6 text-orange-500">{member.name}</h3>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-orange-500 font-semibold">
                      {member.email}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
