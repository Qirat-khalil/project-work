

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Button from "./Button";
// import Container from "../components/Container";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }
// export default function Footer() {
//   const parallaxImageRef = useRef(null);
//   const newsletterBoxRef = useRef(null);
//   const newsletterContentRef = useRef([]);

//   useEffect(() => {
//     // Disable animation on mobile & tablet
//     if (window.innerWidth < 1024) return;

//     // Scroll parallax for PIXGROW Image
//     if (parallaxImageRef.current) {
//       gsap.fromTo(
//         parallaxImageRef.current,
//         { y: 100 },
//         {
//           y: -30,
//           ease: "none",
//           scrollTrigger: {
//             trigger: parallaxImageRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         }
//       );
//     }

//     // Newsletter content animation (Laptop & Desktop only)
//     newsletterContentRef.current.forEach((item, index) => {
//       if (item) {
//         gsap.fromTo(
//           item,
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             delay: index * 0.15,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: newsletterBoxRef.current,
//               start: "top 80%",
//               toggleActions: "play none none none",
//             },
//           }
//         );
//       }
//     });
//   }, []);


//   return (

//     //  bg-[#1B1A21]

//     <div className="">
//       <footer className="relative  w-full bg-[] text-white py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden ">
//         <Container>
//           {/* Large Background Image - PIXGROW with Parallax */}
//           <div
//             ref={parallaxImageRef}
//             className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
//             style={{ height: "50%" }}
//           >
//             <img
//               src="/images/technality-footer.png"
//               alt="Footer Banner"
//               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-cover opacity-80"
//             />

//           </div>

//           {/* Enhanced Bottom Shadows */}
//           {/* <!-- Left --> */}
//           <div className="absolute bottom-0 left-0 w-1/3 h-[220px]
//                bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
//                pointer-events-none blur-[80px] z-20"></div>

//           {/* <!-- Center --> */}
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[220px]
//                bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
//                pointer-events-none blur-[80px] z-20"></div>

//           {/* <!-- Right --> */}
//           <div className="absolute bottom-0 right-0 w-1/3 h-[220px]
//                bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
//                pointer-events-none blur-[80px] z-20"></div>

//           {/* Content Container */}
//           <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between ">
//             {/* LEFT COLUMNS - FIXED flex-nowrap so all stay in row */}
//             <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row  flex-1 flex-nowrap">
//               {/* MENUS Column */}
//               <div className="flex-1 min-w-[120px]">
//                 <h5 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 uppercase tracking-wider">
//                   MENUS
//                 </h5>
//                 <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3">
//                   {[
//                     { name: "Home", url: "/" },
//                     { name: "About Us", url: "/about" },
//                     { name: "Work", url: "/work" },
//                     { name: "Services", url: "/services" },
//                     { name: "Contact", url: "/contact" },
//                   ].map((item, idx) => (
//                     <li key={idx}>
//                       <a
//                         href={item.url}
//                         className="text-gray-300 hover:text-[#0e444b] transition-colors duration-300 
//              text-[13px] sm:text-[15px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 
//              font-semibold block"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* SOCIAL MEDIA Column */}
//               <div className="flex-1 min-w-[120px]">
//                 <h5 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 uppercase tracking-wider">
//                   SOCIAL MEDIA
//                 </h5>
//                 <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3">
//                   {[
//                     { name: "Facebook", url: "https://www.facebook.com/" },
//                     { name: "Instagram", url: "https://www.instagram.com/" },
//                     { name: "Linkedin", url: "https://www.linkedin.com/" },
//                     { name: "Pinterest", url: "https://www.pinterest.com/" },
//                     { name: "Twitter", url: "https://x.com/" },
//                   ].map((item, idx) => (
//                     <li key={idx}>
//                       <a
//                         href={item.url}
//                         className="text-gray-300 hover:text-[#0e444b] transition-colors duration-300 
//              text-[13px] sm:text-[15px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 
//              font-semibold block"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Newsletter Box */}
//             <div
//               ref={newsletterBoxRef}
//               className="flex-shrink-0 w-full lg:w-auto lg:max-w-md xl:max-w-lg mt-6 md:mt-8 lg:mt-0"
//             >
//               <div className="bg-gradient-to-br from-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border-t-2 border-l-2 border-gray-600/30 w-full shadow-2xl">
//                 <p
//                   ref={(el) => (newsletterContentRef.current[0] = el)}
//                   className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-gray-300 mb-1 sm:mb-1.5 md:mb-2"
//                 >
//                   Subscribe to Our
//                 </p>

//                 <h2
//                   ref={(el) => (newsletterContentRef.current[1] = el)}
//                   className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 leading-tight"
//                 >
//                   Newsletter
//                 </h2>

//                 {/* Input & Button */}
//                 <div
//                   ref={(el) => (newsletterContentRef.current[2] = el)}
//                   className="mb-3 sm:mb-4 md:mb-5 lg:mb-6"
//                 >
//                   {/* Mobile stacked */}
//                   <div className="flex flex-col gap-3 md:hidden">
//                     <div className="bg-gray-700/50 rounded-full px-4 py-3 sm:px-5 sm:py-3.5">
//                       <input
//                         type="email"
//                         placeholder="Your email here..."
//                         className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none font-semibold text-xs sm:text-sm"
//                       />
//                     </div>

//                     <Button
//                       name={"Subscribe"}
//                       className="w-full  text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
//                     />
//                   </div>

