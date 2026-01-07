import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { RootLayoutClient } from './root-layout-client'
import { ThemeProvider } from '@/components/theme-provider'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Onwardism | Unified Tech Media',
  description: 'A unified media platform for engineers and technology teams to read and publish high-quality content focused on cloud, data, security, and AI.',
  icons: {
    icon: '/icons/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </ThemeProvider>
      </body>
    </html>
  )
}