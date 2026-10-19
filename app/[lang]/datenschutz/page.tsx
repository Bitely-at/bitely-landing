import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { LegalPage } from '@/components/legal-page'
import { hasLocale } from '@/lib/i18n'
import { getLegalDoc } from '@/lib/legal'

export async function generateMetadata({ params }: PageProps<'/[lang]/datenschutz'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const doc = getLegalDoc('datenschutz', lang)
  return {
    title: `${doc.title} | Bitely`,
    description: doc.description,
    alternates: { canonical: `/${lang}/datenschutz`, languages: { de: '/de/datenschutz', en: '/en/datenschutz' } },
  }
}

export default async function Page({ params }: PageProps<'/[lang]/datenschutz'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <LegalPage slug="datenschutz" lang={lang} />
}
