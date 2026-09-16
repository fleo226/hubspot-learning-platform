import * as React from "react"
import { cn } from "@/lib/utils"

interface HeroPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
}

export const HeroPill = ({
  className = "",
  ...props
}: HeroPillProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium",
        "border-navy/20 bg-navy/5 text-navy hover:bg-navy/10",
        className
      )}
      {...props}
    >
    </span>
  )
}