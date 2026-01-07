import { ConsoleHeader } from '@/components/console/console-header'
import { ConsoleSidebar } from '@/components/console/console-sidebar'

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ConsoleHeader />
      
      <div className="flex-1 flex">
        <ConsoleSidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}