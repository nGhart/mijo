import React from "react";
import image from "../../assets/image.jpg";
import HeaderOne from "../../components/common/HeaderOne";
import BusinessCard from "../../components/common/BusinessCard";

const MijoPartners = () => {
  const partners = [
    {
      title: "Flexible Work, Real Earnings	",
      subtitle:
        "Choose your own hours, accept trips when you're ready, and get paid for every completed ride or delivery. With Mijo, your hustle works around your life.",
      image: image,
    },
    {
      title: "Easy Onboarding Process	",
      subtitle:
        "Get verified, trained, and ready to earn in just a few steps. We support you from registration through your first trip.",
      image: image,
    },
    {
      title: "Transparent Payouts	",
      subtitle:
        "Track your earnings in real time and enjoy fast, reliable payments with no hidden fees and no surprises.",
      image: image,
    },
    {
      title: "Built-In Safety & Support	",
      subtitle:
        "From SOS buttons to 24/7 driver support, Mijo puts your safety and well-being first every time you hit the road.",
      image: image,
    },
    {
      title: "Grow with Exclusive Bonuses	",
      subtitle:
        "Earn more with loyalty bonuses, and high-demand incentives in your area.",
      image: image,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <HeaderOne
        title="Drive. Deliver. Earn – Become A Mijo Partner"
        subtitle="Join a growing network of trusted riders and couriers powering movement across Ghana. Whether you drive a car or ride a bike, Mijo gives you the tools and flexibility to earn on your terms."
      />
      <div className="block lg:hidden space-y-4">
        {partners.map((p, index) => (
          <PartnerCard
            key={index}
            image={p.image}
            title={p.title}
            subtitle={p.subtitle}
            size=""
          />
        ))}
      </div>
      <div className="hidden lg:block space-y-8">
        <div className="grid grid-cols-2 gap-4">
          {partners.slice(0, 2).map((p, index) => (
            <PartnerCard
              key={index}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              size=""
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8">
          {partners.slice(2).map((p, index) => (
            <PartnerCard
              key={index}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              size=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MijoPartners;

const PartnerCard = ({ image, title, subtitle, size }) => {
  return (
    <div
      className="group bg-linear-to-b from-white to-primary-200/10 rounded-2xl shadow-md p-6 cursor-pointer
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      border border-transparent hover:border-blue-500/30"
    >
      {/* Image */}
      <div className={`${size} mb-4`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:pb-4"
        />
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
};
