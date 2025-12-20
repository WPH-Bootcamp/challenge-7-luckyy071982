import { sectionContainer } from "../GlobalClasses";

const Footer = () => {
  const dividerClass = "my-6 border-[#252B37]";
  const footerMenuLinkClass =
    "py-2 md:px-4 font-medium text-sm md:text-base hover:text-[#FF6C37]";
  const socialMediaIconClass =
    "w-10 h-10 hover:bg-[#FF6C37] border border-[#DFDFDF] dark:border-[#252B37] rounded-full";

  return (
    <footer id="footer-section" className={sectionContainer} role="contentinfo">
      <div className="bg-[#FAFAFA] dark:bg-[#0A0D12] rounded-2xl border border-[#DFDFDF] dark:border-[#252B37] p-5 md:p-10">
        {/* Top Row: Logo and Headline */}
        <div className="md:flex md:justify-between md:flex-wrap">
          {/* Mobile Logo */}
          <div id="logo-mobile" className="flex mb-6 md:hidden">
            <img src="./other-images/logo-symbol.svg" alt="Logo" />
            <span className="ml-3 text-xl font-semibold lg:text-2xl">
              Your Logo
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-bold text-[28px] lg:text-[36px]">
            LET&apos;S DISCUSS
            <br className="hidden md:flex" />
            YOUR <br className="md:hidden" />
            IDEAS
          </h2>

          {/* Desktop Logo */}
          <div
            id="logo-nonmobile"
            className="hidden md:flex-wrap md:inline-flex"
          >
            <img
              src="./other-images/logo-symbol.svg"
              alt="Logo"
              className="self-start"
            />
            <span className="ml-3 text-xl font-semibold lg:text-2xl flex">
              Your Logo
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className={dividerClass} />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:gap-3 md:justify-between md:items-center">
          {/* Footer Navigation */}
          <nav
            id="footer-menu"
            className="flex flex-col md:flex-row md:gap-3"
            role="navigation"
            aria-label="Footer navigation"
          >
            <a className={footerMenuLinkClass} href="#about">
              About
            </a>
            <a className={footerMenuLinkClass} href="#services-section">
              Service
            </a>
            <a className={footerMenuLinkClass} href="#portfolio-section">
              Portfolio
            </a>
            <a className={footerMenuLinkClass} href="#testimonial-section">
              Testimonials
            </a>
            <a className={footerMenuLinkClass} href="#faq-section">
              FAQs
            </a>
          </nav>

          {/* Social Media Icons (Light Mode) */}
          <div className="mt-2 md:mt-0 dark:hidden">
            {[
              "Facebook-light",
              "Instagram-light",
              "Linkedin-light",
              "TikTok-light",
            ].map((icon, i) => (
              <a key={i} href="#" className="inline-flex items-start">
                <img
                  src={`./icons/social-media/${icon}.svg`}
                  alt={`${icon} Logo`}
                  className={socialMediaIconClass}
                />
              </a>
            ))}
          </div>

          {/* Social Media Icons (Dark Mode) */}
          <div className="mt-2 md:mt-0 hidden dark:block">
            {["Facebook", "Instagram", "Linkedin", "TikTok"].map((icon, i) => (
              <a key={i} href="#" className="inline-flex items-start">
                <img
                  src={`./icons/social-media/${icon}.svg`}
                  alt={`${icon} Logo`}
                  className={socialMediaIconClass}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
