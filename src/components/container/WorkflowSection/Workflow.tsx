import {
  sectionContainer,
  titleContainer,
  textTitle,
  textSubtitle,
  textDesc,
} from "../GlobalClasses";

const Workflow = () => {
  // local variables untuk workflow
  const processNumberClass =
    "bg-[#ff6c37] text-[12px] mr-3 xl:mx-6 font-bold rounded-full " +
    "min-w-10 max-w-10 min-h-10 max-h-10 flex justify-center items-center";

  const processWrapperClass =
    "flex items-center justify-between mb-4 relative z-10";

  const processContainerClass =
    "w-full p-4 md:p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0D12] " +
    "border border-[#DEDCDC] dark:border-[#181D27]";

  const processContainerNoBgClass = "w-full p-4 md:p-6";

  const processContainerBgClass =
    "bg-[url('./icons/menu/chevron-up-light.svg')] " +
    "dark:bg-[url('./icons/menu/chevron-up.svg')] " +
    "bg-no-repeat bg-[length:24px_24px] dark:bg-[length:28px_28px] " +
    "bg-[position:97%_16px] md:bg-[position:97%_24px]";

  const steps = [
    {
      number: "1",
      title: "Discovery & Consultation",
      desc: "Understand Your Needs & Goals",
    },
    {
      number: "2",
      title: "Planning & Strategy",
      desc: "Build a Clear, Scalable Roadmap",
    },
    {
      number: "3",
      title: "Design & Prototyping",
      desc: "Craft UX That Converts",
    },
    {
      number: "4",
      title: "Development & Implementation",
      desc: "Deliver With Speed & Precision",
    },
    {
      number: "5",
      title: "Testing & Optimization",
      desc: "Ensure Quality at Every Step",
    },
    {
      number: "6",
      title: "Launch & Growth",
      desc: "Scale, Measure & Improve Continuously",
    },
  ];

  return (
    <section id="workflow-section" className={sectionContainer}>
      {/* Section title */}
      <div className={titleContainer}>
        <h3 className={textTitle}>Our Process</h3>
        <p className={`${textDesc} text-center`}>
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* Mobile & tablet view */}
      <div className="mt-6 xl:hidden relative">
        <div className="absolute left-5 top-10 h-[90%] w-px bg-gray-800"></div>
        {steps.map((step) => (
          <div key={step.number} className={processWrapperClass}>
            <div className={processNumberClass}>{step.number}</div>
            <div
              className={`${processContainerClass} ${processContainerBgClass}`}
            >
              <h3 className={textSubtitle}>{step.title}</h3>
              <p className={textDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="mt-6 hidden xl:block relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 h-[90%] w-px bg-gray-800"></div>
        {steps.map((step, index) => (
          <div key={step.number} className={processWrapperClass}>
            {index % 2 === 0 ? (
              <>
                <div
                  className={`${processContainerClass} ${processContainerBgClass}`}
                >
                  <h3 className={textSubtitle}>{step.title}</h3>
                  <p className={textDesc}>{step.desc}</p>
                </div>
                <div className={processNumberClass}>{step.number}</div>
                <div className={processContainerNoBgClass}></div>
              </>
            ) : (
              <>
                <div className={processContainerNoBgClass}></div>
                <div className={processNumberClass}>{step.number}</div>
                <div
                  className={`${processContainerClass} ${processContainerBgClass}`}
                >
                  <h3 className={textSubtitle}>{step.title}</h3>
                  <p className={textDesc}>{step.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
