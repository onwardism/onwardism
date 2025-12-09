import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { ContentFilter } from "@/components/shared/content-filter"
import { Calendar, Clock } from "lucide-react"

const categories = ["Conferences", "Webinars", "Workshops", "Meetups"]

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-lg text-muted-foreground">
            Discover upcoming tech conferences, webinars, and community events
          </p>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          <ContentFilter categories={categories} />

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events happening soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Calendar className="w-12 h-12 text-muted-foreground" />
                  <p className="text-muted-foreground">No upcoming events</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Events</CardTitle>
                <CardDescription>Previously held events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Clock className="w-12 h-12 text-muted-foreground" />
                  <p className="text-muted-foreground">No past events</p>
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
