import React from "react";
import { schedule } from "../data/sampleData";

const ScheduleData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Schedule</h2>
      <ul className="border-l-2 border-purple-500 ml-4">
        {schedule.map((item) => (
          <li key={item.time} className="mb-4 pl-4 relative">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></span>
            <p className="font-semibold">{item.time}</p>
            <p>{item.event}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScheduleData;
