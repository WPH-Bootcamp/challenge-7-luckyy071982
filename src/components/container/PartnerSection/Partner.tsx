const Partner = () => {
  // className umum
  const sectionTitleClass =
    "w-full flex justify-center text-base z-10 lg:text-2xl";
  const overlayLeftClass =
    "absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black";
  const overlayRightClass =
    "absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black";
  const logoClass = "inline-block mx-4 h-10 filter grayscale";

  // daftar logo
  const logos = [
    { src: "./company-logos/company-logo-0.svg", alt: "adobe" },
    { src: "./company-logos/company-logo-1.svg", alt: "upwork" },
    { src: "./company-logos/company-logo-2.svg", alt: "zoom" },
    { src: "./company-logos/company-logo-3.svg", alt: "postman" },
    { src: "./company-logos/company-logo-4.svg", alt: "databricks" },
    { src: "./company-logos/company-logo-5.svg", alt: "airbnb" },
    { src: "./company-logos/company-logo-6.svg", alt: "dropbox" },
    { src: "./company-logos/company-logo-7.svg", alt: "paypal" },
    { src: "./company-logos/company-logo-8.svg", alt: "netflix" },
  ];

  return (
    <section id="partner-section" className="flex flex-col mt-11 lg:mt-0">
      {/* Section title */}
      <h2 className={sectionTitleClass}>
        Trusted by Global Innovators & Leading Brands
      </h2>

      {/* Logo marquee container */}
      <div className="relative w-full h-28 overflow-hidden py-7">
        {/* Left blur overlay */}
        <div className={overlayLeftClass}></div>

        {/* Right blur overlay */}
        <div className={overlayRightClass}></div>

        {/* Scrolling logos */}
        <div className="flex h-full whitespace-nowrap animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              className={logoClass}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
