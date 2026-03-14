import { ReactNode } from "react";

type ProjectRowProps = {
    icon: ReactNode
    title: string
    shortLine: string
    actionIcon?: ReactNode
}

export default function ProjectRow({ icon,title,shortLine,actionIcon}: ProjectRowProps) {
  return (
    <div className="project-row cursor-pointer group w-full">
      <div className="project-line border-t-1 py-4 border-black w-0 mx-auto"></div>
      <div className="grid grid-cols-[auto_0.75fr_1fr_auto] items-center gap-3 text-[20px] font-bold py-4">
        <div className="w-5 flex justify-center overflow-hidden">
          <div className="project-text-inner inline-block">{icon}</div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text-inner inline-block">{title}</div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text-inner inline-block">{shortLine}</div>
        </div>
        <div className="">
          <div className="project-text-inner inline-block">{actionIcon}</div>
        </div>
      </div>
      <div className="project-line border-t-1 py-4 border-black w-0"></div>
    </div>
  )
}