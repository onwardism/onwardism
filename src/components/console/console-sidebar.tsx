'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { AppLogo } from '@/components/app-logo'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  PenTool, 
  FileText, 
  User, 
  Building2, 
  Settings,
  Home,
  ChevronRight,
  X
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/console/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Write',
    href: '/console/write',
    icon: PenTool,
  },
  {
    title: 'My Posts',
    href: '/console/posts',
    icon: FileText,
  },
  {
    title: 'Profile',
    href: '/console/profile',
    icon: User,
  },
  {
    title: 'Organization',
    href: '/console/org/org-id',
    icon: Building2,
  },
  {
    title: 'Settings',
    href: '/console/settings',
    icon: Settings,
  },
]

export function ConsoleSidebar({ isOpen = true, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const sidebarContent = (
    <>
      {/* Mobile Close Button */}
      {isMobile && (
        <div className="flex justify-end p-4 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* App Logo and Brand */}
        <div className="mb-6">
          <Link href="/" className="flex items-center space-x-2">
            <AppLogo />
            <span className="font-bold text-base sm:text-lg">
              Onwardism
            </span>
          </Link>
        </div>

        {/* Back to main site */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to site
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 sm:space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || 
              (item.href !== '/console/dashboard' && pathname.startsWith(item.href))
            
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={isMobile ? onClose : undefined}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* Quick Actions */}
        <div className="mt-6 sm:mt-8">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Quick Actions
          </h4>
          <div className="space-y-1 sm:space-y-2">
            <Link 
              href="/console/write"
              onClick={isMobile ? onClose : undefined}
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <PenTool className="h-4 w-4" />
              New Post
            </Link>
            <Link 
              href="/console/posts"
              onClick={isMobile ? onClose : undefined}
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              View Drafts
            </Link>
          </div>
        </div>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
        
        {/* Mobile Sidebar */}
        <aside className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 border-r bg-background transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          {sidebarContent}
        </aside>
      </>
    )
  }

  // Desktop Sidebar
  return (
    <aside className="hidden lg:block w-64 border-r bg-muted/20">
      {sidebarContent}
    </aside>
  )
}