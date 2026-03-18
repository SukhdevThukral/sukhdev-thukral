"use client"

import React from "react"
import {CircleDot} from 'lucide-react';
import localFont from "next/font/local";

const tharoBold = localFont({
    src: "/tharo/tharobold.otf"    
})

const degularBoldItalic = localFont({
    src: "/tharo/degularBoldItalic.otf"
})

export default function ContactPage(){
    const quicLinks = ['BIO', 'WORK', 'PROJECTS'];

    return(
        <div className="min-h-screen bg-[#EA3424] text-white flex flex-col justify-between p-8 md:p-12 selection:bg-white selection:text-[#EA3424]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
                <div className="md:col-span-6">
                    <h1 className={`text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter`}>
                        <span className={`${tharoBold.className}`}>
                            Scaling
                        </span>

                        <br/>
                        <span className={`${degularBoldItalic.className}`}>
                            Startups
                        </span>
                        <br/>

                        <span className={`${tharoBold.className}`}>
                            for Growth.
                        </span>
                    </h1>
                </div>

                <div className="md:col-span-3 space-y-4">
                    <p className="text-xl opacity-90">/Quick links</p>
                    <div className="flex flex-wrap gap-2">
                        {quicLinks.map((link) => (
                            <button key={link} className="px-6 py-2 border-2 border-white rounded-full text-sm font-bold hover:bg-white hover:text-[#ff0000] transition-colors">
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                    <p className="text-xl opacity-90">/Contact</p>
                    <div className="space-y-6 text-lg font-medium">
                        <a href="mailto:sukhdevthukral2411@gmail.com" className="block hover:underline">
                            sukhdevthukral2411@gmail.com
                        </a>
                        <p>+91 92138 41578</p>
                        <address className="not-italic opacity-80 leading-relaxed">
                            github :3
                            sukhdev thukral :3
                        </address>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 py-8 overflow-hidden">
                <CircleDot size={120} strokeWidth={2.5} className="min-w-fit"/>
                <span className="text-[15vw] font-bold leading-none tracking-[-0.05em]">
                    Creative is
                </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest pt-8 border-t border-white/20">
                <p>©2026 Creative Studio.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:opacity-60 transition-opacity">Terms and Conditions</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};