import localFont from "next/font/local"
import ProjectRow from "./components/ProjectRow";
import "bootstrap-icons/font/bootstrap-icons.css"

const YingHei = localFont({
  src: "MYingHeiPRC.woff2"
});

const nimbusSans = localFont({
  src: "nimbus.woff2"
});

export default function Home(){
  return(
    <>
    <div className="relative min-h-screen">
      <div className={`flex justify-between items-center absolute top-2 left-3 right-3 text-lg font-bold ${nimbusSans.className}`}>
        <div className=" flex gap-2">
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
          title="CRAZY STUFF"
          actionIcon={<i className="bi bi-arrow-up-right"></i>}
        />
      </div>
    </div>
    </>
  );
}