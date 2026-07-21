"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";


export default function ContactCTA() {

  const sectionRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(".contact-cta-box", {
        opacity: 1,
        y: 0,
      });


      gsap.from(".contact-cta-box", {
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
          contact-cta-box
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


          {/* Glow Effects */}

          <div
            className="
            absolute
            -left-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-[100px]
            "
          />


          <div
            className="
            absolute
            -right-20
            -bottom-20
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-[100px]
            "
          />



          <div className="relative z-10">


            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-5
              py-2
              text-white
              "
            >

              <Sparkles size={16}/>

              Let's Work Together

            </div>



            <h2
              className="
              mt-8
              text-4xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              "
            >

              Ready To Start
              <span className="block text-[#B8E8E3]">
                Your Next Project?
              </span>

            </h2>



            <p
              className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              text-gray-200
              leading-8
              "
            >

              Share your idea with our team and let's create a powerful
              digital solution that helps your business grow.

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

              Get Started

              <ArrowRight size={20}/>

            </Link>


          </div>


        </div>


      </div>


    </section>

  );

}
