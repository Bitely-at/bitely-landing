import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, hasLocale, locales } from '@/lib/i18n'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/* Only /de and /en exist; anything else under the first segment is a 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(hasLocale(lang) ? lang : defaultLocale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    generator: 'v0.app',
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: '/de',
        en: '/en',
        'x-default': '/',
      },
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#091543',
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params

  return (
    <html
      lang={hasLocale(lang) ? lang : defaultLocale}
      className={`light ${inter.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
