import Header from "./components/container/HeaderSection/Header";
import Hero from "./components/container/HeroSection/Hero";
import Partner from "./components/container/PartnerSection/Partner";
import Achievements from "./components/container/AchievementsSection/Achievements";
import Workflow from "./components/container/WorkflowSection/Workflow";
import Services from "./components/container/ServicesSection/Services";
import SectorExpertise from "./components/container/SectorExpertiseSection/SectorExpertise";
import Portfolio from "./components/container/PortfolioSection/Portfolio";
import Testimonial from "./components/container/TestimonialSection/Testimonial";
import FAQ from "./components/container/FAQSection/FAQ";
import Contact from "./components/container/ContactSection/Contact";
import Footer from "./components/container/FooterSection/Footer";

function App() {
  return (
    <>
      {/* <!-- Hero Image - desktop view --> */}
      <picture className="z-0 pointer-events-none select-none hidden sm:absolute sm:top-0 sm:right-0 sm:z-0 sm:block">
        {/* <!-- Image for dark mode --> */}
        <source
          srcSet="/other-images/d-hero-image.svg"
          media="(prefers-color-scheme: dark)"
        />
        {/* <!-- Default image (light mode) --> */}
        <img
          id="hero-image-xtralarge"
          src="/other-images/l-hero-image.svg"
          className="h-[391px] lg:h-[747px]"
          alt="Hero Image"
        />
      </picture>
      <Header />
      <main>
        <Hero />
        <Partner />
        <Achievements />
        <Workflow />
        <Services />
        <SectorExpertise />
        <Portfolio />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
