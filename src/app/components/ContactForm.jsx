"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  CheckCircle2,
  Send,
} from "lucide-react";


export default function ContactForm() {

  const sectionRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(".contact-form-box", {
        opacity: 1,
        y: 0,
      });


      gsap.from(".contact-form-box", {
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

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


        {/* Left Content */}

        <div>

          <span className="
          uppercase
          tracking-widest
          font-semibold
          text-[#185964]
          ">
            Start A Project
          </span>


          <h2 className="
          mt-5
          text-4xl
          lg:text-5xl
          font-bold
          text-[#0E3940]
          leading-tight
          ">

            Have An Idea?
            <span className="block text-[#185964]">
              Let's Build It Together
            </span>

          </h2>


          <p className="
          mt-6
          text-lg
          text-gray-600
          leading-8
          ">

            Tell us about your project and our team will get back to you
            with the right solution for your business needs.

          </p>



          <div className="mt-8 space-y-5">


            {[
              "Experienced Software Engineers",
              "AI & Automation Experts",
              "Scalable Technology Solutions",
            ].map((item,index)=>(

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  className="text-[#185964]"
                  size={22}
                />

                <span className="text-[#0E3940] font-medium">
                  {item}
                </span>

              </div>

            ))}


          </div>


        </div>



        {/* Form */}


        <div
          className="
          contact-form-box
          rounded-[35px]
          bg-[#FAFAFA]
          border
          border-gray-200
          p-8
          lg:p-10
          shadow-[0_20px_80px_rgba(0,0,0,.06)]
          "
        >


          <form className="space-y-5">


            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-[#185964]
              "
            />


            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-[#185964]
              "
            />


            <input
              type="text"
              placeholder="Company Name"
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-[#185964]
              "
            />


            <select
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-[#185964]
              "
            >

              <option>
                Select Service
              </option>

              <option>
                Web Development
              </option>

              <option>
                AI Solutions
              </option>

              <option>
                Automation
              </option>

              <option>
                SaaS Development
              </option>

            </select>



            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              px-5
              py-4
              outline-none
              focus:border-[#185964]
              "
            />



            <button
              type="button"
              className="
              w-full
              rounded-full
              bg-[#185964]
              text-white
              py-4
              flex
              items-center
              justify-center
              gap-3
              font-semibold
              hover:bg-[#0E3940]
              transition
              "
            >

              Send Message

              <Send size={18}/>

            </button>


          </form>


        </div>


      </div>


    </section>

  );

}
