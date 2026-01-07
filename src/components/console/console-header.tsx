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

export function ConsoleHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <Link href="/console/dashboard" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6" />
            <span className="font-bold">Console</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="ml-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Notifications */}
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Settings */}
          <Link href="/console/settings">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>

          {/* Profile */}
          <Link href="/console/profile">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>

          {/* Logout */}
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}