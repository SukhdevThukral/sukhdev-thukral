"use client"

import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import localFont from "next/font/local";
import { Container } from "lucide-react";

if (typeof window !== "undefined"){
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const probaMedium = localFont({
    src: "/fonts/probaMedium.otf"
})

const probaMediumItalic = localFont({
    src: "/fonts/probaMediumItalic.otf"
})

export default function miscPage() {
    const container = useRef<HTMLDivElement>(null);
    const scrollTrack = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + (container.current?.offsetWidth || 0) * 3,
            },
        })
    }, {scope: container});

    return(
        <main ref={container} className="bg-[#F6F4F2] overflow-hidden font-sans selection:bg-[#EA3424] selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 py-12 px-20 flex justify-between items-center mix-blend-multiply">
                <div className="flex gap-12 md:gap-20 font-bold text-[11px] uppercase tracking-wdiest text-[#EA3424] "></div>
                {["2020", "2022", "2024", "2026", "FUTURE"].map((year) => (
                    <button key={year} className="hover:opacity-50 transition-opacity">
                        {year}
                    </button>
                ))}
            </nav>

            <div ref={scrollTrack} className="flex w-[500vw] h-screen">
                <section className="panel w-screen h-screen flex flex-col justify-center px-24 relative">
                    <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
                        <span className="text-3xl font-bold mb-2 block leading-none text-[#EA3424]">A retrospective on</span>

                        <div className="relative w-full -ml-8">
                            <img src="https://cdn.hackclub.com/019d09f8-57b4-7e9b-afe1-2cbb992051b6/coolestboy.webp"
                             alt="cutie" 
                             className="w-full h-auto max-w-[90vw] object-contain select-none pointer-events-none"/>
                        </div>
                        <div className="flex justify-end pr-10 mt-8">
                            <div className="max-w-md">
                                <h3 className={`text-4xl mb-6 tracking-tight ${probaMediumItalic.className}`}>a short intro :3</h3>
                                <p className={`text-xl leading-relaxed opacity-90 ${probaMedium.className}`}>
                                    the only rsn i was able to develop a keen interest for TECHNOLOGY
                                    was by exploring a variety of activites, and sometimes even irrelevant ones,
                                     ive tried my best to mention most of them ALTHO IVE missed sm on purpose which had
                                     a lesser impact on my journey in tech.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )}