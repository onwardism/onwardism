'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, Github, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { AppLogo } from '@/components/app-logo'

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-12 sm:h-14 items-center justify-between px-4 sm:px-6">
          {/* Left: Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <AppLogo />
              <span className="font-bold text-base sm:text-lg">
                Onwardism
              </span>
            </Link>
          </div>

          {/* Middle: Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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

          {/* Right: Theme Toggle + GitHub + Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* GitHub Icon - Hidden on very small screens */}
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hidden xs:flex" asChild>
              <Link href="https://github.com/onwardism" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="h-9 w-9 p-0 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/news"
                className="block text-sm font-medium transition-colors hover:text-primary text-muted-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/blogs"
                className="block text-sm font-medium transition-colors hover:text-primary text-muted-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              {/* GitHub link for mobile */}
              <Link
                href="https://github.com/onwardism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}