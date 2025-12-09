import { FileText } from "lucide-react"
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
            <p>
              By accessing and using Onwardism, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Use of Service</h2>
            <p>
              You agree to use our service only for lawful purposes and in accordance with these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Content</h2>
            <p>
              All content provided on Onwardism is for informational purposes only. We make no representations as to the accuracy or completeness of any information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by Onwardism and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              In no event shall Onwardism be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Your continued use of the service after any changes constitutes acceptance of the new Terms.
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
