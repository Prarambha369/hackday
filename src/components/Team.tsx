const Team = () => {
  const teamMembers = [
    { name: "Sirjal Adhikari", phone: "9744319122" },
    { name: "Bedant Gautam", phone: "9766311444" },
    { name: "Saksham Gyawali", phone: "9844180185" },
    { name: "Basanta Aryal", phone: "9767016364" },
    { name: "Prarambha Bashyal", phone: "Prarambha@butwalhacks.com" },
    { name: "Hardik Chapagain", phone: "Hardik@butwalhacks.com" },
    { name: "Rabin Chudali", phone: "Rabin@butwalhacks.com" },
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
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-white text-black border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform ease-out duration-150 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-lg font-bold leading-6 text-orange-500">{member.name}</h3>
                  {member.phone && member.phone.includes("@") ? (
                    <a href={`mailto:${member.phone}`} className="text-orange-500 font-semibold">
                      {member.phone}
                    </a>
                  ) : (
                    <a href={`tel:${member.phone}`} className="text-orange-500 font-semibold">
                      {member.phone}
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
