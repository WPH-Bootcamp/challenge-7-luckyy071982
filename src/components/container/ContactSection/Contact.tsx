import { useState } from "react";
import { Button } from "../../ui/Button/Button";
import {
  sectionContainer,
  titleContainer,
  textTitle,
  textDesc,
} from "../GlobalClasses";

const Contact = () => {
  // local variables untuk contact section
  const contactTextClass = "font-bold text-[14px] mb-[8px]";
  const contactInputClass =
    "mb-[20px] text-[14px] lg:text-[16px] w-full box-border py-2 px-4 " +
    "border border-[#252B37] rounded-xl leading-6 tracking-[-0.02em] h-[48px]";
  const contactTextareaClass =
    "mb-[20px] text-[14px] lg:text-[16px] w-full box-border py-2 px-4 " +
    "border border-[#252B37] rounded-xl leading-6 tracking-[-0.02em]";
  const checkBoxContainerClass = "flex items-center gap-3 mb-2";
  const checkboxCircleBaseClass =
    "w-5 h-5 rounded-sm border border-[#252B37] flex items-center justify-center " +
    "transition-colors duration-200 cursor-pointer";
  const checkboxCircleCheckedClass = "bg-[#FF6C37] border-[#FF6C37]";
  const checkIconClass = (isChecked: boolean) =>
    isChecked ? "w-3 h-3 block" : "w-3 h-3 hidden";

  const [checkedServices, setCheckedServices] = useState<string[]>([]);

  const toggleCheckbox = (service: string) => {
    setCheckedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Software Development",
    "Other",
  ];

  return (
    <section
      id="contact-section"
      className={`${sectionContainer} flex flex-row flex-wrap align-middle justify-center`}
    >
      {/* Section Title */}
      <div className={`${titleContainer} w-full`}>
        <h3 className={textTitle}>Ready to Start? Let’s Talk.</h3>
        <p className={`${textDesc} text-center`}>
          Tell us what you need, and we’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 lg:mt-20 min-w-[360px] max-w-[720px]">
        <form className="flex flex-col" action="#" method="post">
          {/* Name Input */}
          <p className={contactTextClass}>Name</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={contactInputClass}
            required
          />

          {/* Email Input */}
          <p className={contactTextClass}>Email</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className={contactInputClass}
            required
          />

          {/* Message Textarea */}
          <p className={contactTextClass}>Message</p>
          <textarea
            placeholder="Enter Your Message"
            className={`${contactTextareaClass} h-[134px] resize-y`}
            required
          ></textarea>

          {/* Services Selection */}
          <p className={contactTextClass}>Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {services.map((service, index) => {
              const isChecked = checkedServices.includes(service);
              return (
                <div
                  key={index}
                  className={checkBoxContainerClass}
                  onClick={() => toggleCheckbox(service)}
                >
                  <div
                    className={`${checkboxCircleBaseClass} ${
                      isChecked ? checkboxCircleCheckedClass : ""
                    }`}
                  >
                    <svg
                      className={checkIconClass(isChecked)}
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <span>{service}</span>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <Button suffixClass="w-full mt-[12px]">Send</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
