

"use client";

import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
// import MegaMenu from "./Servicemenue";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);



  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },

  ];

  return (
    <>
      <header
        className={`w-full relative z-50 transition-colors duration-300 ${servicesOpen ? "bg-white" : "bg-transparent"
          }`}
      >
        <Container maxWidth="7xl">
          <div className="py-4 flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2"
              onMouseEnter={() => setServicesOpen(false)}
            >
              <img
                src="/images/logo-img.png"
                className="w-[250px] h-auto" 
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center shadow-2xl gap-8 bg-[#185964] px-8 py-4 rounded-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(false)}
                >
                  <span className="text-[#FFFFFF] font-semibold tracking-wide">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0e444b] scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
                </Link>
              ))}

              {/* Services Trigger */}
              <div
                className="relative flex items-center gap-1 cursor-pointer group"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => (window.location.href = "/services")}
              >
                <span className="text-[#FFFFFF] font-semibold tracking-wide">
                  Services
                </span>

                <ChevronDown
                  className={`text-white mt-[2px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                    }`}
                  size={18}
                />

                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#053b5b] 
                       scale-x-0 origin-right transition-transform duration-700 
                       ease-[cubic-bezier(0.77,0,0.175,1)] 
                       group-hover:scale-x-100 group-hover:origin-left">
                </span>
              </div>

              <Link
                href="/work"
                className="relative group"
                onMouseEnter={() => setServicesOpen(false)}
              >
                <span className="text-[#FFFFFF] font-semibold tracking-wide">
                  Work
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0e444b] scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>

              <Link
                href="/contact"
                className="relative group"
                onMouseEnter={() => setServicesOpen(false)}
              >
                <span className="text-[#FFFFFF] font-semibold tracking-wide">
                  Contact Us
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0e444b] scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
            </nav>

            {/* Desktop Button */}
            <div
              className="hidden lg:block"
              onMouseEnter={() => setServicesOpen(false)}
            >
              <Button name="Get In Touch" onClick={() => window.location.href = "/contact"} />
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden"
              onClick={() => setMobileDrawerOpen(true)}
            >
              <Menu size={28} className="text-[#053b5b]" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mega Menu */}
      {/* <MegaMenu isOpen={servicesOpen} setIsOpen={setServicesOpen} /> */}

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileDrawerOpen} setIsOpen={setMobileDrawerOpen} />
    </>
  );
};

export default Navbar;





