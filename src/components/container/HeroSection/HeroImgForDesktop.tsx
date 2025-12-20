const HeroImgForDesktop = () => {
  return (
    <>
      {/* Hero Image - desktop view */}
      <picture className="z-0 pointer-events-none select-none hidden sm:absolute sm:top-0 sm:right-0 sm:z-0 sm:block">
        {/* Image for dark mode */}
        <source
          srcSet="/other-images/d-hero-image.svg"
          media="(prefers-color-scheme: dark)"
        />
        {/* Default image (light mode) */}
        <img
          id="hero-image-xtralarge"
          src="/other-images/l-hero-image.svg"
          className="h-[391px] lg:h-[747px]"
          alt="Hero Image"
        />
      </picture>
    </>
  );
};

export default HeroImgForDesktop;
