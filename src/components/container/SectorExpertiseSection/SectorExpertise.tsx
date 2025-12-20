import {
  sectionContainer,
  titleContainer,
  textTitle,
  textDesc,
} from "../GlobalClasses";

const SectorExpertise = () => {
  return (
    <section id="sector-expertise-section" className={sectionContainer}>
      {/* Section title and description */}
      <div className={titleContainer}>
        <h3 className={`${textTitle} text-left`}>Built for Your Industry</h3>
        <p className={textDesc}>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      {/* Industry list and description layout */}
      <div className="flex flex-wrap sm:flex-nowrap sm:flex-row sm:justify-between sm:w-full gap-6 mt-6 md:mt-11 lg:mt-16">
        {/* Industry category list */}
        <div className="min-w-[160px]">
          <ul className="space-y-4 w-48">
            {["Fintech", "E-Commerce", "Healthcare"].map((industry) => (
              <li
                key={industry}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-1.5 h-6 bg-gray-600 rounded group-hover:bg-orange-500 transition-all"></div>
                <span className="text-gray-400 font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Industry-specific description and image */}
        <div className="flex flex-col w-full lg:max-w-[840px]">
          <p className={textDesc}>
            We build secure, scalable, and compliant fintech solutions — from
            digital wallets to core banking systems — tailored to modern
            financial needs.
          </p>
          <img
            src="./other-images/industry-image.svg"
            alt="Industry"
            className="rounded-xl w-full mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default SectorExpertise;
