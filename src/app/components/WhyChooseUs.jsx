"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Zap,
  ShieldCheck,
  BrainCircuit,
  Code2,
  Target,
  Headphones,
} from "lucide-react";


const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We follow agile development practices to deliver high-quality solutions faster without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description:
      "Our applications are built with security, performance, and future scalability in mind.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Solutions",
    description:
      "We integrate intelligent AI systems and automation to help businesses work smarter.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern frameworks and best development practices to build reliable digital products.",
  },
  {
    icon: Target,
    title: "Business Focused",
    description:
      "Every solution we create is designed around your business goals and customer needs.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "We believe in lasting partnerships and provide continuous support after delivery.",
  },
];


export default function WhyChooseUs() {

  const sectionRef = useRef(null);


 useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.set(".reason-card", {
      opacity: 1,
      y: 0,
    });


    gsap.from(".reason-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
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


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest font-semibold text-[#185964]">
            Why Choose Us
          </span>


          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0E3940] leading-tight">

            Building Solutions
            <span className="block text-[#185964]">
              That Create Impact
            </span>

          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-8">

            We combine technology, creativity, and business understanding
            to deliver software solutions that create real value.

          </p>


        </div>



        {/* Cards */}


        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {
            reasons.map((item,index)=>{

              const Icon = item.icon;


              return (

                <div
                  key={index}
                  className="
                  reason-card
                  opacity-100
                  rounded-[30px]
                  bg-[#FAFAFA]
                  border
                  border-gray-200
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:bg-white
                  hover:shadow-[0_25px_60px_rgba(24,89,100,.12)]
                  "
                >


                  <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#185964]/10
                  flex
                  items-center
                  justify-center
                  ">

                    <Icon
                      size={30}
                      className="text-[#185964]"
                    />

                  </div>



                  <h3 className="
                  mt-7
                  text-2xl
                  font-bold
                  text-[#0E3940]
                  ">

                    {item.title}

                  </h3>



                  <p className="
                  mt-4
                  text-gray-600
                  leading-7
                  ">

                    {item.description}

                  </p>



                </div>

              );

            })
          }


        </div>


      </div>


    </section>

  );

}
