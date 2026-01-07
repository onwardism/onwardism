'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  PenTool, 
  FileText, 
  User, 
  Building2, 
  Settings,
  Home,
  ChevronRight
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

export function ConsoleSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-muted/20">
      <div className="p-6">
        {/* Back to main site */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to site
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || 
              (item.href !== '/console/dashboard' && pathname.startsWith(item.href))
            
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
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
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Quick Actions
          </h4>
          <div className="space-y-2">
            <Link 
              href="/console/write"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <PenTool className="h-4 w-4" />
              New Post
            </Link>
            <Link 
              href="/console/posts"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              View Drafts
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}