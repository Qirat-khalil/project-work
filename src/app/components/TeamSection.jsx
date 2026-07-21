"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";


const team = [
  {
    name: "Member Name",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    description:
      "Leading the vision and strategy behind innovative digital solutions.",
  },
  {
    name: "Member Name",
    role: "Full Stack Developer",
    image: "/images/team-2.jpg",
    description:
      "Building scalable applications with modern technologies.",
  },
  {
    name: "Member Name",
    role: "AI Engineer",
    image: "/images/team-3.jpg",
    description:
      "Creating intelligent automation and AI-powered solutions.",
  },
  {
    name: "Member Name",
    role: "UI/UX Designer",
    image: "/images/team-4.jpg",
    description:
      "Designing beautiful and user-focused digital experiences.",
  },
];


export default function TeamSection() {

  const sectionRef = useRef(null);


  useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.set(".team-card", {
      opacity: 1,
      y: 0,
      scale: 1,
    });


    gsap.from(".team-card", {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
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

          <span className="
          uppercase
          tracking-widest
          font-semibold
          text-[#185964]
          ">
            Our Team
          </span>


          <h2 className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[#0E3940]
          leading-tight
          ">

            Meet The People
            <span className="block text-[#185964]">
              Behind KodraxelSoft
            </span>

          </h2>


          <p className="
          mt-6
          text-lg
          text-gray-600
          leading-8
          ">

            A passionate team of developers, designers, and technology
            enthusiasts working together to create impactful digital solutions.

          </p>


        </div>



        {/* Team Cards */}


        <div className="
        mt-16
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">


          {
            team.map((member,index)=>(

              <div
                key={index}
                className="
                team-card
                opacity-100
                group
                rounded-[30px]
                bg-[#FAFAFA]
                border
                border-gray-200
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(24,89,100,.15)]
                "
              >


                {/* Image */}

                <div className="
                relative
                h-72
                overflow-hidden
                ">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                    "
                  />

                </div>



                <div className="p-6">


                  <h3 className="
                  text-2xl
                  font-bold
                  text-[#0E3940]
                  ">
                    {member.name}
                  </h3>



                  <p className="
                  mt-2
                  font-semibold
                  text-[#185964]
                  ">
                    {member.role}
                  </p>



                  <p className="
                  mt-4
                  text-gray-600
                  leading-7
                  ">
                    {member.description}
                  </p>


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}
