'use client'

import { usePathname } from 'next/navigation'
import { AppHeader } from '@/components/app/app-header'
import { AppFooter } from '@/components/app/app-footer'
import { CookieBanner } from '@/components/cookie-banner'

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isConsolePage = pathname?.startsWith('/console')
  const isLegalPage = pathname?.startsWith('/legal')

  if (isConsolePage) {
    return (
      <>
        {children}
        <CookieBanner />
      </>
    )
  }

  if (isLegalPage) {
    return (
      <>
        {children}
        <CookieBanner />
      </>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1">
        {children}
      </main>
      <AppFooter />
      <CookieBanner />
    </div>
  )
}