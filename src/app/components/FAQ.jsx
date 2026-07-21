"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";


const faqData = [
  {
    question: "How long does a software project usually take?",
    answer:
      "Project timelines depend on complexity and requirements. Small projects may take a few weeks, while larger platforms can require several months.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we work with startups, entrepreneurs, and growing businesses to build scalable and cost-effective digital solutions.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including Next.js, React, Node.js, MERN Stack, cloud platforms, and AI automation tools.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we provide ongoing maintenance, improvements, and technical support to ensure your product continues running smoothly.",
  },
];


export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(".faq-item", {
        opacity: 1,
        y: 0,
      });

      gsap.from(".faq-item", {
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

      <div className="max-w-5xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center">

          <span className="
          uppercase
          tracking-widest
          font-semibold
          text-[#185964]
          ">
            FAQ
          </span>


          <h2 className="
          mt-4
          text-4xl
          lg:text-5xl
          font-bold
          text-[#0E3940]
          ">
            Frequently Asked
            <span className="block text-[#185964]">
              Questions
            </span>
          </h2>

        </div>



        {/* FAQ Items */}


        <div className="mt-14 space-y-5">


          {
            faqData.map((item,index)=>{

              const isOpen = openIndex === index;


              return (

                <div
                  key={index}
                  className="
                  faq-item
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  overflow-hidden
                  "
                >


                  <button
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? null : index
                      )
                    }
                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-7
                    py-6
                    text-left
                    "
                  >

                    <span className="
                    text-lg
                    font-semibold
                    text-[#0E3940]
                    ">
                      {item.question}
                    </span>


                    <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#185964]/10
                    flex
                    items-center
                    justify-center
                    ">

                      {
                        isOpen
                        ?
                        <Minus
                          size={20}
                          className="text-[#185964]"
                        />
                        :
                        <Plus
                          size={20}
                          className="text-[#185964]"
                        />
                      }

                    </div>


                  </button>



                  {
                    isOpen && (

                      <div className="
                      px-7
                      pb-6
                      text-gray-600
                      leading-7
                      "
                      >

                        {item.answer}

                      </div>

                    )
                  }


                </div>

              );

            })
          }


        </div>


      </div>


    </section>

  );

}
