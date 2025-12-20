import { Button } from "../../ui/Button/Button";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative flex mt-16 flex-wrap lg:h-[580px]"
    >
      <div
        className="ml-4 md:ml-[35px] lg:ml-[140px] lg:mt-[70px] w-[380px] h-60 md:w-[515px] md:h-[270px] lg:w-[650px] lg:h-[300px]"
        aria-label="Hero section"
      >
        <h1 className="font-bold mb-2 text-4xl lg:text-[56px]">
          Your Tech Partner for{" "}
          <strong className="web-color-orange">Smarter Growth</strong>
        </h1>
        <h3 className="font-semibold text-base leading-7 lg:text-xl">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </h3>
        <Button
          href="#contact-section"
          suffixClass="mt-10 w-[360px] md:w-[200px]"
          aria-label="Contact us for tailored IT solutions"
        >
          Let's Talk
        </Button>
      </div>

      {/* Hero image for mobile view */}
      <picture className="pointer-events-none ml-4 md:ml-[35px] select-none p-0 sm:hidden">
        {/* Image for dark mode */}
        <source
          srcSet="/other-images/d-hero-image.svg"
          media="(prefers-color-scheme: dark)"
        />
        {/* Default image for light mode */}
        <img
          id="hero-image"
          src="/other-images/l-hero-image.svg"
          className="h-[380px] p-0"
          alt="Illustration of digital transformation and scalable IT solutions"
        />
      </picture>
    </section>
  );
};

export default Hero;
