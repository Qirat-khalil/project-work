"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  // 👇 Apne real testimonials yahan add/replace karein
  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Founder, NovaRetail",
      quote:
        "Working with this team completely transformed our workflow. What used to take hours is now automated in minutes.",
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Bilal Ahmed",
      role: "CEO, TechNest",
      quote:
        "The AI system they built for us is incredibly reliable. Our support tickets dropped by 40% in the first month.",
      img: "https://i.pravatar.cc/100?img=15",
    },
    {
      name: "Sara Malik",
      role: "Product Manager, Loopify",
      quote:
        "Professional, fast, and genuinely creative. They understood exactly what we needed and delivered beyond expectations.",
      img: "https://i.pravatar.cc/100?img=47",
    },
  ];

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Heading entrance
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

  // Cards stagger in as they scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (idx) => {
    gsap.to(cardRefs.current[idx], { y: -6, duration: 0.3, ease: "power2.out" });
  };
  const handleLeave = (idx) => {
    gsap.to(cardRefs.current[idx], { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section ref={sectionRef} className="relative w-full text-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >TESTIMONIALS</span>



        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-5xl font-bold mb-4 mt-2"
          style={{ fontFamily: "Valty DEMO" }}
        >
          What Clients Say About Us
        </h2>

        {/* Subheading */}
        <p ref={subRef} className="text-gray-400 max-w-2xl mx-auto mb-14">
          Real feedback from real clients who trusted us to bring their ideas to life.
        </p>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              onMouseEnter={() => handleEnter(idx)}
              onMouseLeave={() => handleLeave(idx)}
              className="border border-gray-800 rounded-2xl bg-[#0c0c0c] p-6 hover:border-gray-600 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-xs mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
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

export default TestimonialsSection;