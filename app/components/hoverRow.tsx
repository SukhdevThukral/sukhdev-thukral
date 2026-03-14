'use client'

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createPortal } from "react-dom";

type HoverImageProps = {
    imgSrc: string;
    active: boolean;
}

export default function HoverImage({imgSrc, active}: HoverImageProps){
    const container = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, []);

    useGSAP(() => {
        if (!container.current) return;

        const xSet = gsap.quickSetter(container.current, "x", "px");
        const ySet = gsap.quickSetter(container.current, "y", "px");

        const moveImage = (e: MouseEvent)=> {
            xSet(e.clientX+20);
            ySet(e.clientY-100);
        };

        window.addEventListener("mousemove", moveImage);

        if (active) {
            gsap.to(container.current, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        } else{
            gsap.to(container.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power3.in"
            });
        }
        return() => window.removeEventListener("mousemove", moveImage);
    }, [active]);

    if(!mounted) return null;
    //"teleporting this div to the doc body"
    return createPortal(
        <div ref={container} className="fixed top-0 left-0 w-80 h-52 pointer-events-none z-[10000] opacity-0 scale-0 overflow-hidden bg-[#EA3424] p-3 shadow-2xl"> 
            <div className="relative w-full h-full overflow-hidden">
                <img src={imgSrc} alt=" preview" className="w-full h-full object-cover"/>
            </div>
        </div>,
        document.body
    );
}