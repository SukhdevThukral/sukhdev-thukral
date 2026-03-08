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
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <div className={`text-center text-[6em] sm:text-[6em] md:text-[10em] lg:text-[15em] text-[#EA3424] font-bold ${YingHei.className}`}>SUKHDEV T.</div>
       <div className={`text-center max-w-5xl w-full text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.2rem] text-[#000000] font-bold ${nimbusSans.className}`}>I AM A HIGHSCHOOL SENIOR AND ALSO A SELF PROCLAIMED PRODUCT ENGINEER :3 LIVING IN INDIA. I LOVE MAKING THINGS (PRODUCTS).THE PROCESS OF TURNING AN IDEA FROM A COLLECTION OF THOUGHTS INTO SOMETHING THAT ACTUALLY EXISTS IS SUPER FUN. ITS WHAT I GET TO SPEND MY DAYS DOING AND I ABSOLUTELY LOVE IT</div>
    </div>
    </>
  );
}