import Navigation from "./Navigation";
import Logo from "../common/Logo";

const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden md:flex bg-white rounded-full px-6 py-2 shadow-inner border border-blue-100">
          <ul className="flex items-center gap-6 text-gray-700 text-sm font-medium">
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => scrollToSection("features")}
            >
              Features
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => scrollToSection("customers")}
            >
              Customers
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => scrollToSection("business")}
            >
              Business
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => scrollToSection("faqs")}
            >
              FAQs
            </li>
          </ul>
        </nav>
        <div className="">
          <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-white shadow-">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
