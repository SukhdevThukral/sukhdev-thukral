import { ReactNode } from "react";

type ProjectRowProps = {
    icon: ReactNode
    title: string
    actionIcon?: ReactNode
}

export default function ProjectRow({ icon,title,actionIcon}: ProjectRowProps) {
  return (
    <div className="border-t-1 py-4 cusor-pointer">

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-[20px] font-bold">

        <div className="w-5 flex justify-center">
            {icon}
        </div>

        <div className="">
            {title}
        </div>

        <div className="font-bold">
            {title}
        </div>

        {actionIcon && (
            <div className="flex justify-center">{actionIcon}</div>
        )}
      </div>
    </div>
  )
}