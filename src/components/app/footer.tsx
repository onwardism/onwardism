"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useState } from "react"

export function AppFooter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icons/dark-icon.png" alt="Onwardism" width={24} height={24} />
              <span className="text-xl font-bold">Onwardism</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Your trusted source for technology and engineering news. Stay informed with the latest developments in AI, Data Science, Cloud Computing, Software Development, and Cybersecurity.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe to get the latest tech news and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-8 border-t space-y-4">
          {/* Quick Links - All in one line */}
          <div className="text-sm">
            <span className="font-semibold mr-4">Quick Links</span>
            <Link href="/site/home" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Home
            </Link>
            <Link href="/site/news" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              News
            </Link>
            <Link href="/site/blog" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Blog
            </Link>
            <Link href="/site/events" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Events
            </Link>
            <Link href="/site/research" className="text-muted-foreground hover:text-foreground transition-colors">
              Research
            </Link>
          </div>

          {/* Company - All in one line */}
          <div className="text-sm">
            <span className="font-semibold mr-4">Company</span>
            <Link href="/company/about" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              About Us
            </Link>
            <Link href="/company/features" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Features
            </Link>
            <Link href="/company/resources" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Resources
            </Link>
            <Link href="/company/support" className="text-muted-foreground hover:text-foreground transition-colors mr-4">
              Support
            </Link>
            <Link href="/company/faqs" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQs
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Onwardism. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
