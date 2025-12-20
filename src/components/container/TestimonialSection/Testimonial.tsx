import {
  sectionContainer,
  titleContainer,
  textTitle,
  textDesc,
} from "../GlobalClasses";

const Testimonial = () => {
  // local variables untuk testimonial
  const testimonialSectionClass =
    "relative border rounded-2xl min-w-[360px] max-w-[594px] min-h-[244px] max-h-[292px] aspect-[594/292] " +
    "border-[#DEDCDC] bg-[#FAFAFA] dark:border-[#181D27] dark:bg-[#0A0D12] p-5 lg:pb-30 my-10 md:shrink-0";

  const testimonialIconWrapperClass =
    "absolute top-[-45px] md:top-[-55px] left-1/6 transform -translate-x-1/2 p-2";

  const testimonialPictureWrapperClass =
    "absolute -bottom-10 md:-bottom-7 left-1/2 transform -translate-x-1/2";

  const iconClass = "w-[64px] h-[64px] md:w-[80px] md:h-[80px]";

  const testimonials = [
    {
      name: "John Lee",
      role: "CTO at Innovate Corp",
      text: "A game changer for our project. They turned it into reality efficiently and beautifully.",
      image: "./testimonial-pic/john-pic.svg",
    },
    {
      name: "Sarah Tan",
      role: "Product Manager at Finovate",
      text: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
      image: "./testimonial-pic/sarah-pic.svg",
    },
    {
      name: "Emily Chan",
      role: "Marketing Head at Eflowvate",
      text: "The collaboration was seamless and exceeded expectations. Their team is incredibly skilled and supportive.",
      image: "./testimonial-pic/emily-pic.svg",
    },
  ];

  return (
    <section id="testimonial-section" className={sectionContainer}>
      {/* Section title */}
      <div className={titleContainer}>
        <h3 className={textTitle}>What Partners Say About Working With Us</h3>
        <p className={`${textDesc} text-center`}>
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Testimonial card layout */}
      <div className="flex flex-nowrap overflow-hidden justify-center items-center gap-10 mt-12 lg:mt-20 px-4 lg:px-0 relative">
        {/* Left blur overlay */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black"></div>

        {/* Right blur overlay */}
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black"></div>

        {testimonials.map((item, index) => (
          <div key={index} className={testimonialSectionClass}>
            <div className={testimonialIconWrapperClass}>
              <img
                src="./icons/double-quote.svg"
                alt="Quote Icon"
                className={iconClass}
              />
            </div>
            <div className="flex flex-col justify-center align-middle text-center">
              <img
                src="./icons/rating.svg"
                alt="5-star rating"
                className="w-[136px] mx-auto"
              />
              <p className="text-sm font-semibold lg:text-lg mt-4">
                “{item.text}”
              </p>
              <p className="text-sm font-semibold lg:text-lg mt-4">
                {item.name}
              </p>
              <p className="text-sm font-semibold lg:text-lg mt-4 web-color-orange">
                {item.role}
              </p>
            </div>
            <div className={testimonialPictureWrapperClass}>
              <img
                src={item.image}
                alt="Client Portrait"
                className={iconClass}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex align-middle justify-center mt-5">
        <img src="./icons/pagination.svg" alt="Pagination" />
      </div>
    </section>
  );
};

export default Testimonial;
