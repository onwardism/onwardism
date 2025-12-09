import { BookOpen, FileText, Video, Podcast } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access our library of technology and engineering content
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <BookOpen className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                In-depth articles and analysis on technology trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Browse our collection of articles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Guides</CardTitle>
              <CardDescription>
                Technical guides and tutorials for developers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Explore our guides</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Video className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Videos</CardTitle>
              <CardDescription>
                Video content and tech conference coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Watch our videos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Podcast className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Podcasts</CardTitle>
              <CardDescription>
                Listen to interviews with industry experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Listen to our podcasts</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
