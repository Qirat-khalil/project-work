"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";


export default function AboutCTA() {

  const sectionRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".cta-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });


    }, sectionRef);


    return () => ctx.revert();

  }, []);



  return (

    <section
      ref={sectionRef}
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
          cta-content
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-br
          from-[#185964]
          to-[#0E3940]
          px-8
          py-16
          text-center
          shadow-[0_25px_80px_rgba(24,89,100,.25)]
          "
        >


          {/* Glow */}

          <div className="
          absolute
          -top-20
          -left-20
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-[100px]
          " />

          <div className="
          absolute
          -bottom-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-[100px]
          " />



          <div className="relative z-10">


            <div className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/10
            px-5
            py-2
            text-white
            backdrop-blur-sm
            ">

              <Sparkles size={16} />

              Let's Build Something Great

            </div>



            <h2 className="
            mt-8
            text-4xl
            lg:text-6xl
            font-bold
            text-white
            leading-tight
            ">

              Ready To Turn Your
              <span className="block text-[#B8E8E3]">
                Ideas Into Reality?
              </span>

            </h2>



            <p className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-gray-200
            ">

              Partner with KodraxelSoft to build scalable software,
              AI-powered solutions, and digital products that create
              real business impact.

            </p>



            <Link
              href="/contact"
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-[#0E3940]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >

              Start Your Project

              <ArrowRight size={20}/>

            </Link>


          </div>


        </div>


      </div>


    </section>

  );

}
