'use client'

import { useEffect, useRef } from "react";
import gsap from 'gsap';

export default function CustomCursor(){
    const cursorRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const cursor = cursorRef.current;

        gsap.set(cursor, {xPercent: -50, yPercent: -50, scale: 0});

        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");

        const moveCursor = (e:MouseEvent) => {
            gsap.to(cursor, {scale:1, duration:0.3});
            xSet(e.clientX);
            ySet(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return(
        <div ref={cursorRef} className="fixed top-0 left-0 w-4 h-4 bg-[#EA3424] rounded-full pointer-events-none z-[9999]"/>
    );
}