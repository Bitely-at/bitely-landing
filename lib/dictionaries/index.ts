import type { Locale } from '@/lib/i18n'

import { de } from './de'
import { en, type Dictionary } from './en'

export type { Dictionary }

const dictionaries: Record<Locale, Dictionary> = { de, en }

/* Plain objects rather than lazy JSON imports: the whole site is two short
   pages of copy, and client components need slices of it as props anyway. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
