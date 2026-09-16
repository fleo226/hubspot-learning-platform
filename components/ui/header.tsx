import * as React from "react"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { Avatar } from "./avatar" // we'll create this next
import { Bell } from "lucide-react"

interface HeaderProps {
  className?: string
}

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={cn(
      "flex h-16 items-center justify-between px-4 bg-white border-b",
      className
    )}>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-navy">LearnHub</h2>
        <div className="flex h-10 w-64 items-center rounded-md border border-slate-200 bg-slate-50">
          <Search className="h-4 w-4 mx-2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="flex-1 bg-transparent border-none outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-navy">
          <Bell className="h-4 w-4" />
        </button>
        <Avatar className="h-10 w-10" />
      </div>
    </header>
  )
}