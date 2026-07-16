// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CtaSection = () => {
//     const sectionRef = useRef(null);
//     const boxRef = useRef(null);
//     const badgeRef = useRef(null);
//     const headingRef = useRef(null);
//     const subRef = useRef(null);
//     const btnWrapRef = useRef(null);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 80%",
//                     once: true,
//                 },
//             });

//             tl.from(boxRef.current, { opacity: 0, scale: 0.96, duration: 0.7, ease: "power2.out" })
//                 .from(badgeRef.current, { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=0.3")
//                 .from(headingRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.3")
//                 .from(subRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" }, "-=0.4")
//                 .from(
//                     btnWrapRef.current.children,
//                     { opacity: 0, y: 20, duration: 0.5, ease: "power2.out", stagger: 0.15 },
//                     "-=0.3"
//                 );
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     // Button hover micro-interaction via GSAP
//     const handleEnter = (e) => {
//         gsap.to(e.currentTarget, { scale: 1.05, duration: 0.25, ease: "power2.out" });
//     };
//     const handleLeave = (e) => {
//         gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: "power2.out" });
//     };

//     return (
//         <section ref={sectionRef} className="relative w-full text-white py-20">
//             <div className="max-w-5xl mx-auto px-6">
//                 <div
//                     ref={boxRef}
//                     className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#132433] px-6 py-16 sm:px-16 text-center"
//                 >
//                     {/* soft glow background */}
//                     <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

//                     {/* Badge */}
//                     <span className=" bg-[#0E444B] py-1 px-4 tracking-widest uppercase text-xs rounded-full border border-gray-900 text-gray-300" >  GET STARTED</span>



//                     {/* Heading */}
//                     <h2
//                         ref={headingRef}
//                         className="relative text-3xl sm:text-5xl font-bold mb-4"
//                         style={{ fontFamily: "Valty DEMO" }}
//                     >
//                         Let&apos;s Build Something Great Together
//                     </h2>

//                     {/* Subheading */}
//                     <p ref={subRef} className="relative text-gray-400 max-w-xl mx-auto mb-10">
//                         Have a project in mind? Let&apos;s turn your idea into a smart, automated, and scalable solution.
//                     </p>

//                     {/* Buttons */}
//                     <div ref={btnWrapRef} className="relative flex flex-col sm:flex-row gap-4 justify-center">
//                         <a
//                             href="#contact"
//                             onMouseEnter={handleEnter}
//                             onMouseLeave={handleLeave}
//                             className="px-8 py-3 rounded-xl bg-white text-black font-medium"
//                         >
//                             Start a Project
//                         </a>
//                         <a
//                             href="#work"
//                             onMouseEnter={handleEnter}
//                             onMouseLeave={handleLeave}
//                             className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white transition-colors"
//                         >
//                             View Our Work
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CtaSection;