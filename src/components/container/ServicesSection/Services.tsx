import {
  sectionContainer,
  titleContainer,
  textTitle,
  textSubtitle,
  textDesc,
} from "../GlobalClasses";

const Services = () => {
  // local variables untuk service cards
  const solutionSectionClass =
    "relative border min-w-[360px] max-w-[372px] min-h-[130px] max-h-[182px] " +
    "rounded-2xl border-[#DEDCDC] bg-[#FAFAFA] dark:border-[#181D27] " +
    "dark:bg-[#0A0D12] p-5 pt-12";

  const iconWrapperClass =
    "absolute top-[-30px] md:top-[-40px] left-1/6 transform -translate-x-1/2 p-2";

  const iconClass = "w-[64px] h-[64px] md:w-[80px] md:h-[80px]";

  const services = [
    {
      title: "Web Development",
      desc: "Build fast, scalable, and SEO-friendly websites.",
      icon: "./icons/techs/WebDev.svg",
    },
    {
      title: "Mobile App Development",
      desc: "Native & cross-platform apps tailored to user needs.",
      icon: "./icons/techs/MobileAppDev.svg",
    },
    {
      title: "UI/UX Design",
      desc: "Delight users with intuitive and beautiful interfaces",
      icon: "./icons/techs/UI-UX-Design.svg",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and flexible cloud infrastructure for your growth.",
      icon: "./icons/techs/CloudSolutions.svg",
    },
    {
      title: "Software Development",
      desc: "Custom solutions built around your business logic.",
      icon: "./icons/techs/SoftwareDev.svg",
    },
    {
      title: "IT Infrastructure",
      desc: "Scale your backend with reliable tech foundations.",
      icon: "./icons/techs/IT-Infrastructure.svg",
    },
    {
      title: "Cybersecurity Services",
      desc: "Stay protected with enterprise-grade security.",
      icon: "./icons/techs/CybersecurityServices.svg",
    },
    {
      title: "QA Solutions",
      desc: "Ensure performance with rigorous testing frameworks.",
      icon: "./icons/techs/QA-Solutions.svg",
    },
    {
      title: "IT Consulting & Support",
      desc: "Make smarter tech decisions with expert guidance.",
      icon: "./icons/techs/IT-Consulting-n-Support.svg",
    },
  ];

  return (
    <section id="services-section" className={sectionContainer}>
      {/* Section title */}
      <div className={titleContainer}>
        <h3 className={textTitle}>Smart IT Solutions That Grow With You</h3>
        <p className={`${textDesc} text-center`}>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      {/* Grid of service cards */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {services.map((service, index) => (
          <div key={index} className={solutionSectionClass}>
            <div className={iconWrapperClass}>
              <img
                src={service.icon}
                alt={service.title}
                className={iconClass}
              />
            </div>
            <h4 className={textSubtitle}>{service.title}</h4>
            <p className={textDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
