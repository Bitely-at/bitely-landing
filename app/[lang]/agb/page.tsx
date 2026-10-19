import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { LegalPage } from '@/components/legal-page'
import { hasLocale } from '@/lib/i18n'
import { getLegalDoc } from '@/lib/legal'

export async function generateMetadata({ params }: PageProps<'/[lang]/agb'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const doc = getLegalDoc('agb', lang)
  return {
    title: `${doc.title} | Bitely`,
    description: doc.description,
    alternates: { canonical: `/${lang}/agb`, languages: { de: '/de/agb', en: '/en/agb' } },
  }
}

export default async function Page({ params }: PageProps<'/[lang]/agb'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <LegalPage slug="agb" lang={lang} />
}
