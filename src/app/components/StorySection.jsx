"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2022",
    title: "The Vision",
    description:
      "KodraxelSoft was founded with a clear mission: to help businesses grow through intelligent software, modern web applications, and innovative digital solutions.",
  },
  {
    year: "2023",
    title: "Building Digital Excellence",
    description:
      "We expanded our expertise in MERN Stack development, delivering fast, scalable, and secure web applications tailored to startups and growing businesses.",
  },
  {
    year: "2024",
    title: "AI Automation & Agents",
    description:
      "Embracing the future, we started building AI Agents and workflow automation systems that reduce manual work, boost productivity, and streamline business operations.",
  },
  {
    year: "2025",
    title: "Driving Digital Transformation",
    description:
      "Today, KodraxelSoft empowers businesses with AI-powered solutions, custom SaaS platforms, enterprise applications, and end-to-end digital transformation services worldwide.",
  },
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the central line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Animate items
      itemsRef.current.forEach((el, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        
        gsap.fromTo(
          el,
          { x: direction, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="text-center mb-20">
            
                  <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >Our History</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#111] mt-2 mb-6">The Journey So Far</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From humble beginnings to a powerhouse of creativity. Every step has been a story of passion and persistence.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#053b5b] to-transparent transform md:-translate-x-1/2 rounded-full"
          ></div>

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[#111] border-4 border-[#053b5b] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(120,96,191,0.5)]"></div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div 
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-5xl font-bold text-[#EAEAF3] absolute top-4 right-4 select-none z-0">
                        {item.year}
                      </span>
                      <div className="relative z-10">
                         <span className="inline-block px-3 py-1 bg-[#F3F0FF] text-[#053b5b] text-xs font-bold rounded-full mb-3">
                          MILESTONE
                        </span>
                        <h3 className="text-2xl font-bold text-[#111] mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;
