import * as React from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { Header } from "@/components/ui/header"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export const Layout = ({
  children,
  className = "",
}: LayoutProps) => {
  return (
    <div className={cn("flex h-screen bg-[#F8FAFC]", className)}>
      <Sidebar items={[]} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">{children}</div>
      </main>
    </div>
  )
}