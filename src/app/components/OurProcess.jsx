"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";


const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your goals, challenges, and requirements to create a clear project strategy.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Our team creates intuitive designs and user experiences focused on usability and results.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We build secure, scalable, and high-performance software using modern technologies.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description:
      "We launch your product and provide continuous improvements and support.",
  },
];


export default function OurProcess() {

  const sectionRef = useRef(null);


  useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.set(".process-card", {
      opacity: 1,
      y: 0,
    });


    gsap.from(".process-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    });

  }, sectionRef);


  return () => ctx.revert();

}, []);



  return (

    <section
      ref={sectionRef}
      className="py-24 bg-[#FAFAFA]"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest font-semibold text-[#185964]">
            Our Process
          </span>


          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0E3940] leading-tight">

            A Simple Process
            <span className="block text-[#185964]">
              Built For Success
            </span>

          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-8">

            From idea to execution, we follow a structured approach
            to deliver reliable and impactful digital solutions.

          </p>

        </div>



        {/* Steps */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {
            steps.map((step,index)=>{

              const Icon = step.icon;


              return (

                <div
                  key={index}
                  className="
                  process-card
                  opacity-100
                  relative
                  rounded-[30px]
                  bg-white
                  border
                  border-gray-200
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,.05)]
                  hover:-translate-y-3
                  transition-all
                  duration-300
                  "
                >


                  {/* Number */}

                  <span className="
                  absolute
                  top-6
                  right-7
                  text-5xl
                  font-bold
                  text-[#185964]/10
                  ">
                    {step.number}
                  </span>



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
                  mt-8
                  text-2xl
                  font-bold
                  text-[#0E3940]
                  ">
                    {step.title}
                  </h3>



                  <p className="
                  mt-4
                  text-gray-600
                  leading-7
                  ">
                    {step.description}
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
