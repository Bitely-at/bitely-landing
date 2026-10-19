import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { LegalPage } from '@/components/legal-page'
import { hasLocale } from '@/lib/i18n'
import { getLegalDoc } from '@/lib/legal'

export async function generateMetadata({ params }: PageProps<'/[lang]/impressum'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const doc = getLegalDoc('impressum', lang)
  return {
    title: `${doc.title} | Bitely`,
    description: doc.description,
    alternates: { canonical: `/${lang}/impressum`, languages: { de: '/de/impressum', en: '/en/impressum' } },
  }
}

export default async function Page({ params }: PageProps<'/[lang]/impressum'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <LegalPage slug="impressum" lang={lang} />
}
