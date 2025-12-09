import { Mail, MessageCircle, Phone, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Support</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help you with any questions or issues
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Mail className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>
                Get help via email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">support@onwardism.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>
                Chat with our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Available Monday - Friday, 9am - 5pm</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>
                Call us for immediate assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Contact information available</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HelpCircle className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Help Center</CardTitle>
              <CardDescription>
                Browse our knowledge base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Find answers to common questions</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
