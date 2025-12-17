const Button = ({
  text = "",
  bgColor = "bg-primary",
  textColor = "",
  onClick,
}: {
  text?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} hover:bg-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
