"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import {
  FaReact, FaNodeJs, FaFigma, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDocker, FaAws
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGreensock, SiTypescript, SiFramer, SiMongodb, SiPostgresql, SiGraphql, SiRedis, SiExpress } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "Python", icon: <FaPython />, color: "#3776AB", desc: "Programming" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", desc: "Cloud" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB", desc: "UI Library" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", desc: "React Framework" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", desc: "Backend" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", desc: "Type Safety" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", desc: "Utility CSS" },
  { name: "GSAP", icon: <SiGreensock />, color: "#88CE02", desc: "Animations" },
  { name: "Framer", icon: <SiFramer />, color: "#0055FF", desc: "Motion" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E", desc: "Design" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", desc: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", desc: "SQL Database" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098", desc: "API Query" },
  { name: "Express", icon: <SiExpress />, color: "#000000", desc: "Web Framework" },
];

const TechSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e, color) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: `0 20px 40px -10px ${color}66`,
      borderColor: color,
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".icon-wrapper"), {
      scale: 1.2,
      rotate: 10,
      color: color,
      duration: 0.4,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
      borderColor: "transparent",
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".icon-wrapper"), {
      scale: 1,
      rotate: 0,
      color: "#3D4048",
      duration: 0.4,
    });
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 ">
      <Container>
        <div className="text-center mb-16">
                  <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >Our History</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mt-2 mb-6">Technologies We Master</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We leverage the latest and most robust tools to build scalable, high-performance digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={(e) => handleMouseEnter(e, tech.color)}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-transparent transition-colors cursor-pointer relative overflow-hidden group"
            >
              {/* Background Gradient Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
              ></div>

              <div className="icon-wrapper text-5xl text-[#3D4048] mb-4 transition-colors z-10">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111] z-10">{tech.name}</h3>
              <p className="text-sm text-gray-400 mt-1 z-10">{tech.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechSection;
