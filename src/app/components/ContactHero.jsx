"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";


export default function ContactHero() {

  const heroRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".contact-badge", {
        y: -25,
        opacity: 0,
        duration: 0.6,
      })
      .from(
        ".contact-title",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        ".contact-description",
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

      <div className="
      absolute
      -left-20
      top-20
      h-72
      w-72
      rounded-full
      bg-[#185964]/10
      blur-[120px]
      " />


      <div className="
      absolute
      right-0
      bottom-0
      h-80
      w-80
      rounded-full
      bg-[#0E3940]/10
      blur-[140px]
      " />



      <div className="
      max-w-7xl
      mx-auto
      px-6
      text-center
      relative
      z-10
      ">


        <div className="
        contact-badge
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#185964]/20
        bg-[#185964]/10
        px-5
        py-2
        text-[#185964]
        font-medium
        ">

          <Sparkles size={16}/>

          Get In Touch

        </div>




        <h1 className="
        contact-title
        mt-8
        text-5xl
        lg:text-7xl
        font-bold
        leading-tight
        text-[#0E3940]
        ">

          Let's Build
          <span className="
          block
          text-[#185964]
          ">
            Something Amazing
          </span>

          Together

        </h1>




        <p className="
        contact-description
        mt-8
        max-w-3xl
        mx-auto
        text-lg
        leading-8
        text-gray-600
        ">

          Have a project idea or need a technology partner?
          Our team is ready to help you build scalable software,
          AI solutions, and digital products that create real impact.

        </p>



      </div>


    </section>

  );

}
