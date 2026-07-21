"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Lightbulb,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern technologies and creative thinking to build future-ready digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency, honesty, and long-term trust are at the heart of every project we deliver.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description:
      "We focus on clean architecture, scalable systems, and high-quality software engineering.",
  },
  {
    icon: HeartHandshake,
    title: "Client Success",
    description:
      "Your success is our priority. We build long-term partnerships, not just software.",
  },
];

export default function CoreValues() {
  const sectionRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.set(".value-card", {
      opacity: 1,
      y: 0,
    });

    gsap.from(".value-card", {
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
            Core Values
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0E3940] leading-tight">
            Principles That
            <span className="block text-[#185964]">
              Drive Everything We Do
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our values shape how we work, collaborate, and deliver impactful
            software solutions for every client.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <div
                key={index}
                className="
                value-card
                rounded-[30px]
                bg-white
                border
                border-gray-200
                p-8
                shadow-[0_15px_50px_rgba(0,0,0,.05)]
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(24,89,100,.15)]
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#185964]/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  "
                >

                  <Icon
                    size={30}
                    className="text-[#185964]"
                  />

                </div>


                <h3 className="mt-8 text-2xl font-bold text-[#0E3940]">
                  {value.title}
                </h3>


                <p className="mt-4 text-gray-600 leading-7">
                  {value.description}
                </p>


              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
