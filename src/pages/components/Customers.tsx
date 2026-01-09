import Reveal from "../../components/common/Reveal";
import locate from "../../assets/location-define-svgrepo-com.svg";
import phone from "../../assets/smartphone-material-svgrepo-com.svg";
import tracker from "../../assets/location-pin-svgrepo-com.svg";
import payout from "../../assets/pay-svgrepo-com.svg";
import ratings from "../../assets/rate.svg";
import support from "../../assets/support-white.svg";
import HeaderOne from "../../components/common/HeaderOne";

const Customers = () => {
  const features = [
    {
      title: "Precise Location Pickup & Drop-off",
      content:
        "Use digital addresses for your exact location. Pickups, drop-offs and deliveries are a breeze on Mijo.",
      icon: tracker,
    },
    {
      title: "Multi-level Service",
      content:
        "Manage rides and deliveries from a single platform. No need to juggle multiple apps.",
      icon: phone,
    },
    {
      title: "Real-Time Tracker",
      content:
        "Know exactly where your ride or package is at every moment. Stay informed from pickup to drop-off.",
      icon: locate,
    },
    {
      title: "Secure Digital Payments",
      content:
        "Pay with your wallet, card, or mobile money. Fast, secure, and fully cashless.",
      icon: payout,
    },
    {
      title: "Ratings & Feedback System",
      content:
        "Share your experience and help keep service quality high. Riders, senders, and drivers all get a say.",
      icon: ratings,
    },
    {
      title: "Driver & Courier Support",
      content:
        "Get access to 24/7 driver support, safety training, and tools to maximize earnings.",
      icon: support,
    },
  ];
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 py-[100px] lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 space-y-24">
          {/* Section header */}
          <HeaderOne
            title="Everything You Need in One App"
            subtitle="Whether you’re a rider, sender, or driver, Mijo’s powerful
                features keep things smooth, safe, and simple."
          />
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:-start-px *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:start-0 md:*:p-10">
            {features.map((f, i) => (
              <Reveal direction="down" delay={i * 150}>
                <CustomerCard
                  key={i}
                  title={f.title}
                  content={f.content}
                  icon={f.icon}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;

const CustomerCard = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: any;
}) => {
  return (
    <article className="flex text-white gap-2">
      <div className="">
        <img src={icon} alt={title} width={50} className="text-primary" />
      </div>
      <div>
        <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <span>{title}</span>
        </h3>
        <p className="text-[15px] text-gray-400">{content}</p>
      </div>
    </article>
  );
};
