import BusinessCard from "../../components/common/BusinessCard";
import HeaderOne from "../../components/common/HeaderOne";
import delivery from "../../assets/delivery.svg";
import locate from "../../assets/locate.svg";
import gh from "../../assets/gh.svg";
import support from "../../assets/support.svg";

const BusinessCustomers = () => {
  const customers = [
    {
      title: "On-Demand Delivery Fleet	",
      subtitle:
        "Tap into Mijo’s network of trained couriers and riders to deliver goods quickly without hiring your own fleet.",
      icon: delivery,
    },
    {
      title: "Real-Time Order Tracking	",
      subtitle:
        "Offer customers full transparency with delivery updates and live tracking links.",
      icon: locate,
    },
    {
      title: "Nationwide Coverage	",
      subtitle:
        "Serve your customers across Accra, Kumasi, Takoradi, and more, with a growing delivery footprint across Ghana.",
      icon: gh,
    },
    {
      title: "Dedicated Support	",
      subtitle:
        "Get access to a business success team, priority support, and logistics optimization tools tailored to your business needs.",
      icon: support,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto space-y-12 p-6">
      <HeaderOne
        title="Partner with Mijo to Power Your Business Logistics"
        subtitle="Scale your delivery operations, boost customer satisfaction, and grow
          revenue by partnering with Mijo. Whether you run a retail store,
          pharmacy, e-commerce shop, or restaurant, Mijo helps you move smarter."
      />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center pb-8 text-center lg:text-left">
        <p className="text-3xl text-primary font-semibold">
          Partner with Mijo to Power Your Business Logistics
        </p>
        <p className="text-sm">
          Scale your delivery operations, boost customer satisfaction, and grow
          revenue by partnering with Mijo. Whether you run a retail store,
          pharmacy, e-commerce shop, or restaurant, Mijo helps you move smarter.
        </p>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {customers.map((c, index) => (
          <BusinessCard c={c} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BusinessCustomers;
