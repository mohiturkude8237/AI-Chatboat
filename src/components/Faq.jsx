import React, { useState } from "react";

const faqData = [
  {
    question: "How does the voice assistant work?",
    answer:
      "It uses speech recognition to convert your voice into text, then responds using natural language processing.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your conversations are encrypted and not stored unless you opt in for logging.",
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Absolutely! The assistant is fully responsive and works on both Android and iOS browsers.",
  },
  {
    question: "Is this service free?",
    answer:
      "Yes! It's completely free to use. Advanced features may be added in future paid plans.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <button
      onClick={onClick}
      className="w-full text-left flex justify-between items-center font-semibold text-gray-700 text-lg"
    >
      {question}
      <span className="ml-2 text-cyan-500">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <div className="mt-3 text-gray-600 text-sm leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
