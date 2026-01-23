import events from '../content/events.json';
export default function EventsGrid() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Events</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.name} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{event.name}</h3>
            <p>{event.venue}</p>
            <p>Status: {event.status}</p>
            <p>Date: {event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
