import { servicesData } from "../utils/data";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";

const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  
  ];

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1B1A21] text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-[#1B1A21] z-10">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#053b5b] to-[#6958CC] flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-bold">Pixgro</span> */}
            <img src="/images/logo.png" className="w-[190px] h-auto" />
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-6 gap-2 pb-24">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white font-medium py-3 px-4 rounded-lg hover:bg-[#2A2831] transition-all"
            >
              {item.name}
            </a>
          ))}

          {/* Services Accordion */}
          <div className="mt-2">
            <div className="w-full text-white font-medium py-3 px-4 rounded-lg bg-[#2A2831]">
              <a href="/services">service</a>
              
            </div>

            {/* Main Services Categories */}
            {/* <div className="mt-2 ml-2 space-y-1">
              {Object.keys(servicesData).map((category) => (
                <div key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between text-gray-300 py-2 px-4 rounded-lg hover:bg-[#2A2831] hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          expandedCategories[category] ? "rotate-90" : ""
                        }`}
                      />
                      <span className="text-sm">{category}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        expandedCategories[category] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  Nested Services
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCategories[category]
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-6 mt-1 space-y-1">
                      {servicesData[category].services.map((service, idx) => {
                        const slug = service.title.toLowerCase().replace(/\s+/g, '-');
                        return (
                        <a
                          key={idx}
                          href={`/services/${slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-2 text-gray-400 py-2 px-3 rounded-lg hover:bg-[#2A2831] hover:text-white transition-all text-xs"
                        >
                          <span className="text-base">{service.icon}</span>
                          <span>{service.title}</span>
                        </a>
                      );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Additional Nav Items */}
          <a
            href="/work"
            onClick={() => setIsOpen(false)}
            className="text-white font-medium py-3 px-4 rounded-lg hover:bg-[#2A2831] transition-all"
          >
            Work
          </a>
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white font-medium py-3 px-4 rounded-lg hover:bg-[#2A2831] transition-all"
          >
            Contact Us
          </a>

          {/* CTA Button */}
          <div className="mt-6">
            <Button name="Get In Touch" onClick={() => window.location.href = "/contact" } />
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileDrawer;
