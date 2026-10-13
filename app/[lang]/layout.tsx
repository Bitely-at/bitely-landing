import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, hasLocale, locales } from '@/lib/i18n'
import { ogLocales, siteName, siteUrl } from '@/lib/site'

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
  const { lang: raw } = await params
  const lang = hasLocale(raw) ? raw : defaultLocale
  const dict = getDictionary(lang)
  // Rendered by app/[lang]/og.png/route.tsx.
  const ogImage = {
    url: `/${lang}/og.png`,
    width: 1200,
    height: 630,
    alt: siteName,
  }

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: siteName,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: '/de',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      siteName,
      url: `/${lang}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocales[lang],
      alternateLocale: locales
        .filter((other) => other !== lang)
        .map((other) => ogLocales[other]),
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
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
