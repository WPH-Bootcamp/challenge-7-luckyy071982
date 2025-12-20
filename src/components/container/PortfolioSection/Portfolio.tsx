import {
  sectionContainer,
  titleContainer,
  textTitle,
  textDesc,
} from "../GlobalClasses";

const Portfolio = () => {
  // local variables untuk portfolio
  const portfolioCardClass = "grid w-[360px]";
  const portfolioImageClass = "rounded-2xl";
  const portfolioTitleClass = "text-[16px] lg:text-[20px] font-bold";

  const portfolios = [
    {
      title: "Portofolio 1",
      subtitle: "Landing Page",
      image: "./portfolio/portfolio1.svg",
    },
    {
      title: "Portofolio 2",
      subtitle: "Landing Page",
      image: "./portfolio/portfolio2.svg",
    },
    {
      title: "Portofolio 3",
      subtitle: "Landing Page",
      image: "./portfolio/portfolio3.svg",
    },
  ];

  return (
    <section id="portfolio-section" className={sectionContainer}>
      {/* Section title */}
      <div className={titleContainer}>
        <h3 className={textTitle}>
          From Vision to Launch! Projects We’re Proud Of
        </h3>
        <p className={`${textDesc} text-center`}>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      {/* Portfolio cards grid */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-6 lg:mt-16">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {portfolios.map((item, index) => (
            <div key={index} className={portfolioCardClass}>
              <img
                src={item.image}
                alt={item.title}
                className={portfolioImageClass}
              />
              <p className="web-color-orange mt-2 text-[14px] lg:text-[16px]">
                {item.subtitle}
              </p>
              <h3 className={portfolioTitleClass}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
