import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { AppLogo } from '@/components/app-logo'

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <AppLogo />
              <h3 className="text-base sm:text-lg font-semibold">Onwardism</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              A unified media platform for engineers and technology teams to read and publish high-quality content focused on cloud, data, security, and AI.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="https://www.instagram.com/onwardism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground p-1">
                <Instagram className="h-4 w-4 sm:h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://github.com/onwardism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground p-1">
                <Github className="h-4 w-4 sm:h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/onwardism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground p-1">
                <svg className="h-4 w-4 sm:h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="https://in.linkedin.com/company/onwardism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground p-1">
                <Linkedin className="h-4 w-4 sm:h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-0 sm:gap-1 md:grid-cols-2 lg:grid-cols-2 md:col-span-1 lg:col-span-2">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <Link href="/company" className="text-muted-foreground hover:text-foreground transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

          {/* Newsletter Signup */}
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 sm:h-5 w-5 text-primary" />
              <h4 className="text-sm font-semibold">Stay Updated</h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Get the latest tech insights and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm"
              />
              <Button type="submit" className="w-full px-4 py-2 text-sm">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:pt-8 md:flex-row">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2026 Onwardism. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}