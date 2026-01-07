import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { AppLogo } from '@/components/app-logo'

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        {/* Newsletter Signup - Moved to top */}
        <div className="mb-8 sm:mb-12 pt-0 pb-8 sm:pb-12 border-b">
          <div className="max-w-md mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="h-4 w-4 sm:h-5 w-5 text-primary" />
              <h4 className="text-base sm:text-lg font-semibold">Stay Updated</h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Get the latest tech insights and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-sm"
              />
              <Button type="submit" className="w-full sm:w-auto px-4 py-2 text-sm">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <AppLogo />
              <h3 className="text-base sm:text-lg font-semibold">Onwardism</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              A unified media platform for engineers and technology teams to read and publish high-quality content focused on cloud, data, security, and AI.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/company" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:pt-8 md:flex-row">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2026 Onwardism. All rights reserved.
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
      </div>
    </footer>
  )
}