"use client"

import React from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css"
import localFont from "next/font/local";

const articulat = localFont({
    src: "articulat.ttf"
});
const poppinssemibold = localFont({
    src: "Poppins-SemiBold.ttf"
});

const PROJECTS = [
    {
        id: "[01]",
        title: "Commit Craft",
        category: "tool",
        year: "©2025",
        image: ""
    },
    {
        id: "[02]",
        title: "Sonic Mesh",
        category: "tool",
        year: "©2025",
        image: ""
    },
    {
        id: "[03]",
        title: "Votex",
        category: "tool",
        year: "©2025",
        image: ""
    },
    {
        id: "[04]",
        title: "sukhdev-thukral",
        category: "web dev",
        year: "©2026",
        image: ""
    },
    {
        id: "[05]",
        title: "Commit Craft",
        category: "cli tool",
        year: "©2025",
        image: ""
    },

]

export default function projectPage() {
    return(
        <main className="min-h-screen bg-[#F6F4F2] text-black px-6 md:px-16 md:py-20 font-sans">
            <div className="flex items-center gap-2 mb-5">
                
                    <i className="bi bi-stars"></i>
                <span className={`text-[15px] font-bold tracking-[0.2em] uppercase ${poppinssemibold.className}`}>
                    16 — 2026©
                </span>
            </div>

            <header className="flex flex-col lg:flex-row justify-between items-start mb-24 border-b border-black/5 pb-16">
                <h1 className={`text-[15vw] md:text-[9vw] leading-[0.8] tracking-tighter ${articulat.className}`}>
                    Projects.
                </h1>
                <div className="max-w-[280px] mt-8 lg:mt-auto">
                    <p className="text-sm"></p>
                </div>
            </header>
        </main>
    )
}