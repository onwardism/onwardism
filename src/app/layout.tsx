import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SupabaseProvider } from "@/components/providers/supabase-provider"

const ubuntu = Ubuntu({ 
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Onwardism - Tech & Engineering News",
  description: "Online news media focused on AI, Data, Cloud, Development, and Security",
  icons: {
    icon: "/icons/favicon.png",
  },
}

import { CookieConsent } from "@/components/shared/cookie-consent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
        <SupabaseProvider>
          <ThemeProvider>
            {children}
            <CookieConsent />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
