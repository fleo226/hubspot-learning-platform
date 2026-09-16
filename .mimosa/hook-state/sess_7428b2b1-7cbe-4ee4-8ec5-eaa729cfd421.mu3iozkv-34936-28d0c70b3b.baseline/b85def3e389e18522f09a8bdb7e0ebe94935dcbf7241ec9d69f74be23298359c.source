import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  isActive?: boolean
}

interface SidebarProps {
  items: SidebarItem[]
  className?: string
}

export const Sidebar = ({ items, className = "" }: SidebarProps) => {
  return (
    <aside className={cn(
      "flex h-screen flex-col w-64 bg-white border-r",
      className
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <h2 className="text-xl font-semibold text-navy">LearnHub</h2>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pt-4">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
              item.isActive ? "bg-navy/5 text-navy" : "text-slate-600 hover:bg-slate-50 hover:text-navy"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="h-16 border-t flex items-center justify-center">
        <button className="text-slate-500 hover:text-navy">
          Settings
        </button>
      </div>
    </aside>
  )
}