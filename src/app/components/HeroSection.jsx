"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".badge", {
                y: -30,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    ".hero-title",
                    {
                        y: 70,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-desc",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                )
                // .from(
                //     ".hero-btn",
                //     {
                //         y: 20,
                //         opacity: 0,
                //         stagger: 0.2,
                //     },
                //     "-=0.3"
                // )
                .from(
                    ".hero-stat",
                    {
                        y: 40,
                        opacity: 0,
                        stagger: 0.2,
                    },
                    "-=0.2"
                )
                .from(
                    ".dashboard",
                    {
                        x: 120,
                        opacity: 0,
                        duration: 1,
                    },
                    "-=1"
                );

            gsap.to(".floating", {
                y: -12,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                stagger: 0.3,
            });

            gsap.to(".blob1", {
                x: 40,
                y: -30,
                repeat: -1,
                yoyo: true,
                duration: 7,
            });

            gsap.to(".blob2", {
                x: -40,
                y: 20,
                repeat: -1,
                yoyo: true,
                duration: 8,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden bg-background py-18"
        >
            {/* Background Blobs */}

            <div className="blob1 absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

            <div className="blob2 absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#235857]/10 blur-[140px]" />

            <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 gap-16 items-center">

                <div>

                    <div className="badge inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-primary">
                        <Sparkles size={16} />
                        Future-Driven Software House
                    </div>

                    <h1 className="hero-title mt-8 text-heading font-bold leading-[1.05]">
                        Building
                        <span className="text-primary block">
                            Future-Ready
                        </span>
                        Digital Solutions
                    </h1>

                    <p className="hero-desc mt-7 text-lg text-paragraph leading-8 max-w-xl">
                        At <strong>KodraxelSoft</strong>, we build intelligent AI Agents, AI Automation workflows, and modern MERN Stack applications that streamline operations and accelerate business growth. From custom web platforms and SaaS products to AI-powered assistants and workflow automation, we deliver secure, scalable, and future-ready solutions tailored to your business.
                    </p>

                    {/* <div className=" flex flex-wrap gap-5"> */}
                    {/* 
                        <Link
                            href="/contact"
                            className="hero-btn group bg-primary hover:bg-primary-hover rounded-full px-8 py-4 text-white flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                        >
                            Start Project

                            <ArrowRight className="transition group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="hero-btn rounded-full border-2 border-primary px-8 py-4 flex items-center gap-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <Play size={18} />
                            View Portfolio
                        </Link> */}

                    {/* </div> */}

                    <div className="flex gap-10 mt-8 flex-wrap">

                        {[
                            ["50+", "Projects"],
                            ["20+", "Clients"],
                            ["100%", "Satisfaction"],
                        ].map(([n, t]) => (
                            <div className="hero-stat" key={n}>
                                <h3 className="text-primary font-bold">{n}</h3>
                                <p className="text-paragraph">{t}</p>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Right */}

                <div className="dashboard relative mt-16 lg:mt-0">

                    <div className="rounded-[35px] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-gray-200">

                        <Image
                            src="/images/herosec-img.png"
                            width={700}
                            height={700}
                            alt="Hero Image"
                            className="rounded-3xl"
                            priority
                        />

                    </div>

                    <div className="floating absolute -left-8 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
                        🚀 <b>99.9%</b>
                        <p className="text-sm text-gray-500">Uptime</p>
                    </div>

                    <div className="floating absolute right-0 bottom-10 rounded-2xl bg-white px-5 py-4 shadow-xl">
                        ⚡ <b>Fast Delivery</b>
                        <p className="text-sm text-gray-500">Agile Team</p>
                    </div>

                    <div className="floating absolute left-24 -bottom-6 rounded-2xl bg-[#185964] text-white px-5 py-4 shadow-xl">
                        Next.js • React • Node
                    </div>

                </div>

            </div>
        </section>
    );
}