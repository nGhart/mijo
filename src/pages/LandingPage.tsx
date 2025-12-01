import BusinessCustomers from "./components/BusinessCustomers";
import Customers from "./components/Customers";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import MijoPartnerPricing from "./components/MijoPartnerPricing";
import MijoPartners from "./components/MijoPartners";

const LandingPage = () => {
  return (
    <div className="space-y-8 lg:space-y-24 pb-24">
      <HeroSection />
      <section id="features" className="">
        <Features />
      </section>
      <section id="customers" className="">
        <Customers />
      </section>
      <section id="business" className="">
        <BusinessCustomers />
      </section>
      <section id="partners" className="">
        <MijoPartners />
      </section>
      <section id="pricing" className="">
        <MijoPartnerPricing />
      </section>
      <section id="started" className="">
        <GetStarted />
      </section>
      <section id="how" className="">
        <HowItWorks />
      </section>
      <section id="faqs" className="">
        <Faqs />
      </section>
    </div>
  );
};

export default LandingPage;
