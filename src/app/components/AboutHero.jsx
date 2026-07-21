"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".about-badge", {
        y: -25,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".about-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".about-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#185964]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#185964]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        <div className="about-badge inline-flex items-center gap-2 rounded-full border border-[#185964]/20 bg-[#185964]/10 px-5 py-2 text-[#185964]">
          <Sparkles size={16} />
          About KodraxelSoft
        </div>

        <h1 className="about-title mt-8 text-5xl lg:text-7xl font-bold leading-tight text-[#0E3940]">
          Engineering
          <span className="block text-[#185964]">
            Digital Excellence
          </span>
        </h1>

        <p className="about-description mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
          We are a modern software company specializing in AI-powered
          applications, intelligent automation, and scalable web solutions.
          Our mission is to transform ambitious ideas into reliable digital
          products that help businesses innovate, grow, and succeed in a
          rapidly evolving world.
        </p>

      </div>
    </section>
  );
}
