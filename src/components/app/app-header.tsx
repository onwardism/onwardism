import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Github } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { AppLogo } from '@/components/app-logo'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left: Logo/Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <AppLogo />
            <span className="font-bold text-lg">
              Onwardism
            </span>
          </Link>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            News
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            Blog
          </Link>
        </nav>

        {/* Right: Theme Toggle + GitHub */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* GitHub Icon */}
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
            <Link href="https://github.com/onwardism" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="h-9 w-9 p-0 md:hidden"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}