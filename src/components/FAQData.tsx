import React from "react";
import { faq } from "../data/sampleData";

const FAQData: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
      <div className="space-y-4">
        {faq.map(({ question, answer }) => (
          <details key={question} className="border rounded p-4 bg-gray-50">
            <summary className="font-semibold cursor-pointer">{question}</summary>
            <p className="mt-2">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQData;
