"use client"

import React, {useRef} from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import localFont from "next/font/local";
import CustomCursor from "../components/customCursor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tharoBold = localFont({
    src: "/tharo/tharobold.otf"    
})

const degularBoldItalic = localFont({
    src: "/tharo/degularBoldItalic.otf"
})

const degularMedium = localFont({
    src: "/tharo/degularMedium.otf"
})

export default function ContactPage(){
    const container = useRef(null);
    const marqueeRef = useRef(null);


    useGSAP (() => {
        const tl = gsap.timeline({defaults: {ease: "expo.out"}});

        tl.from(".line-reveal", {
            y: "120%",
            duration: 1,
            stagger: 0.8
        })
        .from(".contact-item", {
            opacity:0,
            y:-20,
            duration:1,
            stagger: 0.1
        }, "-=1")

        gsap.to(".marquee-inner", {
            xPercent: -50,
            repeat: -1,
            duration: 10,
            ease: "none",
        });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY} = e;
            const xPos = (clientX/window.innerWidth - 0.5) * 20;
            const yPos = (clientY/window.innerHeight - 0.5) * 20;


            gsap.to(".parallax-text", {
                x: xPos,
                y: yPos,
                duration:1,
                rotationX: -yPos * 0.5,
                rotationY: xPos * 0.5,
                ease: "power2.out",
                stagger:0.05
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove)

    }, {scope:container});
    return(
        <div ref={container} className="min-h-screen bg-[#EA3424] text-white flex flex-col justify-between p-8 md:p-12 selection:bg-white selection:text-[#EA3424]">
            <style jsx global>{`
            div.fixed.z-\[9999\] {
                background-color:white !important;
            }
            .mask {
                overflow:hidden
                padding: 0.5rem 1rem; 
                margin: -0.5rem -1rem;
                display: block;
            }

            .line-reveal{
                display: block;
                line-height: 1; 
                padding-left: 0.05em;
                will-change: transform;
            }
            
            .systems-line{
                margin-top: -0.8rem;
            }

            .marquee-inner{
                display: flex;
                white-space: nowrap;
                width: fit-content;
            }
            `}</style>

            <CustomCursor/>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 items-start relative z-10">
                <div className="md:col-span-7">
                    <h1 className={`text-6xl md:text-8xl tracking-tighter pointer-events-none`}>
                        <div className="mask">
                            <span className={`${tharoBold.className} line-reveal parallax-text block`}>
                                Building
                            </span>
                        </div>

                        <div className="mask systems-line">
                            <span className={`${degularBoldItalic.className} line-reveal parallax-text block ml-[5%]`}>
                                Systems
                            </span>
                        </div>

                        <div className="mask">
                            <span className={`${tharoBold.className} line-reveal parallax-text block`}>
                                that Adapt.
                            </span>
                        </div>
                    </h1>
                </div>

                <div className="md:col-span-3 space-y-4">
                    <div className="contact-item">
                        <p className="text-2xl opacity-90 font-bold tracking-tighter">/ CONTACT</p>
                    </div>
                    <div className="space-y-6 text-2xl font-medium tracking-tight">
                        <div className="contact-item group">
                            <a href="mailto:sukhdevthukral2411@gmail.com" className="block hover:italic transition-all duration-300">
                                sukhdevthukral2411@gmail.com
                            </a>
                        </div>
                        <div className="contact-item">
                            <p className="opacity-90">+91 92138 41578</p>
                        </div>
                        <div className="contact-item opacity-80 flex gap-6 text-sm uppercase tracking-widest pt-4">
                            <a href="https://github.com/SukhdevThukral" className="block hover:opacity-50 transition-opacity">Github</a>
                            <a href="https://www.linkedin.com/in/sukhdevthukral/" className="block hover:opacity-50 transition-opacity">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="flex items-center gap-4 py-8 overflow-hidden footer-big-text">
                <i className="bi bi-stars text-[10vw]"></i>
                <span className={`text-[15vw] leading-none whitespace-nowrap ${degularMedium.className}`}>
                    Think. Build.
                </span>
            </div>

            <div className="border-reveal grid gird-cols-1 md:grid-cols-3 items-center text-md tracking-widest pt-8 border-t border-white/20">
                <p className={`text-center md:text-left ${degularMedium.className}`}>©2026 SUKHDEV THUKRAL.</p>
                <div className={`flex justify-center ${degularMedium.className}`}>
                    <a href="https://github.com/SukhdevThukral" className="hover:opacity-60 transition-opacity">
                        GITHUB
                    </a>
                </div>
                <div className={`flex justify-center md:justify-end gap-8 mt-4 md:mt-0  ${degularMedium.className}`}>
                    <a href="https://www.linkedin.com/in/sukhdevthukral/" className="hover:opacity-60 transition-opacity">LINKEDIN</a>
                </div>
            </div>
        </div>
    );
};