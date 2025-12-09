import { Brain, Database, Cloud, Code, Shield, Bell } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Platform Features</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to stay informed about technology and engineering
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <Brain className="w-10 h-10 text-primary mb-2" />
              <CardTitle>AI Coverage</CardTitle>
              <CardDescription>
                Latest developments in artificial intelligence and machine learning
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Data Science</CardTitle>
              <CardDescription>
                Insights on data analytics, big data, and data engineering
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Cloud Computing</CardTitle>
              <CardDescription>
                Updates on cloud platforms, infrastructure, and services
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Development</CardTitle>
              <CardDescription>
                Programming languages, frameworks, and development tools
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Cybersecurity news, vulnerabilities, and best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Real-time Updates</CardTitle>
              <CardDescription>
                Get notified about breaking news and important updates
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
