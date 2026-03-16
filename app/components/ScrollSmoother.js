'use client'

import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

if (typeof window !== 'undefined'){
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export default function SmoothScroll({children}){
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 2,
            effects: true,
            normalizeScroll: true,
            ignoreMobileResize: true,
        });

        return() => {
            smoother.kill()
        };

    }, {scope:wrapperRef});

    return (
        <div id="smooth-wrapper" ref={wrapperRef} style={{overflow:'hidden'}}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
}