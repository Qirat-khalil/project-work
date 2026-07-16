"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";

const Recentworksec = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // LG se chhote devices animation off
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // MD/SM me scroll animation off

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.4;
      const range = sectionHeight - windowHeight * 1.3;
      const progress = Math.max(
        0,
        Math.min(2, ((start - sectionTop) / range) * 2)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const brands = [
    {
      id: 1,
      number: "01",
      title: "Branding",
      description:
        "Crafting cohesive identities that make your brand unforgettable.",
      services: ["Brand Design", "UI/UX Design", "Web Development"],
      image: "/images/mobile.webp",
      stats: [
        { label: "Customer Rate", value: "14 %" },
        { label: "User Satisfaction", value: "98 %" },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX Design",
      description:
        "Crafting cohesive identities that make your brand unforgettable.",
      services: ["User Research", "Wireframing", "Prototyping"],
      image: "/images/mobile2.webp",
      stats: [
        { label: "Customer Rate", value: "14 %" },
        { label: "User Satisfaction", value: "98 %" },
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Digital Marketing",
      description:
        "Crafting cohesive identities that make your brand unforgettable.",
      services: ["Brand Design", "UIUX Design", "Web Development"],
      image: "/images/mobile3.webp",
      stats: [
        { label: "Customer Rate", value: "14 %" },
        { label: "User Satisfaction", value: "98 %" },
      ],
    },
  ];

  const getCardStyle = (index) => {
    const cardProgress = scrollProgress - index;
    if (cardProgress < -0.2)
      return {
        opacity: 0,
        transform:
          "perspective(2000px) translateZ(-200px) translateY(100vh) scale(0.9)",
        zIndex: index,
        pointerEvents: "none",
      };
    if (cardProgress < 0) {
      const enterProgress = (cardProgress + 0.2) / 0.2;
      return {
        opacity: enterProgress * 0.3,
        transform: `perspective(2000px) translateZ(${
          -200 + enterProgress * 200
        }px) translateY(${(1 - enterProgress) * 30}vh) scale(${
          0.9 + enterProgress * 0.1
        })`,
        zIndex: index,
        pointerEvents: "none",
      };
    }
    if (cardProgress < 0.6)
      return {
        opacity: 1,
        transform:
          "perspective(2000px) translateZ(0px) translateY(0px) scale(1)",
        zIndex: 10 + index,
        pointerEvents: "auto",
      };
    if (cardProgress < 1.1) {
      const progress = (cardProgress - 0.6) / 0.5;
      const rotateX = progress * 25;
      const translateZ = -progress * 300;
      const translateY = -progress * 50;
      const scale = 1 - progress * 0.15;
      const opacity = 1 - progress * 0.6;
      return {
        opacity,
        transform: `perspective(2000px) translateZ(${translateZ}px) translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
        zIndex: index,
        pointerEvents: "none",
      };
    }
    return {
      opacity: 0.2,
      transform:
        "perspective(2000px) translateZ(-300px) translateY(-50px) rotateX(25deg) scale(0.8)",
      zIndex: index,
      pointerEvents: "none",
    };
  };

  // Mobile + MD View
  if (isMobile) {
    return (
      <div className="px-4 py-12">
        <h2 className="text-[#3D4048] text-4xl font-bold text-center mb-12">Recent Works</h2>
        <div className="space-y-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-[#2B2743] rounded-[40px] p-6 text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#053b5b]"></div>
                <p className="text-sm font-medium">{brand.number}</p>
              </div>
              <h5 className="text-3xl font-bold mb-4">{brand.title}</h5>
              <p className="text-base font-semibold mb-6 leading-relaxed">
                {brand.description}
              </p>
              <div className="w-full rounded-3xl flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="w-full h-auto object-contain object-center"
                />
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Services Provided</h4>
                <div className="flex flex-wrap gap-2">
                  {brand.services.map((service, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 bg-[#3C4864] text-sm font-semibold rounded-full border-2 border-[#737c8f]"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-6">
                {brand.stats.map((stat, idx) => (
                  <div key={idx} className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide mb-2">
                      {stat.label}
                    </p>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // LG+ devices: Scroll animation active
  return (

    <Container>
      <div ref={sectionRef} className="py-12 min-h-[500vh] mb-16">
        <h1 className="text-5xl font-bold text-center mb-16">Recent Work</h1>
        <div
          className="sticky top-0 h-screen flex items-start justify-center overflow-visible"
          style={{ perspective: "2000px" }}
        >
          <div className="relative w-full max-w-8xl h-[110vh] mx-auto">
            {brands.map((brand, index) => {
              const style = getCardStyle(index);
              return (
                <div
                  key={brand.id}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  <div className="flex flex-col lg:flex-row h-full bg-[#053b5b] py-16 px-8 lg:px-12 rounded-[80px] text-white gap-10 shadow-2xl">
                    {/* Column 1 */}
                    <div className="flex-[1] flex flex-col justify-between py-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 mt-2 rounded-full bg-[#053b5b]"></div>
                          <p className="text-lg font-medium">{brand.number}</p>
                        </div>
                        <h3 className="text-4xl font-bold leading-tight">
                          {brand.title}
                        </h3>
                      </div>
                      <p className="font-bold text-xl leading-relaxed mt-auto">
                        {brand.description}
                      </p>
                    </div>

                    {/* Column 2 - Image */}
                    <div className="flex-1 flex justify-center items-center py-4">
                      <div className="h-full w-full max-w-md flex items-center justify-center overflow-hidden rounded-3xl">
                        <img
                          src={brand.image}
                          alt={brand.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>


                    {/* Column 3 */}
                    <div className="flex-[1] flex flex-col justify-between py-6">
                      <div>
                        <h4 className="text-2xl font-bold mb-6">
                          Services Provided
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {brand.services.map((service, idx) => (
                            <button
                              key={idx}
                              className="px-4 py-2 bg-[#3C4864] font-semibold text-base rounded-full border-2 border-[#737c8f] hover:bg-white hover:text-[#19233B] transition-colors"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-8 mt-auto">
                        {brand.stats.map((stat, idx) => (
                          <div key={idx} className="flex-1 space-y-3">
                            <p className="text-white text-sm font-bold uppercase tracking-wide">
                              {stat.label}
                            </p>
                            <h3 className="text-4xl font-bold text-white">
                              {stat.value}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Recentworksec;
