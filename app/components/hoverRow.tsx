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
            xSet(e.clientX+40);
            ySet(e.clientY-80);
        };

        window.addEventListener("mousemove", moveImage);

        if (active) {
            gsap.to(container.current, {
                scale: 1,
                autoAlpha: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                overwrite:"auto"
            });
        } else{
            gsap.to(container.current, {
                scale: 0,
                autoAlpha: 0,
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
                overwrite:"auto"
            });
        }
        return() => window.removeEventListener("mousemove", moveImage);
    }, [active]);

    if(!mounted) return null;
    //"teleporting this div to the doc body"
    return createPortal(
        <div ref={container} className="fixed top-0 left-0 w-[165px] h-[165px] pointer-events-none z-[10000] invisible scale-0 overflow-hidden bg-[#EA3424] shadow-2xl flex items-center justify-center"> 
            <div className="w-[100%] h-[60%] bg-black">
                <img src={imgSrc} alt="preview" className="w-full h-full object-contain"/>
            </div>
        </div>,
        document.body
    );
}