"use client"

import React from "react";
import Image from "next/image";
import CustomCursor from "../components/customCursor";
import "bootstrap-icons/font/bootstrap-icons.css"
import SmoothScroll from '../components/ScrollSmoother';
import localFont from "next/font/local";

const articulat = localFont({
    src: "articulat.ttf"
});
const poppinssemibold = localFont({
    src: "Poppins-SemiBold.ttf"
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

]

export default function projectPage() {
    return(
        <div>
        <CustomCursor/>
        <SmoothScroll>
        <main className="min-h-screen bg-[#F6F4F2] text-black px-6 md:px-16 md:py-20 font-sans">
            <div className="flex items-center gap-2 mb-5">
                
                    <i className="bi bi-stars"></i>
                <span className={`text-[15px] font-bold tracking-[0.2em] uppercase ${poppinssemibold.className}`}>
                    16 — 2026©
                </span>
            </div>

            <header className="flex flex-col lg:flex-row justify-between items-start mb-5 border-b border-black/5 pb-16">
                <h1 className={`text-[15vw] md:text-[6vw] leading-[0.8] tracking-tighter ${articulat.className}`}>
                    ProjeX.
                </h1>
                <div className="max-w-[280px] mt-8 lg:mt-auto">
                    <p className="text-sm leading-relaxed text-gray-600/70 font-medium">
                        This aims to give a glimpse to the stuff like programming, robotics and etc ive done throughout my life iguess?
                    </p>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        <div className="relative aspect-[1.8/1] overflow-hidden bg-neutral-200 rounded-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill className="object-cover"
                                priority={project.id === "[01]" || project.id === "[02]"}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{backfaceVisibility:'hidden', transformStyle:'preserve-3d'}}
                            />
                        </div>
                        <div className="mt-6 grid grid-cols-[1fr_2fr_1fr] items-start items-start border-t border-black/10 pt-4">
                            <span className={`"text-[11px] font-black tracking-tighter" ${articulat.className}`}>
                                {project.id}
                            </span>
                            <div className="text-center">
                                <h3 className={`"text-sm font-bold leading-none mb-1 tracking-tighter" ${articulat.className}`}>
                                    {project.title}
                                </h3>
                                <p className="text-[12px] text-neutral-400 font-medium italic">
                                    {project.category}
                                </p>
                            </div>
                            <span className={`"text-[11px] font-black tracking-tighter text-right " ${articulat.className}`}>
                                {project.year}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        </SmoothScroll>
        </div>
    );
}