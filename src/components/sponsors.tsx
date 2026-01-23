import sponsors from '../content/sponsors.json';
export default function Sponsors() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((s) => (
          <a key={s.name} href={s.website} target="_blank" rel="noopener noreferrer">
            <img src={s.logo} alt={s.name} className="h-16 object-contain"/>
          </a>
        ))}
      </div>
    </section>
  );
}
