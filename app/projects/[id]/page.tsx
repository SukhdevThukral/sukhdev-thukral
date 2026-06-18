"use client"

import React, {useRef} from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import CustomCursor from "@/app/components/customCursor";
import SmoothScroll from "@/app/components/ScrollSmoother";



const YingHei = localFont({
  src: "../../MYingHeiPRC.woff2"
});

const nimbusSans = localFont({
  src: "../../nimbus.woff2"
});

const PROJECTS: Record<string, {
    title: string; category: string; year: string;
    description: string; tags: string[];
    stack: string; status: string;
    github?: string; demo?: string
}> = {
    "01" : {
        title: "Commit Craft",
        category: "Tool",
        year: "©2026",
        description:  "AUTO-GENERATES CLEAN, CONVENTIONAL COMMIT MESSAGES FROM YOUR STAGED GIT DIFFS - SAVING TIME AND KEEPING YOUR GIT HISTORY READABLE WITHOUT ANY EXTRA EFFORT.",
        tags: ["GIT", "AI", "CLI", "OPEN SOURCE"],
        stack: "NODE.JS · TYPESCRIPT",
        status: "OPEN SOURCE",
        github: "https://github.com/SukhdevThukral/commitcraft"
    },
    "02" : {
        title: "Hover Tube",
        category: "Extension",
        year: "©2026",
        description:  "AUTO-GENERATES CLEAN, CONVENTIONAL COMMIT MESSAGES FROM YOUR STAGED GIT DIFFS - SAVING TIME AND KEEPING YOUR GIT HISTORY READABLE WITHOUT ANY EXTRA EFFORT.",
        tags: ["GIT", "AI", "CLI", "OPEN SOURCE"],
        stack: "NODE.JS · TYPESCRIPT",
        status: "OPEN SOURCE",
        github: "https://github.com/SukhdevThukral/commitcraft"
    },
    "03" : {
        title: "Sonic Mesh",
        category: "Tool",
        year: "©2026",
        description: "ULTRASONIC COMMUNICATION SYSTEM ENABLING DATA TRANSFER OVER AUDIO FREQUENCIES WITHOUT ANY INTERNET CONNECTION.",
        tags: ["AUDIO", "PYTHON", "FSK-Encoding"],
        stack: "PYTHON",
        status: "EXPERIMENTAL",
        github: "https://github.com/SukhdevThukral/SonicMesh"
    },
    "04" : {
        title: "VoteX",
        category: "Tool",
        year: "©2025",
        description: "A SIMPLE AND PRACTICAL APPLICATION OF SHA-256 ENCRYPTION AND DECRYPTION FOR SECURE VOTING.",
        tags: ["ENCRYPTION", "SHA-256", "SECURITY"],
        stack: "JAVASCRIPT",
        status: "OPEN SOURCE",
        github: "https://github.com/SukhdevThukral/VoteX"
    },
    "05" : {
        title: "sukhdev-thukral",
        category: "Web Dev",
        year: "©2026",
        description: "MY PERSONAL WEBSITE - THE SITE YOURE ON RIGHT NOWW. BUILT WITH NEXT.JS, GSAP, AND A LOT OF DESIGN OBSESSION.",
        tags: ["NEXT.JS", "GSAP", "TAILWIND"],
        stack: "NEXT.JS · TYPESCRIPT · TAILWIND ",
        status: "LIVE",
        github: "https://github.com/SukhdevThukral/sukhdev-thukral"
    },
    "06" : {
        title: "ThreadWeaver",
        category: "Tool",
        year: "©2025",
        description: "MULTI-THREADED TOOL FOR CONCURRENT TASK EXECUTION - WEAVE MULTIPLE PROCESSES TOGETHER SEAMLESSLY.",
        tags: ["PYTHON", "TOOL", "PYTHON"],
        stack: "PYTHON",
        status: "EXPERIMENTAL",
        github: "https://github.com/SukhdevThukral/ThreadWeaverApp"
    },
    "07" : {
        title: "CheatCode",
        category: "Web Dev",
        year: "©2024",
        description: "JUST A SIMPLE SITE I CREATED FOR FUN :D",
        tags: ["HTML", "CSS", "SIMPLE"],
        stack: "HTML ",
        status: "DEFERRED",
        github: "https://github.com/SukhdevThukral/CheatCodeIRL"
    },
    "08" : {
        title: "CryptoFlair",
        category: "NFT",
        year: "©2022",
        description: "MY OWN NFT COLLECTION - BACK WHEN THAT WAS A THING AND I DIDNT LAUNCH IT :(",
        tags: ["NFT", "WEB3", "ART"],
        stack: "SOLIDITY",
        status: "DEPRECATED",
        github: "https://github.com/SukhdevThukral/CheatCodeIRL"
    },
    "09" : {
        title: "SPIKEYYY",
        category: "Discord Bot",
        year: "©2020",
        description: "A VALORANT DISCORD BOT THAT PULLS AGENT AND GAME INFO STRAIGHT INTO YOUR SERVER.",
        tags: ["DISCORD", "BOT", "VALORANT"],
        stack: "DISCORD.JS",
        status: "DEPRECATED",
    },
}

