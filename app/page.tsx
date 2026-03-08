import localFont from "next/font/local"

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
      <div className={`flex flex-row gap-2 absolute top-2 left-3 text-lg font-bold ${nimbusSans.className}`}>
        <h1 className="italic">INDEX,</h1>
        <h1> ABOUT</h1>
      </div>
      <div className={`absolute top-2 right-3 text-lg font-bold ${nimbusSans.className}`}> 
        <h1 className="underline underline-offset-7">CONTACT</h1>
      </div>
    
      <div className="flex flex-col justify-center items-center h-screen px-4">
        <div className={`text-center text-[6em] sm:text-[6em] md:text-[10em] lg:text-[15em] text-[#EA3424] font-bold ${YingHei.className}`}>SUKHDEV T.</div>
        <div className={`text-center max-w-5xl w-full text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.2rem] text-[#000000] font-bold ${nimbusSans.className}`}>I AM A HIGHSCHOOL SENIOR AND ALSO A SELF PROCLAIMED PRODUCT ENGINEER :3 LIVING IN INDIA. I LOVE MAKING THINGS (PRODUCTS).THE PROCESS OF TURNING AN IDEA FROM A COLLECTION OF THOUGHTS INTO SOMETHING THAT ACTUALLY EXISTS IS SUPER FUN. ITS WHAT I GET TO SPEND MY DAYS DOING AND I ABSOLUTELY LOVE IT</div>
      </div>
    </div>
    </>
  );
}