import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { ContentFilter } from "@/components/shared/content-filter"
import { TrendingUp } from "lucide-react"

const categories = ["AI", "Data", "Cloud", "Development", "Security"]

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">News</h1>
          <p className="text-lg text-muted-foreground">
            Breaking news and updates in technology and engineering
          </p>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          <ContentFilter categories={categories} />

          <Card>
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
              <CardDescription>Stay informed with the latest tech news</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <TrendingUp className="w-12 h-12 text-muted-foreground" />
                <p className="text-muted-foreground">No news articles available yet</p>
                <p className="text-sm text-muted-foreground">Check back soon for breaking news</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
