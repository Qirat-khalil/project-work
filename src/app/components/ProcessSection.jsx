// "use client";
// import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProcessSection = () => {
//   const [step, setStep] = useState(0);

//   const content = [
//     {
//       number: "01",
//       title: "Discover & Analyze",
//       desc: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
//       img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049",
//     },
//     {
//       number: "02",
//       title: "Design & Implement",
//       desc: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
//       img: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124",
//     },
//     {
//       number: "03",
//       title: "Optimize & Scale",
//       desc: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
//       img: "https://framerusercontent.com/images/66vg6GiqexKxWsR2ms684XFtAQ.png?width=1536&height=1012",
//     },
//   ];

//   // refs for scroll-in entrance animation
//   const sectionRef = useRef(null);
//   const badgeRef = useRef(null);
//   const headingRef = useRef(null);
//   const subRef = useRef(null);
//   const buttonsWrapRef = useRef(null);

//   // refs for the step card (re-animated every time `step` changes)
//   const cardRef = useRef(null);
//   const imageRef = useRef(null);
//   const textWrapRef = useRef(null);

//   // Entrance animation on scroll into view (runs once)
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" })
//         .from(headingRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
//         .from(subRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
//         .from(
//           buttonsWrapRef.current.children,
//           { opacity: 0, y: 30, duration: 0.6, ease: "power2.out", stagger: 0.2 },
//           "-=0.4"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Animate the big card whenever the active step changes
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         textWrapRef.current.children,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2 }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, [step]);

//   return (
//     <section ref={sectionRef} className="relative w-full text-white pb-20 pt-10">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Badge */}
//         <div
//           ref={badgeRef}
//           className="inline-block px-4 py-1 my-6 rounded-full border border-gray-900 text-xs uppercase tracking-wide text-gray-300"
//         >
//           <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i>PROCESS
//         </div>

//         {/* Heading */}
//         <h2
//           ref={headingRef}
//           className="text-3xl sm:text-5xl font-bold mb-4"
//           style={{ fontFamily: "Valty DEMO" }}
//         >
//           Our Simple & Smart Process
//         </h2>

//         {/* Subheading */}
//         <p ref={subRef} className="text-gray-400 max-w-2xl mx-auto mb-10">
//           Everything you need to collaborate, create, and scale, all in one place.
//         </p>

//         {/* buttons */}
//         <div ref={buttonsWrapRef} className="flex gap-4 mb-8 justify-center">
//           {content.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setStep(idx)}
//               className={`flex-1 py-3 rounded-xl border border-gray-700 transition ${
//                 step === idx ? "bg-gray-800 text-white" : "bg-[#111] text-gray-400 hover:bg-gray-800"
//               }`}
//             >
//               STEP {idx + 1}
//             </button>
//           ))}
//         </div>

//         {/* Big Card */}
//         <div
//           ref={cardRef}
//           key={step}
//           className="border border-t-2 border-gray-800 border-b-gray-900 rounded-xl p-4 pb-4"
//         >
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             {/* Left Image */}
//             <div className="flex justify-center">
//               <img
//                 ref={imageRef}
//                 width={600}
//                 height={600}
//                 src={content[step].img}
//                 alt={content[step].title}
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>

//             {/* Right Text */}
//             <div ref={textWrapRef} className="text-start">
//               <p className="text-gray-400 mb-3 text-lg" style={{ fontFamily: "Valty DEMO" }}>
//                 {content[step].number}
//               </p>
//               <h5 className="text-4xl mb-4" style={{ fontFamily: "Valty DEMO" }}>
//                 {content[step].title}
//               </h5>
//               {content[step].desc.split(". ").map((line, idx) => (
//                 <p key={idx} className="text-gray-400 text-md mb-2">
//                   {line}.
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute -bottom-2 left-0 w-full mb-3">
//         <div className="relative w-full h-px bg-white/10">
//           <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;















"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const [step, setStep] = useState(0);

  const content = [
    {
      number: "01",
      title: "Discover & Analyze",
      desc: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
      img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049",
    },
    {
      number: "02",
      title: "Design & Implement",
      desc: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
      img: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124",
    },
    {
      number: "03",
      title: "Optimize & Scale",
      desc: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
      img: "https://framerusercontent.com/images/66vg6GiqexKxWsR2ms684XFtAQ.png?width=1536&height=1012",
    },
  ];

  // refs for scroll-in entrance animation
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const buttonsWrapRef = useRef(null);
  const buttonRefs = useRef([]);

  // refs for the step card (re-animated every time `step` changes)
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textWrapRef = useRef(null);

  // Entrance animation on scroll into view (runs once)
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
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(
          buttonsWrapRef.current.children,
          { opacity: 0, y: 30, duration: 0.6, ease: "power2.out", stagger: 0.2 },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate the big card whenever the active step changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        textWrapRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2 }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [step]);

  // Pulse / highlight the active STEP button whenever it changes
  useEffect(() => {
    buttonRefs.current.forEach((btn, idx) => {
      if (!btn) return;
      if (idx === step) {
        gsap.fromTo(
          btn,
          { scale: 0.92 },
          { scale: 1, duration: 0.5, ease: "back.out(2)" }
        );
      } else {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    });
  }, [step]);

  return (
    <section ref={sectionRef} className="relative w-full text-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-block px-4 bg-[#0E444B] py-1 my-6 rounded-full border border-gray-900 text-xs uppercase tracking-wide text-gray-300"
        >
          <i className=" g-2 text-grey-400 me-2 "></i>PROCESS
        </div>


        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: "Valty DEMO" }}
        >
          Our Simple & Smart Process
        </h2>

        {/* Subheading */}
        <p ref={subRef} className="text-gray-400 max-w-2xl mx-auto mb-10">
          Everything you need to collaborate, create, and scale, all in one place.
        </p>

        {/* buttons */}
        <div ref={buttonsWrapRef} className="flex gap-4 mb-8 justify-center">
          {content.map((_, idx) => (
            <button
              key={idx}
              ref={(el) => (buttonRefs.current[idx] = el)}
              onClick={() => setStep(idx)}
              className={`flex-1 py-3 rounded-xl border border-gray-700 transition-colors ${
                step === idx ? "bg-[#194249] text-white" : "bg-[#194249] text-gray-400 hover:bg-[#0e444b]"
              }`}
            >
              STEP {idx + 1}
            </button>
          ))}
        </div>

        {/* Big Card */}
        <div
          ref={cardRef}
          key={step}
          className=" border border-t-2 bg-[#FEF9F9] border-gray-800 border-b-gray-900 rounded-xl p-4 pb-4"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                ref={imageRef}
                width={600}
                height={600}
                src={content[step].img}
                alt={content[step].title}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Text */}
            <div ref={textWrapRef} className="text-start ">
              <p className="text-gray-400   mb-3 text-lg" style={{ fontFamily: "Valty DEMO" }}>
                {content[step].number}
              </p>
              <h5 className="text-4xl mb-4" style={{ fontFamily: "Valty DEMO" }}>
                {content[step].title}
              </h5>
              {content[step].desc.split(". ").map((line, idx) => (
                <p key={idx} className="text-gray-400 text-md mb-2">
                  {line}.
                </p>
              ))}
            </div>
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

export default ProcessSection;