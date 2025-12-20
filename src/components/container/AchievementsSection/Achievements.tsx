import {
  sectionContainer,
  titleContainer,
  textTitle,
  textDesc,
  resultCard,
  countResult,
  infoResult,
} from "../GlobalClasses";

const Achievements = () => {
  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "5+", label: "Years of Experience" },
    { number: "10+", label: "Industry Awards Won" },
    { number: "100%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section id="achievement-section" className={sectionContainer}>
      {/* Section title and description */}
      <div className={titleContainer}>
        <h3 className={textTitle}>
          End-to-End IT Solutions That Drive Results
        </h3>
        <p className={`${textDesc} text-center`}>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>

      {/* Result cards */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 md:gap-5">
        {achievements.map((item, index) => (
          <div key={index} className={resultCard}>
            <h1 className={countResult}>{item.number}</h1>
            <p className={infoResult}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
