"use client"

import React from "react"
import {CircleDot} from 'lucide-react';
import localFont from "next/font/local";

const tharo = localFont({
    src: ""    
})

export default function ContactPage(){
    const quicLinks = ['BIO', 'WORK', 'PROJECTS'];

    return(
        <div className="min-h-screen bg-[#EA3424] text-white flex flex-col justify-between p-8 md:p-12 font-sans selection:bg-white selection:text-[#EA3424]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
                <div className="md:col-span-6">
                    <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
                        Scaling<br/>Start-ups<br/>for Growth.
                    </h1>
                </div>
            </div>
        </div>
    )
}