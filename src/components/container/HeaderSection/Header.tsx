import { useState } from "react";
import { Button } from "../../ui/Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIconClass = "w-6 h-6 cursor-pointer invert dark:invert-0 md:hidden";
  const menuDesktopNavClass =
    "@apply md:mx-1 lg:mx-2 xl:mx-4 hover:text-[#FF6C37]";
  const mobileMenuLink =
    "@apply py-2 font-semibold text-sm hover:text-[#FF6C37]";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="py-6 px-4 flex justify-between items-center -translate-z-0.5 md:px-[35px] lg:px-[140px]">
        {/* Logo and brand name */}
        <div className="w-[179px] flex">
          <img src="/other-images/logo-symbol.svg" alt="Logo" />
          <div className="ml-3 font-outfit text-2xl font-semibold">
            Your Logo
          </div>
        </div>

        {/* Hamburger button */}
        {!isMenuOpen && (
          <img
            src="/icons/menu/menu-01.svg"
            className={menuIconClass}
            alt="Hamburger Menu"
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen(true)}
          />
        )}

        {/* Close button */}
        {isMenuOpen && (
          <img
            src="/icons/menu/x-close.svg"
            className={menuIconClass}
            alt="Close Menu"
            aria-label="Close mobile menu"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Desktop navigation */}
        <nav
          id="desktop-menu"
          className="max-w-[500px] font-semibold justify-between hidden md:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          <a className={menuDesktopNavClass} href="#about">
            About
          </a>
          <a className={menuDesktopNavClass} href="#services-section">
            Service
          </a>
          <a className={menuDesktopNavClass} href="#portfolio-section">
            Portfolio
          </a>
          <a className={menuDesktopNavClass} href="#testimonial-section">
            Testimonials
          </a>
          <a className={menuDesktopNavClass} href="#faq-section">
            FAQs
          </a>
        </nav>

        {/* Desktop CTA button */}
        <div className="hidden md:flex">
          <Button href="#contact-section" suffixClass="w-[179px]">
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        className={`px-4 text-md font-quicksand font-semibold flex flex-col gap-3 pt-4 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a className={mobileMenuLink} href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a
          className={mobileMenuLink}
          href="#services-section"
          onClick={handleLinkClick}
        >
          Service
        </a>
        <a
          className={mobileMenuLink}
          href="#portfolio-section"
          onClick={handleLinkClick}
        >
          Portfolio
        </a>
        <a
          className={mobileMenuLink}
          href="#testimonial-section"
          onClick={handleLinkClick}
        >
          Testimonials
        </a>
        <a
          className={mobileMenuLink}
          href="#faq-section"
          onClick={handleLinkClick}
        >
          FAQs
        </a>
        <Button href="#contact-section" prefixClass={mobileMenuLink}>
          Let's Talk
        </Button>
      </nav>
    </header>
  );
};

export default Header;
