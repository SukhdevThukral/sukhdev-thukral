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
    const container = useRef();

    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.5,
            effects: true,
        });

        return() => {
            smoother.kill()
        };

    }, {scope:container});

    return (
        <div id="smooth-wrapper" ref={container}>
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}