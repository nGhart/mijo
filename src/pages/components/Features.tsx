import React from "react";
import FeaturesCard from "../../components/common/FeaturesCard";
import Reveal from "../../components/common/Reveal";
import HeaderOne from "../../components/common/HeaderOne";

const Features = () => {
  const features = [
    {
      title: "Affordable Rides, On-Demand  	",
      subtitle:
        "Say goodbye to long waits and overpriced trips. With Mijo, get a ride when you need it. Whether it’s a quick hop across town or a long-distance trip. Fair pricing. No surprises.",
    },
    {
      title: "Smart Deliveries, Made Easy	",
      subtitle:
        "Need to send something across town? From documents to packages, Mijo Delivery lets you book quick and secure deliveries directly from your phone.",
    },
    {
      title: "Reliable Drivers, Local Knowledge	",
      subtitle:
        "Mijo Ride has Partner Drivers that are vetted, trained, and locally based. You’re in safe hands with professionals who know the city inside out.",
    },
    {
      title: "Earn On Your Terms	",
      subtitle:
        "Join Mijo as a Partner Driver or Courier and turn your time into earnings. Flexible schedules, transparent payouts, and real-time trip requests let you work how you want.",
    },
  ];
  return (
    <div className="">
      <HeaderOne
        title="Mobility That Matches Your Lifestyle."
        subtitle="Getting around or sending packages in Ghana shouldn’t be a hassle. Mijo makes transport and delivery simple, affordable, and right on time with options that work for everyone."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:px-[200px]">
        {features.map((f, index) => (
          <Reveal key={index} direction="up" delay={index * 150}>
            <FeaturesCard f={f} key={index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Features;
