"use client"

import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import CustomCursor from "../components/customCursor";
import localFont from "next/font/local";

if (typeof window !== "undefined"){
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const probaMedium = localFont({
    src: "/fonts/probaMedium.otf"
})

const probaMediumItalic = localFont({
    src: "/fonts/probaMediumItalic.otf"
})

const abnormal = localFont({
    src: "/fonts/AbnormalSemiBold.otf"
})

const probaRegular = localFont({
    src: "/fonts/probaRegular.otf"
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
        <CustomCursor/>
            <nav className="fixed top-0 left-0 w-full z-50 py-8 pointer-events-none">
                <div className="max-w-6xl mx-auto px-12 flex justify-between items-center pointer-events-auto text-[#EA3424]">
                    {["2020", "2022", "2024", "2026", "FUTURE"].map((year) => (
                        <button key={year} 
                        className="group relative inline-block text-[14px] uppercase tracking-[0.4em] transition-all">
                            {year}
                            <span className="absolute left-0 bottom-[-8px] w-0 h-[1.5px] bg-[#EA3424] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
            </nav>

            <div ref={scrollTrack} className="flex w-[500vw] h-screen">
                <section className="panel w-screen h-screen flex flex-col pt-40 relative">

                    <div className="max-w-[1216px] mx-auto w-full px-12 flex flex-col">

                        <span className={`text-4xl font-bold mb-[-1] block leading-none text-[#EA3424] ${abnormal.className}`}>
                            A retrospective on
                        </span>

                        <div className="relative w-full -ml-8">
                            <img src="https://cdn.hackclub.com/019d09f8-57b4-7e9b-afe1-2cbb992051b6/coolestboy.webp"
                             alt="cutie" 
                             className="w-full h-auto max-w-[50vw] object-contain select-none pointer-events-none"/>
                        </div>

                        <div className="flex pr-20 mt-12 text-[#EA3424]">
                            <div className="max-w-md ml-auto">
                                <h3 className={`text-4xl mb-6 tracking-tight ${probaMediumItalic.className}`}>
                                    a short intro :3
                                </h3>
                                <p className={`text-xl leading-relaxed opacity-90 font-light ${probaRegular.className}`}>
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