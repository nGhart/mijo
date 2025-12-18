import Button from "../../components/common/Button";
import Reveal from "../../components/common/Reveal";
import handImage from "../../assets/hand.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (id: string) => {
    scrollToSection(id);
  };
  return (
    <div className="pt-[100px] bg-white">
      <div className="flex flex-col items-center text-center px-6 md:px-0 max-w-4xl mx-auto">
        <div className="block lg:hidden">
          <Reveal direction="down">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fadeIn">
              Ride, Deliver, Earn
              <br />
              All with <span className="text-primary">Mijo</span>
            </h1>
          </Reveal>
          <p className="text-gray-700 text-lg md:text-xl mb-8 animate-fadeIn delay-150">
            Mijo is Ghana’s all-in-one mobility app for fast, reliable rides and
            smart deliveries. Whether you’re commuting, sending packages, or
            looking to earn, Mijo puts convenience in your hands.
          </p>
        </div>
        <div className="hidden lg:block">
          <Reveal direction="down">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fadeIn">
              Ride, Deliver, Earn
              <br />
              All with <span className="text-primary">Mijo</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="text-gray-700 text-lg md:text-xl mb-8 animate-fadeIn delay-150">
              Mijo is Ghana’s all-in-one mobility app for fast, reliable rides
              and smart deliveries. Whether you’re commuting, sending packages,
              or looking to earn, Mijo puts convenience in your hands.
            </p>
          </Reveal>
        </div>
        <Reveal direction="up" delay={300}>
          <Button
            text="Get Started with Mijo"
            onClick={() => handleScroll("started")}
          />
        </Reveal>
        <div className="hidden lg:block pt-[100px]">
          <img src={handImage} className="w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
