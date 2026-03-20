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
            x: () => -(scrollTrack.current!.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                end: () => `+=${scrollTrack.current!.scrollWidth - window.innerWidth}`,
                invalidateOnRefresh: true,
            },
        })
    }, {scope: container});

    return(
        <main ref={container} className="bg-[#F6F4F2] relative h-screen overflow-hidden font-sans selection:bg-[#EA3424] selection:text-white">
            <CustomCursor/>
            <nav className="fixed top-0 left-0 w-full z-[100] py-8 pointer-events-auto">
                <div className="max-w-[1216px] mx-auto px-12 flex justify-between items-center text-[#EA3424]">
                    {["2020", "2022", "2024", "2026", "FUTURE"].map((year) => (
                        <button key={year} 
                        className="group relative inline-block text-[14px] uppercase tracking-[0.4em] transition-all">
                            {year}
                            <span className="absolute left-0 bottom-[-8px] w-0 h-[1.5px] bg-[#EA3424] transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
            </nav>

            <div ref={scrollTrack} className="flex flex-nowrap w-fit h-screen ">
                <section className="panel w-screen h-screen flex-shrink-0 flex flex-col pt-40 relative">

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

                <section className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#5B6D84] overflow-hidden relative">
                    <div className="relative w-fit h-fit">

                        <img src="https://cdn.hackclub.com/019d0bfd-e779-77f8-a1d3-d298295e632d/image.png"
                            alt="teacher"
                            className="w-auto h-[50vh] object-contain"
                        />

                        <div 
                        className={`
                            absolute 
                            left-[-10%] 
                            top-[-10%] 
                            text-[10vw] 
                            leading-none 
                            select-none
                            pointer-events-none
                            opacity-80 
                            text-transparent 
                            z-10
                            ${abnormal.className}`}
                        style={{WebkitTextStroke: '3px #F0B042'}}
                        >
                            2022
                        </div>

                        <div className="absolute 
                        right-[-10%]
                        bottom-[-40%] 
                        w-full 
                        max-w-md 
                        text-white 
                        z-20">

                            <p className={`text-lg md:text-xl leading-snug font-medium drop-shadow-lg ${probaRegular.className}`}>
                                back in 2022, I was selected by the SteamVision Foundation to 
                                serve as a peer mentor and volunteer, working with underprivileged communities in some of 
                                the most remote areas of delhi. 
                                and during this experience I conducted sessions on MIT App Inventor, introduced students to 
                                foundational Python/C++ programming, and promoted hands-on learning in robotics. I also 
                                mentored teams preparing for the FIRST Tech Challenge (FTC), 
                                helping them build technical and collaborative skills
                            </p>
                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#FFAB00] overflow-hidden relative">
                    <div className="relative w-fit h-fit">

                        <img src="https://cdn.hackclub.com/019d0d0e-7a31-798d-a8d4-d2c6857318d3/image.png"
                            alt="teacher"
                            className="w-auto h-[50vh] object-contain"
                        />

                        <div 
                        className={`
                            absolute 
                            left-[-10%] 
                            top-[-10%] 
                            text-[10vw] 
                            leading-none 
                            select-none
                            pointer-events-none
                            opacity-80 
                            text-transparent 
                            z-10
                            ${abnormal.className}`}
                        style={{WebkitTextStroke: '3px #F0B042'}}
                        >
                            2022
                        </div>

                        <div className="absolute 
                        right-[-10%]
                        bottom-[-40%] 
                        w-full 
                        max-w-md 
                        text-white 
                        z-20">

                            <p className={`text-lg md:text-xl leading-snug font-medium drop-shadow-lg ${probaRegular.className}`}>
                                back in 2022, I was selected by the SteamVision Foundation to 
                                serve as a peer mentor and volunteer, working with underprivileged communities in some of 
                                the most remote areas of delhi. 
                                and during this experience I conducted sessions on MIT App Inventor, introduced students to 
                                foundational Python/C++ programming, and promoted hands-on learning in robotics. I also 
                                mentored teams preparing for the FIRST Tech Challenge (FTC), 
                                helping them build technical and collaborative skills
                            </p>
                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#6554C0] overflow-hidden relative">
                    <div className="relative w-fit h-fit">

                        <img src="https://cdn.hackclub.com/019d0d0f-c84c-7807-9f18-43ba8de3d51e/image.png"
                            alt="teacher"
                            className="w-auto h-[50vh] object-contain"
                        />

                        <div 
                        className={`
                            absolute 
                            left-[-10%] 
                            top-[-10%] 
                            text-[10vw] 
                            leading-none 
                            select-none
                            pointer-events-none
                            opacity-80 
                            text-transparent 
                            z-10
                            ${abnormal.className}`}
                        style={{WebkitTextStroke: '3px #ffffff'}}
                        >
                            2022
                        </div>

                        <div className="absolute 
                        right-[-10%]
                        bottom-[-40%] 
                        w-full 
                        max-w-md 
                        text-white 
                        z-20">

                            <p className={`text-lg md:text-xl leading-snug font-medium drop-shadow-lg ${probaRegular.className}`}>
                                back in 2022, I was selected by the SteamVision Foundation to 
                                serve as a peer mentor and volunteer, working with underprivileged communities in some of 
                                the most remote areas of delhi. 
                                and during this experience I conducted sessions on MIT App Inventor, introduced students to 
                                foundational Python/C++ programming, and promoted hands-on learning in robotics. I also 
                                mentored teams preparing for the FIRST Tech Challenge (FTC), 
                                helping them build technical and collaborative skills
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}