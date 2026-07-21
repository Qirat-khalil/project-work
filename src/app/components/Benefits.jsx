"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benifits = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".benefit-badge", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".benefit-title",
          {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".benefit-desc",
          {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".benefit-card",
          {
            opacity: 0,
            y: 100,
            duration: 1.2,
            stagger: 0.4,
            ease: "power3.out",
          },
          "-=0.8"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative text-white py-26 px-4">
      <div className="max-w-6xl mx-auto">
        {/* -------- Heading + Button -------- */}
        <div className="text-center mb-14">
          <div className="benefit-badge text-center">
            {/* <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
              <Star size={14} className="text-white" />
              BENEFITS
            </button> */}
                                     <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >BENEFITS</span>

          </div>

          <h2
            className="benefit-title text-5xl font-semibold text-white mt-2"
            style={{ fontFamily: "Valty DEMO" }}
          >
            Why Choose Us?
          </h2>

          <p className="benefit-desc text-gray-400 mt-2 text-sm">
            Everything you need to automate, optimize, and scale
          </p>
        </div>

        {/* -------- Features Grid -------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ---------- Card 1 ---------- */}
          <div className="benefit-card flex flex-col bg-[#04070D] border border-white/10 rounded-2xl p-8 text-center group shadow-inner shadow-[rgba(207,231,255,0.2)]">
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0E3940] to-transparent shadow-inner shadow-[rgba(207,231,255,0.15)]"></div>

                <div
                  className="absolute top-1/2 left-1/2 w-[45%] h-[8px] bg-[#0E3940] origin-left rounded-sm
                  -rotate-150 transition-transform duration-[800ms] ease-linear group-hover:rotate-0"
                ></div>

                <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-[#0E3940] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#636996] rounded-full"></div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Real-Time Intelligence
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Access accurate, real-time data to drive smarter decisions
            </p>
          </div>

          {/* ---------- Card 2 ---------- */}
          <div className="benefit-card flex flex-col bg-[#05080E] border border-gray-800 rounded-2xl p-8 text-center group">
            <div className="flex justify-center mb-8">
              <div className="flex items-end gap-4 h-40">
                <div className="w-12 bg-[#0E3940] rounded-[12px] h-17 transition-all duration-500 ease-linear group-hover:h-20"></div>
                <div className="w-12 bg-[#0E3940] rounded-[12px] h-25 transition-all duration-500 ease-linear delay-100 group-hover:h-28"></div>
                <div className="w-12 bg-[#0E3940] rounded-[12px] h-24 transition-all duration-500 ease-linear delay-200 group-hover:h-36"></div>
                <div className="w-12 bg-[#0E3940] rounded-[12px] h-30 transition-all duration-500 ease-linear delay-300 group-hover:h-44"></div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Measurable Impact
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Track performance, uncover insights, and achieve data-backed growth
            </p>
          </div>

          {/* ---------- Card 3 ---------- */}
          <div className="benefit-card flex flex-col bg-[#05080E] border border-gray-800 rounded-2xl p-8 text-center group md:col-span-2 md:mx-auto lg:col-span-1">
            <div className="flex justify-center mb-8">
              <div className="relative w-52 h-52 transition-transform duration-[15000ms] ease-linear group-hover:rotate-[360deg]">
                <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10131c] shadow-inner shadow-blue-200/30 flex items-center justify-center z-10">
                  <img
                    src="https://framerusercontent.com/images/EdYwMQFSY0q3kCvKPrFpiTV5w.png"
                    alt="center icon"
                    className="w-8 h-8 object-contain opacity-90"
                  />
                </div>

                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 origin-left"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="w-28 h-[4px] bg-[#0E3940] rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#10131c] rounded-full shadow-inner shadow-blue-200/30"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Seamless Integration
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Connect tools, teams, and workflows with intelligent automation
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;