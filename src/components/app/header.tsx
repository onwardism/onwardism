import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { GitHubStarsButton } from "@/components/shared/github-stars-button"

export function AppHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
        <Link href="/site/home" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/icons/dark-icon.png" alt="Onwardism" width={24} height={24} />
          <span className="text-xl font-bold">Onwardism</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 flex-shrink-0">
          <Link href="/site/home" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/site/news" className="text-sm hover:text-primary transition-colors">
            News
          </Link>
          <Link href="/site/blog" className="text-sm hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/site/events" className="text-sm hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/site/research" className="text-sm hover:text-primary transition-colors">
            Research
          </Link>
        </nav>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <GitHubStarsButton username="onwardism" repo="onwardism" />
        </div>
      </div>
    </header>
  )
}
