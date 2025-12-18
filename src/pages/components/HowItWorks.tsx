import { useState } from "react";
import image from "../../assets/app.png";
import HeaderOne from "../../components/common/HeaderOne";
import Reveal from "../../components/common/Reveal";

const HowItWorks = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const steps = [
    {
      step: 1,
      image: image,
      title: "Enter your Location",
      subtitle:
        "You can search or enter your digital address for an exact pickup and same for your destination drop-off location as well.",
    },
    {
      step: 2,
      image: image,
      title: "Select your preferred MIJO",
      subtitle:
        "Choose a standard car for a quick pick up,  an executive car for a more formal occasion or a motorbike or van depending on your delivery needs.",
    },
    {
      step: 3,
      image: image,
      title: "Book your  MIJO",
      subtitle:
        "Book your ride or delivery on MIJO and track your driver in real-time to your exact pickup location, with estimated time of arrivals to help you plan ahead.",
    },
    {
      step: 4,
      image: image,
      title: "Enjoy your MIJO",
      subtitle:
        "Once your driver arrives, it’s time to sit back, relax, and enjoy the ride with GhanaPost Mijo..",
    },
  ];
  return (
    <div className="lineGrad p-8 mask-[radial-gradient(circle,white_60%,transparent_100%)] py-[100px] lg:py-[120px]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <HeaderOne
            title="How It Works"
            subtitle="Ride & Delivery Made Easy "
            centered={false}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {steps.map((step, index) => (
              <Reveal direction="up" delay={200}>
                <StepItem
                  key={step?.step}
                  number={step?.step}
                  title={step?.title}
                  subtitle={step?.subtitle}
                  index={index}
                  setCurrentImage={setCurrentImage}
                  currentImage={currentImage}
                />
              </Reveal>
            ))}
          </div>
          <div className="hidden lg:flex justify-center items-center px-6 col-span-3">
            <img
              src={steps[currentImage].image}
              className="max-h-[600px] w-full object-contain mask-[radial-gradient(circle,white_60%,transparent_100%)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

const StepItem = ({
  number,
  title,
  subtitle,
  index,
  setCurrentImage,
  currentImage,
}: {
  number: number;
  title: string;
  subtitle: string;
  index: number;
  setCurrentImage: any;
  currentImage: number;
}) => {
  return (
    <div
      className={`flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 cursor-pointer ${
        index == currentImage ? "bg-white/60" : "bg-white/20"
      }`}
      onClick={() => setCurrentImage(index)}
    >
      <div className="min-w-10 max-w-10 h-10 rounded-full bg-primary/70 text-white flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
};
