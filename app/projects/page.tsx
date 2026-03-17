"use client"

import React, {useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CustomCursor from "../components/customCursor";
import "bootstrap-icons/font/bootstrap-icons.css"
import SmoothScroll from '../components/ScrollSmoother';
import localFont from "next/font/local";
import { useGSAP} from "@gsap/react";

if(typeof window !== "undefined"){
    gsap.registerPlugin(ScrollTrigger);
}


const articulat = localFont({
    src: "articulat.ttf"
});
const poppinssemibold = localFont({
    src: "Poppins-SemiBold.ttf"
});
const nimbusSans = localFont({
    src: "nimbus.woff2"
});


const PROJECTS = [
    {
        id: "[01]",
        title: "Commit Craft",
        category: "tool",
        year: "©2025",
        image: "/commitcraft (1).png"
    },
    {
        id: "[02]",
        title: "Sonic Mesh",
        category: "tool",
        year: "©2025",
        image: "/sonicmesh (1).png"
    },
    {
        id: "[03]",
        title: "Votex",
        category: "tool",
        year: "©2025",
        image: "/votex (1).png"
    },
    {
        id: "[04]",
        title: "sukhdev-thukral",
        category: "web dev",
        year: "©2026",
        image: "/sukhdev-thukral(1).png"
    },
    {
        id: "[05]",
        title: "Thread Weaver",
        category: "cli tool",
        year: "©2025",
        image: "/ThreadWeaver (2).png"
    },
    {
        id: "[06]",
        title: "CHEAT CODE",
        category: "cli tool",
        year: "©2024",
        image: "/cheatcode(2).png"
    },
    {
        id: "[07]",
        title: "Crypto Flair",
        category: "my own nft :D",
        year: "©2022",
        image: "/nft(1).png"
    },
    {
        id: "[08]",
        title: "Spikeyy",
        category: "valorant discord bot",
        year: "©2020",
        image: "/spikey.png"
    },
]

export default function projectPage() {
    const container = useRef(null);

    useGSAP(() =>{
        const tl = gsap.timeline({delay:0.5});

        tl.from(".header-reveal", {
            y:"115%",
            duration:1.2,
            ease:"power4.out",
            stagger:0.1

        })
        .from(".desc-reveal", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8");

        const cards = gsap.utils.toArray(".project-card");
        cards.forEach((card: any) => {
            const tlCard = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
            tlCard.from(card.querySelector(".project-image-wrapper"), {
                scale: 1.1,
                clipPath: "inset(100$ 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            })
            .from(card.querySelectorAll(".reveal-item"), {
                y: "105%",
                duration:1,
                ease: "power4.out",
                stagger:0.1
            }, "-=1");
        });

    }, {scope: container});
    return(
        <div ref={container}>
            <CustomCursor/>
            <SmoothScroll>
            <main className="min-h-screen bg-[#F6F4F2] text-black px-6 md:px-16 md:py-20 font-sans">
                <div className="flex items-center gap-2 mb-5 overflow-hidden">
                    <span className="header-reveal flex items-center gap-2">
                        <i className="bi bi-stars"></i>
                        <span className={`text-[15px] font-bold tracking-[0.2em] uppercase ${poppinssemibold.className}`}>
                            16 — 2026©
                        </span>
                    </span>
                </div>

                <header className="flex flex-col lg:flex-row justify-between items-start mb-5 border-b border-black/5 pb-16">
                    <div className="overflow-hidden py-2">
                        <h1 className={`header-reveal text-[15vw] md:text-[10vw] leading-[0.9] tracking-tighter ${articulat.className}`}>
                            ProjeX.
                        </h1>
                    </div>
                    <div className="max-w-[280px] mt-8 lg:mt-auto desc-reveal">
                        <p className="text-sm leading-relaxed text-gray-600/70 font-medium">
                            This aims to give a glimpse to my projects in various fields such as programming, robotics and etc ive done throughout my life iguess?
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="project-card group cursor-pointer">
                            <div className="project-image-wrapper relative aspect-[1.8/1] overflow-hidden bg-neutral-200 rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill className="object-cover"
                                    priority={project.id === "[01]" || project.id === "[02]"}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-start items-start border-t border-black/10 pt-4">
                                <div className="overflow-hidden">
                                    <span className={`reveal-item text-[11px] font-black tracking-tighter ${articulat.className}`}>
                                        {project.id}
                                    </span>
                                </div>

                                <div className="flex flex-col text-left">
                                    <div className="overflow-hidden">
                                        <h3 className={`reveal-item text-sm font-bold leading-none mb-1 tracking-tighter ${articulat.className}`}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className={`reveal-item text-[12px] text-neutral-400 font-medium italic`}>
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-hidden text-right">
                                    <span className={`reveal-item text-[11px] font-black tracking-tighter text-right ${articulat.className}`}>
                                        {project.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            </SmoothScroll>
        </div>
    );
}