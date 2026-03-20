"use client"

import React, {useRef} from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const articulat = localFont({
    src: "../articulat.ttf"
})

export default function ProjectDetails ({params}: {params: {id:string}}) {
    const {id} = useParams();
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".info-content", {
            y:40,
            opacity:0,
            duration: 1,
            ease: "power4.out",
            delay:0.2  
        });
    }, {scope:container});

    return(
        <div ref={container} className="min-h-screen bg-[#F6F4F2] flex flex-col font-sans">
            <section className="relative w-full h-[60vh] md:h-[60vh] flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image src={`/project-showcase-${id}.png`}
                    alt="showcase"
                    fill className="object-contain" priority/>
                </div>
            </section>

            <section className="flex-1 bg-[#F6F4F2] text-black px-8 py-12 md:px-20 md:py-16 flex flex-col md:flex-row justify-between items-end">
                <div className="info-content max-w-xl">
                    <p className="text-[14px] md:text-[18px] leading-snug font-medium text-gray-800 mb-10 max-w-xs">
                        lets not do tht
                    </p>

                    <h1 className={`text-6xl md:text-8xl font-bold tracking-tighter`}>
                        /CommitCraft
                        <span className="text-2xl md:text-3xl align-top ml-1">®</span>
                    </h1>
                </div>

                <div className="info-content flex gap-4 mt-10 md:mt-0">
                    {[1,2,3].map((i)=> (
                        <div key={i} className="w-24 h-24 md:w-44 md:h-44 bg-gray-100 rounded-2xl overflow-hidden relative">                            
                            <Image src={`/project-showcase-${id}.jpg`}
                            alt="preview"
                            fill className="object-cover"/>                        
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}