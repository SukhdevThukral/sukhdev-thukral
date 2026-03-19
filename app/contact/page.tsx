"use client"
import { Suspense } from "react";
import ContactPage from "./ContactContent";

export default function mainPage() {
    return(
        <Suspense fallback={<div className="min-h-screen bg-[#EA3424]"></div>}>
            <ContactPage/>
        </Suspense>
    );
}