//                   {/* Laptop & desktop — FIXED */}
//                   <div className="hidden md:flex bg-gray-700/50 rounded-full p-2 items-center gap-2">
//                     <input
//                       type="email"
//                       placeholder="Your email here..."
//                       className="flex-1 bg-transparent text-white placeholder-gray-400 
//                                px-5 lg:px-6 
//                                py-3 lg:py-3.5 
//                                focus:outline-none font-semibold 
//                                text-sm md:text-base min-w-0"
//                     />
//                     <Button
//                       name={"Subscribe"}
//                       className=" text-white px-8 lg:px-10 py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base whitespace-nowrap flex-shrink-0"
//                     />
//                   </div>
//                 </div>

//                 <p
//                   ref={(el) => (newsletterContentRef.current[3] = el)}
//                   className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-400 font-semibold italic leading-relaxed"
//                 >
//                   "Your monthly dose of creativity, delivered straight to your
//                   inbox."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </footer>
//     </div>

//   );
// }

























"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import Container from "../components/Container";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export default function Footer() {
  const parallaxImageRef = useRef(null);
  const newsletterBoxRef = useRef(null);
  const newsletterContentRef = useRef([]);

  useEffect(() => {
    // Disable animation on mobile & tablet
    if (window.innerWidth < 1024) return;

    // Scroll parallax for PIXGROW Image
    if (parallaxImageRef.current) {
      gsap.fromTo(
        parallaxImageRef.current,
        { y: 100 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }

    // Newsletter content animation (Laptop & Desktop only)
    newsletterContentRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: newsletterBoxRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);


  return (


    <div className="">
      <footer className="relative  w-full bg-[#1B1A21] text-white py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden ">
        <Container>
          {/* Large Background Image - PIXGROW with Parallax */}
          <div
            ref={parallaxImageRef}
            className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
            style={{ height: "50%" }}
          >
            <img
              src="/images/technality-footer.png"
              alt="Footer Banner"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-cover opacity-80"
            />

          </div>

          {/* Enhanced Bottom Shadows */}
          {/* <!-- Left --> */}
          <div className="absolute bottom-0 left-0 w-1/3 h-[220px]
               bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
               pointer-events-none blur-[80px] z-20"></div>

          {/* <!-- Center --> */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[220px]
               bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
               pointer-events-none blur-[80px] z-20"></div>

          {/* <!-- Right --> */}
          <div className="absolute bottom-0 right-0 w-1/3 h-[220px]
               bg-gradient-to-t from-[#053b5b]/70 via-[#053b5b]/40 to-transparent
               pointer-events-none blur-[80px] z-20"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between ">
            {/* LEFT COLUMNS - FIXED flex-nowrap so all stay in row */}
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row  flex-1 flex-nowrap">
              {/* MENUS Column */}
              <div className="flex-1 min-w-[120px]">
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 uppercase tracking-wider">
                  MENUS
                </h4>
                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3">
                  {[
                    { name: "Home", url: "/" },
                    { name: "About Us", url: "/about" },
                    { name: "Work", url: "/work" },
                    { name: "Services", url: "/services" },
                    { name: "Contact", url: "/contact" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        className="text-gray-300 hover:text-[#053b5b] transition-colors duration-300 
             text-[13px] sm:text-[15px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 
             font-semibold block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIAL MEDIA Column */}
              <div className="flex-1 min-w-[120px]">
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 uppercase tracking-wider">
                  SOCIAL MEDIA
                </h4>
                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3">
                  {[
                    { name: "Facebook", url: "https://www.facebook.com/" },
                    { name: "Instagram", url: "https://www.instagram.com/" },
                    { name: "Linkedin", url: "https://www.linkedin.com/" },
                    { name: "Pinterest", url: "https://www.pinterest.com/" },
                    { name: "Twitter", url: "https://x.com/" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        className="text-gray-300 hover:text-[#053b5b] transition-colors duration-300 
             text-[13px] sm:text-[15px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 
             font-semibold block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Box */}
            <div
              ref={newsletterBoxRef}
              className="flex-shrink-0 w-full lg:w-auto lg:max-w-md xl:max-w-lg mt-6 md:mt-8 lg:mt-0"
            >
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border-t-2 border-l-2 border-gray-600/30 w-full shadow-2xl">
                <p
                  ref={(el) => (newsletterContentRef.current[0] = el)}
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-gray-300 mb-1 sm:mb-1.5 md:mb-2"
                >
                  Subscribe to Our
                </p>

                <h2
                  ref={(el) => (newsletterContentRef.current[1] = el)}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 leading-tight"
                >
                  Newsletter
                </h2>

                {/* Input & Button */}
                <div
                  ref={(el) => (newsletterContentRef.current[2] = el)}
                  className="mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                >
                  {/* Mobile stacked */}
                  <div className="flex flex-col gap-3 md:hidden">
                    <div className="bg-gray-700/50 rounded-full px-4 py-3 sm:px-5 sm:py-3.5">
                      <input
                        type="email"
                        placeholder="Your email here..."
                        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none font-semibold text-xs sm:text-sm"
                      />
                    </div>

                    <Button
                      name={"Subscribe"}
                      className="w-full  text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                    />
                  </div>

                  {/* Laptop & desktop — FIXED */}
                  <div className="hidden md:flex bg-gray-700/50 rounded-full p-2 items-center gap-2">
                    <input
                      type="email"
                      placeholder="Your email here..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 
                               px-5 lg:px-6 
                               py-3 lg:py-3.5 
                               focus:outline-none font-semibold 
                               text-sm md:text-base min-w-0"
                    />
                    <Button
                      name={"Subscribe"}
                      className=" text-white px-8 lg:px-10 py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base whitespace-nowrap flex-shrink-0"
                    />
                  </div>
                </div>

                <p
                  ref={(el) => (newsletterContentRef.current[3] = el)}
                  className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-400 font-semibold italic leading-relaxed"
                >
                  "Your monthly dose of creativity, delivered straight to your
                  inbox."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>

  );
}
