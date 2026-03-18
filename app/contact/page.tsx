"use client"

import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import localFont from "next/font/local";
import CustomCursor from "../components/customCursor";

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
    const quicLinks = ['BIO', 'WORK', 'PROJECTS'];

    return(
        <div className="min-h-screen bg-[#EA3424] text-white flex flex-col justify-between p-8 md:p-12 selection:bg-white selection:text-[#EA3424]">
            <style jsx global>{`
            div.fixed.z-\[9999\] {
                background-color:white !important;
            }
            `}</style>

            <CustomCursor/>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 items-start">
                <div className="md:col-span-5">
                    <h1 className={`text-6xl md:text-8xl leading-[0.9] tracking-tighter`}>
                        <span className={`${tharoBold.className}`}>
                            Building
                        </span>

                        <br/>
                        <span className={`${degularBoldItalic.className}`}>
                            Systems
                        </span>
                        <br/>

                        <span className={`${tharoBold.className}`}>
                            that Adapt.
                        </span>
                    </h1>
                </div>
                <div className="md:col-span-3 space-y-4">
                    <p className="text-xl opacity-90">/Contact</p>
                    <div className="space-y-4 text-sm font-medium">
                        <a href="mailto:sukhdevthukral2411@gmail.com" className="block hover:underline">
                            sukhdevthukral2411@gmail.com
                        </a>
                        <p>+91 92138 41578</p>
                        <address className="not-italic opacity-80 leading-tight">
                            github :3
                            sukhdev thukral :3
                        </address>
                    </div>
                </div>
            </div>  
            <div className="flex items-center gap-4 py-8 overflow-hidden">
                <i className="bi bi-stars text-[10vw]"></i>
                <span className={`text-[15vw] leading-none  ${degularMedium.className}`}>
                    Think. Build.
                </span>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-3 items-center text-md tracking-widest pt-8 border-t border-white/20">
                <p className="text-center md:text-left">©2026 Sukhdev Thukral.</p>
                <div className={`flex justify-center ${degularMedium.className}`}>
                    <a href="#" className="hover:opacity-60 transition-opacity">
                        Terms and Conditions
                    </a>
                </div>
                <div className={`flex justify-center md:justify-end gap-8 mt-4 md:mt-0  ${degularMedium.className}`}>
                    <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};