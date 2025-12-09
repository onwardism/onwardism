import { Building2, Users, Target } from "lucide-react"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About Onwardism</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted source for technology and engineering news
            </p>
          </div>

          <div className="space-y-12 mt-16">
            <div className="flex gap-6">
              <Building2 className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground">
                  Delivering accurate, timely, and insightful technology news to professionals and enthusiasts worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Users className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Our Team</h2>
                <p className="text-muted-foreground">
                  A dedicated team of journalists, engineers, and industry experts committed to quality reporting.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Target className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Our Focus</h2>
                <p className="text-muted-foreground">
                  Specialized coverage in AI, Data Science, Cloud Computing, Software Development, and Cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
