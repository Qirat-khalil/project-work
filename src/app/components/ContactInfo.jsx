"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";


const contactData = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@kodraxelsoft.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+92 XXX XXX XXXX",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Pakistan",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Fri | 9AM - 6PM",
  },
];


export default function ContactInfo() {

  const sectionRef = useRef(null);


useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.set(".contact-info-card", {
      opacity: 1,
      y: 0,
    });

    gsap.from(".contact-info-card", {
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
      className="py-20 bg-[#FAFAFA]"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">


          {
            contactData.map((item,index)=>{

              const Icon = item.icon;


              return (

                <div
                  key={index}
                  className="
                  contact-info-card
                  opacity-100
                  bg-white
                  border
                  border-gray-200
                  rounded-[30px]
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(24,89,100,.15)]
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
                  text-xl
                  font-bold
                  text-[#0E3940]
                  ">
                    {item.title}
                  </h3>



                  <p className="
                  mt-3
                  text-gray-600
                  leading-7
                  ">
                    {item.detail}
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
