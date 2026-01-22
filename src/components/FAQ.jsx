import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141] transition-colors p-6 text-left md:text-2xl"
      >
        <span>{question}</span>
        <span className={`text-4xl transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
          +
        </span>
      </button>
      
      {isOpen && (
        <div className="bg-[#2d2d2d] mt-[1px] p-6 text-lg md:text-xl border-t border-black">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "What is Streamify?", answer: "Streamify is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more." },
    { question: "How much does Streamify cost?", answer: "Watch Streamify on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee." },
    { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your account to watch instantly on the web or on any internet-connected device." },
    { question: "How do I cancel?", answer: "Streamify is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks." },
    { question: "What can I watch on Streamify?", answer: "Streamify has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more." },
    { question: "Is Streamify good for kids?", answer: "The kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films." },
  ];

  return (
    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2 mb-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg md:text-xl mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:row gap-2 w-full max-w-2xl mx-auto md:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-4 rounded bg-black/50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-xl font-bold flex items-center justify-center gap-2">
            Get Started <span>{">"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;