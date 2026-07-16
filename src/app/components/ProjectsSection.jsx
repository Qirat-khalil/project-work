"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  // 👇 Apne projects yahan add/replace karein
  const projects = [
    {
      title: "AI Workflow Automation",
      desc: "A smart automation platform that connects CRM, email, and analytics tools into one seamless AI-driven pipeline.",
      tag: "AI / Automation",
      img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049",
      link: "#",
    },
    {
      title: "E-commerce Dashboard",
      desc: "A real-time analytics dashboard for online stores with sales tracking, inventory alerts, and customer insights.",
      tag: "Web App",
      img: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A fast, animated personal portfolio built with Next.js, Tailwind CSS, and GSAP scroll animations.",
      tag: "Frontend",
      img: "https://framerusercontent.com/images/66vg6GiqexKxWsR2ms684XFtAQ.png?width=1536&height=1012",
      link: "#",
    },
    {
      title: "Chat Support Bot",
      desc: "An AI-powered customer support chatbot that resolves queries instantly and escalates complex tickets to humans.",
      tag: "AI / Chatbot",
      img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049",
      link: "#",
    },
  ];

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Entrance animation for heading block
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" })
        .from(headingRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Each project card animates in individually as it scrolls into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          delay: (idx % 2) * 0.15,
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  // Subtle hover lift using GSAP (instead of pure CSS)
  const handleEnter = (idx) => {
    gsap.to(cardRefs.current[idx], { y: -8, duration: 0.3, ease: "power2.out" });
  };
  const handleLeave = (idx) => {
    gsap.to(cardRefs.current[idx], { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section ref={sectionRef} className="relative w-full text-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
                         <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >Our Projects</span>


        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: "Valty DEMO" }}
        >
          My Recent Work
        </h2>

        {/* Subheading */}
        <p ref={subRef} className="text-gray-400 max-w-2xl mx-auto mb-14">
          A collection of projects I&apos;ve designed, built, and shipped — from AI tools to full web apps.
        </p>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-6 text-start">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              ref={(el) => (cardRefs.current[idx] = el)}
              onMouseEnter={() => handleEnter(idx)}
              onMouseLeave={() => handleLeave(idx)}
              className="group block border border-gray-800 rounded-2xl overflow-hidden bg-[#0c0c0c] hover:border-gray-600 transition-colors"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {project.tag}
                </span>
                <h3
                  className="text-2xl mt-2 mb-3"
                  style={{ fontFamily: "Valty DEMO" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm text-gray-300 group-hover:text-white transition-colors">
                  View Project
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </span>
              </div>
            </a>
          ))}
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

export default ProjectsSection;