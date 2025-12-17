import { useState } from "react";
import Logo from "../common/Logo";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between mt-4">
        <div className="flex-1/5">
          <Logo width={60} />
        </div>
        <div className="hidden md:flex md:flex-3/5 justify-center">
          <nav className="hidden md:flex bg-white rounded-full px-6 py-2 shadow-inner border border-blue-100">
            <ul className="flex items-center gap-6 text-gray-700 text-sm font-medium">
              <li
                onClick={() => handleScroll("features")}
                className="cursor-pointer hover:text-dark"
              >
                Features
              </li>
              <li
                onClick={() => handleScroll("customers")}
                className="cursor-pointer hover:text-dark"
              >
                Customers
              </li>
              <li
                onClick={() => handleScroll("business")}
                className="cursor-pointer hover:text-dark"
              >
                Businesses
              </li>
              <li
                onClick={() => handleScroll("faqs")}
                className="cursor-pointer hover:text-dark"
              >
                FAQs
              </li>
            </ul>
          </nav>
        </div>{" "}
        <div className="hidden md:flex justify-end flex-1/5">
          <Button onClick={() => handleScroll("started")} text="Get Started" />
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 text-sm font-medium">
            <li
              onClick={() => handleScroll("features")}
              className="cursor-pointer hover:text-dark"
            >
              Features
            </li>
            <li
              onClick={() => handleScroll("customers")}
              className="cursor-pointer hover:text-dark"
            >
              Customers
            </li>
            <li
              onClick={() => handleScroll("business")}
              className="cursor-pointer hover:text-dark"
            >
              Businesses
            </li>
            <li
              onClick={() => handleScroll("faqs")}
              className="cursor-pointer hover:text-dark"
            >
              FAQs
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
