import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cookie } from 'lucide-react'

export default function CookiesPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex items-center gap-2 mb-8">
        <Cookie className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-muted-foreground mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            </p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
            </p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Essential cookies - Required for the website to function properly</li>
              <li>Analytics cookies - Help us understand how visitors interact with our website</li>
              <li>Functional cookies - Enable enhanced functionality and personalization</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
            <p className="text-muted-foreground">
              You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  )
}