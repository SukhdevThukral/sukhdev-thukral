import { ReactNode, useState } from "react";
import HoverImage from "./hoverRow";

type ProjectRowProps = {
    icon: ReactNode;
    title: string;
    shortLine: string;
    actionIcon?: ReactNode;
    imgSrc?:string;
}

export default function ProjectRow({ icon,title,shortLine,actionIcon,imgSrc}: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-row cursor-pointer group w-full relative pointer-events-none"
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}>

      <div className="project-line border-t-1 py-4 border-black w-0 mx-auto"></div>

      {imgSrc && <HoverImage imgSrc={imgSrc} active={isHovered}/>}

      <div className="grid grid-cols-[auto_0.75fr_1fr_auto] items-center gap-3 text-[20px] font-bold">
        <div className="w-5 flex justify-center overflow-hidden">
          <div className="project-text-inner inline-block">{icon}</div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text-inner inline-block">{title}</div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text-inner inline-block">{shortLine}</div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text-inner inline-block">{actionIcon}</div>
        </div>
      </div>
      <div className="project-line border-t-1 py-4 border-black w-0"></div>
    </div>
  )
}