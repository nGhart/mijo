import React from "react";
import HeaderOne from "../../components/common/HeaderOne";

const MijoPartnerPricing = () => {
  const pricingData = [
    {
      tier: "Daily",
      price: "GHS 29",
      description: "Ideal for professionals and growing teams.",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority email support",
        "Team collaboration tools",
      ],
    },
    {
      tier: "Weekly",
      price: "GHS 59",
      description: "Best for businesses that need more power and flexibility.",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom reporting",
        "API & integrations",
      ],
    },
    {
      tier: "Monthly",
      price: "GHS 100",
      description: "Tailored solutions for large-scale organizations.",
      features: [
        "Unlimited users",
        "Enterprise-grade security",
        "24/7 support",
        "Custom SLA & onboarding",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <HeaderOne title="One-off Commission Free Payments " subtitle="" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pricingData.map((p, index) => (
          <PricingCard
            tier={p.tier}
            key={index}
            price={p.price}
            description={p.description}
            features={p.features}
          />
        ))}
      </div>
    </div>
  );
};

export default MijoPartnerPricing;

const PricingCard = ({ tier, price, description, features }) => {
  return (
    <div
      className="
        group bg-white rounded-2xl p-8 shadow-md border border-gray-200 
        transition-all duration-300 cursor-pointer
        hover:-translate-y-3 hover:shadow-xl hover:border-blue-500/40 hover:bg-gray-900 
      "
    >
      {/* Tier Name */}
      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white">
        {tier}
      </h3>

      {/* Price */}
      <p className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-white">
        {price}
        {/* <span className="text-base text-gray-500 font-normal"> /month</span> */}
      </p>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
        {description}
      </p>

      {/* Get Started Button */}
      <button
        className="
          w-full bg-primary text-white py-3 rounded-xl font-semibold
          transition-all duration-300 group-hover:bg-blue-700 
          group-hover:-translate-y-1 shadow-sm
        "
      >
        Get Started
      </button>

      {/* What's Included */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-800 mb-3 group-hover:text-white">
          What’s included:
        </h4>

        <ul className="space-y-2">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-600 group-hover:text-white"
            >
              <span className="text-secondary font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
