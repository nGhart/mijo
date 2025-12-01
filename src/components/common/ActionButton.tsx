import React from "react";

const ActionButton = ({
  text,
  bgColor = "bg-primary",
  textColor,
  image,
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
  image: any;
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} 
    flex items-center gap-3 px-4 py-2 rounded-xl
    hover:scale-105 transition-all duration-200 shadow-md cursor-pointer
  `}
    >
      <img src={image} alt="" className="w-7 h-7 object-contain" />

      <div className="flex flex-col leading-none">
        <p className="text-[10px] opacity-80">Download on the</p>
        <p className="text-sm font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default ActionButton;
