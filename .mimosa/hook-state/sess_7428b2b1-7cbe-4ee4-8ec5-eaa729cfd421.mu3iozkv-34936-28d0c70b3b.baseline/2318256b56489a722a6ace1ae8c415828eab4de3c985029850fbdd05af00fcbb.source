import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
  alt?: string
  name?: string
  size?: "sm" | "md" | "lg"
}

export const Avatar = ({
  className = "",
  src,
  alt,
  name,
  size = "md",
  ...props
}: AvatarProps) => {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const hasImage = !!src

  return (
    <div className={cn(
      "flex h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-populate",
      sizeMap[size],
      className
    )}>
      {hasImage ? (
        <img
          src={src}
          alt={alt ?? "Avatar"}
          className="object-cover"
          {...props}
        />
      ) : (
        <>
          <div className="flex h-full w-full items-center justify-center bg-navy/20 text-navy font-medium text-sm">
            {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)}
          </div>
        </>
      )}
    </div>
  )
}