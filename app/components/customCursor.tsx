'use client'

import { useEffect, useRef } from "react";
import gsap from 'gsap';

export default function CustomCursor(){
    const cursorRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, {xPercent: -50, yPercent: -50, scale: 0});

        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");

        const moveCursor = (e:MouseEvent) => {

            const currentScale = gsap.getProperty(cursor, "scale") as number;
            if (currentScale < 0.1){
                gsap.to(cursor, {scale:1, duration:0.5, ease: "expo.out", overwrite:"auto"});
            }
            xSet(e.clientX);
            ySet(e.clientY);
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {scale:0, duration:0.3, ease: "power2.inOut"});
        }

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);


        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return(
        <div ref={cursorRef} className="fixed top-0 left-0 w-4 h-4 bg-[#EA3424] rounded-full pointer-events-none z-[9999]"/>
    );
}