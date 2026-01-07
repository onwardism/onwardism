'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Menu, 
  Bell, 
  User, 
  LogOut,
  Settings
} from 'lucide-react'

export function ConsoleHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 sm:h-14 items-center px-4 sm:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Logo/Brand - Hidden on mobile when sidebar is available */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Link href="/console/dashboard" className="flex items-center space-x-2">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-bold text-sm sm:text-base">Console</span>
          </Link>
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Settings */}
          <Link href="/console/settings">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 w-9">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>

          {/* Profile */}
          <Link href="/console/profile">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 w-9">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>

          {/* Logout */}
          <Link href="/auth/login">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 w-9">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}