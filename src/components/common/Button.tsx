import React from "react";

const Button = ({ text = "", bgColor = "bg-primary", textColor = "" }) => {
  return (
    <button
      className={`${bgColor} ${textColor} hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1`}
    >
      {text}
    </button>
  );
};

export default Button;
