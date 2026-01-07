'use client'

import { useState } from 'react'
import { ConsoleHeader } from '@/components/console/console-header'
import { ConsoleSidebar } from '@/components/console/console-sidebar'

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ConsoleHeader onMenuClick={() => setIsSidebarOpen(true)} />
      
      <div className="flex-1 flex">
        <ConsoleSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}