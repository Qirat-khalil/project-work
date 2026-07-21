"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "AI Agents & Automation",
  "Modern MERN Stack Development",
  "Scalable SaaS Platforms",
  "Cloud-Ready Architecture",
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[#FAFAFA]">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="text-[#185964] font-semibold uppercase tracking-widest">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0E3940] leading-tight">
            Building Technology
            <br />
            That Solves Real Problems
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            KodraxelSoft is a passionate team of software engineers,
            AI enthusiasts, and creative thinkers committed to delivering
            innovative digital solutions. We work closely with startups,
            businesses, and growing organizations to build products that are
            secure, scalable, and designed for long-term success.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#185964]/10 flex items-center justify-center">

                  <CheckCircle2
                    className="text-[#185964]"
                    size={22}
                  />

                </div>

                <span className="text-lg font-medium text-[#0E3940]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div>

          <div className="rounded-[35px] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-gray-200">

            <Image
              src="/images/about-img.png"
              width={700}
              height={700}
              alt="About"
              className="rounded-3xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
