import { useState } from "react";
import {
  sectionContainer,
  textTitle,
  textSubtitle,
  textDesc,
} from "../GlobalClasses";

const FAQ = () => {
  // local variables untuk FAQ
  const faqListClass = "space-y-6";
  const faqItemClass = "border-b border-gray-300 dark:border-gray-700 pb-4";
  const faqLabelClass = "flex justify-between items-start cursor-pointer";
  const faqIconClass = "text-xl font-bold select-none hover:text-[#FF6C37]";

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
      question: "How do I know if this is right for my business?",
      answer:
        "We’ll help you assess your goals and match the right solution for your business needs.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Pricing depends on scope, timeline, and complexity. We offer flexible packages to suit different budgets.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most projects take 4–12 weeks depending on scope. We’ll provide a clear timeline during consultation.",
    },
    {
      question: "Can I start with a small project first?",
      answer:
        "Absolutely. We often begin with MVPs or pilot projects to validate ideas before scaling.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className={sectionContainer}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-2.5">
        <h3 className={`${textTitle} text-left lg:basis-[340px]`}>
          Need Help? Start Here.
        </h3>
        <p className={`${textDesc} lg:text-right lg:basis-[220px]`}>
          Everything you need to know — all in one place.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-500 opacity-40 my-6 lg:my-12"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* FAQ List */}
        <div className={faqListClass}>
          {faqs.map((faq, index) => (
            <div key={index} className={faqItemClass}>
              <div className={faqLabelClass} onClick={() => toggleFaq(index)}>
                <h4 className={`${textSubtitle} hover:text-[#FF6C37]`}>
                  {faq.question}
                </h4>
                <span className={faqIconClass}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className={`${textDesc} mt-4`}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="w-full lg:w-[360px] bg-orange-500 text-white rounded-xl p-6 space-y-4">
          <h4 className={`${textTitle} text-left`}>Let’s talk it through</h4>
          <p className={textSubtitle}>
            Book a free consultation with our team.
          </p>
          <img
            src="./other-images/cta.svg"
            alt="Team Meeting"
            className="rounded-lg w-full h-auto"
          />
          <button className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-4 rounded-full w-full cursor-pointer transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
