import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { ContentFilter } from "@/components/shared/content-filter"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, tutorials, and stories from the tech world
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ContentFilter />
          <Card>
            <CardHeader>
              <CardTitle>Latest Blog Posts</CardTitle>
              <CardDescription>Stay updated with our latest articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <p className="text-muted-foreground">No blog posts available yet</p>
                <p className="text-sm text-muted-foreground">Check back soon for new content</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