export default function ProjectDetails () {
    const {id} = useParams() as {id:string};
    const container = useRef(null);
    const project = PROJECTS[id];

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.from(".pd-nav", {y: -20, opacity: 0, duration: 0.6, ease: "power3.out"})
            .from(".pd-num", {y: "100%", duration:0.8, ease: "power4.out"}, "-=0.3")
            .from(".pd-title-word", { y: "105%", duration: 1.2, ease: "power4.out"}, "-=0.3")
            .from(".pd-divider", {scaleX: 0, transformOrigin: "left", duration: 1, ease:"expo.inOut"}, "-=0.8")
            .from(".pd-fade", {y:24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1}, "-=0.5");
    }, {scope:container});

    if (!project) return(
        <div className={`min-h-screen bg-[#F6F4F2] flex items-center justify-center ${nimbusSans.className}`}>
            <p className="text-[#111] font-bold uppercase tracking-widest">Project not found.</p>
        </div>
    )
    return(
        <div ref={container} className="relative overflow-hidden">
            <CustomCursor/>
            <SmoothScroll> 
                <div className={`min-h-screen bg-[#F6F4F2] text-[#111] flex flex-col ${nimbusSans.className}`}>
                    <div className={`pd-nav flex justify-between items-center absolute top-2 left-3 right-3 z-10 text-lg font-bold ${nimbusSans.className}`}>
                        <div className="flex gap-2">
                            <div className="overflow-hidden">
                                <Link href="/projects">
                                    <h1 className="nav-item inline-block italic">ProjeX,</h1>
                                </Link>
                            </div>
                            <div className="overflow-hidden">
                                <Link href="/misc">
                                    <h1 className="nav-item inline-block"> XPerience</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-25 pb-15">
                        <div className="overflow-hidden mb-2">
                            <p className="pd-num text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">
                                [{id}] - {project.category}
                            </p>
                        </div>

                        <div className={`mb-6 ${YingHei.className}`}>
                            {project.title.split(" ").map((word, i, arr) => (
                                <div key={i} className="overflow-hidden">
                                    <span className="pd-title-word block text-[clamp(52px,13vw, 108px)] font-bold leading-[0.88] tracking-tight text-[#EA3424] uppercase">
                                        {word} {i === arr.length - 1 &&  <sup className="text-[0.22em] align-super">®</sup>}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <hr className="pd-divider h-px bg-[#111] border-none mb-6"/>

                        <div className="pd-fade grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8 mb-6">
                            {([
                                { label: "Year", value: project.year },
                                { label: "Category", value: project.category },
                                { label: "Stack", value:project.stack},
                                { label: "Status", value: project.status},
                            ] as const).map(({label, value}) => (
                                <div key={label}>
                                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 mb-1">{label}</p>
                                    <p className="text-[11px] font-bold tracking-[0.05em] uppercase">{value}</p>
                                </div>
                            ))}
                        </div>
                        
                        <hr className="pd-fade h-px bg-[#111] border-none mb-6"/>
                        
                        <p className="pd-fade text-[12px] font-bold uppercase leading-relaxed max-w-2xl opacity-70 mb-5">
                            {project.description}
                        </p>

                        <div className="pd-fade flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[9px] font-bold tracking-[0.2em] uppercase border border-[#111] px-3 py-1.5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pd-fade flex gap-3">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#EA3424] text-[#F6F4F2] px-5 py-2.5">
                                    ↗ GITHUB
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase border border-[#111] px-5 py-2.5">
                                    ↗ LIVE DEMO
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center absolute bottom-2 left-3 right-3">
                        <h1 className="text-lg font-bold">© SUKHDEV THUKRAL</h1>
                    </div>
                    
                </div>
            </SmoothScroll>
        </div>
    );
}