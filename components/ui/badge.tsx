import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
  variant?: "secondary" | "destructive" | "outline" | "default"
}

export const Badge = ({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold",
        variant === "default"
          ? "bg-navy text-navy-foreground"
          : variant === "secondary"
            ? "bg-secondary text-secondary-foreground"
            : variant === "destructive"
              ? "bg-destructive text-destructive-foreground"
              : variant === "outline"
                ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                : "",
        className
      )}
      {...props}
    >
    </span>
  )
}