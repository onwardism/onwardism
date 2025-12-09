import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">Technology & Engineering News</h1>
          <p className="text-xl text-muted-foreground">
            Stay informed with the latest in AI, Data, Cloud, Development, and Security
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/auth/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/site/features">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-semibold">Latest Updates</h3>
            <p className="text-sm text-muted-foreground">Breaking news and trending topics</p>
          </div>
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-semibold">Expert Analysis</h3>
            <p className="text-sm text-muted-foreground">In-depth coverage and insights</p>
          </div>
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-semibold">Tech Focus</h3>
            <p className="text-sm text-muted-foreground">AI, Data, Cloud, Dev, Security</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
