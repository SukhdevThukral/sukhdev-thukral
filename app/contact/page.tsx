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
                            Startups for
                        </span>
                        <br/>
                        <span className={`${tharoBold.className}`}>
                            for Growth.
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}