import { Cookie } from "lucide-react"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Cookie className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, personalize content, and remember your preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Types of Cookies We Use</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                <p>Required for the website to function properly and cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Preference Cookies</h3>
                <p>Remember your settings and preferences for a personalized experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                <p>Used to deliver relevant advertisements and track campaign performance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some features may not function properly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Cookies</h2>
            <p>
              We may use third-party services that also use cookies. These third parties have their own privacy policies and cookie policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}
