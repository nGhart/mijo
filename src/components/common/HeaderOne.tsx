import Reveal from "./Reveal";

const HeaderOne = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => {
  return (
    <div className={` max-w-3xl ${centered ? "text-center mx-auto" : ""}`}>
      <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      <p className="text-gray-500 pt-4 font-light">{subtitle}</p>
      {/* <Reveal direction="down">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      </Reveal>
      <Reveal direction="left" delay={150}>
        <p className="text-gray-500 pt-4 font-light">{subtitle}</p>
      </Reveal>{" "} */}
    </div>
  );
};

export default HeaderOne;
