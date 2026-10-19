import Link from 'next/link'

import { LanguageSwitch } from '@/components/language-switch'
import { SiteFooter } from '@/components/site-footer'
import { Logo } from '@/components/ui/logo'
import { getDictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'
import { getLegalDoc, legalUpdated, type LegalSlug } from '@/lib/legal'

/* Datenschutz, Nutzungsbedingungen and Impressum share one plain layout:
   logo back to the home page, the text, the usual footer. */
export function LegalPage({ slug, lang }: { slug: LegalSlug; lang: Locale }) {
  const doc = getLegalDoc(slug, lang)
  const dict = getDictionary(lang)

  return (
    <div className="bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href={`/${lang}`} aria-label={dict.nav.home} className="transition-opacity hover:opacity-60">
            <Logo className="h-7" priority />
          </Link>
          <LanguageSwitch locale={lang} label={dict.nav.language} path={`/${slug}`} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {lang === 'de' ? 'Stand' : 'Last updated'} {legalUpdated[lang]}
        </p>

        {doc.intro?.map((p) => (
          <p key={p} className="mt-8 leading-relaxed text-foreground/90">
            {p}
          </p>
        ))}

        {doc.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-lg font-semibold text-foreground">{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-foreground/90">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      <SiteFooter locale={lang} dict={dict.footer} languageLabel={dict.nav.language} path={`/${slug}`} />
    </div>
  )
}
