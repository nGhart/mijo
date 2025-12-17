// import logo from "../../assets/noBgLogo.png";
import logo from "../../assets/OIP.webp";

const Logo = ({ width = 40 }: { width?: number }) => {
  return <img src={logo} width={width} />;
};

export default Logo;
