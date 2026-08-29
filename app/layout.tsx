import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bitely — Feedback on every dish, not just the meal',
  description:
    'Bitely lets restaurant guests scan a QR code, rate individual dishes, and earn loyalty points — while owners get live per-dish ratings and AI weekly insights. Request a demo.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#091543',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
