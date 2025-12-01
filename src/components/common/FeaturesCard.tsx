import React from "react";

const FeaturesCard = ({ f }) => {
  return (
    <div
      className="
            group
            p-6 rounded-2xl border border-blue-200
            bg-blue-500/10 backdrop-blur-xl 
            shadow-lg cursor-pointer
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-blue-400/40 hover:border-blue-200/60 min-h-[250px]
            "
    >
      <div
        className="
    absolute inset-0 opacity-0 group-hover:opacity-10
    bg-gradient-to-br from-blue-400 to-blue-600
    rounded-2xl blur-xl transition-opacity
  "
      ></div>

      {/* <h3 className="text-xl font-semibold  mb-2 group-hover:text-white"> */}
      <h3 className="text-xl font-semibold  mb-2">{f.title}</h3>
      <p className="text-sm group-hover:text-black">{f.subtitle}</p>
    </div>
    //   <div
    //     className="
    //           group
    //           p-6 rounded-2xl border border-blue-200
    //           bg-blue-500/10 backdrop-blur-xl
    //           shadow-lg cursor-pointer
    //           transition-all duration-300
    //           "
    //     // hover:-translate-y-2 hover:shadow-blue-400/40 hover:border-blue-200/60 h-[400px]
    //   >
    //     <div
    //       className="
    //   absolute inset-0 opacity-0 group-hover:opacity-20
    //   bg-gradient-to-br from-blue-400 to-blue-600
    //   rounded-2xl blur-xl transition-opacity
    // "
    //     ></div>

    //     {/* <h3 className="text-xl font-semibold  mb-2 group-hover:text-white"> */}
    //     <h3 className="text-xl font-semibold  mb-2">{f.title}</h3>
    //     <p className="text-sm group-hover:text-black">{f.subtitle}</p>
    //   </div>
  );
};

export default FeaturesCard;
