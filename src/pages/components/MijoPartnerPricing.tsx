import HeaderOne from "../../components/common/HeaderOne";
// import Reveal from "../../components/common/Reveal";

const MijoPartnerPricing = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (id: string) => {
    scrollToSection(id);
  };
  const pricingData = [
    {
      tier: "Daily",
      price: "GHS 24",
      description:
        "Full access for 24 hours. Perfect for short-term or one-time use.",
    },
    {
      tier: "Weekly",
      price: "GHS 120",
      description:
        "Unlimited access for 7 days. Ideal if you need flexibility without a long commitment.",
    },
    {
      tier: "Monthly",
      price: "GHS 600",
      description: "Best value. Enjoy uninterrupted access for a full month.",
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto space-y-8 p-6 lg:p-0">
      <HeaderOne title="One-off Commission Free Payments " subtitle="" />
      <div className="block lg:hidden space-y-4">
        {pricingData.map((p, index) => (
          <PricingCard
            tier={p.tier}
            key={index}
            price={p.price}
            description={p.description}
            handleScroll={() => handleScroll("started")}
          />
        ))}
      </div>
      <div className="hidden lg:block space-y-8">
        <div className="grid grid-cols-3 gap-8">
          {pricingData.map((p, index) => (
            // <Reveal key={index} direction="left" delay={index * 150}>
            <PricingCard
              tier={p.tier}
              key={index}
              price={p.price}
              description={p.description}
              handleScroll={() => handleScroll("started")}
            />
            // </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MijoPartnerPricing;

const PricingCard = ({
  tier,
  price,
  description,
  handleScroll,
}: {
  tier?: string;
  price?: string;
  description?: string;
  handleScroll?: any;
}) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-200 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-3 hover:shadow-xl hover:border-blue-500/40 hover:bg-gray-900 h-full">
      <div className="">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white">
          {tier}
        </h3>

        <p className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-white">
          {price}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
          {description}
        </p>
      </div>

      <button
        className="w-full bg-secondary text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:bg-dark group-hover:-translate-y-1 shadow-sm cursor-pointer"
        onClick={handleScroll}
      >
        Get Started
      </button>
    </div>
  );
};
