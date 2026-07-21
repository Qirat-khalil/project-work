"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mv-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gradient-to-br from-[#185964] to-[#0E3940]
" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#185964] font-semibold uppercase tracking-widest">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0E3940]">
            Driven by Purpose,
            <span className="block text-[#185964]">
              Focused on Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything we build is guided by a clear mission and a long-term
            vision to help businesses embrace technology with confidence.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">

          {/* Mission */}

          <div className="mv-card rounded-[35px] bg-[#FAFAFA] border border-gray-200 p-10 shadow-[0_20px_80px_rgba(0,0,0,.06)] hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#185964]/10 flex items-center justify-center">
              <Target
                size={30}
                className="text-[#185964]"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#0E3940]">
              Our Mission
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              To empower startups and businesses with modern software,
              AI-driven automation, and scalable digital solutions that
              simplify operations, improve efficiency, and create measurable
              business value.
            </p>

          </div>


          {/* Vision */}

<div className="mv-card
    rounded-[35px]
    bg-[#0E3940]
    p-10
    shadow-[0_20px_80px_rgba(14,57,64,.25)]
    hover:-translate-y-2
    transition
    duration-300">

  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
    <Eye
      size={30}
      className="text-white"
    />
  </div>

  <h3 className="mt-8 text-3xl font-bold text-white">
    Our Vision
  </h3>

  <div className="mt-4 h-1 w-16 rounded-full bg-[#4CC9B0]"></div>

  <p className="mt-6 text-lg leading-8 text-[#D8E8E8]">
    To become a globally trusted technology partner recognized for delivering
    innovative software, intelligent AI solutions, and exceptional digital
    experiences that shape the future.
  </p>

</div>

        </div>

      </div>
    </section>
  );
}
