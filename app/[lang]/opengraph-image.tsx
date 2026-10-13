import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, hasLocale } from '@/lib/i18n'

/* The preview card shown when someone shares /de or /en on WhatsApp,
   LinkedIn, Slack and the like. Twitter/X falls back to it as well. */

export const alt = 'Bitely'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const logoData = await readFile(
    join(process.cwd(), 'public/images/logo-bitely-wordmark-light.png'),
    'base64',
  )
  const logoSrc = `data:image/png;base64,${logoData}`
  const { hero } = getDictionary(hasLocale(lang) ? lang : defaultLocale)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#091543',
          color: '#f7f3ea',
        }}
      >
        <img src={logoSrc} height={64} style={{ objectFit: 'contain' }} />
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 1000,
          }}
        >
          {hero.headline}
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 26 }}>
          {hero.proofPoints.slice(0, 3).map((point) => (
            <div
              key={point}
              style={{
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid rgba(247, 243, 234, 0.35)',
              }}
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
