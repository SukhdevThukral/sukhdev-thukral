'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local"
import ProjectRow from "./components/ProjectRow";
import "bootstrap-icons/font/bootstrap-icons.css"
import SmoothScroll from './components/ScrollSmoother';
import CustomCursor from "./components/customCursor";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Draggable } from "gsap/dist/Draggable";


if (typeof window !== "undefined"){
  gsap.registerPlugin(Draggable);
}

const YingHei = localFont({
  src: "MYingHeiPRC.woff2"
});

const nimbusSans = localFont({
  src: "nimbus.woff2"
});

export default function Home(){
  const container = useRef(null);
  const descRef = useRef(null);
  const pullTarget = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    if (!descRef.current) return;

    const splitText = new SplitType(descRef.current, {types:'lines'});

    splitText.lines?.forEach(line=> {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden'
      line.parentNode?.insertBefore(wrapper,line);
      wrapper.appendChild(line);
    });

    const exitTl = gsap.timeline({delay:0.5});

    exitTl.from(".nav-item", {
      yPercent:105,
      duration:1.2,
      ease:"power4.out",
      stagger:0.1
    })

    .from(".name-reveal", {
      y:"105%",
      duration: 1.6,
      ease: "power4.out",
      stagger: 0.2
    }, "-=0.6")

    .from(splitText.lines, {
      y:"100%",
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.08
    }, "-=1");


    const rows = gsap.utils.toArray(".project-row");
    rows.forEach((row: any)=>{
      const line = row.querySelector(".project-line");
      const texts = row.querySelectorAll(".project-text-inner");

      gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        onComplete: () => {
          row.style.pointerEvents = "auto";
        }
      })
      .to(line,{
        width: "100%",
        duration: 1.4,
        ease: "expo.inOut"
      })
      .from(texts, {
        y: "105%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      }, "-=0.7");
    });
    gsap.from(".footer-item", {
      scrollTrigger: {
        trigger: ".footer-item",
        start: "top bottom",
        toggleActions: "play none none reverse"
      },
      y: "105%",
      duration: 1,
      ease: "power4.out",
      stagger:0.1
    });

    Draggable.create(pullTarget.current, {
      type: "x",
      bounds: {minX:-window.innerWidth, maxX:0},
      edgeResistance: 0.7,
      onDrag: function(){
        const progress = Math.min(Math.abs(this.x) / 400, 1);
        const curtainMove = 100 - (progress*100)

        gsap.set("#contact-curtain", {xPercent:curtainMove});

        // gsap.set(this.target, {
        //   scaleX:1 + (progress*0.4), 
        //   skewX: progress*20
        // });

        // gsap.to(container.current, {
        //   backgroundColor: `rgba(234, 52, 36, ${progress})`,
        //   duration: 0.1,
        //   ease: "none"
        // });

        gsap.set(".reveal-text, .desc-reveal, .project-row", {
          x:  this.x * 0.2,
          filter: `blur(${progress * 25}px)`,
          opacity: 1- (progress*0.5),
        });
      },
      onDragEnd: function() {
        if (this.x <= -200){
          gsap.to("#contact-curtain", {
            xPercent: 0,
            duration:1.2,
            ease: "power4.inOut",
            onComplete: () => {
              router.push('/contact?transition=pulled')
            }
          });

        } else{
          gsap.to("#contact-curtain",{
            xPercent: 100, duration: 0.6, ease: "expo.out"
          });
          gsap.to(".reveal-text, .desc-reveal", {
            filter: "blur(0px)", opacity: 1, x:0
          });
          gsap.to(this.target, {
            x:0,
            duration: 0.6,
            ease: "elastic.out(1,0.8)"
          });
        }
      }
    });
    
    return ()=> splitText.revert();
  }, {scope:container});


  return(
    <div ref={container} className="relative overflow-hidden">
      <div
        className="fixed inset-0 z-[999] bg-[#EA3424] pointer-events-none"
        id="contact-curtain"
        style={{transform: 'translateX(100%)'}}
      />
      <CustomCursor/>
      <SmoothScroll>
        <div className="relative min-h-screen">
          <div className={`flex justify-between items-center absolute top-2 left-3 right-3 text-lg font-bold ${nimbusSans.className}`}>
            <div className="flex gap-2">
              <div className="overflow-hidden">
                <h1 className="nav-item inline-block italic">ProjeX,</h1>
              </div>
              <div className="overflow-hidden">
                <Link href="/projects">
                  <h1 className="nav-item inline-block"> XPerience</h1>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-[15px] tracking-widest opacity-0 group-hover:opacity-40 transition-opacity duration-500 uppercase"> 
                <i className="bi bi-arrow-bar-left"></i>
                Pull to Open
              </span>
              <div className="relative">
                <div ref={pullTarget} className="nav-item cursor-grab active:cursor-grabbing select-none relative z-50">
                  <h1 className="underline underline-offset-7 leading-none">CONTACT</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-screen px-4">
              {/* <div className="flex flex-col items-center w-full max-w-[50vw]"> */}
                <div className={`reveal-text flex flex-col text-center text-[18.4vw] sm:text-[18.6vw] md:text-[18.8vw] lg:text-[19vw] text-[#EA3424] font-bold leading-[0.9] tracking-tight ${YingHei.className}`}>
                  <div className="overflow-hidden">
                    <span className="name-reveal inline-block">SUKHDEV</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="name-reveal inline-block">THUKRAL</span>
                  </div>
                </div>
                <div className={`text-center w-fit max-w-[100ch] text-[0.9rem] sm:text-[1.13rem] md:text-[1.125rem] lg:text-[1.1rem] text-[#111111] font-bold ${nimbusSans.className}`}>
                  <div className="overflow-hidden">
                    <p ref={descRef} className="desc-reveal inline-block">
                    I AM A HIGH SCHOOL SENIOR LIVING IN INDIA AND A (PROCLAIMED) PRODUCT ENGINEER WITH A GENERALIST 
                    MINDSET I WORK IN PARALLEL ACROSS MULTIPLE TECH DOMAINS RAPIDLY 
                    ADAPTING TO NEW TOOLS AND TECHNOLOGY I LOVE BUILDING SOFTWARE, HARDWARE AND NETWORKS AND 
                    TURNING IDEAS INTO REAL USEFUL THINGS 
                    THROUGH CONSTANT EXPERIMENTATION EVERYDAY WITH CURIOUSITY
                    </p>
                  </div>
                </div>
              {/* </div> */}
            </div>
            <div className={`px-6 md:px-12 lg:px-20 ${nimbusSans.className}`}>  
              <ProjectRow
                icon={<i className="bi bi-git"></i>}
                title="COMMITCRAFT"
                shortLine="CONVENTIONAL AI COMMIT GENERATOR"
                actionIcon={<i className="bi bi-arrow-up-right"></i>}
                imgSrc="https://cdn.hackclub.com/019ceffe-7e34-7cad-aa45-8a94fbc79299/image.png"
              />
              <ProjectRow
                icon={<i className="bi bi-volume-up"></i>}
                title="SONICMESH"
                shortLine="ULTRASONIC COMMUNICATION ENABLING DATA TRANSFER OVER AUDIO."
                actionIcon={<i className="bi bi-arrow-up-right"></i>}
                imgSrc="https://cdn.hackclub.com/019cf00b-f42c-7704-a861-74acd322e5c7/image.png"
              />
              <ProjectRow
                icon={<i className="bi bi-window-stack"></i>}
                title="THIS WEBSITE"
                shortLine="TOOK DESIGN INSPO FROM DRIBBBLE <33"
                actionIcon={<i className="bi bi-arrow-up-right"></i>}
                imgSrc="https://cdn.hackclub.com/019d0413-cb2b-720d-8673-7b4b23800043/image.png"
              />              
              <ProjectRow
                icon={<i className="bi bi-laptop"></i>}
                title="QUANTUM ALGORITHMS SIMULATOR"
                shortLine="EXPERIMENT TO SIMULATE QUANTUM ALGORITHMS IN PYTHON"
                actionIcon={<i className="bi bi-arrow-up-right"></i>}
              />
              <ProjectRow
                icon={<i className="bi bi-fingerprint"></i>}
                title="VOTEX"
                shortLine="A SIMPLE AND PRACTICAL APPLICATION OF SHA-256 ENCRYPTION AND DECRYPTION "
                actionIcon={<i className="bi bi-arrow-up-right"></i>}
                imgSrc="/votex (1).png"
              />
              <div className="project-row">
                <div className="project-line border-t-1 border-black w-0 mx-auto"></div>
              </div>
            </div>
            <div className="py-[3rem] md:py-[4rem] lg:py-[6rem]">
              <div className={`text-center font-bold ${nimbusSans.className}`}>
                <div className="text-[1.97rem] sm:text-[1.95rem] md:text-[1.85rem] lg:text-[1.8rem]">
                  <h1 className="underline underline-offset-8">HIT ME UP</h1>
                </div>
                <div className="flex flex-col text-[1.2rem]">          
                  <span>OR FOLLOW ME ON </span> 
                  <span> <i className="bi bi-instagram"></i>         INSTAGRAM </span>
                </div>
              </div>
            </div>  
          <div className={`flex justify-between items-center absolute bottom-2 left-3 right-3 text-lg font-bold ${nimbusSans.className}`}>
            <div className="flex gap-2">
              <div className="overflow-hidden">
                <h1 className="footer-item inline-block italic">ProjeX,</h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="footer-item inline-block">XPerience</h1>
              </div>
            </div>
            <div className="overflow-hidden">
              <h1 className="footer-item inline-block">© SUKHDEV THUKRAL</h1>
            </div>
          </div>    
        </div>
      </SmoothScroll>
    </div>
  );
}