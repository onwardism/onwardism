import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { ContentFilter } from "@/components/shared/content-filter"
import { FileText, BookOpen } from "lucide-react"

const categories = ["AI & ML", "Data Science", "Cloud Computing", "Cybersecurity"]

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Research</h1>
          <p className="text-lg text-muted-foreground">
            In-depth research papers and technical analysis
          </p>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          <ContentFilter categories={categories} />

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Latest Research</CardTitle>
                <CardDescription>Recently published papers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <FileText className="w-12 h-12 text-muted-foreground" />
                  <p className="text-muted-foreground">No research papers available</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Research</CardTitle>
                <CardDescription>Most viewed papers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                  <p className="text-muted-foreground">No popular research yet</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
