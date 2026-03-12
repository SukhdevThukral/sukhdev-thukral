import localFont from "next/font/local"
import ProjectRow from "./components/ProjectRow";
import "bootstrap-icons/font/bootstrap-icons.css"
import SmoothScroll from './components/ScrollSmoother';

const YingHei = localFont({
  src: "MYingHeiPRC.woff2"
});

const nimbusSans = localFont({
  src: "nimbus.woff2"
});

export default function Home(){
  return(
    <>
    <SmoothScroll>
      <div className="relative min-h-screen">
        <div className={`flex justify-between items-center absolute top-2 left-3 right-3 text-lg font-bold ${nimbusSans.className}`}>
          <div className="flex gap-2">
            <h1 className="italic">INDEX,</h1>
            <h1> ABOUT</h1>
          </div>
          <h1 className="underline underline-offset-7">CONTACT</h1>
        </div>
          <div className="flex flex-col justify-center items-center h-screen px-4">
            {/* <div className="flex flex-col items-center w-full max-w-[50vw]"> */}
              <div className={`flex flex-col text-center text-[18.4vw] sm:text-[18.6vw] md:text-[18.8vw] lg:text-[19vw] text-[#EA3424] font-bold leading-[0.9] tracking-tight ${YingHei.className}`}>
                <span>SUKHDEV</span>
                <span>THUKRAL</span>
              </div>
              <div className={`text-center w-fit max-w-[100ch] text-[0.9rem] sm:text-[1.13rem] md:text-[1.125rem] lg:text-[1.1rem] text-[#000000] font-bold ${nimbusSans.className}`}>I AM A HIGHSCHOOL SENIOR AND ALSO A SELF PROCLAIMED PRODUCT ENGINEER :3 LIVING IN INDIA. I LOVE MAKING THINGS (PRODUCTS).THE PROCESS OF TURNING AN IDEA FROM A COLLECTION OF THOUGHTS INTO SOMETHING THAT ACTUALLY EXISTS IS SUPER FUN. ITS WHAT I GET TO SPEND MY DAYS DOING AND I ABSOLUTELY LOVE IT</div>
            {/* </div> */}
          </div>
          <div className={`px-6 md:px-12 lg:px-20 ${nimbusSans.className}`}>  
            <ProjectRow
              icon={<i className=""></i>}
              title="COMMITCRAFT"
              shortLine="CONVENTIONAL AI COMMIT GENERATOR"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="SONICMESH"
              shortLine="ULTRASONIC COMMUNICATION ENABLING DATA TRANSFER OVER AUDIO."
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="QUANTUM ALGORITHMS SIMULATOR"
              shortLine="EXPERIMENT TO SIMULATE QUANTUM ALGORITHMS IN PYTHON"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="THIS WEBSITE"
              shortLine="TOOK DESIGN INSPO FROM DRIBBBLE <33"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="VOTEX"
              shortLine="A SIMPLE AND PRACTICAL APPLICATION OF SHA-256 ENCRYPTION AND DECRYPTION "
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="CRAZY STUFF"
              shortLine="TS STUFF CRAZY ASL BRO"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title=""
              shortLine="TS STUFF CRAZY ASL BRO"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="CRAZY STUFF"
              shortLine="TS STUFF CRAZY ASL BRO"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />
            <ProjectRow
              icon={<i className=""></i>}
              title="CRAZY STUFF"
              shortLine="TS STUFF CRAZY ASL BRO"
              actionIcon={<i className="bi bi-arrow-up-right"></i>}
            />

            <div className="border-t-1 py-4 cusor-pointer"></div>
          </div>
          <div className="py-[3rem] md:py-[4rem] lg:py-[6rem]">
            <div className={`text-center font-bold ${nimbusSans.className}`}>
              <div className="text-[1.97rem] sm:text-[1.95rem] md:text-[1.85rem] lg:text-[1.8rem]">
                <h1 className="underline underline-offset-8">HIT ME UP</h1>
              </div>
              <div className="flex flex-col text-[1.2rem]">          
                <span>OR FOLLOW ME ON </span> 
                <span> <i className="bi bi-instagram"></i>   INSTAGRAM </span>
              </div>
            </div>
          </div>  

        <div className={`flex justify-between items-center absolute bottom-2 left-3 right-3 text-lg font-bold ${nimbusSans.className}`}>
          <div className="flex gap-2">
            <h1 className="italic">INDEX,</h1>
            <h1> ABOUT</h1>
          </div>
          <h1>© SUKHDEV THUKRAL</h1>
        </div>    
      </div>
    </SmoothScroll>
    </>
  );
}